import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageLayout from "../../../pages/users/PageLayouts/PageLayout";
import Subtitle from "../../Subtitle/Subtitle";

import Image1 from "../../../assets/images/innovators/meru15.jpeg";
import Image2 from "../../../assets/images/innovators/meru14.jpeg";
import Image3 from "../../../assets/images/innovators/meru13.jpeg";
import Image4 from "../../../assets/images/innovators/meru12.jpeg";
import Image5 from "../../../assets/images/innovators/meru11.jpeg";
import Image6 from "../../../assets/images/innovators/meru10.jpeg";
import Image7 from "../../../assets/images/innovators/meru9.jpeg";
import Image8 from "../../../assets/images/innovators/meru8.jpeg";
import Image9 from "../../../assets/images/innovators/meru7.jpeg";
import Image10 from "../../../assets/images/innovators/meru6.jpeg";
import Image12 from "../../../assets/images/innovators/meru5.jpeg";
import Image13 from "../../../assets/images/innovators/meru4.jpeg";
import Image14 from "../../../assets/images/innovators/meru3.jpeg";
import Image15 from "../../../assets/images/innovators/meru2.jpeg";
import Image16 from "../../../assets/images/innovators/meru1.jpeg";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image8,
  Image7,
  Image9,
  Image10,
  Image14,
  Image15,
  Image16,
  Image13,
  Image12,
];

const Gallery = () => {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setShuffledImages([...images].sort(() => Math.random() - 0.5));
  }, []);

  const openModal = (index) => {
    setSelectedImage(shuffledImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? shuffledImages.length - 1 : prev - 1
    );
    setSelectedImage(
      shuffledImages[
        currentIndex === 0 ? shuffledImages.length - 1 : currentIndex - 1
      ]
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === shuffledImages.length - 1 ? 0 : prev + 1
    );
    setSelectedImage(
      shuffledImages[
        currentIndex === shuffledImages.length - 1 ? 0 : currentIndex + 1
      ]
    );
  };

  // Handle keyboard navigation (arrow keys & Esc)
  const handleKeyDown = useCallback(
    (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeModal();
    },
    [selectedImage, prevImage, nextImage]
  );

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handleKeyDown]);

  return (
    <PageLayout title={"gallery"}>
      <div className="pt-[6rem]">
        <Subtitle title={"GALLERY"} />

        <div className="container mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shuffledImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-60 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
              onClick={() => openModal(index)}
            />
          ))}
        </div>
        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="max-w-4xl w-full p-4">
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={closeModal}
              >
                <X size={30} />
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Counter */}
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-gray-900 px-4 py-1 rounded-md">
                {currentIndex + 1} / {shuffledImages.length}
              </p>

              {/* Navigation Buttons */}
              <button
                className="absolute top-1/2 left-4 text-white bg-gray-900 p-3 rounded-full hover:bg-gray-700 transition"
                onClick={prevImage}
              >
                <ChevronLeft size={30} />
              </button>
              <button
                className="absolute top-1/2 right-4 text-white bg-gray-900 p-3 rounded-full hover:bg-gray-700 transition"
                onClick={nextImage}
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Gallery;
