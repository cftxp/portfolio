import React from 'react';
import Iframe from 'react-iframe';  // Iframe import
import ItemComponent from './ItemComponent';  // ItemComponent import

// Use the given data properties to create a dynamic section with a title, an iframe source, a description, a specified programming skill, and a website link.
class Item extends React.Component {
  constructor(){
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> parent of 2f859dd... Code cleanup and re-commit
=======
    
>>>>>>> parent of 08f5aaf... Initial commit
    super();

    this.state = {
      showDescription: false
    };

    this.showDetails = this.showDetails.bind(this);
  }

  showDetails(isShown){
    this.setState({showDescription: !isShown});
    console.log(this.state.showDescription);
  }

  render(){
    let revealDescription = this.state.showDescription ? "reveal" : "";

    let revealOrNot = this.state.showDescription ? `Hide the case study for the ${this.props.item.title} application.` : `Show the case study for the ${this.props.item.title} application.`;

    return <div class="item">
      <section>
        {/* Title: */}
        <h1>{this.props.item.title}</h1>
        {/* Container class to hold the iframe: */}
        <div class="image">
          <Iframe url={this.props.item.site}
          width="100%"
          min-height="550px"
          height="550px"
          max-height="550px"
          scrolling="no"
          id="myId"
          className="frame"
          display="initial"
          position="relative"
          allowFullScreen/>
        </div>
      </section>
      <section>
        {/* A container to hold a description */}
        <article>
          <p>{this.props.item.intro}</p>
        </article>
        {/* A container to hold the programming skill involved: */}
        <article>
          <p>Programming Language/Framework: {this.props.item.skill}.</p>
        </article>
        {/* A container to hold the link to the website: */}
        <article>
          <p><a href={this.props.item.site} className="App-link" target="_blank" rel="noopener noreferrer">Click here</a> to see the {this.props.item.title} app&rsquo;s full functionalities while <a href={this.props.item.source} className="App-link" target="_blank" rel="noopener noreferrer">this link</a> leads you to the code base of this application (which is hosted on {this.props.item.host}).</p>
        </article>
        <article>
          <p><span className="reveal-or-not" onClick={() => this.showDetails(this.state.showDescription)}>{revealOrNot}</span></p>
        </article>
      </section>
      <section className={"description " + revealDescription}>
        {/* Set the objective for this application. */}
        <article>
          <h4>Objective</h4>
          <ItemComponent content={this.props.item.description.objective} />
          <p><a href={this.props.item.source} target="_blank" rel="noopener noreferrer">Click here</a> to explore the codebase for this application and <a href={this.props.item.site} target="_blank" rel="noopener noreferrer">click here</a> to see the application itself.</p>
        </article>
          {/* Set the implementation of this application. */}
        <article>
          <h4>Implementation</h4>
          <ItemComponent content={this.props.item.description.implementation} />
        </article>
          {/* Set the features of this application. */}
        <article>
          <h4>Features</h4>
          <ItemComponent content={this.props.item.description.features} />
        </article>
          {/* Set the lessons learned from building this application. */}
        <article>
          <h4>Lessons Learned</h4>
          <ItemComponent content={this.props.item.description.learned} />
        </article>
      </section>
    </div>;
  }
}

export default Item;  // Export as Item
