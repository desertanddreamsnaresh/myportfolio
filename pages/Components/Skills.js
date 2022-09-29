import React from "react";
import Image from 'next/image'
// import "../css/Skills.css";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Bootstrap from "../assets/bootstrap.png";

function Skills() {
  return (
    <div className="skills component__space" id="Skills">
      <div className="heading">
        <h1 className="heading">Skills</h1>
        {/* <p className="heading p__color">
          These are the technologies I've worked with
        </p> */}
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={HTML} alt="HTML icon" width="40px" height="40px"/>
              </div>
              {/* <div className="skills__meta">
                <p className="skills__text">HTML</p>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={CSS} alt="HTML icon" width="40px" height="40px"/>
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">CSS</h1>
              </div> */}
            </div>
          </div>


          <div className="col__3" >
            <div className="skills__box pointer" >
              <div className="icon">
                <Image src={Bootstrap} alt="HTML icon" width="40px" height="40px"/>
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">Bootstrap</h1>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={Tailwind} alt="HTML icon" width="40px" height="40px" />
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">Tailwind</h1>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={JavaScript} alt="HTML icon" width="40px" height="40px" />
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">JavaScript</h1>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image               
                  src={ReactImg}
                  alt="HTML icon"
                  width="40px" height="40px"
                />
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">React Js</h1>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={Node} alt="HTML icon" width="40px" height="40px"/>
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">Node</h1>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={GitHub} alt="HTML icon" width="40px" height="40px" />
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">GitHub</h1>
              </div> */}
            </div>
          </div>


          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={Mongo} alt="HTML icon" width="40px" height="40px" />
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">MongoDB</h1>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={FireBase} alt="HTML icon" width="40px" height="40px" />
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">FireBase</h1>
              </div> */}
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default Skills;
