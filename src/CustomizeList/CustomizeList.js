//This is the customize section on the left
//It contains the items of the customize section

import React, { Component } from 'react';
import './CustomizeList.css';

import CustomizeItems from '../CustomizeItems/CustomizeItems';

class CustomizeList extends Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <CustomizeItems
                    features={this.props.features}
                    selected={this.props.selected}
                    handleUpdate={this.props.handleUpdate} />
            </form>
        )
    }
}
export default CustomizeList;