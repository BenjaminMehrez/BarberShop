import { motion } from "motion/react";
import { ImagesSlider } from "../ui/images-slider";
import Navbar from "../navigation/Navbar";

export function ImagesSliderDemo() {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
  ];
  return (
    <ImagesSlider className="h-[50rem]" images={images}>
      <Navbar />
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
