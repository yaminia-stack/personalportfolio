import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const PROFILE_IMAGE_URL = 'https://media.licdn.com/dms/image/v2/D5603AQFwBDBKzMdEVQ/profile-displayphoto-shrink_800_800/B56ZW6xj7vGsAc-/0/1742595310678?e=1749686400&v=beta&t=C6f_LFRpMyV9mlSDRxOajK_yHn3XzfYMapKr28Sq3CQ'; // You'll need to replace this with your actual image URL

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Section = ({ children, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      id={id}
      className="py-12 px-4 md:px-8"
    >
      {children}
    </motion.section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50">
      {/* Hero Section */}
      <Section id="hero" className="min-h-screen">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex flex-col md:flex-row lg:flex-row items-center gap-6 lg:gap-8">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-pink-200">
              <img 
                src={PROFILE_IMAGE_URL}
                alt="Yamini Ashokkumar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-row md:flex-col gap-4 justify-center flex-wrap">
              <a href="https://www.linkedin.com/in/yamini-ashokkumar/" className="social-link text-pink-600 hover:text-pink-700">
                <FaLinkedin className="text-xl md:text-2xl" />
                <span className="text-sm md:text-base">Join my network</span>
              </a>
              <a href="https://github.com/yaminia-stack" className="social-link text-pink-600 hover:text-pink-700">
                <FaGithub className="text-xl md:text-2xl" />
                <span className="text-sm md:text-base">View my projects</span>
              </a>
              <a href="https://docs.google.com/document/d/1ARSGSdgdKtmAqFfvHp_1JgkxFUWps7fJ/edit" className="social-link text-pink-600 hover:text-pink-700">
                <FaFileAlt className="text-xl md:text-2xl" />
                <span className="text-sm md:text-base">Grab my resume</span>
              </a>
              <a href="mailto:yamini.a@protectmymails.com" className="social-link text-pink-600 hover:text-pink-700">
                <FaEnvelope className="text-xl md:text-2xl" />
                <span className="text-sm md:text-base">Email me</span>
              </a>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 text-gray-800"
            >
              Hey there! I'm <span className="text-pink-600">Yamini</span> — I build bold, beautiful software.
            </motion.h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600">
              Software Engineer with 4+ years of experience in full-stack development
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="#experience" className="btn bg-pink-600 text-white hover:bg-pink-700">
                See My Work
              </a>
              <a href="#contact" className="btn bg-pink-600 text-white hover:bg-pink-700">
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <FaArrowDown className="text-3xl text-pink-600" />
        </motion.div>
      </Section>

      {/* About Section */}
      <Section id="about" className="py-8">
        <h2 className="section-title text-pink-600 mb-4">About Me</h2>
        <div className="card bg-white/80 backdrop-blur-sm">
          <p className="text-gray-700 text-lg">
            A Software Engineer with 4+ years of experience building full-stack web apps. I enjoy solving real-world problems through clean code, scalable APIs, and responsive UIs. With hands-on experience across financial and enterprise systems, I love collaborating with teams and continuously learning new tech. Let's build something impactful!
          </p>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" className="py-8">
        <h2 className="section-title text-pink-600 mb-4">Education</h2>
        <div className="card bg-white/80 backdrop-blur-sm">
          <h3 className="text-2xl font-heading mb-2 text-gray-800">Masters in Information Systems</h3>
          <p className="text-gray-700">
            Northwest Missouri State University, MO, USA<br />
            Graduation: December 2024
          </p>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="py-8">
        <h2 className="section-title text-pink-600 mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div className="card bg-white/80 backdrop-blur-sm">
            <h3 className="text-2xl font-heading mb-2 text-gray-800">CitiGroup, MO | Software Engineer</h3>
            <p className="text-gray-600 mb-4">Jan 2024 - Present</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Proficient in building responsive front-end interfaces using Angular and React, and integrating them seamlessly with Spring Boot-powered REST APIs.</li>
              <li>Led the end-to-end design and implementation of secure GraphQL APIs in Spring Boot for transaction queries, collaborating with cross-functional teams to ensure banking standards and improving data retrieval speed by 40%.</li>
              <li>Managed and optimized MySQL and MongoDB databases for high availability with zero downtime, leveraging Spring Data JPA and schema migrations and optimized query execution for maximum database performance.</li>
              <li>Implemented unit and integration testing using JUnit and Jest, achieved complete test coverage and reduced regression defects by 30% through CI/CD-driven automated test suites.</li>
              <li>Facilitated inter-microservices communication via RESTful APIs, validated APIs using Postman, and resolved 85% of merge conflicts by applying structured version control strategies.</li>
              <li>Developed RESTful APIs and microservices using Java 11 & Spring MVC, optimizing server-side performance via JVM tuning to increase application throughput and reduce API response time.</li>
              <li>Engineered responsive, cross-browser compatible, and ADA-compliant user interfaces using JavaScript, Angular.js, and React.js, optimizing performance through JSON-based data serialization to improve UI load times.</li>
            </ul>
          </div>

          <div className="card bg-white/80 backdrop-blur-sm">
            <h3 className="text-2xl font-heading mb-2 text-gray-800">Zensar Technologies, India | Software Engineer I</h3>
            <p className="text-gray-600 mb-4">Oct 2020 – Jul 2023</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Integrated Web RTC (RTC Peer Connection) with Java Spring Boot for real-time chat/video, reducing consultation time by 20%.</li>
              <li>Secured application with JWT, OAuth2, and OpenID Connect, enhancing authentication and authorization by 25%.</li>
              <li>Automated robots/workflows using UI Path (Robotic Process Automation), which scraped data from websites—resulting in a 60% reduction in manual data entry efforts and saving time.</li>
              <li>Developed responsive UIs using Angular Material and RxJS, leveraging reactive programming for efficient data handling.</li>
              <li>Designed and maintained PostgreSQL and NoSQL databases with high availability and data integrity while implementing JPA for ORM to optimize data retrieval and reduce SQL query execution time.</li>
              <li>Utilized socket programming techniques to improve system scalability, resulting in an 80% enhancement.</li>
              <li>Collaborated with cross-functional teams to integrate microservices, improved development efficiency by 50% using Git/GitHub for version control, and validated APIs with Postman and Swagger UI.</li>
              <li>Led the development and deployment of a customer onboarding portal, while also mentoring 2 junior engineers on Node.js, React and frontend technologies.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="py-8">
        <h2 className="section-title text-pink-600 mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {[
            'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'AJAX', 'JSON', 'XML', 'Tailwind CSS',
            'Java (11, 8)', 'SQL', 'Node.js', 'Express.js', 'C#', 'Python', 'C', 'C++', 'PHP', 'Apache Tomcat',
            'MS SQL Server', 'Oracle', 'MySQL', 'MongoDB', 'PostgreSQL', 'NoSQL', 'DynamoDB', 'Firebase',
            'JSP', 'JPA', 'JVM', 'JavaBeans', 'JDBC',
            'React.js', 'Angular.js', 'Vue.js', 'Spring Boot', 'Bootstrap', 'Spring MVC', 'jQuery', 'Django', 'GraphQL', 'Laravel',
            'Selenium', 'JUnit', 'Jest', 'Mockito',
            'AWS', 'GCP', 'Microsoft Azure',
            'Jenkins', 'Git', 'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'Swagger UI', 'Terraform',
            'Agile', 'Waterfall', 'SDLC', 'Kanban',
            'Microservices', 'Jira', 'Confluence', 'IntelliJ IDEA', 'Eclipse', 'VS Code', 'Java Networking', 'RESTful API', 'Postman API'
          ].map((skill) => (
            <div key={skill} className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 text-center text-gray-700 text-sm md:text-base hover:bg-pink-100 transition-colors duration-300">
              {skill}
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-8">
        <h2 className="section-title text-pink-600 mb-4">Get in Touch</h2>
        <div className="card bg-white/80 backdrop-blur-sm max-w-2xl mx-4 md:ml-4">
          <h3 className="text-xl md:text-2xl font-heading mb-4 text-gray-800">Contact Information</h3>
          <div className="space-y-3 text-gray-700 text-left text-sm md:text-base">
            <p>📍 USA</p>
            <p>📞 +1 (405) 785-0343</p>
            <p>📧 yamini.a@protectmymails.com</p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-600 text-sm md:text-base">
        <p>© {new Date().getFullYear()} Yamini Ashokkumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App; 