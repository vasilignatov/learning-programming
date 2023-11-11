import { FaIdBadge } from 'react-icons/fa';

const ClientInfo = ({ client }) => {

    return (
        <>
            <h5>Client Information</h5>
            <ul className="list-group">
                <li className="list-group-item">
                    <FaIdBadge className="icon" />{client.name}
                </li>
                <li className="list-group-item">
                    <FaIdBadge className="icon" />{client.email}
                </li>
                <li className="list-group-item">
                    <FaIdBadge className="icon" />{client.phone}
                </li>
            </ul>
        </>
    )
}

export default ClientInfo;