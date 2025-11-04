import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import WorkGallery from "./WorkGallery";
import "./WorkGallery.css";
import "./WorkDetailPage.css";

const works = [
  {
    id: 1,
    title: "Takalani Sesame",
    image: "/images/p1.jpg",
    video:
      "https://sesameworkshop.org/our-work/shows/south-africa-takalani-sesame/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit.",
    className: "sesame-theme",
  },
  {
    id: 2,
    title: "Takalani Sesame",
    image: "/images/p2.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin",
    className: "sesame-theme",
  },
  {
    id: 3,
    title: "Takalani Sesame",
    image: "/images/p3.jpg",
    video: "https://takalanisesame.org.za/",
    description: "A collaboration that blends art, color, and animation.",
    className: "sesame-theme",
  },
  {
    id: 4,
    title: "Ahlan Simsim",
    image: "/images/p1.jpg",
    video: "https://ahlansimsim.org/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
    className: "sesame-theme",
  },
  {
    id: 5,
    title: "Ahlan Simsim",
    image: "/images/p2.jpg",
    video: "https://www.youtube.com/watch?v=ScHjQCUzgoA&t=193s",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
    className: "sesame-theme",
  },
  {
    id: 6,
    title: "Sesame Street-Lin Manuel",
    image: "/images/p2.jpg",
    video: "https://www.youtube.com/watch?v=7hTWuN0WCu4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
    className: "sesame-theme",
  },
  {
    id: 7,
    title: "Sesame Street-Lin (G song)",
    image: "/images/p2.jpg",
    video: "https://www.youtube.com/watch?v=-HZwkdx29gg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
    className: "sesame-theme",
  },

  {
    id: 8,
    title: "Sesame Street-WyClef ",
    image: "/images/p2.jpg",
    video: "https://www.youtube.com/watch?v=NQHijbqEB_E",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
    className: "sesame-theme",
  },
  {
    id: 9,
    title: "Sesame Street-Jimmy Falon ",
    image: "/images/p2.jpg",
    video: "https://www.youtube.com/watch?v=brIscS3xc9s",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
    className: "sesame-theme",
  },
  {
    id: 10,
    title: "William Jackson Harper",
    image: "/images/p2.jpg",
    video: "https://www.youtube.com/watch?v=9JZnni2b_6I",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
    className: "sesame-theme",
  },
  {
    id: 11,
    title: "Ghostwriter",
    image: "/images/p2.jpg",
    video: "https://sesameworkshop.org/our-work/shows/ghostwriter/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
    className: "sesame-theme",
  },
  {
    id: 12,
    title: "DIGITAL-Esme & Roy",
    image: "/images/p2.jpg",
    video: "https://sesameworkshop.org/our-work/shows/esme-roy/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
    className: "sesame-theme",
  },
  {
    id: 13,
    title: "Electric Company ",
    image: "/images/p2.jpg",
    video: "https://www.youtube.com/watch?v=MJXRdu_h778",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
    className: "sesame-theme",
  },
  {
    id: 14,
    title: "Electric Company ",
    image: "/images/p2.jpg",
    video:
      "https://www.youtube.com/watch?v=MJXRdu_h778&list=PLLNdDxnu7Js06QbUPV-2TUv0JWoGoCpyh", //
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
    className: "sesame-theme",
  },
];

const embedURL = (url) => {
  const match = url.match(/v=([^&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const WorkDetailPage = () => {
  const { id } = useParams();
  const currentIndex = works.findIndex((item) => item.id === Number(id));
  const work = works[currentIndex];

  const prevId = works[currentIndex - 1]?.id;
  const nextId = works[currentIndex + 1]?.id;
  return (
    <motion.div
      key={id} // ✅ force remount when URL id changes
      className="work-detail-page"
      // ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Navigation Arrows */}
      <div className="nav-icons">
        {prevId && (
          <Link to={`/work/${prevId}`} className="arrow left">
            <FaArrowLeft />
          </Link>
        )}
        {nextId && (
          <Link to={`/work/${nextId}`} className="arrow right">
            <FaArrowRight />
          </Link>
        )}
      </div>

      {/* Content Section */}
      <motion.div
        className="detail-content"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={`detail-content ${work.className || ""}`}>
          <h2 className="detail-title">{work.title}</h2>
          <p className="detail-description">{work.description}</p>
        </div>
      </motion.div>

      {/* Parallax Video */}
      <motion.div
        className="video-container"
        // style={{ y: yVideo }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          src={embedURL(work.video)}
          title={work.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Parallax Gallery */}
      <motion.div
        className="gallery-wrapper"
        // style={{ y: yGallery, opacity: opacityGallery }}
      >
        <WorkGallery />
        <Link to="/work" className="back-link">
          ← Back to Gallery
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default WorkDetailPage;
