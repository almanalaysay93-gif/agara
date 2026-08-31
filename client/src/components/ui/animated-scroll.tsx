// Full-page wheel/keyboard/touch-driven scroll experience:
// Split-screen panels that slide in with liquid physics and depth scaling between chapters.
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUp, ArrowUpRight, Sparkles } from "lucide-react";

type PagePanel = {
  tag?: string;
  heading: string;
  description: React.ReactNode;
};

type PageMedia =
  | { type: "video"; src: string }
  | { type: "image"; src: string }
  | null;

type PageConfig = {
  chapter: string;
  leftMedia: PageMedia;
  rightMedia: PageMedia;
  leftContent: PagePanel | null;
  rightContent: PagePanel | null;
  accent: string;
};

const dualRitualVideo = "/media/ritual-video-dual.mp4?v=20260831b";
const matchaVideo = "/media/ritual-video-matcha.mp4?v=20260831b";
const coffeeVideo = "/media/ritual-video-coffee.mp4?v=20260831b";

const pages: PageConfig[] = [
  {
    chapter: "01 — ELEVATE",
    leftMedia: { type: "video", src: dualRitualVideo },
    rightMedia: null,
    leftContent: null,
    rightContent: {
      tag: "The Dual Blend",
      heading: "Elevate Your Day",
      description: "Two daily experiences, one philosophy: energy without the noise.",
    },
    accent: "#B86538",
  },
  {
    chapter: "02 — CLARITY",
    leftMedia: null,
    rightMedia: { type: "video", src: matchaVideo },
    leftContent: {
      tag: "Matcha Blend",
      heading: "A Clearer Kind of Energy",
      description: "Ceremonial-grade matcha, whisked calm, botanical focus.",
    },
    rightContent: null,
    accent: "#9caf72",
  },
  {
    chapter: "03 — GROUND",
    leftMedia: { type: "video", src: coffeeVideo },
    rightMedia: null,
    leftContent: null,
    rightContent: {
      tag: "Coffee Blend",
      heading: "A Deeper Way to Begin",
      description: "Dark roast arabica, grounded energy, a better first hour.",
    },
    accent: "#8b5c3e",
  },
  {
    chapter: "04 — BOTANICALS",
    leftMedia: null,
    rightMedia: { type: "image", src: "/media/hero-packaging.webp" },
    leftContent: {
      tag: "Full Transparency",
      heading: "Every Ingredient, On the Label",
      description: "Twelve functional botanicals. Pure formulation, always.",
    },
    rightContent: null,
    accent: "#5a7052",
  },
  {
    chapter: "05 — BEGIN",
    leftMedia: { type: "video", src: dualRitualVideo },
    rightMedia: null,
    leftContent: null,
    rightContent: {
      tag: "Daily Moment",
      heading: "Begin With One Good Thing",
      description: (
        <>
          Build a daily experience you look forward to.
          <br />
          <a
            href="/home#ingredients"
            className="mt-5 inline-flex items-center gap-2 font-medium underline underline-offset-4 transition-transform hover:translate-x-1"
            style={{ color: "var(--agara-copper-dark)" }}
          >
            Explore the ingredients <ArrowUpRight size={16} />
          </a>
        </>
      ),
    },
    accent: "#B86538",
  },
  {
    chapter: "06 — CONNECT",
    leftMedia: { type: "image", src: "/media/ritual-matcha.webp" },
    rightMedia: null,
    leftContent: null,
    rightContent: {
      tag: "Direct Support",
      heading: "Talk to a Real Person",
      description: (
        <>
          Questions about Agara? Reach out to Rosemarie Basanes.
          <br />
          <a
            href="https://www.facebook.com/rosemarie.basanes"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-medium underline underline-offset-4 transition-transform hover:translate-x-1"
            style={{ color: "var(--agara-copper-dark)" }}
          >
            Message on Facebook <ArrowUpRight size={16} />
          </a>
        </>
      ),
    },
    accent: "#593223",
  },
];

function VideoPane({ src, isActive }: { src: string; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#161c16]">
      {/* Background ambient texture */}
      <video
        key={`ambient-${src}`}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35 blur-2xl scale-110"
      />
      {/* Main uncropped video */}
      <video
        key={`main-${src}`}
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="relative z-10 max-h-full max-w-full w-full h-full object-contain p-2 sm:p-4 lg:p-6 transition-transform duration-1000 ease-out"
        style={{
          transform: isActive ? "scale(1)" : "scale(0.98)",
        }}
      />
    </div>
  );
}

