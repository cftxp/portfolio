import React from 'react';
import './List.css';
import Item from './Item';

class Other extends React.Component {

  render(){

    // Items array of objects:
    let items = [/*
      {
        title: "Art",
        display: "#",
        site: "https://art.react.chrisfornesa.com",
        source: "https://github.com/cftxp/art-portfolio",
        host: "GitHub",
        skill: "JavaScript/React framework",
        intro: "This art portfolio is a dynamic showcase of my artwork, that integrates my knowledge of stateful classes and states.",
        description: {
          objective: {
            objective: "I created an art portfolio website for my artwork to help me expand my knowledge of states and their applications within the React framework, as well as to learn how to design a fully-functional and attractive React application."
          },
          implementation: {
            preview: "This React application was implemented through the inclusion of various React components, alongside the implementation of React states and methods.",
            classes: "The structure of this art portfolio React application includes an index.js file that render the App, List and Footer components to the React document object model of the index.html file. The List component, then, contains a set of Item components that hold the details of each specified Item according to the items.json file."
          },
          features: {
            preview: "This art portfolio contains the following information about my artwork: the title, the image reference, the media of the piece, the description that I set for the piece, and the type of artwork.",
            explanation: "These data make it possible to display the relevant information for each piece, as well as a preview of the piece itself.",
            states: "Lastly, I was able to utilize states to allow for the visibility of only certain (or all) pieces based on methods that I included in the List component, one to show drawings, paintings, digital pieces, and mixed media artwork."
          },
          learned: {
            "lesson": "Through this application, I expanded my knowledge of states and React framework functionalities by introducing myself to class constructors, component states, and component methods. Altogether, this project enabled me to compose and customize a fully-functional, dynamic React application."
          }
        }
      }
    */];

    // Empty array to hold items:
    let itemComponents = [];

    // Loop through the fetched items:
    for(let item of items){
      // Push each item as an Item component with a property named "item" to the itemComponents class:
      itemComponents.push(<Item item={item} />);
    }

    // Return the list of Item components:
    return <div id="other">{itemComponents}</div>;

  }

}

export default Other;  // Export the List class as List
