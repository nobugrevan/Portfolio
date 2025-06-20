import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <figure className="hero-banner">
        <picture>
          <source srcSet="./assets/images/" media="(min-width: 768px)" />
          <source srcSet="./assets/images/" media="(min-width: 500px)" />
          <img src="./assets/images/" alt="" className="w-100" />
        </picture>
      </figure>

      <div className="hero-content">
        <h2 className="h2 hero-title">We Design & Build Creative Products</h2>
        <a href="#contact" className="btn btn-primary">Get in touch</a>
      </div>

      <ul className="hero-social-list">
        <li>
          <a href="#" className="hero-social-link">
            <IoLogoFacebook />
            <div className="tooltip">Facebook</div>
          </a>
        </li>
        <li>
          <a href="#" className="hero-social-link">
            <IoLogoTwitter />
            <div className="tooltip">Twitter</div>
          </a>
        </li>
        <li>
          <a href="#" className="hero-social-link">
            <IoLogoLinkedin />
            <div className="tooltip">Linkedin</div>
          </a>
        </li>
      </ul>

      <a href="#stats" className="scroll-down">Scroll</a>
    </section>
  );
};

export default Hero;