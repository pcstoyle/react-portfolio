import Card from "../components/Card";
import demo from "../images/01-html-css-git-homework-demo.png"
// import { CodeIcon } from "@heroicons/react/solid";


function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Book search engine',
            imgsrc: '',
            desc: 'MERN Stack Refactor',
            webLink: '',
            gitLink: 'https://github.com/pcstoyle/book-search-engine.git',
        },
        {
            id: 2,
            title: 'PawPrint',
            imgsrc: '',
            desc: 'Employee facing boarding kennel management system',
            webLink: '',
            gitLink: 'https://github.com/pcstoyle/paw-print.git',
        },
        {
            id: 3,
            title: 'Social Network API',
            imgsrc: '',
            desc: 'NoSql - MongoDB',
            webLink: '',
            gitLink: 'https://github.com/pcstoyle/social-network-api.git',
        },
        {
            id: 4,
            title: 'Employee Tracker',
            imgsrc: '',
            desc: 'MySQL',
            webLink: '',
            gitLink: 'https://github.com/pcstoyle/employee-tracker.git',
        },
        {
            id: 5,
            title: 'Readme Generator',
            imgsrc: '',
            desc: 'Node.js',
            webLink: '',
            gitLink: 'https://github.com/pcstoyle/readme-generator.git',
        },
        {
            id: 6,
            title: 'Personal Portfolio',
            imgsrc: '',
            desc: 'Portfolio built with React',
            webLink: '',
            gitLink: 'https://github.com/pcstoyle/react-portfolio.git',
        },
    ]
    return (
      <section>
          <h2> Portfolio </h2>
          <div className="flex relative">
            { projects.map (({id, title, imgsrc}) => (
                <Card key={id} title={title} imgsrc={imgsrc}/>
            ) )}
          </div>
      </section>
    );
  }
  
  export default Portfolio;