function MediaPane({
  media,
  isActive,
}: {
  media: PageMedia;
  isActive: boolean;
}) {
  if (!media) return null;
  if (media.type === "video")
    return <VideoPane src={media.src} isActive={isActive} />;
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#161c16]">
      {/* Ambient background image blur */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30 blur-2xl scale-110"
        style={{ backgroundImage: `url(${media.src})` }}
      />
      {/* Main crisp uncropped image */}
      <img
        src={media.src}
        alt="Agara Visual Experience"
        className="relative z-10 max-h-full max-w-full w-full h-full object-contain p-2 sm:p-4 lg:p-6 transition-transform duration-1000 ease-out"
        style={{
          transform: isActive ? "scale(1)" : "scale(0.98)",
        }}
      />
    </div>
  );
}

function ContentPanel({
  panel,
  isActive,
  accent,
}: {
  panel: PagePanel;
  isActive: boolean;
  accent: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-6 sm:px-10 md:px-14 py-12 text-center select-none overflow-y-auto"
      style={{
        background: "var(--agara-cream)",
        color: "var(--agara-espresso)",
      }}
    >
      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        {panel.tag ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-widest uppercase border"
            style={{
              borderColor: `${accent}35`,
              color: accent,
              background: `${accent}10`,
            }}
          >
            <Sparkles size={12} />
            <span>{panel.tag}</span>
          </motion.div>
        ) : null}

        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 sm:mb-5 w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight font-normal text-balance"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {panel.heading}
        </motion.h2>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md text-xs sm:text-sm md:text-base leading-relaxed"
          style={{ color: "var(--agara-olive)" }}
        >
          {panel.description}
        </motion.div>
      </div>
    </div>
  );
}

