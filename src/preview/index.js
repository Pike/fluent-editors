/**
 * Factory class to render Fluent previews
 * 
 * Simplifations:
 *  - Default variants for SelectExpressions
 */

import { Factory as BaseFactory } from "../base/index";
import React, { Component } from "react";


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
