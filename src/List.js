import React from 'react';
import './List.css';
import Item from './Item';

class List extends React.Component {
  constructor(){
    super();  // Call the Component superconstructor
    // Create the items array as a state:
    this.state = { items: [] };

    // Fetch items from items.json:
    fetch("items.json")
      .then(response => response.json())
      .then(json => {this.setState({items: json})})
      .catch(error => console.log(error));
  }

  render(){
    // Empty array to hold items:
    let itemComponents = [];

    // Loop through the fetched items in items.json:
    for(let item of this.state.items){
      // Push each item as an Item component with a property named "item" to the itemComponents class:
      itemComponents.push(<Item item={item} />);
    }

    // Return the list of Item components:
    return <div id="components">{itemComponents}</div>;

  }
}

export default List;  // Export the List class as List