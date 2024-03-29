import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
          
            {/* <h2>This is home page</h2> */}

            {/* between header and footer, here will be <outlet> part which will be changed acording to changing of page [header and footer will not be changed] */}

            <Outlet></Outlet>



            <Footer></Footer>
        </div>
    );
};

export default Home;