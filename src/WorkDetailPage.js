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
    title: "Project One",
    image: "/images/p1.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit.",
  },
  {
    id: 2,
    title: "Project Two",
    image: "/images/p2.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin",
  },
  {
    id: 3,
    title: "Project Three",
    image: "/images/p3.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 1,
    title: "Project One",
    image: "/images/p1.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
  },
  {
    id: 2,
    title: "Project Two",
    image: "/images/p2.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
  },
  {
    id: 3,
    title: "Project Three",
    image: "/images/p3.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
  },
  {
    id: 4,
    title: "Project Four",
    image: "/images/p3.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta tellus at urna consequat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel sollicitudin leo, nec ultricies elit. Fusce quam orci, condimentum a pretium ac, fringilla a ante. Proin in sapien mi. Nam porta velit posuere sollicitudin lacinia.",
  },
  {
    id: 5,
    title: "Project Five",
    image: "/images/p3.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 6,
    title: "Project SIx",
    image: "/images/p3.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 7,
    title: "Project Seven",
    image: "/images/p3.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 8,
    title: "Project Eight",
    image: "/images/p3.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 9,
    title: "Project Nine",
    image: "/images/p3.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A collaboration that blends art, color, and animation.",
  },
  // ... (keep your other projects)
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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Parallax transforms
  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yGallery = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacityGallery = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <motion.div
      key={id} // ✅ force remount when URL id changes
      className="work-detail-page"
      ref={ref}
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
        <h2 className="detail-title">{work.title}</h2>
        <p className="detail-description">{work.description}</p>
      </motion.div>

      {/* Parallax Video */}
      <motion.div
        className="video-container"
        style={{ y: yVideo }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* <iframe
          src={work.video}
          title={work.title}
          frameBorder="0"
          allowFullScreen
        ></iframe> */}

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
        style={{ y: yGallery, opacity: opacityGallery }}
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

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import "./WorkGallery.css";
// import img1 from "./assets/img-1.JPG";

// const works = [
//   {
//     id: 1,
//     title: "Project One",
//     image: require("./assets/profile.PNG"),
//     video: "https://www.youtube.com/embed/JeFdQ2RDz1U",
//     // ← your local video
//     description: "A creative exploration of storytelling through visuals.",
//   },
//   {
//     id: 2,
//     title: "Project Two",
//     image: require("./assets/profile.PNG"),
//     video: "https://www.youtube.com/embed/JeFdQ2RDz1U", // ← your local video
//     description: "Modern design meets motion in this stunning concept.",
//   },
//   {
//     id: 3,
//     title: "Project Three",
//     image: require("./assets/img5.JPG"),
//     video: "https://www.youtube.com/embed/JeFdQ2RDz1U",
//     description: "A collaboration that blends art, color, and animation.",
//   },
//   {
//     id: 4,
//     title: "Project Four",
//     image: require("./assets/profile.PNG"),
//     video: "https://www.youtube.com/embed/JeFdQ2RDz1U",
//     description: "A creative exploration of storytelling through visuals.",
//   },
//   {
//     id: 5,
//     title: "Project Five",
//     image: require("./assets/profile.PNG"),
//     video: "https://www.youtube.com/embed/JeFdQ2RDz1U",
//     description: "Modern design meets motion in this stunning concept.",
//   },
//   {
//     id: 6,
//     title: "Project Six",
//     image: require("./assets/profile.PNG"),
//     video: "https://www.youtube.com/embed/JeFdQ2RDz1U",
//     description: "A collaboration that blends art, color, and animation.",
//   },
//   {
//     id: 7,
//     title: "Project Seven",
//     image: img1,
//     video: "https://www.youtube.com/embed/JeFdQ2RDz1U",
//     description: "A creative exploration of storytelling through visuals.",
//   },
//   {
//     id: 8,
//     title: "Project Eight",
//     image: require("./assets/profile.PNG"),
//     video: "https://www.youtube.com/embed/JeFdQ2RDz1U",
//     description: "Modern design meets motion in this stunning concept.",
//   },
//   {
//     id: 9,
//     title: "Project Nine",
//     image: require("./assets/img5.JPG"),
//     video: "https://www.youtube.com/embed/JeFdQ2RDz1U",
//     description: "A collaboration that blends art, color, and animation.",
//   },
// ];

// const WorkGallery = () => {
//   return (
//     <motion.section
//       className="work-gallery"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h2 className="gallery-title">My Work</h2>
//       <div className="gallery-grid">
//         {works.map((work) => (
//           <Link key={work.id} to={`/work/${work.id}`} className="gallery-item">
//             <motion.img
//               whileHover={{ scale: 1.05 }}
//               src={work.image}
//               alt={work.title}
//               className="gallery-image"
//             />
//             <div className="gallery-overlay">
//               <h3>{work.title}</h3>
//             </div>

//             {/* Inline video preview (optional) */}
//             <motion.video
//               className="video-player"
//               whileHover={{ scale: 1.02 }}
//               controls
//               muted
//               preload="metadata"
//             >
//               <source src={work.video} type="video/mp4" />
//               Your browser does not support the video tag.
//             </motion.video>
//           </Link>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default WorkGallery;
