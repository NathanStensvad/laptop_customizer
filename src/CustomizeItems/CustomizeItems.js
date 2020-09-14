//These are the items for the customize section
//Each item contains the inputs

import React, { Component } from 'react';
import './CustomizeItems.css';
import CustomizeInputs from '../CustomizeInputs/CustomizeInputs';

import slugify from 'slugify';

class CustomizeItems extends Component {
    render() {
        return(
            Object.keys(this.props.features).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const options = this.props.features[feature].map(item => {
                  const itemHash = slugify(JSON.stringify(item));
                  return (
                    <CustomizeInputs 
                    itemHash={itemHash}
                    item= {item}
                    feature = {feature}
                    selected = {this.props.selected}
                    handleUpdate = {this.props.handleUpdate}
                    key = {itemHash}
                    />
                  );
                });
          
                return (
                  <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                      <h3>{feature}</h3>
                    </legend>
                    {options}
                  </fieldset>
                );
            })
        )
    }
}

export default CustomizeItems;