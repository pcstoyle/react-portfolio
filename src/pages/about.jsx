import self from '../images/Self.jpeg'
// import '../styles/About.css';

function About() {
  return (
    <section>
      <h2> About Me </h2>
      <div className="aboutMe">
        <img src={self} alt="Photo of Paige" />
      </div>
      <p>
        Hi there! I'm excited to meet you! My name is Paige. For over a decade now, I've been in Health and Wellnss, Healthcare and Fitness. I love my work with people and in this industry, however, it's certainly started to take a toll on my body. I decided it's time for a career change that would allow for more consistant hours, reliable work and something that provided a new challege, which called for a skillset update - enter coding bootcamp!
        <br />
        <br />
        By the end of this bootcamp, I hope to be a competitor in the developing marketplace and land with a company that will allow me to continue to learn and grow with hands on experience. I learn quickly, take feedback and
        apply it immediately, and am excited to hit the ground running.
        <br /> 
        <br />
        In my free time, I enjoy spending time with my dog, Luna; I'm a foodie and love to try new restaraunts; and I love to travel and explore new places.
        <br />
        <br />
        Please take a look at my work and let me know how you feel! I'm very much looking forward to connecting with
        you.
      </p>
    </section>
  );
}

export default About;