'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: '0.8' }}
        >
          <Image
            src="/images/Me.png"
            alt="Max Morris Portrait"
            width="192"
            height="192"
            quality={95}
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-slate-300 shadow-xl"
          />
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
