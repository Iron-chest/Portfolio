
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

import Tola from '../../img/about.jpeg'

export default function AboutMe() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <section id="AboutMe" className="about--section">

      <div  data-aos="fade-up"  data-aos-duration='1000' className="about--section--img">

        <img src={Tola} alt="About Me" />

      </div>
      <div  data-aos="fade-down"  data-aos-duration='1000' className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
             I am an aspiring DevOps Engineer committed to continuous learning in the field of IT.
             An Undergraduate in the Department of Computer Science,
             Bells University. Currently searching for Internship to gain more hands-on experience to become highly valuable in this ever evolving World of Technology
          </p>
          <p className="hero--section-description">
          I have some hands-on experience and a dynamic skill set, committed to learning and implementing best practices in automation, CI/CD, and collaborative development environments.
          </p>
        </div>
      </div>
    </section>
  );
}
