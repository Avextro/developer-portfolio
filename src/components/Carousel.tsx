import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import "./Carousel.css";

interface CarouselProps {
  children: ReactNode;
}

function Carousel({ children }: CarouselProps) {
  const items = Children.toArray(children);
  return (
    <div className="carousel relative w-full">
      <div
        className="carousel-mask w-full overflow-hidden"
        role="region"
        aria-label="Carousel"
        tabIndex={0}
      >
        <div className="flex w-max animate-carousel">
          <div className="flex shrink-0 gap-3 pr-3">{items}</div>

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
