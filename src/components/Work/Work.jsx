import './Work.css'


const projects = [
  {
    number: '01',
    title: 'AWESOMETODOS',
    tags: ['PRODUCTIVITY', 'UI DESIGN', 'NOTION'],
    link: 'https://awesometodoapp-4ufq.onrender.com/',
  },
  {
    number: '02',
    title: 'STUDY US GROUP PROJECT',
    tags: ['UI DESIGN', 'COLLABORATION', 'FIGMA'],
    link: 'https://www.figma.com/design/erRLniSnBK1B5VhmrPif7o/StudyUS?node-id=0-1&m=dev&t=4iYo0TGZIRDE5qQ1-1',

  },
  {
    number: '03',
    title: 'UI CHALLENGE',
    tags: ['CHALLENGE', 'FIGMA', 'UI DESIGN'],
    link: 'https://www.figma.com/design/kIM6kZLYb7LA0TkkuFX66U/Untitled?m=auto&t=5VdAp0uSZ0QOzh8p-6',
  },
]
 
const Work = () => {
  return (
    <section id="works" className="work">
 
      <h2 className="workHeading">Recent Projects.</h2>
 
      <div className="projectList">
        {projects.map((project) => (
          <div key={project.number} className="projectItem">
            <span className="projectNumber">{project.number}</span>
            <div className="projectInfo">
              <h3 className="projectTitle">{project.title}</h3>
              <div className="projectTags">
                {project.tags.map((tag) => (
                  <span key={tag} className="projectTag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
 
    </section>
  )
}
 
export default Work
