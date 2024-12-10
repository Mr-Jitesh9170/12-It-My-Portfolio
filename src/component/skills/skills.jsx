import "./skills.scss"
const AllSkills = ({ MernStack, Value, technoName }) => {
    return (
        < div className="frontend-skills">
            <h3 className="skills-box-1">{technoName}</h3>
            <div className="skills-box-2">
                {MernStack.map((element, i) => {
                    return (
                        <>
                            <div className={`skills-name-img ${Value ? "yes" : null}`}>
                                <li className="img-skills">
                                    <img src={element.img} alt="" />
                                </li>
                                <li>{element.language}</li>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default AllSkills;