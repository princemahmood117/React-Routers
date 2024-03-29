import { Link } from 'react-router-dom';
import  './Header.css';

const Header = () => {
    return (
        <div>
            
            
{/* <Link></Link> is used for not to reload the page after clicking to any page */}

            <nav>
                <span>My navigation website </span>
                
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
               
            </nav>
        </div>
    );
};

export default Header;