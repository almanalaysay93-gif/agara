// Botanical Editorial Ritual: product-first composition, warm editorial copy, copper rules, and tactile motion.
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Flame,
  Menu,
  Minus,
  Pause,
  Play,
  Plus,
  Apple,
  Gauge,
  Heart,
  Sparkles,
  Star,
  Target,
  X,
  Zap,
  BookOpen,
  Activity,
  BarChart3,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import AnimatedScroll from "@/components/ui/animated-scroll";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { ResearchDialog } from "@/components/ResearchDialog";
import {
  evidenceKeyNote,
  fdaDisclaimer,
  ingredients,
  type ProductScope,
} from "@/data/ingredients";

const heroImage = "/media/hero-packaging.webp";
const matchaImage = "/media/ritual-matcha.webp";
const coffeeImage = "/media/ritual-coffee.webp";
const coffeeVideo = "/media/ritual-video-coffee.mp4";
const lifestyleVideo = "/media/ritual-video-matcha.mp4";
const dualRitualVideo = "/media/ritual-video-dual.mp4";
const coffeePoster = "/media/poster-coffee.webp";
const matchaPoster = "/media/poster-matcha.webp";
const dualPoster = "/media/poster-dual.webp";
const monogram = "/media/agara-monogram.svg";

type ProductKey = "matcha" | "coffee";

const products: Record<
  ProductKey,
  {
    name: string;
    kicker: string;
    title: string;
    description: string;
    price: string;
    details: string;
    color: string;
    image: string;
    accent: string;
  }
> = {
  matcha: {
    name: "Matcha",
    kicker: "Functional matcha",
    title: "A clearer kind of energy.",
    description:
      "Ceremonial-grade matcha with botanical adaptogens for calm energy, clear focus, and a little more balance in the day.",
    price: "$32",
    details: "30 servings · 4 g stick packs",
    color: "#9caf72",
    image: matchaImage,
    accent: "matcha green",
  },
  coffee: {
    name: "Coffee",
    kicker: "Premium arabica blend",
    title: "A deeper way to begin.",
    description:
      "A dark roast with functional botanicals for grounded energy, steady focus, and a better first hour.",
    price: "$28",
    details: "30 servings · 2.5 g stick packs",
    color: "#8b5c3e",
    image: coffeeImage,
    accent: "roasted espresso",
  },
};

// Mirrors the five-icon benefit system printed on both Agara pouches.
// Wording is deliberately softer than the packaging: see VOICE.md and research/ingredient_evidence_cards.md.
const benefits = [
  {
    icon: Zap,
    label: "Boost energy",
    detail:
      "Naturally occurring caffeine from coffee, matcha, and guarana seed.",
  },
  {
    icon: Target,
    label: "Increase focus",
    detail:
      "L-Theanine alongside caffeine — the pairing with the strongest evidence in the formula.",
  },
  {
    icon: Heart,
    label: "Elevate mood",
    detail: "Saffron extract is traditionally associated with mood balance.",
  },
  {
    icon: Apple,
    label: "Balance appetite",
    detail: "Botanicals traditionally used in appetite and wellness practices.",
  },
  {
    icon: Gauge,
    label: "Support metabolism",
    detail:
      "Berberine HCL and ChromeMate® chromium, ingredients involved in metabolism.",
  },
];

const scopeLabels: Record<ProductScope, string> = {
  both: "Both blends",
  coffee: "Agara Cafe",
  matcha: "MATCHAGARA",
};

type ScopeFilter = ProductScope | "all";

function VideoFrame({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const figureRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(true);
  const inView = useInView(figureRef, { margin: "300px 0px 300px 0px" });

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !inView) return;
    video.play().catch(() => {});
  }, [inView]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || inView) return;
    video.pause();
  }, [inView]);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <figure ref={figureRef} className={`video-frame ${className}`}>
      <video
        ref={videoRef}
        className="video-frame__media"
        poster={poster}
        muted
        loop
        playsInline
        preload={inView ? "auto" : "none"}
        aria-label={label}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className="video-frame__caption">
        <span>{label}</span>
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? `Pause ${label}` : `Play ${label}`}
        >
          {isPlaying ? (
            <Pause size={13} strokeWidth={1.6} />
          ) : (
            <Play size={13} strokeWidth={1.6} />
          )}
        </button>
      </figcaption>
    </figure>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function Reveal({
  children,
  delay = 0,
  className = "",
  yOffset,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const inView = useInView(ref, {
    once: true,
    amount: isMobile ? 0.15 : 0.25,
    margin: isMobile ? "0px 0px -30px 0px" : "0px 0px -50px 0px",
  });
  const reduceMotion = useReducedMotion();

  const distance = yOffset !== undefined ? yOffset : isMobile ? 16 : 24;
  const activeDelay = isMobile ? Math.min(delay * 0.65, 0.22) : delay;

  return (
    <motion.div
      ref={ref}
      className={`reveal-gpu ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: distance }}
      animate={
        inView || reduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: distance }
      }
      transition={{
        duration: isMobile ? 0.58 : 0.68,
        delay: activeDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        willChange: inView ? "auto" : "opacity, transform",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      {children}
    </motion.div>
  );
}

function EvidenceStars({
  rating,
  label,
}: {
  rating: 1 | 2 | 3;
  label: string;
}) {
  return (
    <span className="evidence-stars" title={label}>
      <span className="sr-only">{`Evidence strength: ${rating} of 3 — ${label}`}</span>
      {[1, 2, 3].map(step => (
        <Star
          key={step}
          size={15}
          strokeWidth={1.6}
          aria-hidden="true"
          className={
            step <= rating ? "evidence-stars__on" : "evidence-stars__off"
          }
          fill={step <= rating ? "currentColor" : "none"}
        />
      ))}
    </span>
  );
}

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<ProductKey>("matcha");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedBenefit, setExpandedBenefit] = useState(0);
  const [openIngredient, setOpenIngredient] = useState<string | null>(
    "l-theanine"
  );
  const [scopeFilter, setScopeFilter] = useState<ScopeFilter>("all");
  const [showExperience, setShowExperience] = useState(false);
  const [researchDialogOpen, setResearchDialogOpen] = useState(false);
  const product = products[activeProduct];
  const visibleIngredients = useMemo(
    () =>
      scopeFilter === "all"
        ? ingredients
        : ingredients.filter(
            item => item.scope === scopeFilter || item.scope === "both"
          ),
    [scopeFilter]
  );
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  // Collapse any open ingredient when the formula filter changes, so the
  // accordion never carries state for a card that is no longer rendered.
  const selectScope = (key: ScopeFilter) => {
    setScopeFilter(key);
    setOpenIngredient(null);
  };

  const selectProduct = (key: ProductKey) => {
    setActiveProduct(key);
    setMobileMenuOpen(false);
  };

  const showComingSoon = () => {
    toast("The shop is coming next.", {
      description: "For now, consider this your invitation to explore the experience.",
    });
  };

  // Lock background scroll while the full-screen experience is open,
  // and let Escape close it same as the on-screen button.
  useEffect(() => {
    if (!showExperience) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowExperience(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showExperience]);

  return (
    <main className="site-shell relative">
      {/* Top Liquid Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B86538] via-[#d4a359] to-[#8b5c3e] z-[150] origin-left pointer-events-none"
        style={{ scaleX }}
      />

      <FlowArt aria-label="Agara Elevated Life">
        <FlowSection id="top" aria-label="Agara Discovery" style={{ backgroundColor: "var(--agara-cream)" }}>
          <div className="top-note">
            <span>Plant-powered daily experience</span>
            <span className="top-note__rule" />
            <span>Made for a better everyday</span>
          </div>

          <header className="site-header" aria-label="Primary navigation">
            <button
              className="brand-lockup"
              onClick={() => scrollToId("top")}
              aria-label="Agara home"
            >
              <img src={monogram} alt="" className="brand-lockup__mark" />
              <span className="brand-lockup__wordmark">
                AG<span className="brand-lockup__caret">A</span>RA
              </span>
            </button>

            <nav className={`site-nav ${mobileMenuOpen ? "site-nav--open" : ""}`}>
              <a
                href="#experience"
                onClick={e => {
                  e.preventDefault();
                  scrollToId("experience");
                  setMobileMenuOpen(false);
                }}
              >
                The Experience
              </a>
              <a
                href="#why-agara"
                onClick={e => {
                  e.preventDefault();
                  scrollToId("why-agara");
                  setMobileMenuOpen(false);
                }}
              >
                Why Agara
              </a>
              <a
                href="#ingredients"
                onClick={e => {
                  e.preventDefault();
                  scrollToId("ingredients");
                  setMobileMenuOpen(false);
                }}
              >
                Ingredients
              </a>
              <a
                href="#research"
                onClick={e => {
                  e.preventDefault();
                  scrollToId("research");
                  setMobileMenuOpen(false);
                }}
              >
                Research
              </a>
              <a
                href="#journal"
                onClick={e => {
                  e.preventDefault();
                  scrollToId("journal");
                  setMobileMenuOpen(false);
                }}
              >
                Journal
              </a>
              <button
                className="nav-cta"
                onClick={() => {
                  showComingSoon();
                  setMobileMenuOpen(false);
                }}
              >
                Shop Agara <ArrowUpRight size={14} strokeWidth={1.7} />
              </button>
            </nav>

            <button
              className="nav-experience-trigger"
              onClick={() => {
                setShowExperience(true);
                setMobileMenuOpen(false);
              }}
              aria-label="Open the Agara visual experience"
              title="Open the visual experience"
            >
              <Play size={16} strokeWidth={1.6} />
            </button>

            <button
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(open => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <Minus size={20} /> : <Menu size={20} />}
            </button>
          </header>

          <section className="hero-section" aria-labelledby="hero-title">
            <div className="hero-copy">
              <Reveal>
                <p className="eyebrow">
                  <span className="eyebrow__dot" /> Wake · focus · restore
                </p>
              </Reveal>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                >
                  <p className="hero-kicker">{product.kicker}</p>
                  <h1 id="hero-title">{product.title}</h1>
                  <p className="hero-description">{product.description}</p>
                </motion.div>
              </AnimatePresence>
              <Reveal delay={0.15} className="hero-actions">
                <button
                  className="button button--copper"
                  onClick={() => scrollToId("experience")}
                >
                  Explore the experience <ArrowDownRight size={17} strokeWidth={1.6} />
                </button>
                <button
                  className="text-link"
                  onClick={() => scrollToId("why-agara")}
                >
                  Why functional? <ArrowUpRight size={15} strokeWidth={1.7} />
                </button>
              </Reveal>
              <Reveal delay={0.25} className="hero-footnote">
                <div className="hero-footnote__seal">
                  <Sparkles size={15} strokeWidth={1.3} />
                </div>
                <p>
                  Thoughtfully formulated.
                  <br />
                  <span>Nothing extra, nothing loud.</span>
                </p>
              </Reveal>
            </div>

            <div
              className="hero-visual"
              style={{ "--product-accent": product.color } as React.CSSProperties}
            >
              <div className="hero-visual__backdrop" />
              <motion.img
                src={heroImage}
                alt="Agara matcha and coffee pouches arranged with matcha powder and coffee beans"
                className="hero-visual__image"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }
              />
            </div>

            <aside className="ritual-index" aria-label="Page sections">
              <span className="ritual-index__label">Scroll to explore</span>
              <span className="ritual-index__line" />
              <span>01</span>
            </aside>
          </section>
        </FlowSection>

        <FlowSection id="experience" aria-label="01 — WAKE" style={{ backgroundColor: "#FAF7F2" }}>
          <section
            className="ritual-section"
            aria-labelledby="experience-title"
          >
            <div className="section-intro">
              <Reveal>
                <div className="section-marker">
                  <img src={monogram} alt="" />
                  <p className="section-number">01 — WAKE</p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 id="experience-title">
                  Make your everyday
                  <br />
                  <em>feel elevated.</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.16} className="ritual-copy">
              <p>
                Agara brings functional ingredients into the moments that already
                belong to you: the first cup, the mid-day reset, the exhale before
                what comes next.
              </p>
              <button className="text-link" onClick={() => scrollToId("why-agara")}>
                Our point of view <ArrowDownRight size={15} strokeWidth={1.7} />
              </button>
            </Reveal>
            <div className="ritual-image-wrap">
              <Reveal delay={0.18} className="ritual-image ritual-image--matcha">
                <img
                  src={matchaImage}
                  alt="Ceremonial matcha, bamboo whisk, and fresh leaves on warm stone"
                />
                <span>01 / Calm energy</span>
              </Reveal>
              <Reveal delay={0.28} className="ritual-image ritual-image--coffee">
                <img
                  src={coffeeImage}
                  alt="Dark roast coffee beside roasted arabica beans on walnut"
                />
                <span>02 / Grounded focus</span>
              </Reveal>
              <div className="ritual-image__center-mark">
                <img src={monogram} alt="" />
              </div>
            </div>
          </section>
        </FlowSection>

        <FlowSection id="focus" aria-label="02 — FOCUS" style={{ backgroundColor: "#F6F3EE" }}>
          <section className="media-interlude" aria-labelledby="motion-title">
            <div className="media-interlude__rail">
              <Reveal>
                <div className="section-marker">
                  <img src={monogram} alt="" />
                  <p className="section-number">02 — FOCUS</p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 id="motion-title">
                  An experience
                  <br />
                  <em>you can feel.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p>From first pour to last sip, the good part is in the details.</p>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="media-interlude__film-wrap">
              <VideoFrame
                src={dualRitualVideo}
                poster={dualPoster}
                label="Fuel your day — elevate your life"
                className="media-interlude__film"
              />
            </Reveal>
          </section>
        </FlowSection>

        <FlowSection id="matcha" aria-label="03 — RESTORE (MATCHA)" style={{ backgroundColor: "#F5F7EE" }}>
          <section className="lifestyle-section" aria-labelledby="matcha-lifestyle-title">
            <VideoFrame
              src={lifestyleVideo}
              poster={matchaPoster}
              label="The Agara morning experience — Matcha"
              className="lifestyle-section__film"
            />
            <div className="lifestyle-section__copy">
              <Reveal>
                <div className="section-marker">
                  <img src={monogram} alt="" />
                  <p className="section-number">03 — RESTORE (MATCHA)</p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 id="matcha-lifestyle-title">
                  Start with
                  <br />
                  <em>something steady.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  Ceremonial-grade matcha with botanical adaptogens for calm energy,
                  clear focus, and a considered pace.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <button
                  className="text-link"
                  onClick={() => scrollToId("ingredients")}
                >
                  See what’s inside <ArrowDownRight size={15} strokeWidth={1.7} />
                </button>
              </Reveal>
            </div>
          </section>
        </FlowSection>

        <FlowSection id="coffee" aria-label="04 — GROUND (COFFEE)" style={{ backgroundColor: "#F8F4EE" }}>
          <section className="lifestyle-section lifestyle-section--coffee lifestyle-section--reversed" aria-labelledby="coffee-lifestyle-title">
            <VideoFrame
              src={coffeeVideo}
              poster={coffeePoster}
              label="The Agara morning experience — Coffee"
              className="lifestyle-section__film"
            />
            <div className="lifestyle-section__copy">
              <Reveal>
                <div className="section-marker">
                  <img src={monogram} alt="" />
                  <p className="section-number">04 — GROUND (COFFEE)</p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 id="coffee-lifestyle-title">
                  A deeper way
                  <br />
                  <em>to begin.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  Dark roast arabica blend infused with functional botanicals for
                  grounded energy, steady clarity, and a better first hour.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <button
                  className="text-link"
                  onClick={() => scrollToId("ingredients")}
                >
                  See what’s inside <ArrowDownRight size={15} strokeWidth={1.7} />
                </button>
              </Reveal>
            </div>
          </section>
        </FlowSection>

        <FlowSection id="why-agara" aria-label="05 — THE FORMULA" style={{ backgroundColor: "var(--agara-cream)" }}>
          <section
            id="why-agara"
            className="why-section"
            aria-labelledby="why-title"
          >
            <div className="why-section__headline">
              <Reveal>
                <div className="section-marker">
                  <img src={monogram} alt="" />
                  <p className="section-number">05 — THE FORMULA</p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 id="why-title">
                  Good energy
                  <br />
                  <span>has a texture.</span>
                </h2>
              </Reveal>
            </div>
            <div className="why-section__statement">
              <Reveal delay={0.16}>
                <p className="large-statement">
                  Not louder.
                  <br />
                  <em>More considered.</em>
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="body-copy">
                  We pair familiar daily moments with functional ingredients so your
                  energy feels less like a spike to chase and more like a place to
                  return to.
                </p>
              </Reveal>
            </div>
            <div className="benefit-list">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isOpen = expandedBenefit === index;
                return (
                  <Reveal key={benefit.label} delay={0.08 * index}>
                    <button
                      className={`benefit-row ${isOpen ? "benefit-row--open" : ""}`}
                      onClick={() => setExpandedBenefit(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="benefit-row__icon">
                        <Icon size={19} strokeWidth={1.35} />
                      </span>
                      <span className="benefit-row__label">{benefit.label}</span>
                      <span className="benefit-row__detail">{benefit.detail}</span>
                      <span className="benefit-row__toggle">
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </section>
        </FlowSection>

        <FlowSection id="ingredients" aria-label="06 — INSIDE" style={{ backgroundColor: "#FAF7F2" }}>
          <section
            id="ingredients"
            className="evidence-section"
            aria-labelledby="evidence-title"
          >
        <div className="section-intro evidence-section__intro">
          <Reveal>
            <div className="section-marker">
              <img src={monogram} alt="" />
              <p className="section-number">06 — INSIDE</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="evidence-title">
              Every ingredient,
              <br />
              <em>and what we can honestly say about it.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="evidence-section__lede">
              Functional ingredients are easy to name and hard to substantiate.
              So here is the full formula with an honest read on the research
              behind each one &mdash; including the ingredients where the
              evidence is still thin.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="evidence-key">
          <div className="evidence-key__scale">
            <span className="evidence-key__row">
              <EvidenceStars
                rating={3}
                label="Strong human clinical evidence"
              />{" "}
              Strong human clinical evidence
            </span>
            <span className="evidence-key__row">
              <EvidenceStars rating={2} label="Promising, with limits" />{" "}
              Promising, with limits
            </span>
            <span className="evidence-key__row">
              <EvidenceStars rating={1} label="Primarily preclinical" />{" "}
              Primarily preclinical
            </span>
          </div>
          <p className="evidence-key__note">{evidenceKeyNote}</p>
        </Reveal>

        <Reveal delay={0.24}>
          <div
            className="evidence-filter"
            role="group"
            aria-label="Filter ingredients by product"
          >
            {(
              [
                ["all", "Full formula"],
                ["matcha", "MATCHAGARA"],
                ["coffee", "Agara Cafe"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={scopeFilter === key}
                className={scopeFilter === key ? "is-active" : ""}
                onClick={() => selectScope(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <p className="sr-only" role="status">
          {`Showing ${visibleIngredients.length} of ${ingredients.length} ingredients.`}
        </p>

        <div className="evidence-list">
          {visibleIngredients.map((item, index) => {
            const isOpen = openIngredient === item.id;
            return (
              <Reveal key={item.id} delay={Math.min(0.06 * index, 0.3)}>
                <article
                  className={`evidence-card ${isOpen ? "evidence-card--open" : ""}`}
                >
                  <h3 className="evidence-card__heading">
                    <button
                      className="evidence-card__trigger"
                      aria-expanded={isOpen}
                      aria-controls={`evidence-panel-${item.id}`}
                      id={`evidence-trigger-${item.id}`}
                      onClick={() => setOpenIngredient(isOpen ? null : item.id)}
                    >
                      <span className="evidence-card__names">
                        <span className="evidence-card__name">{item.name}</span>
                        {item.latin ? (
                          <span className="evidence-card__latin">
                            {item.latin}
                          </span>
                        ) : null}
                      </span>
                      <span className="evidence-card__meta">
                        <span className="evidence-card__scope">
                          {scopeLabels[item.scope]}
                        </span>
                        <EvidenceStars
                          rating={item.rating}
                          label={item.ratingLabel}
                        />
                        <span
                          className="evidence-card__toggle"
                          aria-hidden="true"
                        >
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </span>
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`evidence-panel-${item.id}`}
                        role="region"
                        aria-labelledby={`evidence-trigger-${item.id}`}
                        initial={
                          reduceMotion ? false : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { duration: 0.36, ease: [0.23, 1, 0.32, 1] }
                        }
                        className="evidence-card__panel"
                      >
                        <div className="evidence-card__panel-inner">
                          <div className="evidence-card__field">
                            <span className="evidence-card__field-label">
                              What it is
                            </span>
                            <p>{item.whatItIs}</p>
                          </div>
                          <div className="evidence-card__field">
                            <span className="evidence-card__field-label">
                              Why it&rsquo;s here
                            </span>
                            <p>{item.whyItsHere}</p>
                          </div>
                          <div className="evidence-card__field">
                            <span className="evidence-card__field-label">
                              What the research says
                            </span>
                            <p>{item.whatResearchSays}</p>
                          </div>
                          {item.safetyNote ? (
                            <p className="evidence-card__safety">
                              <Flame
                                size={17}
                                strokeWidth={1.5}
                                aria-hidden="true"
                              />
                              <span>
                                <strong>Good to know:</strong> {item.safetyNote}
                              </span>
                            </p>
                          ) : null}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="evidence-disclaimer">
          <p className="evidence-disclaimer__fda">{fdaDisclaimer}</p>
          <p className="evidence-disclaimer__body">
            Ingredient information reflects the formula as published by Agara.
            Research summaries describe studies on the individual ingredients,
            not on the finished Agara blends. If you are pregnant, nursing,
            taking prescription medication, or managing a health condition, talk
            to your clinician before adding any functional beverage to your
            routine.
          </p>
          <div className="flex flex-wrap gap-4 items-center mt-6">
            <button
              type="button"
              className="button button--espresso"
              onClick={() => setResearchDialogOpen(true)}
            >
              <BookOpen size={16} />
              Open Full Clinical Research Portal
            </button>
            <button
              type="button"
              className="text-link"
              onClick={() => scrollToId("research")}
            >
              Jump to on-page summary{" "}
              <ArrowDownRight size={16} strokeWidth={1.7} />
            </button>
          </div>
        </Reveal>
      </section>
    </FlowSection>

    <FlowSection id="research" aria-label="07 — CLINICAL & MARKET RESEARCH" style={{ backgroundColor: "#F3EFEA" }}>
      <section
        id="research"
        className="research-section"
        aria-labelledby="research-title"
      >
        <div className="research-section__intro">
          <Reveal>
            <div className="section-marker">
              <img src={monogram} alt="" />
              <p className="section-number">07 — CLINICAL & MARKET RESEARCH</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="research-title">
              Biochemical pathways,
              <br />
              <em>kinetics & market analysis.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              Explore our formulation matrix, 6-hour pharmacokinetic caffeine curves, receptor pathways, and complete market unit economics directly within this integrated overview.
            </p>
          </Reveal>
        </div>

        <div className="research-cards-grid">
          <Reveal delay={0.1}>
            <div className="research-card-native">
              <div>
                <div className="research-card-native__header">
                  <div className="research-card-native__icon">
                    <Activity size={22} />
                  </div>
                  <span className="research-card-native__badge">Pharmacokinetics</span>
                </div>
                <h3 className="research-card-native__title">
                  6-Hour Sustained Curve vs 45-Min Spike
                </h3>
                <p className="research-card-native__desc">
                  Matcha polyphenol complexes and L-Theanine modulate caffeine bioavailability, supporting a steady, balanced energy curve and sustained alert focus.
                </p>
                <ul className="research-card-native__points">
                  <li>
                    <CheckCircle2 size={16} />
                    <span>L-Theanine stimulates alpha-1 brainwave oscillations (8–13 Hz)</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Smoothed caffeine plasma absorption curve spanning 6+ hours</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Calm, sustained alertness without abrupt energy dips</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="text-link"
                onClick={() => setResearchDialogOpen(true)}
              >
                View Kinetic Curves <ArrowUpRight size={14} />
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="research-card-native">
              <div>
                <div className="research-card-native__header">
                  <div className="research-card-native__icon">
                    <Layers size={22} />
                  </div>
                  <span className="research-card-native__badge">Formulation Axes</span>
                </div>
                <h3 className="research-card-native__title">
                  Multi-Targeted Neuro & Metabolic Synergy
                </h3>
                <p className="research-card-native__desc">
                  Botanical extracts work in concert across cognitive resilience, glycemic stabilization, and cellular mitochondrial energy synthesis.
                </p>
                <ul className="research-card-native__points">
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Lion&apos;s Mane hericenones support BDNF neuroplastic pathways</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Berberine HCL activates AMPK cellular energy sensor</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>ChromeMate® chromium niacin-bound insulin sensitization</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="text-link"
                onClick={() => setResearchDialogOpen(true)}
              >
                View Formulation Matrix <ArrowUpRight size={14} />
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="research-card-native">
              <div>
                <div className="research-card-native__header">
                  <div className="research-card-native__icon">
                    <BarChart3 size={22} />
                  </div>
                  <span className="research-card-native__badge">Unit Economics</span>
                </div>
                <h3 className="research-card-native__title">
                  Everyday Habit with Premium Moat
                </h3>
                <p className="research-card-native__desc">
                  Agara replaces multi-item coffee and supplement routines into a single, high-margin, daily consumable habit.
                </p>
                <ul className="research-card-native__points">
                  <li>
                    <CheckCircle2 size={16} />
                    <span>$3.20 cost/serving vs $7.50+ retail coffee bar purchases</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>78% target direct-to-consumer gross margin profile</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Positioned in fast-growing $14B+ functional beverage sector</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="text-link"
                onClick={() => setResearchDialogOpen(true)}
              >
                View Financial Models <ArrowUpRight size={14} />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="research-cta-banner">
            <div>
              <h3>Interactive Clinical & Market Dossier</h3>
              <p>
                Access the comprehensive research dossier including interactive pharmacokinetic modeling, ingredient clinical trial databases, and full financial breakdowns.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setResearchDialogOpen(true)}
            >
              <BookOpen size={18} />
              <span>Launch Research Workspace</span>
            </button>
          </div>
        </Reveal>
      </section>
    </FlowSection>

    <FlowSection id="journal" aria-label="ELEVATE YOUR DAY" style={{ backgroundColor: "var(--agara-cream)" }}>
      <section
        id="journal"
        className="closing-section"
        aria-labelledby="closing-title"
      >
        <Reveal className="closing-section__image">
          <VideoFrame
            src={dualRitualVideo}
            poster={dualPoster}
            label="Fuel your day — elevate your life"
            className="closing-section__film"
          />
          <div className="closing-section__stamp">
            <Flame size={18} strokeWidth={1.25} />
            <span>
              Elevated
              <br />
              life
            </span>
          </div>
        </Reveal>
        <div className="closing-section__copy">
          <Reveal>
            <div className="section-marker">
              <img src={monogram} alt="" />
              <p className="section-number">ELEVATE YOUR DAY</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="closing-title">
              Begin with
              <br />
              <em>one good thing.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              Build a daily experience you look forward to. Something with enough
              intention to change the pace of a day.
            </p>
          </Reveal>
          <Reveal delay={0.22} className="closing-section__actions">
            <button
              className="button button--espresso"
              onClick={showComingSoon}
            >
              Explore Agara <ArrowUpRight size={16} strokeWidth={1.6} />
            </button>
            <button className="text-link" onClick={() => scrollToId("top")}>
              Back to the beginning <ArrowUpRight size={15} strokeWidth={1.7} />
            </button>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <Reveal>
          <div className="footer-brand">
            <img src={monogram} alt="" />
            <span>
              AG<span className="brand-lockup__caret">A</span>RA
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p>
            Fuel your day.
            <br />
            Elevate your life.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="footer-links">
            <button onClick={showComingSoon}>Instagram</button>
            <button onClick={showComingSoon}>Contact</button>
            <button onClick={() => scrollToId("experience")}>The Experience</button>
            <button onClick={() => scrollToId("why-agara")}>Why Agara</button>
            <button onClick={() => scrollToId("ingredients")}>Ingredients</button>
            <button onClick={() => scrollToId("research")}>Research</button>
            <button onClick={() => scrollToId("journal")}>Journal</button>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <span className="footer-meta">© 2026 Agara</span>
        </Reveal>
      </footer>
    </FlowSection>
  </FlowArt>

      {showExperience ? (
        <div
          className="fixed inset-0 z-[200]"
          role="dialog"
          aria-modal="true"
          aria-label="Agara visual experience"
        >
          <button
            type="button"
            onClick={() => setShowExperience(false)}
            aria-label="Close the visual experience"
            className="absolute right-6 top-6 z-[210] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <X size={20} strokeWidth={1.8} />
          </button>
          <AnimatedScroll />
        </div>
      ) : null}

      <ResearchDialog
        open={researchDialogOpen}
        onOpenChange={setResearchDialogOpen}
      />
    </main>
  );
}
