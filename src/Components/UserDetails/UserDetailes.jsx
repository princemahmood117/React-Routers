import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetailes = () => {

    const navigate = useNavigate();


    const goBackFromUserDetails = () => {

        navigate(-1);

    }
   
    const user = useLoaderData();
    const {name,email,website} = user;
    return (
        <div>
            <h2>Details about user : {name} </h2>
            <p>{email}</p>
            <p>Visit :  {website}</p>

            <button onClick={goBackFromUserDetails}>Go back</button>
            
          
        </div>
    );
};

export default UserDetailes;