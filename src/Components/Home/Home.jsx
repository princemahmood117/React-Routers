import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' ?
                <p>Loading....</p> :
                <Outlet></Outlet>
            }


            {/* between header and footer, here will be <outlet> part which will be changed acording to changing of page [header and footer will not be changed] */}

             {/* <Outlet></Outlet> */}



            <Footer></Footer>
        </div>
    );
};

export default Home;