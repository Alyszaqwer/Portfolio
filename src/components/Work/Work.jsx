import './Work.css'


const projects = [
  {
    number: '01',
    title: 'AWESOMETODOS',
    tags: ['PRODUCTIVITY', 'UI DESIGN', 'NOTION'],
  },
  {
    number: '02',
    title: 'STUDY US GROUP PROJECT',
    tags: ['UI DESIGN', 'COLLABORATION', 'FIGMA'],
  },
  {
    number: '03',
    title: 'UI CHALLENGE',
    tags: ['CHALLENGE', 'FIGMA', 'UI DESIGN'],
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