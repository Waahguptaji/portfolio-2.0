import React, { useRef, ReactNode } from "react";
import useIntersectionObserver from "../lib/hooks/useIntersectionObserver";

interface AnimatedSectionWrapperProps {
  children: ReactNode;
  id: string;
}

const AnimatedSectionWrapper: React.FC<AnimatedSectionWrapperProps> = ({
  children,
  id,
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(ref, {
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </section>
  );
};

export default AnimatedSectionWrapper;
