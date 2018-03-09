// React components for Fluent AST

import React, { Component } from 'react';

export const mapping = {};

export function createComponent(ast, prop) {
    if (ast instanceof Array) {
        return ast.map(createComponent);
    }
    if (typeof ast === "string") {
        return <span className={prop}>{ast}</span>;
    }
    if (
        !ast
        || !('type' in ast)
        || !(ast.type in mapping)
    ) return '';
    console.log('createComponent', ast.type);
    const ASTNode = mapping[ast.type];
    if ("key" in ast) {
        // hack key -> key_
        ast.key_ = ast.key;
        delete(ast.key);
    }
    const key = ast.span.start;
    return <ASTNode key={ key } {...ast} />;
}


export class Resource extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Resource`}>
            { createComponent(this.props.body, "body") }
            </span>
        );
    }
}

mapping["Resource"] = Resource;


export class Message extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Message`}>
            { createComponent(this.props.id, "id") }{ createComponent(this.props.value, "value") }{ createComponent(this.props.attributes, "attributes") }{ createComponent(this.props.comment, "comment") }
            </span>
        );
    }
}

mapping["Message"] = Message;


export class Term extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Term`}>
            { createComponent(this.props.id, "id") }{ createComponent(this.props.value, "value") }{ createComponent(this.props.attributes, "attributes") }{ createComponent(this.props.comment, "comment") }
            </span>
        );
    }
}

mapping["Term"] = Term;


export class Pattern extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Pattern`}>
            { createComponent(this.props.elements, "elements") }
            </span>
        );
    }
}

mapping["Pattern"] = Pattern;


export class TextElement extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`TextElement`}>
            { createComponent(this.props.value, "value") }
            </span>
        );
    }
}

mapping["TextElement"] = TextElement;


export class Placeable extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Placeable`}>
            { createComponent(this.props.expression, "expression") }
            </span>
        );
    }
}

mapping["Placeable"] = Placeable;


export class StringExpression extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`StringExpression`}>
            { createComponent(this.props.value, "value") }
            </span>
        );
    }
}

mapping["StringExpression"] = StringExpression;


export class NumberExpression extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`NumberExpression`}>
            { createComponent(this.props.value, "value") }
            </span>
        );
    }
}

mapping["NumberExpression"] = NumberExpression;


export class MessageReference extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`MessageReference`}>
            { createComponent(this.props.id, "id") }
            </span>
        );
    }
}

mapping["MessageReference"] = MessageReference;


export class ExternalArgument extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`ExternalArgument`}>
            { createComponent(this.props.id, "id") }
            </span>
        );
    }
}

mapping["ExternalArgument"] = ExternalArgument;


export class SelectExpression extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`SelectExpression`}>
            { createComponent(this.props.expression, "expression") }{ createComponent(this.props.variants, "variants") }
            </span>
        );
    }
}

mapping["SelectExpression"] = SelectExpression;


export class AttributeExpression extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`AttributeExpression`}>
            { createComponent(this.props.id, "id") }{ createComponent(this.props.name, "name") }
            </span>
        );
    }
}

mapping["AttributeExpression"] = AttributeExpression;


export class VariantExpression extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`VariantExpression`}>
            { createComponent(this.props.id, "id") }{ createComponent(this.props.key_, "key_") }
            </span>
        );
    }
}

mapping["VariantExpression"] = VariantExpression;


export class CallExpression extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`CallExpression`}>
            { createComponent(this.props.callee, "callee") }{ createComponent(this.props.args, "args") }
            </span>
        );
    }
}

mapping["CallExpression"] = CallExpression;


export class Attribute extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Attribute`}>
            { createComponent(this.props.id, "id") }{ createComponent(this.props.value, "value") }
            </span>
        );
    }
}

mapping["Attribute"] = Attribute;


export class Variant extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Variant Variant_default_${this.props.default}`}>
            { createComponent(this.props.key_, "key_") }{ createComponent(this.props.value, "value") }
            </span>
        );
    }
}

mapping["Variant"] = Variant;


export class NamedArgument extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`NamedArgument`}>
            { createComponent(this.props.name, "name") }{ createComponent(this.props.val, "val") }
            </span>
        );
    }
}

mapping["NamedArgument"] = NamedArgument;


export class Identifier extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Identifier`}>
            { createComponent(this.props.name, "name") }
            </span>
        );
    }
}

mapping["Identifier"] = Identifier;


export class VariantName extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`VariantName`}>
            { createComponent(this.props.name, "name") }
            </span>
        );
    }
}

mapping["VariantName"] = VariantName;


export class BaseComment extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`BaseComment`}>
            { createComponent(this.props.content, "content") }
            </span>
        );
    }
}

mapping["BaseComment"] = BaseComment;


export class Comment extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Comment`}>
            { createComponent(this.props.content, "content") }
            </span>
        );
    }
}

mapping["Comment"] = Comment;


export class GroupComment extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`GroupComment`}>
            { createComponent(this.props.content, "content") }
            </span>
        );
    }
}

mapping["GroupComment"] = GroupComment;


export class ResourceComment extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`ResourceComment`}>
            { createComponent(this.props.content, "content") }
            </span>
        );
    }
}

mapping["ResourceComment"] = ResourceComment;


export class Function extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Function`}>
            { createComponent(this.props.name, "name") }
            </span>
        );
    }
}

mapping["Function"] = Function;


export class Junk extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Junk`}>
            { createComponent(this.props.content, "content") }
            </span>
        );
    }
}

mapping["Junk"] = Junk;


export class Span extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Span`}>
            { createComponent(this.props.start, "start") }{ createComponent(this.props.end, "end") }
            </span>
        );
    }
}

mapping["Span"] = Span;


export class Annotation extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Annotation`}>
            { createComponent(this.props.code, "code") }{ createComponent(this.props.args, "args") }{ createComponent(this.props.message, "message") }
            </span>
        );
    }
}

mapping["Annotation"] = Annotation;


