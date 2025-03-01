import React from 'react';
import VerticalCarousel from './ui/body/verticalCarousel';
import Container from './ui/container';
import { Target } from 'lucide-react';
import JoinUs from './ui/body/JoinUs';
import HomeRoadmap from './ui/HomeRoadmap';
import { useLanguage } from '../context/LanguageContext';  // Import useLanguage

const translations = {
  en: {
    objective: 'Objective',
    loremText1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque possimus aspernatur.',
    loremText2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, illum.',
    loremText3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis excepturi fugiat et in quasi?',
  },
  tr: {
    objective: 'Hedefimiz',
    loremText1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque possimus aspernatur.',
    loremText2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, illum.',
    loremText3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis excepturi fugiat et in quasi?',
  },
};

const HomeBody = () => {
  const { language } = useLanguage();  // Use language context

  return (
    <Container>
      <div className="w-full py-8">
        <div className="rounded-lg border px-2 py-4 shadow">
          <div className="flex flex-row items-baseline gap-2 pb-6 pl-2">
            <Target className="h-8 w-8" />
            <h1 className="text-5xl font-semibold">{translations[language].objective}</h1>
          </div>

          <div className="flex flex-col gap-6 px-4 py-4 md:text-lg lg:text-xl">
            <p>{translations[language].loremText1}</p>
            <p>{translations[language].loremText2}</p>
            <p>{translations[language].loremText3}</p>
          </div>
        </div>
      </div>
      <HomeRoadmap />
      <VerticalCarousel />
      <JoinUs />
    </Container>
  );
};

export default HomeBody;
