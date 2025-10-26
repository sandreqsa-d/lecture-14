import React from "react";
import "./App.css";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import arrow from "./images/Group.png"
import kvercxi from "./images/kvercxi.jpg"
import wiqa from "./images/wiqa.png"
import gogoni from "./images/gogoni.png"
import zangi from "./images/zangi.png"
import zgvaze from "./images/zgvaze_myofi.png"
import rdze from "./images/rdze.jpg"
import fortoxali from "./images/fortoxali_dawrili.jpg"
import nayini from "./images/nayini.jpg"
import marsh from "./images/marshmeloebi.jpg"
function App() {

  const icons = [
    {
      icon: <BiLogoFacebookSquare />,
      link: "https://facebook.com"
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com"
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com"
    },
    {
      icon: <FaPinterest />,
      link: "https://pinterest.com"
    }
  ]
  return (
    <>
     

      <section className="hero">
         <header>
        <h2 className="logo">sunnyside</h2>
        <nav>
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Projects</a></li>
            <li><button>CONTACT</button></li>
          </ul>
        </nav>
      </header>
        <h1>WE ARE CREATIVES</h1>
        <img src={arrow} alt="arrow" className="arrow" />
      </section>

      <section className="meoreDiv">
        <div className="text">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="">LEARN MORE</a>
        </div>
        <img src={kvercxi} alt="egg" />
      </section>


      <section className="mesameDiv">
        <img src={wiqa} alt="glass" />
        <div className="text">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, and copywriters, we’ll build and extend your brand in
            digital places.
          </p>
          <a href="">LEARN MORE</a>
        </div>
      </section>
      <section className="meotxeDiv">
        <div className="baliDiv">
          <h2>Graphic Design</h2>
          <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
        <div className="mandariniDiv">
          <h2>Photography</h2>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </section>
      <div className="testimonials-container">
        <h2 className="testimonials-title">CLIENT TESTIMONIALS</h2>

        <section className="testimonial">
          <img src={gogoni} alt="Emily" className="testimonial-img" />
          <p className="testimonial-text">
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
          </p>
          <h3 className="testimonial-name">Emily R.</h3>
          <p className="testimonial-role">Marketing Director</p>
        </section>

        <section className="testimonial">
          <img src={zangi} alt="Thomas" className="testimonial-img" />
          <p className="testimonial-text">
            Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h3 className="testimonial-name">Thomas S.</h3>
          <p className="testimonial-role">Chief Operating Officer</p>
        </section>

        <section className="testimonial">
          <img src={zgvaze} alt="Jennie" className="testimonial-img" />
          <p className="testimonial-text">
            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!        </p>
          <h3 className="testimonial-name">Jennie F.</h3>
          <p className="testimonial-role">Business Owner</p>
        </section>
      </div>
      <section className="qvedaFotoebi">
        <img src={rdze} alt="" />
        <img src={fortoxali} alt="" />
        <img src={nayini} alt="" />
        <img src={marsh} alt="" />
      </section>


      <footer>
        <div className="asdf">
          <h2>sunnyside</h2>
          <ul className="links">
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Projectss</a></li>
          </ul>
          <ul className="icons">
            {icons.map((icon) => (
              <li>
                <a href={icon.link} target="_blank" className="Soc_link">{icon.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
