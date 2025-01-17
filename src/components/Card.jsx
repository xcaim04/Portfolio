import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Card = ({ title, imageUrl, technologies, url }) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-dark dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {title}
                </CardItem>

                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex flex-wrap"
                >
                    {technologies.map((tech, index) => (
                        <img
                            key={index}
                            src={tech.iconUrl}
                            alt={tech.name}
                            className="w-8 h-8 m-1"
                            title={tech.name}
                        />
                    ))}
                </CardItem>
                <a
                    href={url}
                    target="_blank"
                    className="min-w-56 md:w-80 rounded-lg overflow-hidden shadow-2xl m-4 cursor-pointer"
                >
                    <CardItem
                        translateZ="100"
                        rotateX={20}
                        rotateZ={-10}
                        className="w-full mt-4"
                    >
                        <img
                            src={imageUrl}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt={title}
                        />
                    </CardItem>

                    <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        let's go
                    </CardItem>
                </a>
            </CardBody>
        </CardContainer>
    );
};

export default Card;
