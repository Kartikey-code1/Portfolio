import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

const VIDEO_SRC = '/images/kartikey-speaking.mp4';

export const SpeakingCharacterStage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isReady, setIsReady] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioBlocked, setAudioBlocked] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);

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

    const attemptAutoplay = async () => {
      try {
        video.currentTime = 0;
        video.muted = false;
        video.volume = 1;

        await video.play();

        // Audio autoplay was successfully allowed.
        setAudioBlocked(false);
      } catch {
        /*
         * Browser blocked unmuted autoplay.
         *
         * We do NOT listen for random clicks anymore.
         * Instead, we show an explicit "ENABLE INTRO" button.
         */
        setAudioBlocked(true);

        try {
          // Keep the visual intro playing silently.
          video.muted = true;
          await video.play();
        } catch {
          // Browser may block autoplay completely.
        }
      }
    };

    const handleLoaded = () => {
      setIsReady(true);
      attemptAutoplay();
    };

    const handlePlay = () => {
      setIsSpeaking(true);
    };

    const handlePause = () => {
      setIsSpeaking(false);
    };

    const handleEnded = () => {
      setIsSpeaking(false);
      setIntroFinished(true);
    };

    if (video.readyState >= 2) {
      setIsReady(true);
      attemptAutoplay();
    } else {
      video.addEventListener('loadeddata', handleLoaded);
    }

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const enableIntroAudio = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.pause();
      video.currentTime = 0;

      video.muted = false;
      video.volume = 1;

      setIntroFinished(false);
      setAudioBlocked(false);

      await video.play();
    } catch {
      /*
       * If playback still fails, keep the button visible.
       */
      setAudioBlocked(true);
    }
  };

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
      {/* ---------------------------------------------------------
          BACKGROUND GLOW
      --------------------------------------------------------- */}

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
          right-[5%]
          top-[25%]
          h-[45%]
          w-[45%]
          rounded-full
          bg-emerald-400/[0.04]
          blur-[130px]
        "
      />

      {/* ---------------------------------------------------------
          CHARACTER VIDEO
      --------------------------------------------------------- */}

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
          autoPlay
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          className="
            absolute
            bottom-[-5%]
            right-[-4%]
            h-[120%]
            w-auto
            max-w-none
            object-contain
            object-center
          "
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 62% 72% at 50% 46%, black 0%, black 50%, rgba(0,0,0,.95) 61%, rgba(0,0,0,.65) 74%, rgba(0,0,0,.22) 88%, transparent 100%)',

            maskImage:
              'radial-gradient(ellipse 62% 72% at 50% 46%, black 0%, black 50%, rgba(0,0,0,.95) 61%, rgba(0,0,0,.65) 74%, rgba(0,0,0,.22) 88%, transparent 100%)',

            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',

            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          }}
          onLoadedData={() => setIsReady(true)}
        />

        {/* Bottom blend */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            h-[20%]
            bg-gradient-to-t
            from-[#050505]
            via-[#050505]/45
            to-transparent
          "
        />
      </motion.div>

      {/* ---------------------------------------------------------
          ENABLE INTRO BUTTON
          Only appears when browser blocks autoplay audio.
      --------------------------------------------------------- */}

      <AnimatePresence>
        {audioBlocked && !introFinished && (
          <motion.button
            type="button"
            onClick={enableIntroAudio}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 8,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              group
              absolute
              bottom-[10%]
              right-[10%]
              z-40
              flex
              items-center
              gap-3
              border
              border-emerald-400/30
              bg-[#050505]/80
              px-4
              py-3
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-emerald-400/70
              hover:bg-emerald-400/[0.08]
            "
          >
            {/* Pulse */}

            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                "
              />
            </span>

            <span
              className="
                font-mono-tech
                text-[8px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white/70
                transition-colors
                group-hover:text-emerald-300
              "
            >
              ENABLE INTRO
            </span>

            <Volume2
              size={13}
              strokeWidth={1.5}
              className="
                text-emerald-400/70
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------------
          AUDIO INDICATOR
      --------------------------------------------------------- */}

      <AnimatePresence>
        {isSpeaking && !introFinished && (
          <motion.div
            initial={{
              opacity: 0,
              y: 4,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 4,
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
                  animate={{
                    height: [
                      '3px',
                      `${4 + bar * 2}px`,
                      '3px',
                    ],
                  }}
                  transition={{
                    duration: 0.45,
                    repeat: Infinity,
                    delay: bar * 0.08,
                    ease: 'easeInOut',
                  }}
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
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------------
          AUDIO BLOCKED MICRO STATUS
      --------------------------------------------------------- */}

      <AnimatePresence>
        {audioBlocked && !isSpeaking && !introFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              pointer-events-none
              absolute
              bottom-[5.5%]
              right-[10%]
              z-30
              flex
              items-center
              gap-2
            "
          >
            <VolumeX
              size={10}
              strokeWidth={1.5}
              className="text-white/20"
            />

            <span
              className="
                font-mono-tech
                text-[6px]
                uppercase
                tracking-[0.28em]
                text-white/20
              "
            >
              AUDIO BLOCKED BY BROWSER
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------------
          SIDE LABEL
      --------------------------------------------------------- */}

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

      {/* ---------------------------------------------------------
          SIDE LINE
      --------------------------------------------------------- */}

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

      {/* ---------------------------------------------------------
          LOADING COVER
      --------------------------------------------------------- */}

      <AnimatePresence>
        {!isReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="
              pointer-events-none
              absolute
              inset-0
              z-50
              bg-[#050505]
            "
          />
        )}
      </AnimatePresence>
    </motion.div>
);
};