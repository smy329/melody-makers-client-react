import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <div class="bg-[url('https://i.ibb.co/wsspwYT/bg2-Parallax.jpg')] bg-cover h-screen w-screen ">
      <div className="">
        <div className="">
          <h1 className="text-white font-normal text-5xl leading-6 tracking-wide text-center mb-12 pt-20">
            Melody Makers Camp
          </h1>
          <p className="w-3/5 mx-auto text-center text-white my-4 font-normal text-2xl">
            We have talented and very experienced instructors who teach piano, violin, guitar, cello, and other
            instruments.
          </p>
        </div>
        <div>
          <div class="flex justify-between items-center m-20">
            <div className="relative">
              <motion.div
                className="w-48 h-48 rounded-full border-2 border-white border-opacity-40 flex items-center justify-center"
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
                <motion.div className="w-36 h-36 rounded-full border-2 border-white border-opacity-40 bg-white bg-opacity-20 flex items-center justify-center">
                  <span className="text-black text-6xl">235</span>
                </motion.div>
              </motion.div>
              <p className="text-4xl text-white text-center mt-6">Students</p>
            </div>
            <div className="relative">
              <motion.div
                className="w-48 h-48 rounded-full border-2 border-white border-opacity-40 flex items-center justify-center"
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
                <motion.div className="w-36 h-36 rounded-full border-2 border-white border-opacity-40 bg-white bg-opacity-20 flex items-center justify-center">
                  <span className="text-black text-6xl">14</span>
                </motion.div>
              </motion.div>
              <p className="text-4xl text-white text-center mt-6">Teachers</p>
            </div>
            <div className="relative">
              <motion.div
                className="w-48 h-48 rounded-full border-2 border-white border-opacity-40 flex items-center justify-center"
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
                <motion.div className="w-36 h-36 rounded-full border-2 border-white border-opacity-40 bg-white bg-opacity-20 flex items-center justify-center">
                  <span className="text-black text-6xl">32</span>
                </motion.div>
              </motion.div>
              <p className="text-4xl text-white text-center mt-6">Programmes</p>
            </div>
            <div className="relative">
              <motion.div
                className="w-48 h-48 rounded-full border-2 border-white border-opacity-40 flex items-center justify-center"
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
                <motion.div className="w-36 h-36 rounded-full border-2 border-white border-opacity-40 bg-white bg-opacity-20 flex items-center justify-center">
                  <span className="text-black text-6xl">21</span>
                </motion.div>
              </motion.div>
              <p className="text-4xl text-white text-center mt-6">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
