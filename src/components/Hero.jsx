import { useState, useRef } from "react";
import Loop from "../assets/hero/loop.mp4";
import GlitchButton from "./HeroButton/HeroButton";
import ThreeScene from "./3D/ThreeScene";
import ThemeVideoOverlay from "./ThemeVideoOverlay";
import CompanyLogos from "./CompanyLogos";
import themeVid from "../assets/videos/euphotheme.mp4";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="hero_body">
      <div className="relative aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] rounded-b-[0.9rem] overflow-hidden">
        {/* Loop background */}
        <video
          src={Loop}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 3D Scene – NOT rendered when video is open */}
        {!showVideo && (
          <div className="h-64 sm:h-80 md:h-90 lg:h-[90vh]">
            <ThreeScene />
           </div>
        )}
      </div>

      {/* LEFT BUTTON */}
      <div
        className="
    absolute z-20 
    lg:left-[4vw] 
    bottom-[70vh]       /* Default for mobile */
    left-[25vw]
    sm:bottom-[calc(12vh+100px)]  /* Move 100px higher on small screens and up */
    md:bottom-[15vh]    /* Medium screens */
    scale-75
    sm:scale-90
    md:scale-100
    lg:scale-100
    xl:scale-100
    origin-bottom-left
    transition-transform duration-300
  "
      >
        <GlitchButton text="Explore Euphoria" to="how-to-use" />
      </div>

      {/* RIGHT BUTTON */}
      <div
        className="
    absolute z-20 
    right-[20vw] 
    bottom-[60vh]       /* Default for mobile */
    lg:right-[4vw]
    sm:bottom-[calc(12vh+500px)]  
    md:bottom-[15vh]    
    scale-75
    sm:scale-90
    md:scale-100
    lg:scale-100
    xl:scale-100
    origin-bottom-right
    transition-transform duration-300
  "
      >
        <GlitchButton
          text="Reveal Theme"
          flip
          primary="#8b5cf6"
          accent="#22d3ee"
          onClick={() => setShowVideo(true)}
        />
      </div>

      {/* VIDEO OVERLAY */}
      <ThemeVideoOverlay
        open={showVideo}
        onClose={() => setShowVideo(false)}
        videoSrc={themeVid}
      />

      <CompanyLogos className="relative z-10 mt-20 lg:block" />
    </div>
  );
};

export default Hero;

// import { curve, heroBackground, robot, hysteria, hero } from "../assets";
// import Button from "./Button";
// import Section from "./Section";
// import theme from "../assets/hero/theme.webp";
// import theme1 from "../assets/hero/theme1.png";
// import theme2 from "../assets/hero/theme2.png";
// import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
// import { heroIcons } from "../constants";
// import { ScrollParallax } from "react-just-parallax";
// import { useState,useRef } from "react";
// import Generating from "./Generating";
// import Notification from "./Notification";
// import CompanyLogos from "./CompanyLogos";
// import Loop from '../assets/hero/loop.gif';
// import GlitchButton from "./HeroButton/HeroButton";
// import ThreeScene from "./3D/ThreeScene";
// import ThemeVideoOverlay from "./ThemeVideoOverlay";
// import themeVid from "../assets/videos/euphotheme.mp4";

// const Hero = () => {
//   const parallaxRef = useRef(null);
//   const [showVideo, setShowVideo] = useState(false);

//   return (
//     // <Section
//     //   className="pt-[12rem] -mt-[5.25rem]"
//     //   crosses
//     //   crossesOffset="lg:translate-y-[5.25rem]"
//     //   customPaddings
//     //   id="home"
//     // >
//     //   <div className="container relative">
//     //     <div
//     //       className="relative z-1 max-w-[80rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
//     //       ref={parallaxRef}
//     //     >

//     //       {/* Hero Title */}
//     //       {/* <h1 className="h1 mb-6">
//     //         Step into{" "}
//     //         <span
//     //           className="inline-block relative glow-filter"
//     //           data-text="Lumière Enchantée,"
//     //         >
//     //           Lumière Enchantée,
//     //         </span>{" "}
//     //         where light becomes magic.
//     //       </h1> */}

//     //       {/* SVG Glow Filter */}
//     //       {/* <svg
//     //         className="filters"
//     //         width="1440px"
//     //         height="300px"
//     //         viewBox="0 0 1440 300"
//     //         xmlns="http://www.w3.org/2000/svg"
//     //         xmlnsXlink="http://www.w3.org/1999/xlink"
//     //       >
//     //         <defs>
//     //           <filter
//     //             id="glow-4"
//     //             colorInterpolationFilters="sRGB"
//     //             x="-50%"
//     //             y="-200%"
//     //             width="200%"
//     //             height="500%"
//     //           >
//     //             <feGaussianBlur
//     //               in="SourceGraphic"
//     //               stdDeviation="4"
//     //               result="blur4"
//     //             />
//     //             <feGaussianBlur
//     //               in="SourceGraphic"
//     //               stdDeviation="19"
//     //               result="blur19"
//     //             />
//     //             <feColorMatrix
//     //               in="blur4"
//     //               result="color-0-blur"
//     //               type="matrix"
//     //               values="1 0 0 0 0
//     //                       0 0.9803921568627451 0 0 0
//     //                       0 0 0.9647058823529412 0 0
//     //                       0 0 0 0.8 0"
//     //             />
//     //             <feMerge>
//     //               <feMergeNode in="color-0-blur" />
//     //               <feMergeNode in="blur19" />
//     //               <feMergeNode in="SourceGraphic" />
//     //             </feMerge>
//     //           </filter>
//     //         </defs>
//     //       </svg> */}
//     //       <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden flex justify-center items-center md:aspect-[688/490] lg:aspect-[1024/490]">
//     //           <img
//     //       src={theme1}
//     //       width={500}
//     //       height={100}
//     //       />
//     //       </div>
//     //       <p className="body-1 max-w-2xl mx-auto mb-6 -mt-64 text-n-2 lg:mb-8">
//     //         Experience creativity and inspiration like never before with
//     //         dazzling light-driven adventures
//     //       </p>
//     //     </div>
//     //     {/* <BackgroundCircles /> */}
//     //     {/* <Section className="lg:mt-64 " id='start'> */}
//     //     <div id="start" className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
//     //       <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
//     //         <div className="relative bg-n-8 rounded-[1rem]">
//     //           <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

