import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {


    // for applying style
    const userStyle = {
        border : '2px solid yellow',
        padding : '10px',
        borderRadius : '10px',
        marginBottom : '5px'

    }


// using button

    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/post/${id}`);

    }

    const {id,title,body} = post;
    return (
        <div style={userStyle}>
            <h4>Post of ID : {id}</h4>
            <h2>Title : {title}</h2>
            {/* <p>{body}</p> */}

            {/* <Link to={`/post/${id}`}>Post Detail</Link> */}

            <button onClick={handleDetail}>click to see details</button>
        </div>
    );
};

export default Post;