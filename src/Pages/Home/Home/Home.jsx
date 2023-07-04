import About from "../About/About";
import AllToys from "../AllToys/AllToys";
import Categories from "../AllToys/Categories";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Categories></Categories>
            <AllToys></AllToys>
        </div>
    );
};

export default Home;