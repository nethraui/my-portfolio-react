/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faJava,
  faAws
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'

function About () {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I am a highly motivated software developer with over 5 years of experience in developing cloud-based applications on AWS. 
            I have a Master's degree in Computer Engineering and a Bachelor's degree in Electronics and Communication Engineering.
          </p>

          <p>
            My expertise lies in developing serverless applications using Java and Python, creating microservices, RESTful web services, 
          and utilizing AWS services such as S3, Lambda, API Gateway, Sage Maker, and DynamoDB. 
            I have experience with front-end development using React.js, Angular 4, and HTML/CSS/JavaScript, as well as back-end development with Spring Boot and Node.js.
          </p>

          <p>
            I have worked with various version control tools such as Git, Bitbucket, and SVN, and I am familiar with project management tools like JIRA, Confluence, and Jenkins. 
            Throughout my career, I have collaborated with cross-functional teams to ensure high code quality and timely project delivery.
          </p>

          <p>
            I have worked with Bio-Rad Laboratories and NextEra Energy as a software developer, developing serverless cloud applications and delivering high-quality web applications. 
            As an intern at Tres Mercari Group, I assisted with all stages of the software development life cycle.
          </p>

          <p>
            I am passionate about learning new technologies and methodologies to enhance my skills and deliver the best results.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faAws} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
