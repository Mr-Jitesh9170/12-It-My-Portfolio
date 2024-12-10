import "./experience.scss"
const CompanyData = ({ Data }) => {
    return (
        <div className="company-names">
            <div className="company-heading">
                <strong>Company Name - </strong>
                {Data.CompanyName}
            </div>
            <div className="company-heading">
                <strong>Duration - </strong>
                {Data.Duration}
            </div>
            <div className="company-heading">
                <strong>Role As - </strong>
                {Data.RoleAs}
            </div>
            <div className="company-heading">
                <strong>Working On - </strong>
                {Data.WorkingOn}
            </div>
            <div className="company-heading">
                <strong>Skills - </strong>
                {Data.SkillsUsed.map(($) => {
                    return $
                })}
            </div>
            <div className="company-heading">
                <strong>Live Project - </strong>
                <a href={Data.LiveProzects}>Live</a>
            </div>
        </div>
    )
}

export default CompanyData;