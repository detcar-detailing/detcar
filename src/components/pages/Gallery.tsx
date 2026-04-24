import React from "react";
import LightGallery from "lightgallery/react";

// Import lightGallery styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Import lightGallery plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const facilityImages = [
  "https://via.placeholder.com/300x200", // Replace with your image URLs
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
];

const detailingImages = [
  "https://via.placeholder.com/300x200", // Replace with your image URLs
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
];

const reconditioningImages = [
  "https://via.placeholder.com/300x200", // Replace with your image URLs
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
];

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URLs
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
];

const Gallery: React.FC = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex h-[36vh] items-end justify-start">
        <h1 className="mb-12 ml-8 pt-20 text-center text-5xl font-bold text-myColor-orange md:ml-24">
          Gallery
        </h1>
      </div>

      {/* Facility Section */}
      <div className="bg-myColor-white p-4 md:p-20">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800">Facility</h2>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {facilityImages.map((src, index) => (
            <a href={src} key={index}>
              <img
                src={src}
                alt={`Facility image ${index + 1}`}
                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </a>
          ))}
        </LightGallery>
      </div>

      {/* Detailing Section */}
      <div className="bg-myColor-white p-4 md:p-20">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800">Detailing</h2>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {detailingImages.map((src, index) => (
            <a href={src} key={index}>
              <img
                src={src}
                alt={`Detailing image ${index + 1}`}
                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </a>
          ))}
        </LightGallery>
      </div>

      {/* Reconditioning Section */}
      <div className="bg-myColor-white p-4 md:p-20">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800">
          Reconditioning
        </h2>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {reconditioningImages.map((src, index) => (
            <a href={src} key={index}>
              <img
                src={src}
                alt={`Reconditioning image ${index + 1}`}
                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </a>
          ))}
        </LightGallery>
      </div>

      {/* Video Section - Embed YouTube Videos */}
      <div className="bg-myColor-white p-4 md:p-20">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800">
          Our Videos
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {videos.map((videoUrl, index) => (
            <div className="aspect-w-16 aspect-h-9 w-full" key={index}>
              <iframe
                className="h-full w-full rounded-lg"
                src={videoUrl}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
