import About from "../About/About";
import AllToys from "../AllToys/AllToys";
import Categories from "../AllToys/Categories";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Gallery></Gallery>
            <AllToys></AllToys>
        </div>
    );
};

export default Home;