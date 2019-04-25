import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            /* JSX syntax: use className not class. This is not html! */
            <div className='f1 tc'>
                <h1>Hello World</h1>
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello;