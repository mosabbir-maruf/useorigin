import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Github,
  Instagram,
  Linkedin,
  Globe,
} from "@/components/ui/social-icons";

type AvatarProps = {
  imageSrc: string;
  delay: number;
};

const Avatar: React.FC<AvatarProps> = ({ imageSrc, delay }) => {
  return (
    <div
      className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg animate-fadeIn bg-neutral-800"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={imageSrc}
        alt="User avatar"
        width={40}
        height={40}
        decoding="async"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
};

const TrustElements: React.FC = () => {
  const avatars = [
    "/assets/avatars/07.png",
    "/assets/avatars/12.png",
    "/assets/avatars/16.png",
    "/assets/avatars/21.png",
  ];

  return (
    <div className="inline-flex items-center space-x-3 bg-gray-900/60 backdrop-blur-sm rounded-full py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm">
      <div className="flex -space-x-2 sm:-space-x-3">
        {avatars.map((avatar, index) => (
          <Avatar key={index} imageSrc={avatar} delay={index * 200} />
        ))}
      </div>
      <p
        className="text-white animate-fadeIn whitespace-nowrap font-syne"
        style={{ animationDelay: "800ms" }}
      >
        <span className="text-white font-semibold">3.1k</span> currently on the
        waitlist
      </p>
    </div>
  );
};

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="relative z-10 w-full">
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <label htmlFor="hero-waitlist-email" className="sr-only">
            Email address for waitlist
          </label>
          <input
            id="hero-waitlist-email"
            name="email"
            aria-label="Email address for waitlist"
            autoComplete="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-900/60 border border-gray-700 focus:border-white outline-none text-white text-sm sm:text-base shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 font-syne"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base font-syne t-colors ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            style={{ background: "var(--jade)", color: "var(--jade-fg)" }}
          >
            {isSubmitting ? (
              <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-[rgba(255,255,255,0.3)] border-t-white rounded-full animate-spin"></div>
            ) : (
              "Join The Waitlist"
            )}
          </button>
        </form>
      ) : (
        <div className="bg-green-500/20 border border-green-500/30 text-green-300 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-center animate-fadeIn text-sm sm:text-base font-syne">
          Thanks! We'll notify you when we launch.
        </div>
      )}
    </div>
  );
};

const GradientBars: React.FC = () => {
  const [numBars] = useState(15);

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;

    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);

    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="flex h-full"
        style={{
          width: "100%",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return (
            <div
              key={index}
              style={{
                flex: "1 0 calc(100% / 15)",
                maxWidth: "calc(100% / 15)",
                height: "100%",
                background:
                  "linear-gradient(to top, rgb(255, 60, 0), transparent)",
                transform: `scaleY(${height / 100})`,
                transformOrigin: "bottom",
                transition: "transform 0.5s ease-in-out",
                animation: "pulseBar 2s ease-in-out infinite alternate",
                animationDelay: `${index * 0.1}s`,
                outline: "1px solid rgba(0, 0, 0, 0)",
                boxSizing: "border-box",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Component: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col items-center px-4 sm:px-8 md:px-12 overflow-hidden"
    >
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 bg-gray-950"
      ></motion.div>
      <motion.div
        style={{
          y: yBackground,
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <GradientBars />
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[100dvh] py-12 sm:py-24"
      >
        <div className="mb-6 sm:mb-8">
          <TrustElements />
        </div>

        <h1 className="w-full text-white tracking-tight mb-6 sm:mb-8 animate-fadeIn px-2 sm:px-4">
          <span className="block font-inter font-medium text-[clamp(2.5rem,11vw,4.5rem)] leading-[1.1] sm:leading-[1.1] whitespace-normal sm:whitespace-nowrap">
            Fund the creators,
          </span>
          <span className="block font-instrument italic text-[clamp(2.5rem,11vw,4.5rem)] leading-[1.1] sm:leading-[1.1] whitespace-normal sm:whitespace-nowrap text-[#FF3C00]">
            who shape culture.
          </span>
        </h1>

        <div className="mb-8 sm:mb-10 px-2 sm:px-4">
          <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed animate-fadeIn animation-delay-200 font-syne">
            A community-governed treasury connecting independent creators with
            decentralized, milestone-gated funding.
          </p>
        </div>

        <div className="w-full max-w-xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4">
          <WaitlistForm />
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/mosabbir-maruf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
            title="GitHub"
          >
            <Github size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/mosabbir-maruf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
            title="LinkedIn"
          >
            <Linkedin size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </a>
          <a
            href="https://www.instagram.com/mosabbir_maruf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
            title="Instagram"
          >
            <Instagram size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </a>
          <a
            href="https://mosabbir.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
            title="Portfolio"
          >
            <Globe size={20} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
