import { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { name: 'HTML5', icon: './assets/images/html5.png' },
    { name: 'CSS3', icon: './assets/images/css3.png' },
    { name: 'JavaScript', icon: './assets/images/javascript.png' },
    { name: 'TypeScript', icon: './assets/images/typescript.png' },
    { name: 'jQuery', icon: './assets/images/jquery.png' },
    { name: 'Bootstrap', icon: './assets/images/bootstrap.png' },
    { name: 'Angular', icon: './assets/images/angular.png' },
    { name: 'React', icon: './assets/images/react.png' },
    { name: 'Vue', icon: './assets/images/vue.png' },
    { name: 'Firebase', icon: './assets/images/firebase.png' },
    { name: 'PugJs', icon: './assets/images/pugjs.png' },
    { name: 'SASS', icon: './assets/images/sass.png' }
  ];

  const tools = [
    { name: 'Ajax', icon: './assets/images/ajax.png' },
    { name: 'Gulp', icon: './assets/images/gulp.png' },
    { name: 'Webpack', icon: './assets/images/webpack.png' },
    { name: 'Git', icon: './assets/images/git.png' },
    { name: 'Npm', icon: './assets/images/npm.png' },
    { name: 'Command Line', icon: './assets/images/command.png' },
    { name: 'VS Code', icon: './assets/images/vs-code.png' },
    { name: 'Trello', icon: './assets/images/trello.png' },
    { name: 'ClickUp', icon: './assets/images/clickup.png' },
    { name: 'Slack', icon: './assets/images/slack.png' },
    { name: 'Photoshop', icon: './assets/images/photoshop.png' },
    { name: 'Adobe XD', icon: './assets/images/adobe-xd.png' }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-content section-content">
        <p className="section-subtitle">My skills</p>
        <h2 className="h3 section-title">What My Programming Skills Included?</h2>
        <p className="section-text">
          I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time
          with those technologies.
        </p>

        <div className="skills-toggle" data-toggle-box>
          <button 
            className={`toggle-btn ${activeTab === 'skills' ? 'active' : ''}`} 
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button 
            className={`toggle-btn ${activeTab === 'tools' ? 'active' : ''}`} 
            onClick={() => setActiveTab('tools')}
          >
            Tools
          </button>
        </div>
      </div>

      <div className="skills-box" data-skills-box>
        {(activeTab === 'skills' ? skills : tools).map((item, index) => (
          <div key={index} className="skill-card">
            <div className="tooltip">{item.name}</div>
            <div className="card-icon">
              <img src={item.icon} alt={`${item.name} logo`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;