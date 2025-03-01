import React, { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const pdfs = [
  { id: 1, title: 'Sample 1', url: '/pdfs/sample1.pdf', thumbnail: '/thumbnails/sample1.jpg' },
  { id: 2, title: 'Sample 2', url: '/pdfs/sample2.pdf', thumbnail: '/thumbnails/sample2.jpg' },
  { id: 3, title: 'Sample 3', url: '/pdfs/sample3.pdf', thumbnail: '/thumbnails/sample3.jpg' },
];

const MagBody = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pdfs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pdfs.length) % pdfs.length);
  };

  return (
    <div className="p-6 rounded-lg shadow-lg max-w-4xl mx-auto text-center relative">
      <h2 className="text-2xl font-semibold mb-6">PDF Viewer</h2>
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button 
          onClick={prevSlide} 
          className="absolute left-0 p-3 bg-gray-200 bg-opacity-70 hover:bg-gray-300 rounded-full z-10 transition-opacity duration-300" 
          style={{ left: '-100px' }} // Adjust the value as needed
        >
          <ChevronLeft size={32} />
        </button>
        
        {/* Thumbnails with Reflection */}
        <div className="flex gap-4 items-center overflow-hidden w-full justify-center">
          {pdfs.map((pdf, index) => (
            <div
              key={pdf.id}
              className={`relative transition-all duration-300 transform ${
                index === currentIndex ? 'scale-125 opacity-100 cursor-pointer' : 'scale-90 opacity-50 pointer-events-none'
              }`}
              onClick={() => index === currentIndex && window.open(pdf.url, '_blank')}
            >
              <img
                src={pdf.thumbnail}
                alt={pdf.title}
                className="w-64 h-96 object-cover shadow-xl rounded-lg"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  Click on this to open the PDF
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Right Arrow */}
        <button onClick={nextSlide} className="absolute right-10 p-3 bg-gray-200 bg-opacity-70 hover:bg-gray-300 rounded-full z-10 transition-opacity duration-300"
          style={{ right: '-100px' }} // Adjust the value as needed
        >
        <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default MagBody;
