import { Link } from "react-router-dom";

const User = ({user}) => {

    const {id,name,email,phone} = user;


    const userStyle = {
        border : '2px solid yellow',
        padding : '10px',
        borderRadius : '10px',
        marginBottom : '10px'

    }
    
    return (
        <div style={userStyle}>
            <h2>Name : {name}</h2>
            <p>email : {email}</p>
            <p>phone : {phone}</p>

            <Link to={`/user/${id}`}><button>Show details</button></Link>
        </div>
    );
};

export default User;
