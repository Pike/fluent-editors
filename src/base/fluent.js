// React components for Fluent AST

import React, { Component } from 'react';


export class Resource extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Resource`}>
            { this.props.factory_.createComponent(this.props.body, "body") }
            </span>
        );
    }
}


export class Message extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Message`}>
            { this.props.factory_.createComponent(this.props.id, "id") }{ this.props.factory_.createComponent(this.props.value, "value") }{ this.props.factory_.createComponent(this.props.attributes, "attributes") }{ this.props.factory_.createComponent(this.props.comment, "comment") }
            </span>
        );
    }
}


export class Term extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Term`}>
            { this.props.factory_.createComponent(this.props.id, "id") }{ this.props.factory_.createComponent(this.props.value, "value") }{ this.props.factory_.createComponent(this.props.attributes, "attributes") }{ this.props.factory_.createComponent(this.props.comment, "comment") }
            </span>
        );
    }
}


export class Pattern extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Pattern`}>
            { this.props.factory_.createComponent(this.props.elements, "elements") }
            </span>
        );
    }
}


export class TextElement extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`TextElement`}>
            { this.props.factory_.createComponent(this.props.value, "value") }
            </span>
        );
    }
}


export class Placeable extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Placeable`}>
            { this.props.factory_.createComponent(this.props.expression, "expression") }
            </span>
        );
    }
}


export class StringExpression extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`StringExpression`}>
            { this.props.factory_.createComponent(this.props.value, "value") }
            </span>
        );
    }
}


export class NumberExpression extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`NumberExpression`}>
            { this.props.factory_.createComponent(this.props.value, "value") }
            </span>
        );
    }
}


export class MessageReference extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`MessageReference`}>
            { this.props.factory_.createComponent(this.props.id, "id") }
            </span>
        );
    }
}


export class ExternalArgument extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`ExternalArgument`}>
            { this.props.factory_.createComponent(this.props.id, "id") }
            </span>
        );
    }
}


export class SelectExpression extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`SelectExpression`}>
            { this.props.factory_.createComponent(this.props.expression, "expression") }{ this.props.factory_.createComponent(this.props.variants, "variants") }
            </span>
        );
    }
}


export class AttributeExpression extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`AttributeExpression`}>
            { this.props.factory_.createComponent(this.props.id, "id") }{ this.props.factory_.createComponent(this.props.name, "name") }
            </span>
        );
    }
}


export class VariantExpression extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`VariantExpression`}>
            { this.props.factory_.createComponent(this.props.id, "id") }{ this.props.factory_.createComponent(this.props.key_, "key_") }
            </span>
        );
    }
}


export class CallExpression extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`CallExpression`}>
            { this.props.factory_.createComponent(this.props.callee, "callee") }{ this.props.factory_.createComponent(this.props.args, "args") }
            </span>
        );
    }
}


export class Attribute extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Attribute`}>
            { this.props.factory_.createComponent(this.props.id, "id") }{ this.props.factory_.createComponent(this.props.value, "value") }
            </span>
        );
    }
}


export class Variant extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Variant Variant_default_${this.props.default}`}>
            { this.props.factory_.createComponent(this.props.key_, "key_") }{ this.props.factory_.createComponent(this.props.value, "value") }
            </span>
        );
    }
}


export class NamedArgument extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`NamedArgument`}>
            { this.props.factory_.createComponent(this.props.name, "name") }{ this.props.factory_.createComponent(this.props.val, "val") }
            </span>
        );
    }
}


export class Identifier extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Identifier`}>
            { this.props.factory_.createComponent(this.props.name, "name") }
            </span>
        );
    }
}


export class VariantName extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`VariantName`}>
            { this.props.factory_.createComponent(this.props.name, "name") }
            </span>
        );
    }
}


export class BaseComment extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`BaseComment`}>
            { this.props.factory_.createComponent(this.props.content, "content") }
            </span>
        );
    }
}


export class Comment extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Comment`}>
            { this.props.factory_.createComponent(this.props.content, "content") }
            </span>
        );
    }
}


export class GroupComment extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`GroupComment`}>
            { this.props.factory_.createComponent(this.props.content, "content") }
            </span>
        );
    }
}


export class ResourceComment extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`ResourceComment`}>
            { this.props.factory_.createComponent(this.props.content, "content") }
            </span>
        );
    }
}


export class Function extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Function`}>
            { this.props.factory_.createComponent(this.props.name, "name") }
            </span>
        );
    }
}


export class Junk extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Junk`}>
            { this.props.factory_.createComponent(this.props.content, "content") }
            </span>
        );
    }
}


export class Span extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Span`}>
            { this.props.factory_.createComponent(this.props.start, "start") }{ this.props.factory_.createComponent(this.props.end, "end") }
            </span>
        );
    }
}


export class Annotation extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`Annotation`}>
            { this.props.factory_.createComponent(this.props.code, "code") }{ this.props.factory_.createComponent(this.props.args, "args") }{ this.props.factory_.createComponent(this.props.message, "message") }
            </span>
        );
    }
}


