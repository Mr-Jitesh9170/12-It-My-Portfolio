import "./acedmics.scss";

const Acedmics = ({ schoolName, course, branch }) => {
    return (
        <div className="Acedmics-details">
            <div className="verticle-bars">
                <div className="circle"></div>
                <div className="bars"></div>
                <div className="circle"></div>
            </div>
            <div className="educational-data">
                <h4>{schoolName}</h4>
                <p><strong>Course:- </strong>{course}</p>
                <p><strong>Branch:- </strong>{branch}</p>
            </div>
        </div>
    )
}

export default Acedmics;