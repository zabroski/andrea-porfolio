// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import "./WorkGallery.css";
// import img1 from "./assets/img-1.JPG";

// const works = [
//   {
//     id: 1,
//     title: "Project One",
//     image: require("./assets/profile.PNG"), // use the imported variable here
//     video: "https://www.youtube.com/watch?v=GFJJQxMdXZQ&t=66s",
//     description: "A creative exploration of storytelling through visuals.",
//   },
//   {
//     id: 2,
//     title: "Project Two",
//     image: require("./assets/profile.PNG"), // import directly like this
//     video: "https://www.youtube.com/embed/GFJJQxMdXZQ?start=66",
//     description: "Modern design meets motion in this stunning concept.",
//   },
//   {
//     id: 3,
//     title: "Project Three",
//     image: require("./assets/img5.JPG"), // import directly like this
//     video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     description: "A collaboration that blends art, color, and animation.",
//   },
//   {
//     id: 4,
//     title: "Project Four",
//     image: img1, // use the imported variable here
//     video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     description: "A creative exploration of storytelling through visuals.",
//   },
//   {
//     id: 5,
//     title: "Project Five",
//     image: require("./assets/profile.PNG"), // import directly like this
//     video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     description: "Modern design meets motion in this stunning concept.",
//   },
//   {
//     id: 6,
//     title: "Project Six",
//     image: require("./assets/img5.JPG"), // import directly like this
//     video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     description: "A collaboration that blends art, color, and animation.",
//   },
//   {
//     id: 7,
//     title: "Project Seven",
//     image: img1, // use the imported variable here
//     video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     description: "A creative exploration of storytelling through visuals.",
//   },
//   {
//     id: 8,
//     title: "Project Eight",
//     image: require("./assets/profile.PNG"), // import directly like this
//     video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     description: "Modern design meets motion in this stunning concept.",
//   },
//   {
//     id: 9,
//     title: "Project Nine",
//     image: require("./assets/img5.JPG"), // import directly like this
//     video:
//       "https://sesameworkshop.org/our-work/shows/south-africa-takalani-sesame/",
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
//           </Link>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default WorkGallery;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./WorkGallery.css";
import img1 from "./assets/img-1.JPG";

const works = [
  {
    id: 1,
    title: "Project One",
    image: require("./assets/profile.PNG"),
    video: "", // ← Add your video link here
    description: "A creative exploration of storytelling through visuals.",
  },
  {
    id: 2,
    title: "Project Two",
    image: require("./assets/profile.PNG"),
    video: "https://www.youtube.com/watch?v=JeFdQ2RDz1U", // ← Add your video link here
    description: "Modern design meets motion in this stunning concept.",
  },
  {
    id: 3,
    title: "Project Three",
    image: require("./assets/img5.JPG"),
    video: "", // ← Add your video link here
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 4,
    title: "Project Four",
    image: img1,
    video: "", // ← Add your video link here
    description: "A creative exploration of storytelling through visuals.",
  },
  {
    id: 5,
    title: "Project Five",
    image: require("./assets/profile.PNG"),
    video: "", // ← Add your video link here
    description: "Modern design meets motion in this stunning concept.",
  },
  {
    id: 6,
    title: "Project Six",
    image: require("./assets/img5.JPG"),
    video: "", // ← Add your video link here
    description: "A collaboration that blends art, color, and animation.",
  },
  {
    id: 7,
    title: "Project Seven",
    image: img1,
    video: "", // ← Add your video link here
    description: "A creative exploration of storytelling through visuals.",
  },
  {
    id: 8,
    title: "Project Eight",
    image: require("./assets/profile.PNG"),
    video: "", // ← Add your video link here
    description: "Modern design meets motion in this stunning concept.",
  },
  {
    id: 9,
    title: "Project Nine",
    image: require("./assets/img5.JPG"),
    video: "", // ← Add your video link here
    description: "A collaboration that blends art, color, and animation.",
  },
];

const WorkGallery = () => {
  return (
    <motion.section
      className="work-gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="gallery-title">My Work</h2>
      <div className="gallery-grid">
        {works.map((work) => (
          <Link key={work.id} to={`/work/${work.id}`} className="gallery-item">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={work.image}
              alt={work.title}
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <h3>{work.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkGallery;
