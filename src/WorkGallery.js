import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./WorkGallery.css";
import img1 from "./assets/img-1.JPG";

// Universal YouTube link handler
const getEmbedUrl = (url) => {
  if (!url) return "";
  const videoIdMatch = url.match(
    /(?:youtube\.com\/(?:.*v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : "";
};

const works = [
  {
    id: 1,
    title: "Takalani Sesame",
    image: require("./assets/profile.PNG"),
    video:
      "https://sesameworkshop.org/our-work/shows/south-africa-takalani-sesame/", // sample playable
    description: "A creative exploration of storytelling through visuals.",
  },
  {
    id: 2,
    title: "Takalani Sesame",
    image: require("./assets/profile.PNG"),
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // playable
    description: "Modern design meets motion in this stunning concept.",
  },
  {
    id: 3,
    title: "Takalani Sesame",
    image: require("./assets/img5.JPG"),
    video: "https://takalanisesame.org.za/", // example Sesame video
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 4,
    title: "Ahlan Simsim",
    image: require("./assets/img5.JPG"),
    video: "https://ahlansimsim.org/", // example Sesame video
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 5,
    title: "Ahlan Simsim",
    image: require("./assets/img5.JPG"),
    video: "https://www.youtube.com/watch?v=ScHjQCUzgoA&t=193s", // example Sesame video
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 6,
    title: "Sesame Street-Lin Manuel",
    image: require("./assets/img8.JPG"),
    video: "https://www.youtube.com/watch?v=7hTWuN0WCu4", // example Sesame video
    description: "A collaboration that blends art, color, and animation.",
  },

  {
    id: 7,
    title: "Sesame Street-Lin (G song)",
    image: require("./assets/img7.JPG"),
    video: "https://www.youtube.com/watch?v=-HZwkdx29gg", // example Sesame video
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 8,
    title: "Sesame Street-WyClef ",
    image: require("./assets/img7.JPG"),
    video: "https://www.youtube.com/watch?v=NQHijbqEB_E", // example Sesame video
    description: "A collaboration that blends art, color, and animation.",
  },

  {
    id: 9,
    title: "Sesame Street-Jimmy Falon",
    image: require("./assets/img7.JPG"),
    video: "https://www.youtube.com/watch?v=brIscS3xc9s", // example Sesame video
    description: "A collaboration that blends art, color, and animation.",
  },

  {
    id: 10,
    title: "William Jackson Harper",
    image: require("./assets/img7.JPG"),
    video: "https://www.youtube.com/watch?v=9JZnni2b_6I", // example Sesame video
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 11,
    title: "Ghostwriter",
    image: require("./assets/img-2.jpg"),
    video: "https://sesameworkshop.org/our-work/shows/ghostwriter/", // example Sesame video
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 12,
    title: "DIGITAL-Esme & Roy ",
    image: require("./assets/img-2.jpg"),
    video: "https://sesameworkshop.org/our-work/shows/esme-roy/", // example Sesame video
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 13,
    title: "Electric Company ",
    image: require("./assets/img-2.jpg"),
    video: "https://www.youtube.com/watch?v=MJXRdu_h778", // example Sesame video
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 14,
    title: "Electric Company ",
    image: require("./assets/img-2.jpg"),
    video:
      "https://www.youtube.com/watch?v=MJXRdu_h778&list=PLLNdDxnu7Js06QbUPV-2TUv0JWoGoCpyh", // example Sesame video
    description: "A collaboration that blends art, color, and animation.",
  },

  // {
  //   id: 6,
  //   title: "Ahlan Simsim",
  //   image: require("./assets/img7.JPG"),
  //   video: "https://youtu.be/ScHjQCUzgoA?si=s_HcpvJP0aEWt_dV&t=193 ", // example Sesame video
  //   description: "A collaboration that blends art, color, and animation.",
  // },
];

const WorkGallery = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/work/${id}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  return (
    <motion.section
      className="work-gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="gallery-grid">
        {works.map((work) => (
          <div
            key={work.id}
            className="gallery-item"
            onClick={() => handleClick(work.id)}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={work.image}
              alt={work.title}
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <h3 className="overlay-title">{work.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkGallery;
