import Home from "./HomeLayout/Home/Home";
import Sidebar from "./HomeLayout/Sidebar/Sidebar";
import ThreadBar from "./HomeLayout/ThreadBar/ThreadBar";
import './homeLayout.scss'

const HomeLayout = () => {
    return (

        <div className="container-fluid home__layout">

            <div className="row">
                <div className="col-md-3 p-0">
                    <Sidebar/>
                </div>

                <div className="col-md-6 p-0">
                    <Home/>
                </div>

                <div className="col-md-3 p-0">
                    <ThreadBar/>
                </div>

            </div>

        </div>

    );
}

export default HomeLayout;