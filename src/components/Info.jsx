function Info() {
    const title = "text-bluedark text-xl font-bold";
    const img = "w-10";
    const titleContainer =
        "flex flex-col items-center justify-center gap-2 h-full";

    return (
        <section className="flex flex-col w-screen h-fit justify-center items-center">
            <div className="bg-primary w-full h-96 p-8 text-center text-white flex flex-col justify-center items-center gap-5">
                <h1 className="text-3xl" id="about">
                    {"Hello, I'm Carlos Blanco, nice to meet you."}
                </h1>
                <p className="w-1/2 font-bold text-xl text-center leading-9">
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
            <div className="w-1/2 bg-white border rounded-md p-1 relative bottom-12  flex flex-1 justify-between">
                <div className={titleContainer}>
                    <h2 className={title}>Frontend Developer</h2>
                    <img
                        src="../../public/icons/frontend.svg"
                        className={img}
                    />
                    <p className="w-2/3 text-center">
                        JavaScript, TypeScript, React, TailwindCSS, Bootsrap,
                        Astro, BEM
                    </p>
                </div>
                <div className={titleContainer}>
                    <h2 className={title}>Competitive Programmer</h2>
                    <img src="../../public/icons/cp.svg" className={img} />
                    <p className="w-2/3 text-center">
                        C++, Java, Python, Algorithms, Data Structures,
                        <strong>More +150 problems solved.</strong>
                    </p>
                </div>
                <div className={titleContainer}>
                    <h2 className={title}>Backend Developer</h2>
                    <img src="../../public/icons/backend.svg" className={img} />
                    <p className="w-2/3 text-center">
                        Terminal, Git, Linux, MySQL, MongoDB, Python, FastAPI,
                        NodeJS, Express, TypeScript.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Info;
