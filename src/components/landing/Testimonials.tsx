import { useMemo } from "react";
import { testimonials, getCreator, avatarUrl } from "@/data/mockData";
import {
  TestimonialsColumn,
  type TestimonialItem,
} from "@/components/ui/testimonials-columns-1";
import { Parallax } from "@/components/ui/parallax";
import Section from "@/components/ui/section";

export default function Testimonials() {
  const items: TestimonialItem[] = useMemo(
    () =>
      testimonials.map((t) => {
        const creator = getCreator(t.creatorId);
        return {
          text: t.quote,
          avatar: avatarUrl(creator.id),
          initials: creator.initials,
          name: creator.name,
          role: t.role,
          metric: t.metric,
        };
      }),
    [],
  );

  const firstColumn = items.slice(0, 3);
  const secondColumn = items.slice(3, 6);
  const thirdColumn = items.length > 6 ? items.slice(6, 9) : items.slice(0, 3);

  return (
    <Section gradient="radial-gradient(45% 55% at 50% 100%, rgba(255,60,0,0.10), transparent 70%)">
        <Parallax
          offset={[40, -40]}
          className="flex flex-col items-center text-center max-w-[560px] mx-auto mb-8"
        >
          <div
            className="f-mono inline-flex items-center gap-2"
            style={{
              fontSize: 9,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "var(--dim)",
              marginBottom: 18,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "var(--jade)",
              }}
            />
            Creators on Origin
          </div>
          <h2
            className="font-syne"
            style={{
              fontSize: "clamp(32px,3.5vw,52px)",
              lineHeight: 0.95,
              fontWeight: 300,
              color: "var(--ink)",
            }}
          >
            Funded, shipped,
            <br />
            <em
              className="font-instrument"
              style={{ fontStyle: "italic", color: "var(--jade)" }}
            >
              on the record
            </em>
          </h2>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: "var(--dim)",
              marginTop: 20,
            }}
          >
            187 projects funded to date. Here's what a few creators say about
            building with a treasury that answers to its community instead of a
            committee.
          </p>
        </Parallax>

        <div
          className="flex justify-center gap-6 mt-4"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            maxHeight: 640,
            overflow: "hidden",
          }}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={19}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={17}
            className="hidden lg:block"
          />
        </div>
    </Section>
  );
}