//     //           <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden flex justify-center items-center md:aspect-[688/490] lg:aspect-[1024/490]">
//     //             <img
//     //               src={hysteria}
//     //               className="w-1/2 scale-[1.7] md:scale-[1]"
//     //               width={100}
//     //               height={100}
//     //               alt="AI"
//     //             />

//     //             <ScrollParallax isAbsolutelyPositioned>
//     //               <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
//     //               <li className="text-5xl text-white/80 pl-2">&lt;</li>
//     //                 <li className="text-5xl text-white/80 pl-5">&lt;</li>
//     //                 <li className="text-5xl text-white/80 pl-5">&lt;</li>
//     //                 <li className="text-5xl text-white/80 pl-5">&gt;</li>
//     //                 <li className="text-5xl text-white/80 pl-5">&gt;</li>
//     //                 <li className="text-5xl text-white/80 pl-5">&gt;</li>
//     //               </ul>
//     //             </ScrollParallax>

//     //             <ScrollParallax isAbsolutelyPositioned>
//     //               {/* <Notification
//     //                 className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
//     //                 title="Game"
//     //               /> */}
//     //               <ul className="hidden absolute -right-[9.5rem] bottom-[11rem] w-[19rem] h-16 rotate-90 px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex ">
//     //                 {/* {heroIcons.map((icon, index) => (
//     //                   <li className="p-5 w-" key={index}>
//     //                     <img src={icon} width={24} height={25} alt={icon} />
//     //                   </li>
//     //                 ))} */}
//     //                 <li className="text-5xl text-white/80 pl-2">&lt;</li>
//     //                 <li className="text-5xl text-white/80 pl-5">&lt;</li>
//     //                 <li className="text-5xl text-white/80 pl-5">&lt;</li>
//     //                 <li className="text-5xl text-white/80 pl-5">&gt;</li>
//     //                 <li className="text-5xl text-white/80 pl-5">&gt;</li>
//     //                 <li className="text-5xl text-white/80 pl-5">&gt;</li>
//     //               </ul>
//     //             </ScrollParallax>
//     //           </div>
//     //         </div>

//     //         <Gradient />
//     //       </div>
//     //       <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
//     //         {/* <img
//     //           src={heroBackground}
//     //           className="w-full"
//     //           width={1440}
//     //           height={1800}
//     //           alt="hero"
//     //         /> */}
//     //       </div>
//     //     </div>

//     //     {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
//     //     {/* </Section> */}
//     //   </div>

//     //   <BottomLine />
//     //   <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
//     // </Section>

//       <div className="hero_body" style={{}}>
//         <div className="relative aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] rounded-b-[0.9rem] overflow-hidden">

//   {/* Loop background */}
//   <img
//     src={Loop}
//     alt="Loop background"
//     className="absolute inset-0 w-full h-full object-cover"
//   />

//   {/* Theme image – top center */}
//   {/* <img
//     src={theme1}
//     alt="Theme"
//     width={500}
//     height={100}
//     className="
//       absolute
//       top-20
//       sm:top-15
//       left-1/2
//       -translate-x-1/2
//       z-10
//       max-w-[70%]
//       h-auto
//     "
//   /> */}
//   <div className="h-64 sm:h-80 md:h-96 lg:h-[100vh]">
//       <ThreeScene />
//     </div>

//   <div
//   className="
//     absolute z-10

//     /* Mobile (default) */
//     left-[68px] top-[380px] scale-100

//     /* Small phones */
//     sm:left-[90px] sm:top-[440px] sm:scale-90

//     /* Tablets */
//     md:left-[147px] md:top-[505px] md:scale-90

//     /* Small laptops */
//     lg:left-[190px] lg:top-[450px] lg:scale-100

//     /* Desktops */
//     xl:left-[70vw] xl:top-[600px]

//     transition-transform duration-300
//   "
// >

//     {/* <a href="Pathum_D_2021_resume.pdf" target="_blank"><button type="button">Call to action</button></a> */}
//     {/* <GlitchButton onClick={() => setShowVideo(true)} />
//     <div className="">
//       <GlitchButton onClick={() => setShowVideo(true)} />
//         </div>   */}

// </div>

// </div>

//    <div className="absolute z-20 left-[4vw] bottom-[12vh] md:bottom-[15vh]">
//  <GlitchButton
//   text="View Logos"
//   to="logo"
// />

// </div>

// <div className="absolute z-20 right-[4vw] bottom-[12vh] md:bottom-[15vh]">
//   <GlitchButton
//   text="Reveal Theme"
//   flip
//   primary="#8b5cf6"
//   accent="#22d3ee"
//   onClick={() => setShowVideo(true)}
// />

// </div>

//  <ThemeVideoOverlay
//         open={showVideo}
//         onClose={() => setShowVideo(false)}
//         videoSrc={themeVid}
//       />
//   <CompanyLogos id="company-logos" classNameName="relative z-10 mt-20 lg:block" />

//       </div>

//   );
// };

// export default Hero;
