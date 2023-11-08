import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';


const ClientRow = ({ client }) => {

    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },
        refetchQueries: [{query: GET_CLIENTS}]
    });

    return (
        <tr >
            <th>{client.name}</th>
            <th>{client.email}</th>
            <th>{client.phone}</th>
            <th>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={deleteClient}
                >
                    <FaTrash />
                </button>
            </th>
        </tr>
    )
}

export default ClientRow;