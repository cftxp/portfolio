import React from 'react';

// ItemComponent for multiple paragraphs of content for an item section:
class ItemComponent extends React.Component {
  render(){
    // Constant with the content property:
    const array = this.props.content;
    // Get the keys of array, then map it to output data:
    let content = Object.keys(array).map(i => <p>{array[i]}</p>);
    // Output the content within a div element:
    return <div>{content}</div>;
  }
}

export default ItemComponent;