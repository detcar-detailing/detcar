import { Button } from "@/components/ui/button";
import LightGallery from "lightgallery/react";

// Import lightGallery styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const images = [
  "/gallery-demo-image-1.jpg",
  "/gallery-demo-image-2.jpg",
  "/gallery-demo-image-3.jpg",
  "/gallery-demo-image-4.jpg",
  "/gallery-demo-image-5.jpg",
  "/gallery-demo-image-6.jpg",
  "/gallery-demo-image-7.jpg",
  "/gallery-demo-image-8.jpg",
  "/gallery-demo-image-9.jpg",
];

const GallerySection: React.FC = () => {
  return (
    <section className="mt-4 border-t-2 border-dashed border-myColor-orange border-opacity-10 px-4 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Part: Text and Button */}
        <div className="flex w-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h2 className="mb-4 text-4xl font-bold text-myColor-white">
            Take a closer look at our work
          </h2>
          <Button
            className="mt-2 h-[50px] w-[200px] !bg-myColor-orange text-xl font-semibold transition-colors hover:!bg-opacity-80"
            onClick={() => (window.location.href = "/gallery")} // Link to the gallery page
          >
            View Gallery
          </Button>
        </div>

        {/* Right Part (3x3 Grid of Images with lightGallery) */}
        <div className="grid grid-cols-3 gap-1 md:gap-4">
          {images.map((src, index) => (
            <div key={index} className="block">
              <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                <a href={src}>
                  <div className="relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
                    {/* Wider Image, maintaining aspect ratio without cropping */}
                    <img
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      className="h-auto w-full max-w-full object-cover transition-transform duration-300 hover:scale-105"
                      style={{ aspectRatio: "16/9" }} // Making images wider without cropping
                    />
                  </div>
                </a>
              </LightGallery>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
