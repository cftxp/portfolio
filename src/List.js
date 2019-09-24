import React from 'react';
import './List.css';
import Item from './Item';

class List extends React.Component {

  render(){

    // Items array of objects:
    let items = [
      {
        title: "PHP Portfolio",
        site: "https://php.chrisfornesa.com",
        source: "https://repl.it/@cftxp/php-privilege",
        host: "Repl.it",
        skill: "PHP",
        intro: "This is a thought experiment that I created as an educational tool to unpack the dynamics and nuances behind white privilege.",
        description: {
          objective: {
            first: "The Racial Privilege Hypothetical is a thought experiment/alternative history hypothetical that is meant to emulate, in words, a history in which a non-European group had colonized the rest of the world in the way that Western Europeans have done in the modern era of history."
          },
          implementation: {
            components: "The implementation of this PHP application mandated the use of PHP classes, a complex CSS structure, and several PHP includes containing each component necessary for the full structure of this thought experiment.",
            classes: "As this application is class-based, I implemented the Race superclass and the Black, The_People, Asian, and White subclasses. This represents the racial structure that predominates in the world today and how, although it is simply a social construct, its relevancy will continue for centuries to come. Each Race class contains references to the people, indigenous, enslaved, othered, enslaved's homeland, and the New World, with get methods to all but the people reference. At the same time, each subclass contains a reference to an instance of the Details class to output the homeland and religion of the current instance.",
            includes: "As PHP has object-oriented features and allows for the use of components as needed, I was able to implement a system of PHP includes to facilitate the application's structure. For instance, every page has a reference to the header and footer components, while the header component itself has a reference to the form and navigation component. Finally, I was able to create and implement an overview component to compare the current situation of race relations where white people colonized the lands of indigenous First Nations people, enslaved Black people, othered East Asian people, and colonized most of the rest of the world at one point or another."
          },
          features: {
            form: "The Racial Privilege Hypothetical contains a form that asks for a privileged race, an indigenous race, and enslaved race, and an othered race for a hypothetical situation. By default, the privileged race is white, the indigenous race is First Nations, the enslaved race is Black, and the othered race is East Asian, a simplified scenario of the current situation that is white supremacy. The intent of this form is to create a situation where white, Black, First Nations, or East Asian supremacy are the realities in any given scenario of this hypothetical, with the chosen enslaved, indigenous, and othered races.",
            pages: "Based on the chosen components for the form, a series of statements and assertions are generated for this scenario with an overview, a colonialism, and a postcolonialism page containing relevant statements about these respective topics."
          },
          learned: {
            main: "I credit this application with teaching me the fundamentals of class-based, object-oriented PHP and has served as my springboard to created other object-oriented PHP applications.",
            features: "Because of the time that I have spent on this website, I have been able to learn about class features like methods, constructors, types of variables, and inheritance from the perspective of the PHP programming language."
          }
        }
      },
      {
        title: "React Portfolio",
        site: "https://www.chrisfornesa.com",
        source: "https://github.com/cftxp/portfolio",
        host: "GitHub",
        skill: "JavaScript/React framework",
        intro: "This is my first self-hosted React application: a simple clock/calendar that integrates the Date object using React components and methods.",
        description: {
          objective: {
            objective: "This clock application serves as a portal site that displays today's date and the local time, with links to privacy-conscious online services and applications."
          },
          implementation: {
            object: "This React application was implemented through the use of the JavaScript Date object. From the Date object I was able to derive, not only the current date, but also the current time. I accomplished this by utilizing the React framework's states and intervals to ensure that the hour, minute and second rendered correspond to the current time.",
            integration: "The different React components that I implemented in this application include the CurrentTime and CurrentDate that are rendered in the App component. These components, in turn (alongside the Footer component), are rendered in the index.js file that renders the App and Footer components to the React Document Object Model."
          },
          features: {
            date: "The Time app's current date component simply renders today's date in the format that is accepted in the locale of an application's viewer. For instance, a viewer of the application who lives in the United States will see the date as (month)/(day)/(year).",
            time: "The current time component renders the current time in two ways: the 12-hour and the 24-hour format, with the top rendering containing the 12-hour format and the bottom rendering containing the 24-hour format.",
            links: "Finally, helpful links for the user are displayed under these dynamic components."
          },
          learned: {
            lesson: "As this was my first React application, by working on this project, I was able to learn the basics of JSX syntax and how to integrate basic JavaScript functionalities into the React framework."
          }
        }
      }
    ];

    // Empty array to hold items:
    let itemComponents = [];

    // Loop through the fetched items:
    for(let item of items){
      // Push each item as an Item component with a property named "item" to the itemComponents class:
      itemComponents.push(<Item item={item} />);
    }

    // Return the list of Item components:
    return <div id="components">{itemComponents}</div>;

  }

}

export default List;  // Export the List class as List
