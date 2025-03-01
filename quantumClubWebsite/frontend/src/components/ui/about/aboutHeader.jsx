import React from 'react'
import { AtomIcon } from 'lucide-react'
import { useLanguage } from '../../../context/LanguageContext';

const translations = {
  en: {
    h1: 'About Us',
  },
  tr: {
    h1: 'Hakkımızda',
  },
};

const AboutHeader = () => {
  const { language } = useLanguage();
  return (
    <div className="mt-6 flex h-auto w-full flex-col items-center gap-2 md:flex-row md:items-end md:justify-center">
      <div className="flex flex-row items-center justify-center gap-1 pb-2">
        <AtomIcon className="h-10 w-10" />
        <h1 className="text-4xl font-semibold md:hidden">Quantum</h1>
      </div>

      <h1 className="flex bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text pb-2 text-5xl font-bold leading-none text-transparent">
        {translations[language].h1}
      </h1>
    </div>
  )
}

export default AboutHeader
