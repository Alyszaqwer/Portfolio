import './About.css';

const skills =[
    'UX DESIGNER', 'UI DESIGN', 'WIREFRAMING', 'PROTOTYPING',
     'FIGMA', 'WORK ETIQUTTE', 'GRAPHIC DESIGNER', 'DRAWING'
]



const About = () => {
    return (
        <sectiom id="about" className="about">
           <div className="aboutLeft">
            <p className="aboutLabel">About Me</p>
            <h2 className="aboutHeading">
                Designing <br/>
                with purpose <br/>
                and passion.
            </h2>
        </div>


        <div className="aboutRight">
            <p className="aboutBio">  Hi! I'm Alyssa, a UX Designer with a deep love for arts and crafts interfaces
          that don't just look good — they feel right. I believe great design is invisible,
           it guides, delights, and empowers without getting in the way.
           </p>

           <p className="aboutBio"> I'm someone who's always eager to learn whether it's picking up a new skill,
          diving into an interesting topic, or just figuring out how things work. I love
          the feeling of growth that comes with learning something new, and I'm excited
          to see where that curiosity takes me.
          </p>

          <p className="aboutBio">I'm currently studying information technology at Western Institute of Technology,
          exploring my college life, and finding unexpected inspiration in everyday life.
          </p>

          <div className="skillGrid">
            {skills.map((skill) => (
                <div key={skill} className="skillTag">
                    {skill}
                    </div>
                   ))
                  }
          </div>
        </div>
  </sectiom>
        
    )
}
export default About