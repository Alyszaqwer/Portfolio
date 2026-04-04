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
            <p className="aboutBio">  Hi! I'm Alyssa, a UX Designer who loves crafting things that are easy to use and nice
                to look at. Creativity and imagination have always been a big part of who iam, and I bring that same care into
                my designs. I want people to enjoy what they are using without any confusion or frustration.
           </p>

           <p className="aboutBio"> Im always hungry to learn. New skills, new ideas, new ways of thinking. Im here for all of 
               it. I love the feeling of getting better at something, and that excitement keeps me going every single day.
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