export default function AnimatedScroll() {
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = pages.length;
  const reduceMotion = useReducedMotion();
  const animTime = reduceMotion ? 0 : 950;
  const scrolling = useRef(false);
  const touchStartY = useRef<number | null>(null);

  const navigateUp = () => {
    setCurrentPage(page => Math.max(1, page - 1));
  };

  const navigateDown = () => {
    setCurrentPage(page => Math.min(numOfPages, page + 1));
  };

  useEffect(() => {
    const withDebounce = (action: () => void) => {
      if (scrolling.current) return;
      scrolling.current = true;
      action();
      window.setTimeout(() => {
        scrolling.current = false;
      }, animTime || 300);
    };

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 15) return;
      withDebounce(() => (event.deltaY > 0 ? navigateDown() : navigateUp()));
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp" || event.key === "PageUp") withDebounce(navigateUp);
      else if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") withDebounce(navigateDown);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current === null) return;
      const deltaY = touchStartY.current - event.changedTouches[0].clientY;
      touchStartY.current = null;
      if (Math.abs(deltaY) > 35) {
        withDebounce(() => (deltaY > 0 ? navigateDown() : navigateUp()));
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [animTime]);

  const activeChapter = pages[currentPage - 1];

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-[#111612] text-[var(--agara-cream)]"
      style={{ perspective: "1400px" }}
      role="region"
      aria-label="The Agara experience, page by page"
    >
      {/* Top Header Bar Overlay */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 py-5 bg-gradient-to-b from-black/60 to-transparent pointer-events-auto">
        <a
          href="/home"
          className="flex items-center gap-3 transition-opacity hover:opacity-85"
        >
          <img
            src="/media/agara-monogram.svg"
            alt="Agara"
            className="w-7 h-7 object-contain brightness-0 invert"
          />
          <span className="font-sans font-normal tracking-[0.24em] text-sm uppercase text-white">
            AGARA
          </span>
        </a>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs tracking-widest uppercase font-medium">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeChapter.accent }} />
            <span>{activeChapter.chapter}</span>
          </div>

          <a
            href="/home"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-[var(--agara-espresso)] text-xs font-semibold tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Full Catalog</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      <p
        className="sr-only"
        role="status"
      >{`Page ${currentPage} of ${numOfPages}`}</p>

      {/* Main Split Panels */}
      {pages.map((page, i) => {
        const idx = i + 1;
        const isCurrent = currentPage === idx;
        const isPast = currentPage > idx;
        const isPrev = currentPage === idx + 1;
        const isNext = currentPage === idx - 1;
        const isVisible = isCurrent || isPrev || isNext;

        // Signature counter-sliding split curtains
        const leftTransform = isCurrent
          ? "translate3d(0, 0, 0)"
          : isPast
          ? "translate3d(0, -100%, 0)"
          : "translate3d(0, 100%, 0)";

        const rightTransform = isCurrent
          ? "translate3d(0, 0, 0)"
          : isPast
          ? "translate3d(0, 100%, 0)"
          : "translate3d(0, -100%, 0)";

        return (
          <div
            key={idx}
            className="absolute inset-0"
            style={{
              pointerEvents: isCurrent ? "auto" : "none",
              zIndex: isCurrent ? 10 : isPast ? 5 : 1,
              visibility: isVisible ? "visible" : "hidden",
            }}
            aria-hidden={!isCurrent}
          >
            {/* Desktop Left / Mobile Top Panel */}
            <div
              className="absolute left-0 top-0 h-1/2 md:h-full w-full md:w-1/2 overflow-hidden shadow-2xl"
              style={{
                transform: leftTransform,
                transition: reduceMotion
                  ? "none"
                  : "transform 950ms cubic-bezier(0.16, 1, 0.3, 1)",
                willChange: "transform",
              }}
            >
              <div className="relative h-full w-full">
                {page.leftMedia ? (
                  <MediaPane media={page.leftMedia} isActive={isCurrent} />
                ) : page.leftContent ? (
                  <ContentPanel
                    panel={page.leftContent}
                    isActive={isCurrent}
                    accent={page.accent}
                  />
                ) : null}
              </div>
            </div>

            {/* Desktop Right / Mobile Bottom Panel */}
            <div
              className="absolute left-0 md:left-auto md:right-0 bottom-0 md:top-0 h-1/2 md:h-full w-full md:w-1/2 overflow-hidden shadow-2xl"
              style={{
                transform: rightTransform,
                transition: reduceMotion
                  ? "none"
                  : "transform 950ms cubic-bezier(0.16, 1, 0.3, 1)",
                willChange: "transform",
              }}
            >
              <div className="relative h-full w-full">
                {page.rightMedia ? (
                  <MediaPane media={page.rightMedia} isActive={isCurrent} />
                ) : page.rightContent ? (
                  <ContentPanel
                    panel={page.rightContent}
                    isActive={isCurrent}
                    accent={page.accent}
                  />
                ) : null}
              </div>
            </div>
          </div>
        );
      })}

      {/* Right Rail Pagination Indicator */}
      <nav
        aria-label="Experience slides navigation"
        className="absolute right-3 sm:right-6 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-2 p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10"
      >
        <button
          type="button"
          aria-label="Previous chapter"
          disabled={currentPage === 1}
          onClick={navigateUp}
          className="p-1 text-white/60 hover:text-white disabled:opacity-20 transition-all"
        >
          <ArrowUp size={15} />
        </button>

        {pages.map((page, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to ${page.chapter}`}
            aria-current={currentPage === i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className="group relative flex h-7 w-7 items-center justify-center rounded-full transition-transform"
          >
            <span
              className={`rounded-full transition-all duration-500 ${
                currentPage === i + 1
                  ? "h-5 w-1.5 shadow-md"
                  : "h-2 w-2 bg-white/35 group-hover:bg-white/70"
              }`}
              style={{
                backgroundColor: currentPage === i + 1 ? page.accent : undefined,
              }}
            />
          </button>
        ))}

        <button
          type="button"
          aria-label="Next chapter"
          disabled={currentPage === numOfPages}
          onClick={navigateDown}
          className="p-1 text-white/60 hover:text-white disabled:opacity-20 transition-all"
        >
          <ArrowDown size={15} />
        </button>
      </nav>

      {/* Bottom Scroll Cue */}
      <footer className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 px-4 py-2 rounded-full bg-black/35 backdrop-blur-md border border-white/10 text-[11px] font-medium tracking-widest uppercase text-white/70 pointer-events-none">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: activeChapter.accent }} />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: activeChapter.accent }} />
        </span>
        <span>Scroll or swipe to explore</span>
        <span className="text-white/40">·</span>
        <span className="text-white/90">{`0${currentPage} / 0${numOfPages}`}</span>
      </footer>
    </div>
  );
}
