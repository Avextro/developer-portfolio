import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import "./Carousel.css";

interface CarouselProps {
  children: ReactNode;
}

function Carousel({ children }: CarouselProps) {
  const items = Children.toArray(children);

  const groupRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [duration, setDuration] = useState(30);

  const VIEWPORT_CROSSING_SECONDS = 15;

  useEffect(() => {
    const group = groupRef.current;
    const track = trackRef.current;

    if (!group || !track) return;

    const updateDuration = () => {
      const groupWidth = group.getBoundingClientRect().width;
      const viewportWidth = track.clientWidth;

      if (groupWidth <= 0 || viewportWidth <= 0) return;

      setDuration((groupWidth * VIEWPORT_CROSSING_SECONDS) / viewportWidth);
    };

    const observer = new ResizeObserver(updateDuration);

    observer.observe(group);
    observer.observe(track);

    updateDuration();

    return () => observer.disconnect();
  }, []);

  return (
    <div className="carousel relative w-full">
      <div
        ref={trackRef}
        className="carousel-mask w-full overflow-hidden"
        role="region"
        aria-label="Carousel"
        tabIndex={0}
      >
        <div
          className="flex w-max animate-carousel"
          style={{ animationDuration: `${duration}s` }}
        >
          <div ref={groupRef} className="flex shrink-0 gap-3 pr-3">
            {items}
          </div>

          <div className="flex shrink-0 gap-3 pr-3" aria-hidden="true">
            {items.map((child, index) =>
              isValidElement(child)
                ? cloneElement(child, {
                    key: `duplicate-${index}`,
                  })
                : child,
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
