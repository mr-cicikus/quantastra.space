import React from 'react'
import Container from './container'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext';  // Import useLanguage

const translations = {
  en: {
    welcome: 'Welcome!',
    to: 'to',
    quantumClub: 'Quantum Computing Club',
    extra: '',
  },
  tr: {
    welcome: '',
    to: '',
    quantumClub: 'Kuantum Hesaplama Kulübü\'ne',
    extra: 'Hoş Geldiniz'
  },
};

const HomeGreeting = () => {
  const { language } = useLanguage();
  return (
    <>
      <Container>
        <div className="flex flex-col py-6 pb-8 md:flex-row">
          <h1 className="text-6xl font-bold">{translations[language].welcome}</h1>
          <h1 className="flex items-center px-4 text-5xl font-bold md:h-[64px]">
            {translations[language].to}
          </h1>

          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
            className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold text-transparent"
          >
            {translations[language].quantumClub}
          </motion.h1>
          {language === 'tr' && (
            <h2 className="flex items-center px-6 text-4xl font-bold md:h-[60px] md:items-end">
              {translations[language].extra}
            </h2>
          )}
          {/* <h1 className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-right text-6xl font-bold text-transparent">
            Club
          </h1> */}
        </div>
      </Container>
    </>
  )
}

export default HomeGreeting
