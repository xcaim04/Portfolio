import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const About = () => {
    return (
        <BackgroundBeamsWithCollision>
            <section className="flex flex-col gap-20 min-h-96">
                <div className="mt-60 flex flex-col items-center justify-center gap-10">
                    <h1 className="md:text-6xl text-center text-bluedark tracking-wide text-4xl font-writte">
                        {"< Hello World />"}
                    </h1>

                    <figure className="border-2 border-green rounded-full overflow-hidden w-60 h-60 bg-white cursor-pointer profile">
                        <img
                            src="/me.png"
                            alt="profile"
                            className="w-full h-full object-contain"
                        />
                    </figure>

                    <p className="text-2xl text-dark italic text-center">
                        - Creative and results-driven developer, passionate
                        about learning and helping others. -
                    </p>
                </div>
            </section>
        </BackgroundBeamsWithCollision>
    );
};

export default About;
