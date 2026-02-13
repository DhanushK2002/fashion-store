import tShirt from "../assets/TShirt.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <img src={tShirt} alt="Fashion" />
      </div>

      <div className="hero-right">
        <h1>Where Poetry<br />meets Fashion</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mi sed consectetur
          suspendisse volutpat elementum egestas. Diam vel sit ornare
          interdum nulla. Netus.
        </p>
        <button>Explore More</button>
      </div>
    </section>

  );
}

export default Hero;
