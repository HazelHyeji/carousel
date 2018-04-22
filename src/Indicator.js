import React, { Component } from 'react';
import './indicator.css';

export class Indicator extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var indicator = [];
        for (var i = 0; i < this.props.frames.length; i++) {
            // note: we add a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
                indicator.push(<dd></dd>);
        }
        return (
            <div>
                <dl className="indicator">
                    {indicator}
                </dl>
            </div>
        )
    }
}

export default Indicator
