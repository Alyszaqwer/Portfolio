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
                still learning <br/>
                always growing <br/>
                forever creating.
            </h2>
        </div>


        <div className="aboutRight">
            <p className="aboutBio">   Hi, I'm Alyssa. I'm currently a college student, and I love doing things that make me feel like I'm expressing myself. To express my thoughts, I do drawing and arts and crafts.
           </p>

           <p className="aboutBio"> Always learning, still finding myself, and creating something new along the way.
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
