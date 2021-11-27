import React from "react";
import CommonHomeAbout from "./CommonHomeAbout";
import web from "./image/rocket2.png";
const Home = () => {
    return (
        <>
            <CommonHomeAbout
                image={web}
                visit="Get Started"
                head="Grow Your Business With"
            ></CommonHomeAbout>
        </>
    );
};
export default Home;
