import "./projectWork.scss";

const ProjectsWork = ({ projectImage, proTechno, projectName, projectLink, projectDetails }) => {
    return (
        < div className="project-work-container" >
            <div className="project-image">
                <img src={projectImage} alt="" />
            </div>
            <div className="project-name">
                <strong>{projectName}</strong>
                <a href={projectLink}>Live</a>
            </div>
            <div className="project-techno">
                {proTechno.map((skill) => {
                    return <li>{skill}</li>
                })}
            </div>
        </div >
    )
}


export default ProjectsWork;