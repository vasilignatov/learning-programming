const ProjectCard = ({project}) => {
    console.log("CARD");
    console.log(project);
    return (
        <div className="col-md-4">
            <div className="card md-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{project.name}</h5>
                        <a className="btn btn-light" href={`/projects/${project.id}`}
                        >
                            View
                        </a>
                    </div>
                    <p className="small">
                        Status: <stromg>{project.status}</stromg>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;