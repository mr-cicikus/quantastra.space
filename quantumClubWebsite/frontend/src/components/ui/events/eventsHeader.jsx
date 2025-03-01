'use client'

import React, { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { AtomIcon } from 'lucide-react'
import { useLanguage } from '../../../context/LanguageContext';
import './style.css'

const translations = {
  en: {
    h1: 'Events',
  },
  tr: {
    h1: 'Etkinlikler',
  },
};

const EventsHeader = () => {
  const events = [
    { date: new Date(2024, 10, 15) },
    { date: new Date(2024, 10, 20) },
    { date: new Date(2024, 10, 25) },
  ]

  const initialSelectedDates = events.map((event) => event.date)

  const [selectedDates, setSelectedDates] = useState(initialSelectedDates)
  const { language } = useLanguage();

  return (
    <>
      <header className="mt-4 flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-1 pb-2">
          <AtomIcon className="h-10 w-10" />
          <h1 className="flex w-min bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent">
            {translations[language].h1}
          </h1>
        </div>
        {/* <Calendar
          mode="multiple"
          weekStartsOn={1}
          selected={selectedDates}
          onSelect={setSelectedDates}
          className="rounded-md border shadow"
        /> */}
      </header>
    </>
  )
}

export default EventsHeader
