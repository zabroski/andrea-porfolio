import React from "react";
import { motion } from "framer-motion";
import "./work.css";
import img1 from "../../assets/img-1.JPG";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.PNG";
import img4 from "../../assets/img-4.JPG";
import img5 from "../../assets/profile.PNG";
import img6 from "../../assets/img5.JPG";
import img7 from "../../assets/img7.JPG";
import img8 from "../../assets/img8.JPG";

const Work = () => {
  const photos = [
    { id: 1, src: img1, alt: "Me at work" },
    { id: 2, src: img2, alt: "Profile" },
    { id: 3, src: img3, alt: "Project" },
    { id: 4, src: img4, alt: "Gallery" },
    { id: 5, src: img5, alt: "Creative work" },
    { id: 6, src: img6, alt: "Me at work" },
    { id: 7, src: img7, alt: "work" },
    { id: 8, src: img8, alt: "day" },
  ];

  return (
    <div className="work-container">
      {/* HEADER */}
      <motion.section
        className="work-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>My Work</h1>
        <p>
          Explore some of my favorite moments, creative projects, and visual
          stories captured through my lens.
        </p>
      </motion.section>

      {/* PHOTO GALLERY */}
      <motion.section
        className="photo-gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {photos.map((photo) => (
          <motion.div
            className="photo-card"
            key={photo.id}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <img src={photo.src} alt={photo.alt} className="photo" />
          </motion.div>
        ))}
      </motion.section>

      {/* VIDEO SECTION */}
      <motion.section
        className="video-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Featured Video</h2>
        <div className="video-wrapper">
          {/* Example using a local MP4 or YouTube embed */}
          <video controls className="video-player">
            <source src="assets/wed.MOV" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* OR use a YouTube video embed instead */}
          {/* <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/yourVideoId"
            title="Andrea's Work Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="work-footer">
        <p>&copy; 2025 Andrea. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Work;
