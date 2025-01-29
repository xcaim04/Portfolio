import React from "react";

function Info() {
    const title = "text-bluedark text-xl font-bold text-center";
    const img = "w-10";
    const titleContainer = "flex flex-col items-center justify-center gap-2";

    return (
        <section className="flex flex-col w-full h-fit justify-center items-center sm:text-sm">
            <div className="bg-primary w-screen h-auto lg:h-96 p-8 text-center text-white flex flex-col justify-center items-center gap-5 mb-5">
                <h2 className="text-sm md:text-3xl font-bold" id="about">
                    {"Hello, I'm Carlos Blanco, nice to meet you."}
                </h2>
                <p className="text-sm w-11/12 lg:w-1/2 font-bold md:text-xl text-center leading-6 md:leading-9">
                    I am a self-taught web developer and Computer Engineering
                    student with a robust background in advanced technologies. I
                    have extensive experience with JavaScript, TypeScript,
                    React, and Python, including various Python frameworks. My
                    skills also encompass design technologies such as Tailwind
                    CSS, Bootstrap, and Astro, as well as low-level tools like
                    C++. Additionally, I excel in competitive programming,
                    having won several medals and achieved a bronze in the
                    prestigious ICPC competition.
                </p>
            </div>
            <div
                id="information"
                className="w-11/12 md:w-2/3 lg:w-1/2 bg-white border rounded-md p-5 grid grid-cols-1 lg:grid-cols-3 gap-5 relative bottom-12"
            >
                <div className={titleContainer}>
                    <h2 className={title}>Frontend Developer</h2>
                    <figure>
                        <img
                            src="/icons/frontend.svg"
                            className={img}
                            alt="Frontend Developer"
                        />
                    </figure>
                    <p className="w-full text-center">
                        TypeScript, React, TailwindCSS, Bootstrap, Astro, BEM
                    </p>
                </div>
                <div className={titleContainer}>
                    <h2 className={title}>Competitive Programmer</h2>
                    <figure>
                        <img
                            src="/icons/cp.svg"
                            className={img}
                            alt="Competitive Programmer"
                        />
                    </figure>
                    <p className="w-full text-center">
                        C++, Java, Python, Algorithms, Data Structures,{" "}
                        <strong>More +150 problems solved.</strong>
                    </p>
                </div>
                <div className={titleContainer}>
                    <h2 className={title}>Backend Developer</h2>
                    <figure>
                        <img
                            src="/icons/backend.svg"
                            className={img}
                            alt="Backend Developer"
                        />
                    </figure>
                    <p className="w-full text-center">
                        Terminal, Git, Linux, MySQL, MongoDB, Python, FastAPI,
                        NodeJS, Express, TypeScript.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Info;
