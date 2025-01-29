import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Info from "../components/Info";
import Projects from "../components/Projects";
import MoreInfo from "../components/MoreInfo";
import { Helmet } from "react-helmet-async";

function Home() {
    return (
        <div className="p-3">
            <Helmet>
                <title>Carlos Javier Blanco Moreira</title>
                <meta
                    name="description"
                    content="Welcome to my portfolio. Here you can find information about my projects and skills."
                />
                <meta
                    name="keywords"
                    content="portfolio, developer, projects, skills, web, javascript, react, tailwindcss, python, fastapi, carlos javier, carlos blanco, xcaimdev, xcaim04, carlos javier blanco moreira"
                />
                <meta
                    property="og:title"
                    content="Carlos Javier Blanco Moreira"
                />
                <meta
                    property="og:description"
                    content="Welcome to my portfolio. Here you can find information about my projects and skills."
                />
            </Helmet>
            <NavBar />
            <section className="w-full h-fit flex flex-col justify-center items-center">
                <Header />
                <Info />
                <Projects />
                <MoreInfo />
            </section>
        </div>
    );
}

export default Home;
