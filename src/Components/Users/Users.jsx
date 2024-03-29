import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    // this is the way of loading fetched data
    const users = useLoaderData();
    return (
        <div>
            <h2>Our Users {users.length}</h2>
            <ul>
                <li>user 1</li>
                <li>user 2</li>
                <li>user 3</li>
                <li>user 4</li>
                <li>user 5</li>
            </ul>

            <div className="users">
                {
                   users.map(user => <User user = {user} key = {user.id}></User>)
                }
               
            
            </div>
        </div>
    );
};

export default Users;