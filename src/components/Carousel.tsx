import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import "./Carousel.css";

interface CarouselProps {
  children: ReactNode;
}

function Carousel({ children }: CarouselProps) {
  const items = Children.toArray(children);
  return (
    <div className="carousel">
      <div
        className="carousel-track"
        role="region"
        aria-label="Carousel"
        tabIndex={0}
      >
        <div className="carousel-content">
          <div className="carousel-group">{items}</div>

          <div className="carousel-group" aria-hidden="true">
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
