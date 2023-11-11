import { useParams } from 'react-router-dom';
import { GET_PROJECT } from '../queries/projectQueries';
import Spinner from '../components/Spinner';

const Project = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT,
        { variables: { id })

    if(loading) return <Spinner />
    if(loading) return <p>Something went wrong</p>

});

return (
    <>
        GOOD
    </>
)
}

export default Project;