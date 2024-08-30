import React, { useEffect, useRef } from "react";
import pdf from "../pdf/SagarHaldar_USICT.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Sagar Haldar",
        "I'm Software developer",
        "Full Stack Web Developer (MERN Stack)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            // href="https://drive.google.com/uc?export=download&id=1CFG8iafLjgd5Txpv4Jv_Ou9uZRbZJyXN"
            href="https://drive.google.com/file/d/1VsiIp7m42Md6z4PXk7US8-tza0K99lXa/view?usp=sharing"
            className="btn btn-outline-warning my-3"
          >
            View Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src="https://res.cloudinary.com/dvuuccuaj/image/upload/v1721475652/Portfolio/About_Profile_pic.png" alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;



{/* <img src={`/assets/hero/hero.avif`} alt="hero" /> */}