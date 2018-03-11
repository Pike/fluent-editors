const fs = require("fs");
const espree = require("espree");
const esquery = require("esquery");

const ast_code = fs.readFileSync(
    "node_modules/fluent-syntax/src/ast.js",
    "utf-8");

const CLASS_PROPS = {
    Variant: ["default"]
};
const HIDE = ["span", "type"];

const ast = espree.parse(ast_code, {ecmaVersion: 9, sourceType: "module"});
const classDecls = esquery(ast, 'ClassDeclaration');

const toGenerate = classDecls.filter(
    node => esquery.query(
        node,
        `ClassDeclaration MethodDefinition[kind="constructor"][value.params.length > 0]`
    ).length
);

const classParams = {};

function renderClass(classDecl) {
    const cname = classDecl.id.name;
    const params = [];
    esquery.query(
        classDecl,
        'MethodDefinition[kind="constructor"] FunctionExpression AssignmentExpression MemberExpression .property')
        .map (
            member => member.name
        )
        .map(
            name => name === "key" ? "key_" :  name
        )
        .filter(name => HIDE.indexOf(name) < 0)
        .forEach(
            name => params.push(name)
        );
    if (classDecl.superClass && classDecl.superClass.name in classParams) {
        params.unshift.apply(params, classParams[classDecl.superClass.name]);
    }
    classParams[cname] = params;
    const class_params = [];
    const child_params = params.filter(function(name){
        if (cname in CLASS_PROPS) {
            if (CLASS_PROPS[cname].indexOf(name) >= 0) {
                class_params.push(name);
                return false;
            }
        }
        return true;
    });

    return `\
export class ${cname} extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={\`${cname}${ class_params.map(p => ` ${cname}_${p}_\${this.props.${p}}`) }\`}>
            ${child_params.map(p => `{ this.props.factory_.createComponent(this.props.${p}, "${p}") }`).join("")}
            </span>
        );
    }
}

`;
        
}

const header = `\
// React components for Fluent AST

import React, { Component } from 'react';

`;


console.log(header);
toGenerate.forEach(c => console.log(renderClass(c)));
