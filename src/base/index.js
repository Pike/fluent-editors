/**
 * Base class for Component creation from Fluent AST
 */

import React from 'react';
import * as AST from "./fluent";

export class Factory {
    getComponent(ast) {
        if (ast.type in AST) {
            return AST[ast.type];
        }
    }
    createString(ast, propertyName) {
        return <span className={propertyName}>{ast}</span>;
    }
    createComponent(ast, propertyName) {
        if (!ast) {
            return "";
        }
        if (typeof ast === "string") {
            return this.createString(ast, propertyName);
        }
        if (ast instanceof Array) {
            return ast.map(node => this.createComponent(node, propertyName));
        }
        if (!("type" in ast)) {
            throw "Incompatible Object, expected AST.type, Array, or String";
        }
        const ASTComponent = this.getComponent(ast);
        if (!ASTComponent) {
            throw `Failed to create Component for ${ast.type}`;
        }
        if ("key" in ast) {
            // hack key -> key_
            ast.key_ = ast.key;
            delete(ast.key);
        }
        const key = ast.span.start;
        return <ASTComponent factory_={this} key={ key } {...ast} />;
    }
}
