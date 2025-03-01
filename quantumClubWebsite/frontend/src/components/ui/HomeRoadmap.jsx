import React from 'react'
import { Button } from './button'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext';  // Import useLanguage

const translations = {
  en: {
    want: 'Want To Learn Quantum?',
    start: 'Start your journey with',
    roadmap: 'Quantum Roadmap!',
    take: 'Take me there!',
  },
  tr: {
    want: 'Kuantum hakkında bilgi edinmek istermisiniz?',
    start: 'O halde yolculuğunuza eşlik etmek için harika bir şey var:',
    roadmap: 'Kuantum Yol Haritası!',
    take: 'Beni oraya götür!'
  },
};

const HomeRoadmap = () => {
  const { language } = useLanguage();
  return (
    <div className="mb-8 flex flex-col items-center rounded-lg border py-4 shadow lg:gap-6">
      <h1 className="text-center text-2xl font-semibold lg:text-4xl">
        {translations[language].want}
      </h1>
      <div className="flex flex-col items-center">
        <h1 className="py-1 text-center text-neutral-400 lg:text-lg">
          {translations[language].start}
        </h1>
        <h1 className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text pb-3 text-4xl font-bold text-transparent lg:text-5xl">
          {translations[language].roadmap}
        </h1>
      </div>

      <Link to={'/roadmap'}>
        <Button className="w-[275px] lg:mb-2 lg:h-10 lg:w-[300px] lg:text-base lg:font-bold">
          {translations[language].take}
        </Button>
      </Link>
    </div>
  )
}

export default HomeRoadmap
