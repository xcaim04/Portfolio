import React from "react";

const Card = ({ title, imageUrl, technologies, url }) => {
    return (
        <a
            href={url}
            target="_blank"
            className="min-w-56 md:w-80 rounded-lg overflow-hidden shadow-2xl m-4 cursor-pointer"
        >
            <img className="w-full h-80" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="flex flex-wrap">
                    {technologies.map((tech, index) => (
                        <img
                            key={index}
                            src={tech.iconUrl}
                            alt={tech.name}
                            className="w-8 h-8 m-1"
                            title={tech.name}
                        />
                    ))}
                </div>
            </div>
        </a>
    );
};

export default Card;
