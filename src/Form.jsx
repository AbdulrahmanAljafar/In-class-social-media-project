import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <label>{this.props.lable}</label>
                <input type={this.props.type}></input>
            </div>
        )
    }
}
