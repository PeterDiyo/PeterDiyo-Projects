import heroImg from "./assets/hero.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Explore my work</h1>
          <p>
            Welcome to my projects website! I'm <span>Peter Diyo</span>, and
            here you'll find a curated collection of my creations. From
            innovative designs to groundbreaking developments, each project
            reflects my passion for Software Development. Explore, get inspired
            and let's connect.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Peter Diyo" className="img" />
        </div>
      </div>
    </section>
  );
};
