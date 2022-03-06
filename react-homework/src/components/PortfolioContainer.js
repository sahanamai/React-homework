import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
const projects = [
  {
    id: 1,
    name: "Project1",
    image: "../Assests/images/code quiz1.png",
    description:"jhhhh"
  },
  {
    id: 2,
    name: "Project2",
   image:"../Assests/images/day scheduler.png",
   description:"jhhhh"
  },
  {
    id: 3,
    name: "project3",
    image:"../Assests/images/project-1.png",
    description:"jhhhh"
  },
  {
    id: 4,
    name: "project4",
    image:"",
    description:"jhhhh"
  },
]

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact  />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio projects={projects}/>;
    }
    if (currentPage === 'Resume') {
      return <Resume/>;//blog
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
