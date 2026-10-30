import { Children, type ReactNode } from "react";
import "./Carousel.css";

interface CarouselProps {
  children: ReactNode;
}

function Carousel({ children }: CarouselProps) {
  return (
    <div className="carousel">
      <div
        className="carousel-track"
        role="region"
        aria-label="Carousel"
        tabIndex={0}
      >
        <div className="carousel-content">
          <div className="carousel-group">
            {Children.map(children, (child, index) => (
              <div key={`original-${index}`}>{child}</div>
            ))}
          </div>

          <div className="carousel-group" aria-hidden="true">
            {Children.map(children, (child, index) => (
              <div key={`duplicate-${index}`}>{child}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
