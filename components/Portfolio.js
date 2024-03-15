"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    id: 1,
    title: "Booki",
    type: "img",
    src: "",
    img: "assets/img/projects/project-1.webp",
    project: "Website",
    client: "Agence de voyage Booki",
    langages: "HTML, CSS",
    previewLink: "https://github.com/bahmanedadi/Projet3_Booki",
    description:"Il s'agit d'un site web qui offre la possibilité de réserver un hôtel tout en permettant aux utilisateurs de découvrir les différentes activités disponibles dans la région",
  },
  {
    id: 2,
    title: "OhMyFood",
    type: "img",
    src: "",
    img: "assets/img/projects/project-2.webp",
    project: "Website",
    client: "Envato",
    langages: "HTML, Sass",
    previewLink: "https://bahmanedadi.github.io/Projet3_OhMyfood/",
    description:"Il s'agit d'un site web dédié aux restaurants gastronomiques, où les clients ont la possibilité de composer leur propre menu avant leur arrivée.",
  },
  {
    id: 3,
    title: "Portfolio Architect",
    type: "img",
    src: "",
    img: "assets/img/projects/project-3.webp",
    project: "Website",
    client: "Sophie Bluel",
    langages: "HTML, CSS, Javascript",
    previewLink: "https://github.com/bahmanedadi/Creez_page_web_dynamique",
    description:"Il s'agit d'un site personnel conçu spécifiquement pour une architecte d'intérieur, lui offrant une plateforme pour présenter ses réalisations de manière cohérente et professionnelle.",
  },
  {
    id: 4,
    title: "Kasa",
    type: "img",
    src: "",
    img: "assets/img/projects/project-4.png",
    project: "Web site",
    client: "Agence de location immobilière Kasa",
    langages: "Html,Sass,React",
    previewLink:" https://stellular-scone-183746.netlify.app/",
    description:"Kasa est une application dédiée à la location d'appartements entre particuliers en France",
  },
  {
    id: 5,
    title: "Nina Carducci",
    type: "img",
    src: "",
    img: "assets/img/projects/project-5.webp",
    project: "Website",
    client: "Nina Carducci",
    langages: "HTML, CSS,Javascript,SEO",
    previewLink: "https://bahmanedadi.github.io/ninacarducci/",
    description:"Site web pour Nina Carducci, photographe professionnelle, dans le but de présenter ses réalisations et ses services.",
  },
  {
    id: 6,
    title: "Argent Bank",
    type: "img",
    src: "",
    img: "assets/img/projects/project-6.webp",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "https://github.com/bahmanedadi/Projet11_ArgentBank",
    description:"Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire. J'ai travaillé sur la mise en place du tableau de bord et le système d'authentification des utilisateurs ainsi que sur la conception de nouvelles routes API pour la future gestion des comptes",
  },
   
];

const Portfolio = () => {
  const { popupToggle } = useContext(TunisContext);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"works"}
          colorTitle={"portfolio"}
          normalTitle={"my"}
        />
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.title}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
