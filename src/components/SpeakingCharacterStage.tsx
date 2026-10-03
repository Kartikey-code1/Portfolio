import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const VIDEO_SRC = '/images/kartikey-speaking.mp4';

export const SpeakingCharacterStage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.loop = false;
    video.controls = false;
    video.playsInline = true;
    video.preload = 'auto';
    video.muted = false;
    video.volume = 1;

    const handleLoaded = () => {
      setIsReady(true);
    };

    const handlePlay = () => {
      setIsSpeaking(true);
    };

    const handlePause = () => {
      setIsSpeaking(false);
    };

    const handleEnded = () => {
      setIsSpeaking(false);
    };

    const playIntro = async () => {
      try {
        video.currentTime = 0;
        video.muted = false;
        video.volume = 1;
        await video.play();
      } catch {
        try {
          video.currentTime = 0;
          video.muted = true;
          await video.play();
        } catch {}
      }
    };

    // Hero button se intro play karne ke liye
    const handleIntroRequest = () => {
      playIntro();
    };

    if (video.readyState >= 2) {
      setIsReady(true);
    }

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    window.addEventListener('kartikey-play-intro', handleIntroRequest);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);

      window.removeEventListener(
        'kartikey-play-intro',
        handleIntroRequest
      );
    };
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 35,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        flex
        h-[760px]
        w-full
        items-end
        justify-center
        overflow-visible
      "
    >
      {/* Atmospheric glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1.5,
        }}
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[28%]
          h-[42%]
          w-[38%]
          rounded-full
          bg-emerald-400/[0.055]
          blur-[120px]
        "
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 1.5,
        }}
        className="
          pointer-events-none
          absolute
          right-[20%]
          top-[32%]
          h-[28%]
          w-[18%]
          rounded-full
          bg-cyan-400/[0.025]
          blur-[90px]
        "
      />

      {/* Video */}
      <motion.div
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: isReady ? 1 : 0,
          y: isReady ? 0 : 18,
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-end
          justify-center
          overflow-visible
        "
      >
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          className="
            absolute
            bottom-[-5%]
            left-1/2
            h-[120%]
            w-auto
            max-w-none
            -translate-x-1/2
            object-contain
            object-center
          "
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 67% 74% at 50% 43%, black 0%, black 57%, rgba(0,0,0,.92) 69%, rgba(0,0,0,.55) 80%, transparent 96%)',
            maskImage:
              'radial-gradient(ellipse 67% 74% at 50% 43%, black 0%, black 57%, rgba(0,0,0,.92) 69%, rgba(0,0,0,.55) 80%, transparent 96%)',
          }}
          onLoadedData={() => setIsReady(true)}
        />

        {/* Bottom fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-[19%]
            bg-gradient-to-t
            from-[#050505]
            via-[#050505]/45
            to-transparent
          "
        />
      </motion.div>

      {/* Tiny intro activity indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isSpeaking ? 1 : 0.3,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          absolute
          bottom-[15%]
          right-[13%]
          z-30
          flex
          items-center
          gap-2
        "
      >
        <span
          className="
            font-mono-tech
            text-[7px]
            uppercase
            tracking-[0.35em]
            text-white/30
          "
        >
          INTRO
        </span>

        <div className="flex items-end gap-[2px]">
          {[1, 2, 3, 4].map((bar) => (
            <motion.span
              key={bar}
              animate={
                isSpeaking
                  ? {
                      height: [
                        '3px',
                        `${4 + bar * 2}px`,
                        '3px',
                      ],
                    }
                  : {
                      height: '3px',
                    }
              }
              transition={
                isSpeaking
                  ? {
                      duration: 0.45,
                      repeat: Infinity,
                      delay: bar * 0.08,
                      ease: 'easeInOut',
                    }
                  : {
                      duration: 0.2,
                    }
              }
              className="
                block
                w-[2px]
                rounded-full
                bg-emerald-400/70
              "
            />
          ))}
        </div>
      </motion.div>

      {/* Vertical editorial label */}
      <div
        className="
          pointer-events-none
          absolute
          right-[1%]
          top-[34%]
          z-30
          hidden
          -translate-y-1/2
          rotate-90
          font-mono-tech
          text-[7px]
          uppercase
          tracking-[0.55em]
          text-white/[0.16]
          lg:block
        "
      >
        PERSONAL PORTFOLIO // 001
      </div>

      {/* Vertical accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          delay: 1,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          right-[5%]
          top-[43%]
          hidden
          h-[90px]
          w-px
          origin-top
          bg-gradient-to-b
          from-emerald-400/50
          to-transparent
          lg:block
        "
      />

      {/* Loading state */}
      {!isReady && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-50
            bg-[#050505]
          "
        />
      )}
    </motion.div>
  );
};