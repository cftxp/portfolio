import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render(){
    let date = new Date();
    let year = date.getFullYear();

    return <p><a href="https://www.fornesa.design" target="_blank" rel="noopener noreferrer">Chris Fornesa</a> &copy; {year} || <a href="https://php.fornesa.design">PHP Portfolio</a> | <a href="https://django.fornesa.design">Django Portfolio</a></p>;
  }
}

export default Footer;
