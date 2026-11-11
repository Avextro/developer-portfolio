import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
 import "./Carousel.css";

interface CarouselProps {
  children: ReactNode;
}

function Carousel({ children }: CarouselProps) {

  const items = Children.toArray(children);

  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  const durationMsRef = useRef(30000);
  const pixelTimeRef = useRef(0);
  const VIEWPORT_CROSSING_SECONDS = 15;

  const dragStartX = useRef(0);
  const dragStartTime = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const group = groupRef.current;
    const track = trackRef.current;
    const viewport = viewportRef.current;

    if (!group || !track || !viewport) return;

    animationRef.current = track.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      {
        duration: durationMsRef.current,
        iterations: Infinity,
        easing: "linear",
      },
    );

    const updateDuration = () => {
      const groupWidth = group.getBoundingClientRect().width;
      const averageItemWidth = groupWidth / items.length;
      const viewportWidth = viewport.clientWidth;

      if (groupWidth <= 0 || viewportWidth <= 0 || averageItemWidth <= 0)
        return;

      const newDurationMs =
        (groupWidth / (averageItemWidth + viewportWidth)) *
        VIEWPORT_CROSSING_SECONDS *
        1000;

      console.log("Viewport resized:", viewportWidth);

      durationMsRef.current = newDurationMs;
      pixelTimeRef.current = newDurationMs / groupWidth;

      animationRef.current?.effect?.updateTiming({
        duration: newDurationMs,
      });

      console.log({
        viewportWidth,
        newDurationSeconds: newDurationMs / 1000,
        actualDuration: animationRef.current?.effect?.getTiming().duration,
      });
    };

    const observer = new ResizeObserver(updateDuration);

    observer.observe(group);
    observer.observe(track);
    observer.observe(viewport);

    updateDuration();

    return () => {
      animationRef.current?.cancel();
      animationRef.current = null;
      observer.disconnect();
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;

    event.currentTarget.setPointerCapture(event.pointerId);
    dragStartX.current = event.clientX;

    const currentTime = animationRef.current?.currentTime;
    dragStartTime.current = typeof currentTime === "number" ? currentTime : 0;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId);

    isDragging.current = false;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    const dragDistance = dragStartX.current - event.clientX;

    const newTime = dragStartTime.current + dragDistance * pixelTimeRef.current;
    const durationMs = durationMsRef.current;
    const wrappedTime = ((newTime % durationMs) + durationMs) % durationMs;

    if (animationRef.current) {
      animationRef.current.currentTime = wrappedTime;
    }
  };

  const handlePointerCancel = () => {
    isDragging.current = false;
    animationRef.current?.play();
  };

  return (
    <div className="carousel relative w-full ">
      <div
        className="carousel-mask w-full overflow-hidden"
        ref={viewportRef}
        role="region"
        aria-label="Carousel"
        tabIndex={0}
      >
        <div
          className="flex w-max select-none"
          ref={trackRef}
          onMouseEnter={() => animationRef.current?.pause()}
          onMouseLeave={() => animationRef.current?.play()}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerMove={handlePointerMove}
          onPointerCancel={handlePointerCancel}
        >
          <div className="flex shrink-0 gap-3 pr-3" ref={groupRef}>
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
