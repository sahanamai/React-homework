import React from 'react';

export default function Portfolio(props) {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.projects.map(project => (
          <div className="col"  key={project.id}>
            <div className="card h-100" >
              {project.name}
              <img src={project.image} className="card-img-top" alt="project 1" />
              {project.description}
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}
