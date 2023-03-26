import React from "react";
import ImageGallery from "react-image-gallery";
import StanleyLogo from "./stanleys.png";
import "./App.css";
import Dessert from "./Dessert.JPG";
import Dessert2 from "./Dessert2.JPG";
import Dessert3 from "./Dessert3.JPG";
import Food from "./foodphoto.jpg";
import Dining from "./dining.jpg";
import Food2 from "./food2.jpg";
import img1 from "./img1.JPG";
import img2 from "./img2.JPG";
import img3 from "./img3.JPG";
import img4 from "./img4.JPG";
import img5 from "./img5.JPG";
import img6 from "./img6.JPG";
import img7 from "./img7.JPG";
import img8 from "./img8.JPG";
import img9 from "./img9.JPG";
import img10 from "./img10.JPG";
import img11 from "./img11.JPG";

function App() {
  return (
    <div>
      <Nav />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <button onClick={() => window.scrollTo(0, 0)}>Home</button>
      <button
        onClick={() => document.getElementById("gallery").scrollIntoView()}
      >
        Gallery
      </button>
      <img className="homeImage" src={StanleyLogo} alt="Stanley's Events" />
      <button
        onClick={() => document.getElementById("services").scrollIntoView()}
      >
        Services
      </button>
      <button
        onClick={() => document.getElementById("contact").scrollIntoView()}
      >
        Contact Us
      </button>
    </nav>
  );
}

function About() {
  return (
    <div className="about">
      <img src={Food2} alt="kirby"></img>
      <img src={Dining} alt="kirby"></img>
      <img src={Food} alt="kirby"></img>
      <h1>About Us</h1>
      <p>
        Stanley's Events provides high-quality event planning services to the
        Tendring community and beyond. Our experienced team of event planners,
        decorators, and caterers will work with you to create the perfect event
        for any occasion.
      </p>
      <p>
        Whether you're planning a wedding, birthday party, corporate event, or
        any other special occasion, we have the expertise and resources to make
        your event a success.
      </p>
      <p>
        Our team is dedicated to providing exceptional customer service, and we
        will go above and beyond to ensure that your event is everything you
        dreamed it would be. Contact us today to learn more about our services
        and how we can help you plan the perfect event.
      </p>

      <hr></hr>
    </div>
  );
}
function Services() {
  const services = [
    {
      img: Dessert,
      title: "Event Planning",
      description:
        "From intimate dinners to large-scale celebrations, Stanley’s Events offers full-service event planning to bring your vision to life. We’ll take care of everything from vendor coordination to décor, so you can enjoy your special day stress-free.",
    },
    {
      img: Dessert2,
      title: "Decoration",
      description:
        "Our team of designers will work with you to create a custom look and feel for your event. From floral arrangements to lighting design, we’ll make sure every detail is perfect.",
    },
    {
      img: Dessert3,
      title: "Catering",
      description:
        "Let Stanley’s Events take care of the catering for your next event. Our chefs will create a menu tailored to your tastes, using the freshest, locally-sourced ingredients. We’ll handle everything from set-up to clean-up, so you can focus on enjoying your event.",
    },
  ];

  return (
    <div className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service">
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact" id="contact">
      <img className="contactlogo" src={StanleyLogo} alt="stanleylogo"></img>
      <h2>Contact Us</h2>
      <p>Address: Station Rd, Kirby Cross, Frinton-on-Sea CO13 0LU</p>
      <p>
        Phone: <a href="tel:01255676164">01255 676164</a>
      </p>
      <p>
        Email:{" "}
        <a href="mailto:info@stanleysevents.com">info@stanleysevents.com</a>
      </p>
    </div>
  );
}

function Gallery() {
  const images = [
    { original: img1 },
    { original: img2 },
    { original: img3 },
    { original: img4 },
    { original: img5 },
    { original: img6 },
    { original: img7 },
    { original: img8 },
    { original: img9 },
    { original: img10 },
    { original: img11 },
  ];

  return (
    <div>
      <hr></hr>
      <h2 id="gallery">Gallery</h2>
      <div className="gallery-text">
        <p>
          Our gallery showcases the exceptional quality of our catering
          services, highlighting the mouthwatering and visually stunning dishes
          that we offer. We take pride in using only the freshest and highest
          quality ingredients, expertly prepared by our skilled chefs to deliver
          a culinary experience that delights the senses. Browse through our
          gallery to get a taste of what we have to offer and let us bring our
          exceptional catering services to your next event.
        </p>
      </div>
      <div className="gallery-container">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={true}
        />
      </div>
    </div>
  );
}

export default App;
