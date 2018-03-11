/**
 * Factory class to render Fluent previews
 * 
 * Simplifations:
 *  - Default variants for SelectExpressions
 */

import { Factory as BaseFactory } from "../base/index";
import React, { Component } from "react";


class TextELementEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render () {
        console.log(this.props);
        return (
            <span className={`TextElement`}>
            <input value={this.state.value} onChange={ this.handleChange } size={this.state.value.length + 1}/>
            </span>
        );
    }
}

export class Factory extends BaseFactory {
    getComponent(ast) {
        switch (ast.type) {
            case "TextElement":
                return TextELementEditor;
            default:
                return super.getComponent(ast);
        }
    }
}
