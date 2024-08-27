import { useEffect, useState, RefObject } from "react";

export default function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {
    threshold: 0,
  }
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}
