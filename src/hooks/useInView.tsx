import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element once any part of it enters the viewport.
 * Uses threshold 0 so very tall sections (e.g. the portfolio on phones, which
 * can be many screens tall) still trigger — a ratio threshold can never be met
 * when the element is taller than the viewport divided by that ratio.
 */
export function useInView(_threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}
