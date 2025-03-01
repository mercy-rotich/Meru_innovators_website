import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageLayout from "../../../pages/users/PageLayouts/PageLayout";
import Subtitle from "../../Subtitle/Subtitle";

const images = [
  "https://images.pexels.com/photos/8199602/pexels-photo-8199602.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7973205/pexels-photo-7973205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7973039/pexels-photo-7973039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7972556/pexels-photo-7972556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6209562/pexels-photo-6209562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6209562/pexels-photo-6209562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6209562/pexels-photo-6209562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8199602/pexels-photo-8199602.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7973205/pexels-photo-7973205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8199602/pexels-photo-8199602.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7973205/pexels-photo-7973205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8199602/pexels-photo-8199602.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7973205/pexels-photo-7973205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6209562/pexels-photo-6209562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8199231/pexels-photo-8199231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7683704/pexels-photo-7683704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8199231/pexels-photo-8199231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7683704/pexels-photo-7683704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8199231/pexels-photo-8199231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7683704/pexels-photo-7683704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6147395/pexels-photo-6147395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7972360/pexels-photo-7972360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6209107/pexels-photo-6209107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7972556/pexels-photo-7972556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6209562/pexels-photo-6209562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
