
import { useState } from "react";
import demo from "../images/01-html-css-git-homework-demo.png"
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"
// import '../index.css';
import '../styles/portfolio.css';
import portfolio from "../images/portfoliopage.png"
// import nosql from "../images/backend-runthrough.mp4"
import bookSearch from "../images/book-search-engine.png"
import pawPrint from "../images/pawprint.png"
// import mysql from "../images/mysql.mp4"
// import readMe from "../images/README Generator Demo.mp4"

function Portfolio() {
    const [index, setIndex] = useState(0);
    const projects = [
        {
            id: 1,
            title: 'Book search engine',
            imgsrc: bookSearch,
            desc: 'MERN Stack Refactor',
            webLink: '',
            gitLink: 'https://github.com/pcstoyle/book-search-engine.git',
        },
        {
            id: 2,
            title: 'PawPrint',
            imgsrc: pawPrint,
            desc: 'Employee facing boarding kennel management system',
            webLink: 'https://paw-print.onrender.com',
            gitLink: 'https://github.com/pcstoyle/paw-print.git',
        },
        {
            id: 3,
            title: 'Social Network API',
            imgsrc: "nosql",
            desc: 'NoSql - MongoDB',
            webLink: '',
            gitLink: 'https://github.com/pcstoyle/social-network-api.git',
        },
        {
            id: 4,
            title: 'Employee Tracker',
            imgsrc: "mysql",
            desc: 'MySQL',
            webLink: '',
            gitLink: 'https://github.com/pcstoyle/employee-tracker.git',
        },
        {
            id: 5,
            title: 'Readme Generator',
            imgsrc: "readMe",
            desc: 'Node.js',
            webLink: '',
            gitLink: 'https://github.com/pcstoyle/readme-generator.git',
        },
        {
            id: 6,
            title: 'Personal Portfolio',
            imgsrc: portfolio,
            desc: 'Portfolio built with React',
            webLink: '',
            gitLink: 'https://github.com/pcstoyle/react-portfolio.git',
        },
    ]
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
    return (
        <section>
            <h2> Portfolio </h2>
            {/* <div className="flex relative">
            { projects.map (({id, title, imgsrc}) => (
                <Card key={id} title={title} imgsrc={imgsrc}/>
            ) )}
          </div> */}
            <Carousel className="slider" data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}> 
                {projects.map(({ id, title, imgsrc, desc, webLink, gitLink }) => (
                    <Carousel.Item className="slides" title={title} key={id} imgsrc={imgsrc} desc={desc} webLink={webLink} gitLink={gitLink}>
                        <img className="carousel-img" src={imgsrc} />
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <Carousel.Caption id="caption-box">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                        <Button className="carousel-button" target="_blank" href={gitLink}>Github Repository</Button>
                        <Button className="carousel-button" target="_blank" href={webLink}>Live Website</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                ))};
                {/* <Carousel.Item>
                    <ExampleCarouselImage text="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </section>
    );
}

export default Portfolio;