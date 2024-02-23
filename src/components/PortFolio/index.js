import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Icon } from '@iconify/react';
import { left } from '@popperjs/core';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import portfolio from "./images/portfolio.jpeg";
import SimpleImageSlider from "react-simple-image-slider";
import {useEffect} from 'react'; 
import { Axios } from 'axios';

const element = document.getElementById('root');
const root = createRoot(element);
root.render(<TemplatePage />);

export default function TemplatePage() {
  return (
    <html>
      <head>
        <meta charSet="utf-8"></meta>
        <meta
          content="width=device-width, initial-scale=1.0"
          name="viewport"
        ></meta>
        <title>iPortfolio Bootstrap Template - Index</title>
        <meta content="" name="description"></meta>
        <meta content="" name="keywords"></meta>

        <link href="assets/img/favicon.png" rel="icon"></link>
        <link
          href="assets/img/apple-touch-icon.png"
          rel="apple-touch-icon"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        ></link>

        <link href="assets/vendor/aos/aos.css" rel="stylesheet"></link>
        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        ></link>
        <link
          href="assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        ></link>
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        ></link>
        <link href="assets/css/style.css" rel="stylesheet"></link>
      </head>
      <body>
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <Header />
        <Section />
        <MainBody />
      </body>
      <footer id="footer">
        <div
          className="
loop(arg0: boolean) {
throw new Error('Method not implemented.')
}container"
        ></div>
      </footer>
    </html>
  );
}
const Header = () => {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img
            src={portfolio}
            alt=""
            className="img-fluid rounded-circle"
          ></img>
          <h1 className="text-light">
            <a href="index.html">Tanya Kumari</a>
          </h1>
          <div className="social-links mt-3 text-center">
            {/*<a href="#" className="twitter">
              <i className="bi bi-twitter">
                <Icon icon="bi:twitter" />
              </i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook">
                <Icon icon="bi:facebook" />
              </i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram">
                <Icon icon="bi:instagram" />
              </i>
  </a>*/}
            <a href="https://github.com/tanya4067">
              <i className="bx bxl-skype">
                <Icon icon="bi:github" />
              </i>
            </a>
            <a href="https://www.linkedin.com/in/tanya-kumari-652362196/">
              <i className="bx bxl-linkedin">
                <Icon icon="bi:linkedin" />
              </i>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active">
                <i className="bx bx-home">
                  <Icon icon="bi:house-door" />
                </i>{' '}
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="bx bx-user">
                  <Icon icon="bi:person-square" />
                </i>{' '}
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link scrollto">
                <i className="bx bx-file-blank">
                  <Icon icon="bi:tools" />
                </i>{' '}
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <i className="bx bx-book-content">
                  <Icon icon="bi:card-checklist" />
                </i>{' '}
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-server">
                  <Icon icon="bi:telephone-inbound" />
                </i>{' '}
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Section = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
       
      <div>
        <h1>Tanya Kumari</h1>
        <p>
          I'm
          <nobr></nobr>
          {
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Developer')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Traveler')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('UI/UX Designer')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Explorer')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Artist')
                  .pauseFor(1000)
                  .start();
              }}
            />
          }
        </p>
      </div>
      <div>
          <div className="pacman">
            <div className="pacman-top"></div>
            <div className="pacman-bottom"></div>
            <div className="feed"> GOOD </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MainBody = () => {
  return (
    <section>
      <br></br>
      <About />
      <br></br>
      {/*<Facts />*/}
      <br></br>
      <Skills />
      <br></br>
      <Resume />
      <br></br>
      {/*<PlacesBeenTo/>*/}
      <br></br>
      <Contacts />
      <br></br>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" style={{ paddingLeft: '300px' }}>
        <div className="section-title">
          <h2>About</h2>
          <p>
          Passionate and results-oriented software developer with a strong background in full-stack development, proficient in various programming languages and frameworks. Proven ability to analyze complex problems, design effective solutions, and deliver high-quality software on time. Adept at collaborating with multidisciplinary teams and continuously staying abreast of emerging technologies. Demonstrated commitment to continuous learning, adaptability, and a strong drive for excellence in every aspect of software development.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img
              src="assets/img/profile-img.jpg"
              className="img-fluid"
              alt=""
            ></img>
          </div>
          <div className="col-lg-12 pt-4 pt-lg-0 content" style={{color:'rgb(255,255,228)'}} data-aos="fade-left">
            <h3>Full Stack Developer</h3>
            <p>Versatile full-stack developer with expertise in both front-end and back-end technologies, delivering end-to-end solutions with a focus on efficiency, scalability, and user-centric design.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Birthday:</strong> <span>1 December 2000</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Phone:</strong> <span>+91 7759034535</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>City:</strong> <span>Bangalore, India</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Age:</strong> <span>24</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Designation:</strong> <span>Associate System Engineer</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Email id:</strong> <span>tanyakumari29@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              
Accomplished React developer with a successful track record of designing, implementing, and optimizing dynamic web applications using React.js. Proficient in creating responsive and intuitive user interfaces, integrating RESTful APIs, and ensuring optimal performance across various browsers. Demonstrated expertise in state management, component lifecycle, and code modularization, contributing to the development of seamless and visually appealing React projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Facts = () => {
  return (
    <section id="facts" className="facts">
      <div className="container" style={{ paddingLeft: '300px' }}>
        <div className="section-title">
          <h2>Facts</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row no-gutters">
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
          >
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Happy Clients</strong> consequuntur quae
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Projects</strong> adipisci atque cum quia aut
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="1453"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Hours Of Support</strong> aut commodi quaerat
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="32"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Hard Workers</strong> rerum asperiores dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container" style={{ paddingLeft: '300px' }}>
        <div className="section-title">
          <h2>Skills</h2>
          <p>
          Proficient in organizing and structuring code for reusability and maintainability, following best practices in modularization and componentization.
          </p>
          <tr >
            <td className="skillspoint">HTML</td>
            <td className="skillspoint">CSS</td>
            <td className="skillspoint">Javascript</td>
            <td className="skillspoint">PHP</td>
            <td className="skillspoint">Python</td>
            <td className="skillspoint">MySQL</td>
            <td className="skillspoint">React JS </td>
          </tr>

        </div>
      </div>
    </section>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container" style={{ paddingLeft: '300px',color:'rgb(255,255,228)' }}>
        <div className="section-title">
          <h2>Resume</h2>
          <p>
          Results-oriented software developer with 1.5 years of experience, adept at designing and implementing robust solutions.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Tanya Kumari</h4>
              <p>
                <em>
                  Highly competent Software Engineer with over 1.5 years of experience, spearheading the development of large-scale software solutions and deploying intuitive solutions to meet customer design requirements and exceed project deadlines. 
                </em>
              </p>
              <ul>
                <li>Bangalore, India</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Technology in  Mechanical Engineering</h4>
              <h5>2018 - 2022</h5>
              <p>
                <em>Birla Institute of Technology Mesra,Ranchi</em>
              </p>
              <p>
                8.3 CGPA
              </p>
            </div>
            <div className="resume-item">
              <h4>12th High School</h4>
              <h5>2016 - 2018</h5>
              <p>
                <em>Hill Top School, Jamshedpur</em>
              </p>
              <p>
                ISC BOARD-
                87.8%
              </p>
            </div>
            <div className="resume-item">
              <h4>1Oth Junior School</h4>
              <h5>2014 - 2016</h5>
              <p>
                <em>Hill Top School, Jamshedpur</em>
              </p>
              <p>
                ISCE BOARD-
                93.8%
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Associate System Engineer</h4>
              <h5>2022 - Present</h5>
              <p>
                <em>Airbus IN, Bangalore,India </em>
              </p>
              <ul>
                <li>
                Developed and maintained web application using HTML,CSS, Javascript and React JS as a framework.
                </li>
                <li>
                Designed database schemas to store application data using MySQL. Integrated APIs with the web applications using Restful Web Services.
                </li>
                <li>
                Incorporated python as the primary backend language in the projects, leveraging its robust frameworks and libraries to design and implement scalable, efficient, and maintainable server-side solutions.
                </li>
                <li>
                Maintained version control systems like Git for source code management.

                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Personal Projects</h4>
              <h5>2020 - 2022</h5>
              <p>
                <em>Food Delivering App clone with games for rewards.</em>
              </p>
              <ul>
                <li>
                Designed and implemented a user-friendly food delivery application which is integrated with real-time order tracking, secure payment gateways, and an intuitive interface, resulting in a seamless customer experience using React JS, CSS, HTML , PHP and MySQL
                </li>
                <li>
                uilt an interactive site for customers by adding games like spin wheels for vouchers and users engagement.
                </li>
              </ul>
              <p>
                <em>Predicting rise in covid cases to facilitate medical emergency in both urban and rural areas.
</em>
              </p>
                <ul>
                  <li>
                  Led a dynamic data science hackathon project, demonstrating expertise in exploratory data analysis, feature engineering, and machine learning model development.
                  </li>
                </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

const Contacts = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" style={{ paddingLeft: '300px' }}>
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            It would be great to connect with you and work.
          </p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info" >
              <div className="address">
                <i className="bi bi-map">
                  <Icon icon="bi:map" />
                </i>
                <h4>Location:</h4>
                <p >K2-66, Road No -9, Telco Colony , Jamshedpur-831004</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope">
                  <Icon icon="bi:envelope" />
                </i>
                <h4>Email:</h4>
                <p>tanyakumari29@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone">
                  <Icon icon="bi:phone" />
                </i>
                <h4>Call:</h4>
                <p>+91 7759034535</p>
              </div>

              {/*<iframe
                src="https://www.google.com/maps/embed/v1/place?key=
                &q=Space+Needle,Seattle+WA"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '290px' }}
                allowFullScreen
  ></iframe>*/}
            <address>
              Bangalore
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56659647572!2d77.46612810867255!3d12.954280233359597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708686480078!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: '290px' }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </address>
            </div>
          </div>
          <FormData />
        </div>
      </div>
    </section>
  );
};

const FormData = () => 
{

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [subject,setSubject]=useState("");
  const [message,setMessage]=useState("");
  
  const submitHandler = (event)=>
  {
    event.preventDefault();
    const newContact ={
      "name": name,
      "email":email,
      "subject":subject,
      "message":message
    }
  }
    
    
  return (
      <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" style={{color:'rgb(255,255,228)'}}>
        <form
          method="post"
          role="form"
          onClick={submitHandler}
          encType='multipart/form-data'
        >
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                onChange={(event) =>
                  setName(event.target.value)}
                required
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                onChange={(event) =>
                  setEmail(event.target.value)}
                required
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              onChange={(event) =>
                setSubject(event.target.value)}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="name">Message</label>
            <textarea
              className="form-control"
              name="message"
              rows={10}
              onChange={(event) =>
                setMessage(event.target.value)}
              required
            ></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    );
}
/*const FormData = () => {
  const [name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  //Using useState() hook - to store the dynamic value of the form
  // FormDataType is a react function to get all the values from a form
  interface FormDataType {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  //Initializing the form value
  const responseBody: FormDataType = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  //Rendering the value we enter and converting into json file
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    responseBody.name = name;
    responseBody.email = email;
    responseBody.subject = subject;
    responseBody.message = message;
    //Converting it into json data the response
    console.log(JSON.stringify(responseBody));
    //Form submission happens here
  };

  const inputChangeHandler = (
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFunction(event.target.value);
  }; 
    return (
      <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
        <form
          action="forms/contact.php"
          method="post"
          role="form"
          className="php-email-form"
          onSubmit={onSubmitHandler}
        >
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                onChange={(e) => inputChangeHandler(setFirstName, e)}
                name="name"
                className="form-control"
                id="name"
                required
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Email</label>
              <input
                type="email"
                onChange={(e) => inputChangeHandler(setEmail, e)}
                className="form-control"
                name="email"
                id="email"
                required
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              onChange={(e) => inputChangeHandler(setSubject, e)}
              className="form-control"
              name="subject"
              id="subject"
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="name">Message</label>
            <textarea
              className="form-control"
              onChange={(e) => inputChangeHandler(setMessage, e)}
              name="message"
              rows={10}
              required
            ></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    );
};*/


const PlacesBeenTo=()=>
{
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
       url: "https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    },
    {
       url: "https://thumbs.dreamstime.com/b/lone-tree-meadow-sunriseidyllic-fabulous-landscapes-39659821.jpg",
    },
    {
       url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcSprPgYofGmXXPfuEDcZ_XI294n0bME5dTX9TGvINmPiA&s",
    },
    {
       url: "https://i.pinimg.com/474x/81/ca/47/81ca47eaae35615ba9a9bb57560aaa3c.jpg",
    },
    {
       url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTof2fniv0mZzN8DByLmb6ILU4MvV_SGr_wptMeAut_dPaYMBkeHnHhD5egzU7MB0GSqE&usqp=CAU",
    },
 ];
  return(
    <div style={{backgroundColor:'black',paddingLeft:'300px' }} className="container">
    <div className="section-title">
      <h2>Explorer</h2>
      <tr>
        <td>

      <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
        </td>
        <td>

      <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
        </td> 
      </tr>
      </div>
    </div>
  );
};


