import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import ProjectCard from './ProjectCard';


const Projects = () => {
    const { loading, data, error } = useQuery(GET_PROJECTS);

    if (loading) return <Spinner />
    if (error) return <p>Somethin went wrong!</p>

    return (
        <>
            {
                data.projects.length > 0
                    ? (<div className="row">
                        {data.projects.map(project => <ProjectCard key={project.id} project={project} />)}
                    </div>)
                    : <p>There is no projects yet.</p>
            }
        </>
    )
}

export default Projects;