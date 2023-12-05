import Card from "../components/Card";
import demo from "../images/01-html-css-git-homework-demo.png"

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            imgsrc: demo,
            desc: '',
            webLink: '',
            gitLink: '',
        },
        {
            id: 2,
            title: 'Project 2',
            imgsrc: '',
            desc: '',
            webLink: '',
            gitLink: '',
        },
        {
            id: 3,
            title: 'Project 3',
            imgsrc: '',
            desc: '',
            webLink: '',
            gitLink: '',
        },
        {
            id: 4,
            title: 'Project 4',
            imgsrc: '',
            desc: '',
            webLink: '',
            gitLink: '',
        },
        {
            id: 5,
            title: 'Project 5',
            imgsrc: '',
            desc: '',
            webLink: '',
            gitLink: '',
        },
        {
            id: 6,
            title: 'Project 6',
            imgsrc: '',
            desc: '',
            webLink: '',
            gitLink: '',
        },
    ]
    return (
      <section>
          <h2> Portfolio </h2>
          <div>
            { projects.map (({id, title, imgsrc}) => (
                <Card key={id} title={title} imgsrc={imgsrc}/>
            ) )}
          </div>
      </section>
    );
  }
  
  export default Portfolio;