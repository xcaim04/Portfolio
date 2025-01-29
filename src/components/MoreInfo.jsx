import React from "react";

const MoreInfo = () => {
    const listStyle = "flex gap-4 items-center text-xl";
    const imgStyle =
        "h-16 w-16 rounded-full object-cover transition-transform duration-300 hover:scale-110";
    const containerStyle =
        "bg-dark h-fit w-screen text-white flex justify-around flex-wrap sm:justify-center sm:items-center p-9";
    const sectionStyle =
        "flex flex-col gap-5 justify-start w-full md:w-5/12 lg:w-4/12";

    return (
        <div className={containerStyle}>
            <div className={sectionStyle}>
                <h2 className="text-2xl font-bold border-b-2 pb-2">
                    Education
                </h2>
                <ul className="m-5 flex flex-col gap-6 w-full">
                    <li className={listStyle}>
                        <img src="icons/PR.png" className={imgStyle} alt="PR" />
                        <h3 className="transition-colors duration-300 hover:text-gray-400">
                            Computer Engineer
                        </h3>
                    </li>

                    <li className={listStyle}>
                        <img
                            src="icons/UH.jpeg"
                            className={imgStyle}
                            alt="UH"
                        />
                        <h3 className="transition-colors duration-300 hover:text-gray-400">
                            Fundamentals of Computer Science
                        </h3>
                    </li>

                    <li className={listStyle}>
                        <img
                            src="icons/freecodecamp.png"
                            className={imgStyle}
                            alt="freeCodeCamp"
                        />
                        <h3 className="transition-colors duration-300 hover:text-gray-400">
                            Certification JS, Data Structure and Algorithms
                        </h3>
                    </li>
                </ul>
            </div>

            <div className={sectionStyle}>
                <h2 className="text-2xl font-bold border-b-2 pb-2">
                    Experiences
                </h2>
                <ul className="m-5 flex flex-col gap-6 w-full">
                    <li className={listStyle}>
                        <img
                            src="icons/Konecta.png"
                            className={`${imgStyle} border border-gray-50`}
                            alt="Konecta"
                        />
                        <h3 className="transition-colors duration-300 hover:text-gray-400">
                            Konecta BTO
                        </h3>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MoreInfo;
