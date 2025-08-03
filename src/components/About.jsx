import React, { useEffect, useState } from "react";
import "../App.css";
import Profile from "../assets/sakshi.jpg";

import {
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaPhone,
} from "react-icons/fa";

import LatestWork from "./LatestWork";
import Footer from "../pages/Footer";
const About = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("Personal Info");
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const tabs = ["Personal Info", "Experience", "Education", "Skills"];

  const content = {
    "Personal Info": {
      title: "Personal Info",
      text: "Here's a quick snapshot of my personal details and ways to connect with me.",
      cards: [
        { heading: "Location", text: "Mumbai, India" },
        {
          heading: "Connect with me",
          custom: (
            <div className="social-icons" data-aos="zoom-out-right">
              <a
                href="https://www.linkedin.com/in/sakshi-korde-ace02/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>



              <a
     href="mailto:sakshi.korde02@gmail.com"
              className="mail-link" 
              aria-label="Email Sakshi Korde"
              target="_blank"
              >
                <FaEnvelope />
              </a>
            </div>
          ),
        },
        // {
        //   heading: "Email Me",
        //   custom: (
        //     <a
        //       href="mailto:sakshi.korde02@gmail.com"
        //       className="mail-link" 
        //       aria-label="Email Sakshi Korde"
        //       target="_blank"
        //     >
        //       <FaEnvelope /> sakshi.korde02@gmail.com
        //     </a>
        //   ),
        // },
      ],
    },
    Experience: {
      title: "My Experience",
      text: "With 2+ years of experience in database development and data analysis, I've worked on numerous projects involving SQL-based solutions and data pipelines.",
      custom: (
        <div className="experience-timeline"  data-aos="zoom-in-down">
          <div className="timeline-item">
            <div className="timeline-year">2025 - Present</div>
            <div className="timeline-content">
              <h3>Database Developer</h3>
              <div className="company-info">
                <span className="company">Sportz Interactive</span>
                {/* <span className="department">Data Team</span> */}
              </div>
              <div className="role-highlights">
                <span className="role-tag">
                  Developed backend database solutions using MS SQL Server and
                  PostgreSQL to power high-performance sports web and mobile
                  applications.
                </span>
                <span className="role-tag">
                  Designed, created, and optimized Stored Procedures, Functions,
                  and Triggers to support real-time API integrations for live
                  match services.
                </span>
                <span className="role-tag">
                  Partnered with frontend and analytics teams to understand data
                  requirements, ensuring seamless API consumption and reliable
                  data delivery.
                </span>
                <span className="role-tag">
                  Improved database performance by implementing indexing
                  strategies and refactoring complex queries, reducing execution
                  times significantly.
                </span>
                <span className="role-tag">
                  Provided live match data support, writing queries on real-time
                  datasets during ongoing events to meet dynamic business needs
                </span>
                <span className="role-tag">
                  Contributed to ongoing backend enhancements, ensuring
                  scalability, data integrity, and high availability of systems.
                </span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2023 - 2025</div>
            <div className="timeline-content">
              <h3>Data Analyst</h3>
              <div className="company-info">
                <span className="company">Tech Mahindra</span>
              </div>
              <div className="role-highlights">
                <span className="role-tag">
                  Engineered and managed end-to-end data pipelines, transforming
                  raw datasets into structured, analysis-ready formats to
                  support reporting and advanced analytics.
                </span>
                <span className="role-tag">
                  Automated data workflows using SQL, reducing manual
                  intervention and improving data processing efficiency.
                </span>
                <span className="role-tag">
                  Developed and optimized stored procedures and complex queries,
                  achieving up to 25% faster execution times.
                </span>
                <span className="role-tag">
                  Collaborated with cross-functional teams to gather business
                  requirements, translate them into technical solutions, and
                  deliver actionable insights.
                </span>
                <span className="role-tag">
                  Designed and maintained dashboards to track performance
                  metrics, monitor data quality, and support decision-making
                  across teams.
                </span>
                <span className="role-tag">
                  Ensured data integrity, scalability, and performance
                  optimization while contributing to both analytical projects
                  and engineering solutions.
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    Education: {
      title: "My Education",
      text: "My academic background and qualifications.",
      custom: (
        <div className="education-grid"  data-aos="zoom-in-down">
          <div className="education-item">
            <div className="edu-year">2022 - 2023</div>
            <div className="edu-details">
              <h3>Post Graduate Programme in Data Science and Engineering</h3>
              <p className="institution">
                Great Lakes Executive Learning, Mumbai
              </p>
              {/* <div className="edu-highlights">
                <span className="edu-tag">Machine Learning</span>
                <span className="edu-tag">Big Data</span>
                <span className="edu-tag">Data Engineering</span>
              </div> */}
            </div>
          </div>

          <div className="education-item">
            <div className="edu-year">2018 - 2021</div>
            <div className="edu-details">
              <h3>Bachelor of Commerce</h3>
              <p className="institution">Hemchand Yadav University</p>
              {/* <div className="edu-highlights">
                <span className="edu-tag">Business Analytics</span>
                <span className="edu-tag">Statistics</span>
                <span className="edu-tag">Economics</span>
              </div> */}
            </div>
          </div>
        </div>
      ),
    },
    Skills: {
      title: "My Skills",
      text: "Technical skills and proficiencies across data engineering and analytics.",
      custom: (
        <div className="skills-container"  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming & Scripting</h3>
              <div className="skill-tags">
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Python</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Databases & Warehousing</h3>
              <div className="skill-tags">
                <span className="skill-tag">MS SQL Server</span>
                <span className="skill-tag"> PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Snowflake</span>
                <span className="skill-tag">Apache Kafka</span>
                <span className="skill-tag">dbt</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Data Engineering & ETL</h3>
              <div className="skill-tags">
                <span className="skill-tag">Data Pipelines</span>
                <span className="skill-tag">Stored Procedures</span>
                <span className="skill-tag">Functions</span>
                <span className="skill-tag">Triggers</span>
                <span className="skill-tag">Indexing</span>
                <span className="skill-tag">Query Optimization</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Data Analysis & Visualization</h3>
              <div className="skill-tags">
                <span className="skill-tag">Excel (Advanced)</span>

              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                <span className="skill-tag">DBeaver</span>
                <span className="skill-tag"> JIRA</span>

              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className={`about-page ${show ? "content-visible" : ""}`}>
      {/* Hero Section */}
      <section className="about-hero" data-aos="fade-in">
        <div className="about-container">
          <div className="about-left" data-aos="fade-right"
            data-aos-delay="200">
            <div className="section-label">ABOUT ME</div>
            <h1 className="about-title">
              Hi, I'm Sakshi <br /> <span>A Data Engineer</span>
            </h1>
            <p className="about-description">
              With 3+ years of experience in database development and data
              analysis. Skilled in designing and optimizing SQL-based solutions,
              stored procedures, functions, and triggers to support real-time
              applications and business reporting. Proficient in working with MS
              SQL Server, PostgreSQL, Snowflake, and DBeaver to manage and
              transform large datasets. Experienced in building and maintaining
              data pipelines, optimizing query performance, and delivering
              reliable data solutions for high-performance applications. Adept
              at collaborating with cross-functional teams to translate business
              requirements into actionable insights while ensuring data
              accuracy, integrity, and efficiency.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">3+</span>
                <span className="highlight-text">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">15+</span>
                <span className="highlight-text">Projects Completed</span>
              </div>
            </div>
          </div>
          <div className="about-right" 
             data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
            <div className="profile-image-container">
              <img className="profile-image" src={Profile} alt="Sakshi Korde" />
              <div className="profile-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="tabs-section"   data-aos="fade-up"
        data-aos-delay="400">
        <div className="tabs-container">
          <div className="tabs-header">
            <div className="section-label">EXPLORE</div>
            <h2 className="section-title">
              Professional <span>Details</span>
            </h2>
          </div>

          {/* Tabs Navigation */}
          <div className="tabs-navigation" data-aos="fade-right">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content-wrapper"  data-aos="zoom-in-down">
            <div className="tab-content">
              <h3 className="tab-title" >{content[activeTab].title}</h3>
              <p className="tab-description">{content[activeTab].text}</p>

              {activeTab === "Personal Info" ? (
                <div className="info-cards-grid">
                  {content["Personal Info"].cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="info-card"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <h4>{card.heading}</h4>
                      {card.custom ? card.custom : <p>{card.text}</p>}
                    </div>
                  ))}
                </div>
              ) : activeTab === "Experience" ? (
                <div className="experience-content">
                  {content[activeTab].custom}
                </div>
              ) : activeTab === "Education" ? (
                <div className="education-content">
                  {content[activeTab].custom}
                </div>
              ) : activeTab === "Skills" ? (
                <div className="skills-content">
                  {content[activeTab].custom}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <LatestWork />
            <Footer />

    </div>
  );
};

export default About;
