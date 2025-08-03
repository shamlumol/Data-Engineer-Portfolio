import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const LatestWork = () => {
  const [show, setShow] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projectsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

const projects = [
  {
    id: 1,
    title: "First Call Resolution (FCR) & Repeat Calls Analysis",
    tools: ["MS SQL Server", "Excel (Pivot Dashboards)"],
    category: "Data Analytics",
    background:
      "In a high-volume customer service setup, First Call Resolution (FCR) and Repeat Calls are key KPIs tied to client SLAs and financial performance. A higher FCR reduces repeat interactions and directly impacts customer satisfaction and bonus payouts.",
    contributions: [
      "Processed 35–40 lakh daily inbound call/chat records, removing invalid and duplicate entries",
      "Filtered out calls repeated within 30 minutes to avoid technical disconnects",
      "Standardized ownership by attributing responsibility to the final advisor who disconnected the call",
      "Developed stored procedures in SQL Server to automate tagging for FCR and Repeat Calls using a 7-day rolling window",
      "Built logic for identifying 3+ repeat calls and calculating FCR% across the 7-day bracket",
      "Created interactive Excel pivot dashboards visualizing day-wise FCR and Repeat Call trends"
    ],
    outcome:
      "Automated the end-to-end FCR reporting process, reducing manual work and enabling real-time performance tracking. This dashboard became a core SLA metric for the client and a key performance monitor for advisor-level bonuses."
  },
  {
    id: 2,
    title: "Multiple Transfer Summary",
    tools: ["MS SQL Server", "Excel (Pivot Dashboards)"],
    category: "Data Analytics",
    background:
      "When a call is transferred multiple times between advisors or departments, it degrades customer experience and increases Average Handling Time (AHT). Monitoring transfer behavior was essential to improving call resolution efficiency.",
    contributions: [
      "Processed daily call/chat data (~35–40 lakh records) and removed invalid phone numbers",
      "Mapped full call journeys from first advisor to the final disconnect using SQL queries",
      "Created stored procedures to automate journey mapping for daily data loads",
      "Excluded sales-related transfers from penalty tracking since they contribute to revenue",
      "Built two dashboards (Voice & Chat) showing transfer frequency by advisor and department"
    ],
    outcome:
      "Delivered an automated dashboard that identified advisors excessively transferring calls to maintain low AHT. Empowered operations managers to coach underperforming staff and enhance service efficiency."
  },
  {
    id: 3,
    title: "Call Back Management System",
    tools: ["MS SQL Server", "Excel (Pivot Dashboards)"],
    category: "Data Analytics",
    background:
      "Potential customers often request call backs at specific times. Missing these windows leads to lost opportunities and poor SLA performance. The goal was to track and ensure timely call backs.",
    contributions: [
      "Merged open (upcoming) and closed (completed) callback datasets after data cleaning",
      "Removed incomplete records and validated callback timestamps",
      "Developed SQL logic to tag callbacks as within SLA, outside SLA (<24h, <48h, etc.) or missed",
      "Automated callback tracking via stored procedures",
      "Created dashboards showing SLA compliance and advisor-level callback performance"
    ],
    outcome:
      "Created a new performance KPI used by both client and operations teams. Improved callback adherence rates and reduced lost sales due to missed follow-ups."
  },
  {
    id: 4,
    title: "Data Flow Creation for Multi-Channel Data",
    tools: ["Snowflake", "Python", "MS SQL Server"],
    category: "Data Analytics",
    background:
      "Every customer interaction—via calls, chats, or emails—generated massive datasets (~40–50 lakh rows per channel daily). Each call created ~200 rows capturing granular timestamps and advisor actions.",
    contributions: [
      "Extracted data from Snowflake using Python scripts in chunked loads to prevent crashes",
      "Condensed raw 200+ row data per interaction into summarized 7–8 logical rows",
      "Calculated additional KPIs like transfer count, consult calls, total talk time, and hold time",
      "Created 30–40 column-wide tables per channel with consistent schema structures",
      "Automated the entire ETL workflow combining Python and SQL for daily refresh",
      "Integrated final datasets into organizational main tables for downstream reporting"
    ],
    outcome:
      "Delivered optimized, structured main tables serving as a single source of truth for analytics and dashboards across the company. Reduced manual data handling time drastically."
  },
  {
    id: 5,
    title: "Cross Sell Dashboard",
    tools: ["MS SQL Server", "Excel (Pivot Dashboards)"],
    category: "Data Analytics",
    background:
      "Cross-selling occurs when advisors from non-sales departments successfully identify potential buyers and transfer calls to the sales team. However, false or unnecessary transfers were increasing inefficiency.",
    contributions: [
      "Extracted and joined call transfer data from voice and chat channels with tagged sales outcomes",
      "Developed stored procedures to map transfer success and automate updates",
      "Designed Excel dashboards showing transfer volume, success rate, and advisor-level metrics",
      "Built logic to separate genuine cross-sell transfers from false ones",
      "Enabled automatic commission validation based on successful sale confirmation"
    ],
    outcome:
      "Introduced transparency in commission allocation by linking rewards only to successful cross-sells. Reduced false transfers and improved operational efficiency."
  },
  {
    id: 6,
    title: "Google Milestone (Cricket Analytics Tool)",
    tools: ["PostgreSQL"],
    category: "Database Development",
    background:
      "Google required a milestone-tracking tool for cricket that dynamically retrieved data when a player crossed predefined records—like 100s scored, 10-wicket hauls, or other statistical milestones.",
    contributions: [
      "Processed historical cricket data and built aggregated player-level statistics",
      "Created dynamic SQL functions to evaluate milestones based on selected formats and time periods",
      "Developed modular procedures for on-demand data retrieval from PostgreSQL",
      "Coordinated with product and frontend teams to ensure API-ready outputs"
    ],
    outcome:
      "Built a milestone engine enabling instant milestone lookups for cricket players across formats. Enhanced the end-user experience on Google’s sports data interface."
  },
  {
    id: 7,
    title: "Dream11 – Match Stats API",
    tools: ["PostgreSQL", "JSON Functions"],
    category: "Database Development",
    background:
      "Dream11 needed an API to fetch complete match stats using a given match ID or array of IDs, returning nested data about teams, players, runs, wickets, and match metadata.",
    contributions: [
      "Developed dynamic PostgreSQL functions to handle single and multiple match IDs",
      "Joined multiple cricket datasets (teams, matches, players, and performance tables)",
      "Generated hierarchical JSON responses using PostgreSQL’s JSON functions",
      "Optimized queries for large datasets ensuring fast API performance"
    ],
    outcome:
      "Delivered a highly dynamic stats API returning structured JSON output. Integrated seamlessly with Dream11’s fantasy platform, improving response speed and scalability."
  },
  {
    id: 8,
    title: "Games24 – Dynamic Cricket Stats APIs",
    tools: ["PostgreSQL", "JSON Functions", "API Integration"],
    category: "Database Development",
    background:
      "Games24 required multiple APIs to provide detailed cricket stats for different contexts — opposition stats, venue stats, and recent match stats — all dynamically generated from match IDs.",
    contributions: [
      "Built three distinct PostgreSQL functions for opposition, venue, and recent match contexts",
      "Structured hierarchical player/team data using advanced JSON functions",
      "Optimized database queries with indexing for large cricket datasets",
      "Worked closely with frontend teams to validate API response formats"
    ],
    outcome:
      "Developed 3 dynamic APIs powering Games24’s live cricket insights. Enabled real-time, data-driven engagement for users through accurate and context-specific statistics."
  },
  {
    id: 9,
    title: "Client Onboarding Automation Tool",
    tools: ["PostgreSQL", "Database Functions", "Schema Management"],
    category: "Database Development",
    background:
      "Each new client required a dedicated schema with identical structures and functions. Manual onboarding was slow and error-prone, hindering scalability.",
    contributions: [
      "Developed PostgreSQL function to auto-create schemas named after new clients",
      "Copied all base tables and stored procedures from a standard dummy schema",
      "Automated schema provisioning to eliminate manual setup errors",
      "Enabled seamless multi-tenant database management with reusable templates"
    ],
    outcome:
      "Reduced client onboarding time from hours to minutes. Ensured data consistency and scalability while supporting a growing client base."
  },
  {
    id: 10,
    title: "Live Blogging Platform Backend",
    tools: ["PostgreSQL", "Backend Functions", "Authentication", "Content Management"],
    category: "Database Development",
    background:
      "The company built a sports-centric blogging tool allowing clients to create and publish blogs in real time using internal services like data feeds, video clips, and commentary.",
    contributions: [
      "Designed PostgreSQL functions for login, OTP verification, blog creation, and scheduling",
      "Automated client onboarding and permission setup for secure multi-user access",
      "Developed logic for attaching media (videos, images, commentary) to blog posts",
      "Enabled scheduling, publishing, and user management workflows",
      "Collaborated with frontend and product teams for full integration"
    ],
    outcome:
      "Delivered the backend for a fully functional live blogging platform. Empowered clients to publish rich multimedia sports blogs seamlessly and in real time."
  }
];
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleProjectClick = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setExpandedProject(null);
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setExpandedProject(null);
  };

  const handleCloseDetails = (e) => {
    e.stopPropagation();
    setExpandedProject(null);
  };

  // close expanded project when clicking outside**
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (expandedProject && !e.target.closest(".project-card")) {
        setExpandedProject(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [expandedProject]);

  return (
    <section className={`latest-work-section ${show ? "content-visible" : ""}`}>
      <Container>
        {/* Section Header */}
        <Row className="mb-5">
          <Col>
            <div className="section-header">
              <h2 className="section-label">Projects</h2>
              <p className="section-subtitle">
                {filteredProjects.length} projects showcasing expertise in data engineering, analytics, and database development
              </p>
            </div>
          </Col>
        </Row>

        {/* Category Filters */}
        <Row className="mb-4" data-aos="fade-left">
          <Col>
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row className="g-4" data-aos="fade-up" data-aos-anchor-placement="top-center">
          {currentProjects.map((project, index) => (
            <Col lg={4} md={6} key={project.id}>
              <div
                className={`project-card ${
                  activeProject === project.id ? "active" : ""
                } ${expandedProject === project.id ? "expanded" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/*for the main card */}
                <div
                  className="project-clickable-area"
                  onClick={() => handleProjectClick(project.id)}
                >
                  {/* Project Header */}
                  <div className="project-header">
                    <div className="project-number">
                      {project.id.toString().padStart(2, "0")}
                    </div>
                    <div className="project-category">{project.category}</div>
                    <h4 className="project-title">{project.title}</h4>
                    <div className="project-tools">
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* project Preview */}
                  <div className="project-preview">
                    <div className="project-background">
                      <p>{project.background}</p>
                    </div>
                    <div className="click-indicator">
                      <span>Click to view details</span>
                      <div className="arrow-icon">↓</div>
                    </div>
                  </div>
                </div>

                {/* project details -> hidden until clicked */}
                <div
                  className={`project-details ${
                    expandedProject === project.id ? "visible" : ""
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="project-contributions">
                    <h5>Key Contributions</h5>
                    <ul>
                      {project.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex}>{contribution}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-outcome">
                    <h5>Business Impact</h5>
                    <p>{project.outcome}</p>
                  </div>

                  <div className="close-section">
                    <button className="close-btn" onClick={handleCloseDetails}>
                      Close
                    </button>
                  </div>
                </div>

                {/* project hover effect */}
                <div className="project-hover"></div>
              </div>
            </Col>
          ))}
        </Row>

        {/* pagination */}
        {totalPages > 1 && (
          <Row className="mt-5">
            <Col>
              <div className="pagination">
                <button
                  className="pagination-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  ← Previous
                </button>

                <div className="page-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        className={`page-btn ${
                          currentPage === page ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>

                <button
                  className="pagination-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next →
                </button>
              </div>
            </Col>
          </Row>
        )}

        {/* project counter */}
        <Row className="mt-4">
          <Col>
            <div className="project-counter">
              Showing {indexOfFirstProject + 1}-
              {Math.min(indexOfLastProject, filteredProjects.length)} of{" "}
              {filteredProjects.length} projects
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestWork;