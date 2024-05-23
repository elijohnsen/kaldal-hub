import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://picsum.photos/id/237/600/400",
  "https://picsum.photos/id/238/600/400",
  "https://picsum.photos/id/239/600/400",
];

function CarouselDemo() {
  return (
    <>
      {/* Only the div beyond  */ }
      <div className="xl:w-4/5 2xl:w-3/5 mx-auto">
        <Carousel useKeyboardArrows={true} showArrows={true} showThumbs={false}>
          {images.map((URL, index) => (
            <div key={index}>
              <img alt="sample_file" src={URL} className="w-full " />
            </div>
          ))}
        </Carousel>
          
          
          
      </div>
    </>
  );
}

export default CarouselDemo;
