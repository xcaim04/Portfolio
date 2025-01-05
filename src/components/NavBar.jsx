function NavBar() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const styleLink =
        "text-primary hover:pointer hover:underline cursor-pointer font-semibold";

    return (
        <div className="flex flex-row justify-around items-center md:text-2xl sm:text-sm">
            <h1 className="border-2 border-dark rounded-md p-1 text-dark">
                Carlos Blanco
            </h1>
            <div className="flex flex-row gap-4">
                <a
                    onClick={() => scrollToSection("about")}
                    className={styleLink}
                >
                    About
                </a>
                <a
                    onClick={() => scrollToSection("projects")}
                    className={styleLink}
                >
                    Projects
                </a>
                <a
                    onClick={() => scrollToSection("contact")}
                    className={styleLink}
                >
                    Contact
                </a>
            </div>
        </div>
    );
}

export default NavBar;
