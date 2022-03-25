import React from 'react';
import '../../styles/Pages.css';


export default function Home() {
  return (
    <div className="page-style">
      <h1>About me</h1>
      <p>
      <img className="prof-pic" src ={require('../../components/assets/avatar.jpg')} alt="avatar"/>
                I'm a graduated student from Anna University(India)with Master in computer Science
                and Engineering, currently graduated at University Of Austin Coding Bootcamp to become a Full
                Stack Web Developer, with advanced skills in technologies like HTML,
                CSS, JavaScript, Git, APIs,mySQL, React.js, Node.js.
      <br></br>
      

      </p>
    </div>
  );
}
