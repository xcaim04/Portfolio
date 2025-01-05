import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Info from "../components/Info";
import Projects from "../components/Projects";

function Home() {
    return (
        <div className="p-3">
            <NavBar />
            <section className="w-full h-fit flex flex-col justify-center items-center gap-20">
                <Header />
                <Info />
                <Projects />
            </section>
        </div>
    );
}

export default Home;
