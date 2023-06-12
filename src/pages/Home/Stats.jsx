import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/wsspwYT/bg2-Parallax.jpg')] bg-cover h-screen w-screen ">
      <div className="">
        <div className="">
          <h1 className="text-white font-normal text-3xl md:text-5xl leading-6 tracking-wide text-center mb-5 md:mb-5 pt-16">
            Melody Makers Camp
          </h1>
          <p className="w-full md:w-3/5 p-5 mx-auto text-center text-white my-4 font-normal text-lg md:text-2xl">
            We have talented and very experienced instructors who teach piano, violin, guitar, cello, and other
            instruments.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-between items-center m-8 md:m-16">
            <div className="relative flex flex-col justify-center items-center">
              <motion.div
                className="w-32 md:w-48 h-32 md:h-48 rounded-full border-2 border-white border-opacity-40 flex items-center justify-center"
                // whileHover={{ scale: 1.1 }}
                // animate={{
                //   y: 200,
                //   transition: {
                //     duration: 2,
                //     type: 'inertia',
                //     velocity: 200,
                //   },
                // }}
                animate={{
                  x: [0],
                  y: [0],
                  scale: [1, 1.1, 1.2, 1, 1],
                  rotate: [0, 0, 360, 360, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                  },
                  borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                }}
              >
                <motion.div className="w-24 md:w-36 h-24 md:h-36 rounded-full border-2 border-white border-opacity-40 bg-white bg-opacity-50 flex items-center justify-center">
                  <span className="text-black text-3xl md:text-6xl">235</span>
                </motion.div>
              </motion.div>
              <p className="text-xl md:text-4xl text-white text-center mt-6">Students</p>
            </div>
            <div className="relative flex flex-col justify-center items-center">
              <motion.div
                className="w-32 md:w-48 h-32 md:h-48 rounded-full border-2 border-white border-opacity-40 flex items-center justify-center"
                // whileHover={{ scale: 1.1 }}
                // animate={{
                //   y: 200,
                //   transition: {
                //     duration: 2,
                //     type: 'inertia',
                //     velocity: 200,
                //   },
                // }}
                animate={{
                  x: [0],
                  y: [0],
                  scale: [1, 1.1, 1.2, 1, 1],
                  rotate: [0, 0, 360, 360, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                  },
                  borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                }}
              >
                <motion.div className="w-24 md:w-36 h-24 md:h-36 rounded-full border-2 border-white border-opacity-40 bg-white bg-opacity-50 flex items-center justify-center">
                  <span className="text-black text-3xl md:text-6xl">14</span>
                </motion.div>
              </motion.div>
              <p className="text-xl md:text-4xl text-white text-center mt-6">Teacher</p>
            </div>
            <div className="relative flex flex-col justify-center items-center">
              <motion.div
                className="w-32 md:w-48 h-32 md:h-48 rounded-full border-2 border-white border-opacity-40 flex items-center justify-center"
                // whileHover={{ scale: 1.1 }}
                // animate={{
                //   y: 200,
                //   transition: {
                //     duration: 2,
                //     type: 'inertia',
                //     velocity: 200,
                //   },
                // }}
                animate={{
                  x: [0],
                  y: [0],
                  scale: [1, 1.1, 1.2, 1, 1],
                  rotate: [0, 0, 360, 360, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                  },
                  borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                }}
              >
                <motion.div className="w-24 md:w-36 h-24 md:h-36 rounded-full border-2 border-white border-opacity-40 bg-white bg-opacity-50 flex items-center justify-center">
                  <span className="text-black text-3xl md:text-6xl">32</span>
                </motion.div>
              </motion.div>
              <p className="text-xl md:text-4xl text-white text-center mt-6">Programmes</p>
            </div>
            <div className="relative flex flex-col justify-center items-center">
              <motion.div
                className="w-32 md:w-48 h-32 md:h-48 rounded-full border-2 border-white border-opacity-40 flex items-center justify-center"
                // whileHover={{ scale: 1.1 }}
                // animate={{
                //   y: 200,
                //   transition: {
                //     duration: 2,
                //     type: 'inertia',
                //     velocity: 200,
                //   },
                // }}
                animate={{
                  x: [0],
                  y: [0],
                  scale: [1, 1.1, 1.2, 1, 1],
                  rotate: [0, 0, 360, 360, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                  },
                  borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                }}
              >
                <motion.div className="w-24 md:w-36 h-24 md:h-36 rounded-full border-2 border-white border-opacity-40 bg-white bg-opacity-50 flex items-center justify-center">
                  <span className="text-black text-3xl md:text-6xl">21</span>
                </motion.div>
              </motion.div>
              <p className="text-xl md:text-4xl text-white text-center mt-6">Award</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
