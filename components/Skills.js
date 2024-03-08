"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const skills = [
    { id: 1, name: "html", img: "/assets/technologyIcons/html-min.webp" },
    { id: 2, name: "javascript", img: "/assets/technologyIcons/js-min.webp" },
    { id: 3, name: "sass", img: "/assets/technologyIcons/sass-min.webp" },
    { id: 4, name: "React", img: "/assets/technologyIcons/react-min.webp" },
    { id: 5, name: "Redux", img: "/assets/technologyIcons/redux-min.webp" },
    { id: 6, name: "bootstrap", img: "/assets/technologyIcons/bootstrap-min.webp" },
    { id: 7, name: "mongodb", img: "/assets/technologyIcons/mongodb-min.webp" },
    { id: 8, name: "SEO", img: "/assets/technologyIcons/seo-min.webp" },
    { id: 9, name: "Git", img: "/assets/technologyIcons/git-min.webp" },
    { id: 10, name: "Tailwind", img: "/assets/technologyIcons/Tailwind.webp" },
    { id: 11, name: "Slack", img: "/assets/technologyIcons/slack-min.webp" },
    { id: 12, name: "NodeJs", img: "/assets/technologyIcons/nodejs-min.webp" },
];

const Skills = () => {
    const { dark } = useContext(TunisContext);
    return (
        <SectionContainer id="skills">
            <div className="w-full">
                {/* Section Title Starts */}
                <SectionTitle
                    /* bigTitle={"resume"}*/
                    colorTitle={"skills"}
                    normalTitle={"my"}
                />
                {/* Skills Starts */}
                <div className="flex w-full flex-wrap">
                    {skills.map((skill) => (
                        <div
                            className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16"
                            key={skill.id}
                        >
                            <div
                                className={`c100 p${skill.value} float-none mx-auto ${dark ? "bg-black-3" : "bg-light-grey after:!bg-white"
                                    }`}
                            >
                                <span className={dark ? "" : "!text-black-6"}>
                                    {skill.value}
                                    <img className="iconeSkills" src={skill.img} alt="Skill Image" />
                                </span>

                            </div>
                            <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                                {skill.name}
                            </h6>
                        </div>
                    ))}
                </div>
                {/* Skills Ends */}
                {/* Resume Ends */}
            </div>

        </SectionContainer>
    );
};
export default Skills;
