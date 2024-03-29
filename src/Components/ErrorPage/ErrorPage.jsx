import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const backError = useNavigate();

    const goBackFromError = () => {

        backError('/') // this will take back to home page

    }

    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h2>{error.status} </h2>
             <p>oopss!! page not found dear</p>

             <button onClick={goBackFromError}>Go to home</button>
        </div>
    );
};

export default ErrorPage;