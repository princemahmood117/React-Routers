import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {


// navigation one page backward
    const navigate = useNavigate();

    const handleGoBack = () => {

        // navigate(-1)
        navigate(`/posts`)

    }

    const post = useLoaderData();
    const {id,title,body} = post;
    return (
        <div>
            <h2>Post details about: {id}</h2>
            <p>Title {title}</p>
            <p><small>{body}</small></p>

            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;