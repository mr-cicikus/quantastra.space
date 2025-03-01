import React, { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

const translations = {
  en: {
    click: 'Click to read',
    first: 'Quantastra: Quantum Magazine, 1st Issue',
    second: 'Quantastra: Quantum Magazine, 2nd Issue',
    third: 'Quantastra: Quantum Magazine, 3rd Issue',
    fourth: 'Quantastra: Quantum Magazine, 4th Issue',
  },
  tr: {
    click: 'Okumak için tıklayınız',
    first: 'Quantastra: Kuantum Dergisi, 1. Sayı',
    second: 'Quantastra: Kuantum Dergisi, 2. Sayı',
    third: 'Quantastra: Kuantum Dergisi, 3. Sayı',
    fourth: 'Quantastra: Kuantum Dergisi, 4. Sayı',
  },
};

const MagBody = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const pdfs = [
    { id: 1, title: translations[language]?.first, url: '/pdfs/sample1.pdf', thumbnail: '/thumbnails/sample1.jpg' },
    { id: 2, title: translations[language]?.second, url: '/pdfs/sample2.pdf', thumbnail: '/thumbnails/sample2.jpg' },
    { id: 3, title: translations[language]?.third, url: '/pdfs/sample3.pdf', thumbnail: '/thumbnails/sample3.jpg' },
    { id: 4, title: translations[language]?.fourth, url: '/pdfs/sample4.pdf', thumbnail: '/thumbnails/sample4.jpg' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pdfs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pdfs.length) % pdfs.length);
  };

  return (
    <div className="p-4 rounded-lg shadow-lg max-w-4xl mx-auto text-center relative mt-10">
      <div className="mb-20">
      <p className="text-xl font-medium text-gray-300 opacity-100">
          {pdfs[currentIndex].title}
      </p>
      </div>
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 p-3 bg-gray-200 bg-opacity-20 hover:bg-gray-400 rounded-full z-10 transition-opacity duration-300"
          style={{ left: '-100px' }} // Adjust the value as needed
        >
          <ChevronLeft size={32} />
        </button>

        {/* Thumbnails with Reflection */}
        <div className="flex gap-0 items-center w-full justify-center">
          {pdfs.map((pdf, index) => (
            <div
              key={pdf.id}
              className={`relative transition-all duration-300 ${
                index === currentIndex
                  ? 'opacity-100 cursor-pointer' // Focused thumbnail
                  : 'opacity-50 pointer-events-none' // Other thumbnails
              }`}
              style={{
                transition: 'transform 0.3s ease-in-out', // Ensure both scaling and translation are animated
                transform: `translateX(${(index - currentIndex) * 50}px) scale(${index === currentIndex ? 1.25 : 0.9})`, // Combine scale and translation
              }}
              onClick={() => index === currentIndex && window.open(pdf.url, '_blank')}
            >
              <img
                src={pdf.thumbnail}
                alt={pdf.title}
                className="w-96 h-75 object-cover shadow-xl rounded-lg"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  {translations[language].click}
                  <ExternalLink size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-10 p-3 bg-gray-200 bg-opacity-20 hover:bg-gray-400 rounded-full z-10 transition-opacity duration-300"
          style={{ right: '-100px' }} // Adjust the value as needed
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default MagBody;
