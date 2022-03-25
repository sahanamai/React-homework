import React from 'react';
import '../styles/Footer.css';


function Footer() {
    return (
      <div className="Footer">
        <a href="https://github.com/sahanamai?tab=repositories" target="_blank" rel="noreferrer" > 
            <img src ={require("../components/assets/icons8-github-48.png")} alt="gitHub logo"/></a>

        <a href="https://www.linkedin.com/in/sahana-vijayakumar-82687161/" target="_blank" rel="noreferrer" >
            <img src ={require('../components/assets/icons8-linkedin-48.png')} alt="linkedIn logo"/></a>
   
        <a href="mailto:sahanamai@gmail.com?" target="_blank" rel="noreferrer" >
            <img src ={require('../components/assets/icons8-mail-48.png')} alt="mail icon"/></a>

      </div>
    );
  }
  
  export default Footer;