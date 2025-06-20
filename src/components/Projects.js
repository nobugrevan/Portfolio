const Projects = () => {
  const projects = [
    { id: 1, image: './assets/images/project-1.png', title: 'Lorem Ipsum Dolor 01', date: 'April 2022' },
    { id: 2, image: './assets/images/project-2.png', title: 'Lorem Ipsum Dolor 02', date: 'April 2022' },
    { id: 3, image: './assets/images/project-3.png', title: 'Lorem Ipsum Dolor 03', date: 'April 2022' },
    { id: 4, image: './assets/images/project-4.png', title: 'Lorem Ipsum Dolor 04', date: 'April 2022' },
    { id: 5, image: './assets/images/project-5.png', title: 'Lorem Ipsum Dolor 05', date: 'April 2022' },
    { id: 6, image: './assets/images/project-6.png', title: 'Lorem Ipsum Dolor 06', date: 'April 2022' },
    { id: 7, image: './assets/images/project-7.png', title: 'Lorem Ipsum Dolor 07', date: 'April 2022' }
  ];

  return (
    <section className="project" id="portfolio">
      <ul className="project-list">
        <li>
          <div className="project-content section-content">
            <p className="section-subtitle">My Works</p>
            <h2 className="h3 section-title">See My Works Which Will Amaze You!</h2>
            <p className="section-text">
              We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface
              helps any non-technical clients.
            </p>
          </div>
        </li>

        {projects.map(project => (
          <li key={project.id}>
            <a href="#" className="project-card">
              <figure className="card-banner">
                <img src={project.image} className="w-100" alt={project.title} />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">{project.title}</h3>
                <time className="publish-date" datetime="2022-04">{project.date}</time>
              </div>
            </a>
          </li>
        ))}

        <li>
          <button className="load-more">Load more work</button>
        </li>
      </ul>
    </section>
  );
};

export default Projects;