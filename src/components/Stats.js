import { IoChevronForwardOutline } from 'react-icons/io5';

const Stats = () => {
  const stats = [
    {
      icon: './assets/images/stats-card_icon-1.png',
      value: '2.9+',
      label: 'Years of Experience'
    },
    {
      icon: './assets/images/stats-card_icon-2.png',
      value: '10+',
      label: 'Completed Projects'
    },
    {
      icon: './assets/images/stats-card_icon-3.png',
      value: '10+',
      label: 'Happy Clients'
    }
  ];

  return (
    <section className="stats" id="stats">
      <ul className="stats-list">
        {stats.map((stat, index) => (
          <li key={index}>
            <a href="#" className="stats-card">
              <div className="card-icon">
                <img src={stat.icon} alt={stat.label} />
              </div>
              <h2 className="h2 card-title">
                {stat.value} <strong>{stat.label}</strong>
              </h2>
              <IoChevronForwardOutline />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stats;