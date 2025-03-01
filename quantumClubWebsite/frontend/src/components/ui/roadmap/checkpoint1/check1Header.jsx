import React from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import { Button } from '../../button'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../../context/LanguageContext';

const translations = {
  en: {
    h1: 'Return to Roadmap',
    h2: 'Welcome to Checkpoint 1!',
    p1: 'At this stage, there are 3 paths you should advance on: movies, series, and books. To work effectively in this adventure, you need to complete the tasks in the links below. These links will help you understand how the quantum universe is portrayed in films, series, and books, and will provide basic information about quantum concepts.',
    
  },
  tr: {
    h1: 'Yol Haritasına Geri Dön',
    h2: 'Checkpoint 1\'e Hoş Geldiniz',
    p1: 'Bu aşamada ilerlemeniz gereken 3 yol bulunuyor: filmler, diziler ve kitaplar. Bu macerada verimli çalışabilmek için aşağıdaki linklerdeki görevleri tamamlamalısınız. Bu linkler, kuantum evreninin film, dizi ve kitaplarda nasıl işlendiğini anlamanızı sağlayacak ve kuantum hakkında temel bilgiler sunacaktır.',
  },
};

const check1Header = () => {
  const { language } = useLanguage();
  return (
    <>
      <Link to={'/roadmap'}>
        <Button className="mt-2 w-fit rounded-3xl border px-2 py-2">
          <div className="flex flex-row items-center gap-1">
            <ChevronLeft />
            <h1 className="pr-2">{translations[language].h1}</h1>
          </div>
        </Button>
      </Link>

      <div className="mt-4 overflow-hidden rounded-2xl border bg-sky-100 pb-4 shadow-lg dark:bg-sky-950">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex flex-col gap-3 px-3 py-2"
        >
          <h1 className="text-2xl font-semibold">{translations[language].h2}</h1>
          <p className="text-sm">
            {translations[language].p1}
          </p>
        </motion.div>
      </div>
    </>
  )
}

export default check1Header
