/**
 * Factory class to render Fluent previews
 * 
 * Simplifations:
 *  - Default variants for SelectExpressions
 *  - Messages/Terms display value, or first attribute
 */

import { Factory as BaseFactory } from "../base/index";
import React, { Component } from "react";


class DefaultMessage extends Component {
    render() {
        return (
            <span className={ this.props.type }>
            { this.props.factory_.createComponent(this.props.id, "id") }
            { this.props.factory_.createComponent(this.props.value, "value") }
            { this.props.value ? '' : this.props.factory_.createComponent(this.props.attributes[0], "attributes") }
            </span>
        );
    }
}

class PlaceablePassThrough extends Component {
    render() {
        return (
            <span className={`PlaceablePassThrough`}>
            { this.props.factory_.createComponent(this.props.expression, "expression") }
            </span>
        );

    }
}

class SelectExpressionPreview extends Component {
    render () {
        console.log(this.props);
        return (
            <span className={`SelectExpressionPreview`}>
            { this.props.variants.filter(variant => variant.default).map(variant => this.props.factory_.createComponent(variant.value, "variants")) }
            </span>
        );
    }
}

export class Factory extends BaseFactory {
    getComponent(ast) {
        switch (ast.type) {
            case "Message":
            case "Term":
                return DefaultMessage;
            case "SelectExpression":
                return SelectExpressionPreview;
            case "Placeable":
                if (ast.expression.type === 'SelectExpression') {
                    return PlaceablePassThrough;
                }
            default:
                return super.getComponent(ast);
        }
    }
}
