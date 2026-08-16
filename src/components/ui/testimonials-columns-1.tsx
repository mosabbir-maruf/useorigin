import React from "react";
import { motion } from "motion/react";

export type TestimonialItem = {
  text: string;
  avatar: string;
  initials: string;
  name: string;
  role: string;
  metric?: { label: string; value: string };
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(
                ({ text, avatar, initials, name, role, metric }, i) => (
                  <div
                    key={i}
                    className="p-7 max-w-xs w-full t-colors"
                    style={{
                      background: "var(--white)",
                      border: "1px solid var(--rule)",
                      borderRadius: 22,
                      transition: "border-color 0.3s ease",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 13.5,
                        lineHeight: 1.7,
                        color: "var(--ink)",
                      }}
                    >
                      {text}
                    </p>
                    <div
                      className="flex items-center justify-between mt-6 pt-5"
                      style={{ borderTop: "1px solid var(--rule)" }}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="flex items-center justify-center rounded-full shrink-0 overflow-hidden"
                          style={{
                            width: 38,
                            height: 38,
                            background: "var(--rule)",
                            border: "1px solid var(--rule)",
                          }}
                        >
                          <img
                            src={avatar}
                            alt={name}
                            width={38}
                            height={38}
                            loading="lazy"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.currentTarget.nextElementSibling?.classList.remove(
                                "hidden",
                              );
                            }}
                          />
                          <span
                            className="f-mono hidden"
                            style={{ fontSize: 11, color: "var(--ink)" }}
                          >
                            {initials}
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div
                            className="font-syne truncate"
                            style={{
                              fontSize: 13,
                              fontWeight: 500,
                              color: "var(--ink)",
                              lineHeight: 1.3,
                            }}
                          >
                            {name}
                          </div>
                          <div
                            className="f-mono truncate"
                            style={{
                              fontSize: 10,
                              letterSpacing: "0.04em",
                              color: "var(--dim)",
                              lineHeight: 1.4,
                            }}
                          >
                            {role}
                          </div>
                        </div>
                      </div>
                      {metric && (
                        <div className="text-right shrink-0 pl-3">
                          <div
                            className="f-mono"
                            style={{
                              fontSize: 14,
                              fontWeight: 300,
                              color: "var(--jade)",
                            }}
                          >
                            {metric.value}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ),
              )}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
