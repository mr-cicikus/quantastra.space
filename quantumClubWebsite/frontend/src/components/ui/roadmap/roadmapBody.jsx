import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../../../context/LanguageContext';

const translations = {
  en: {
    h1: 'What is this?',
    p1: 'The Quantum Roadmap was designed to simplify the concept of quantum physics and break down the learning phase into clear steps. With five checkpoints, one may carry their knowledge from basic things to the next level.',
    c1: 'This is your first step into understanding quantum physics. Here you may find popular TV shows, movies and books that cover the basic concepts.',
    c2: 'Checkpoint 2 covers broader topics through articles, movies and beginner-level scientific books. This stage aims to explain the concepts through simple and fun ways.',
    c3: 'Checkpoint 3 dives into the fundamentals of quantum mechanics and theories. This step includes technical books, research articles and advanced-level videos.',
    c4: 'Checkpoint 4 is designed for those who are willing to become experts in quantum physics. This step includes high level books for studying, as well as academic research papers.',
    c5: 'Checkpoint 5 is the final step in the Quantum Roadmap. You\'ve taken a long way to get here, and we congratulate you. This step includes the last sources before we send you off as an expert in the quantum field.',
    take: 'Take me there!',
  },
  tr: {
    h1: 'Nedir bu?',
    p1: 'Kuantum Yol Haritası, karmaşık kuantum fiziğini basit, anlaşılır ve adım adım öğrenilebilir hale getirmek için tasarlandı. Beş \"checkpoint\" ile, bu öğrenme süreci kullanıcıları temel bilgiden ileri düzeye kadar taşıyacak.',
    c1: 'Kuantum fiziğini anlamaya yönelik ilk basamağınız. Bu aşamada, sadece kuantum fiziğine değinen popüler dizi, film ve kitaplara yer veriyoruz.',
    c2: 'Checkpoint 2, kuantum fiziğinin temel kavramlarını tanıtan makale, film ve başlangıç seviyesindeki kitaplardan oluşur. Bu aşama, kavramları basit ve eğlenceli bir şekilde öğretmeyi hedefler.',
    c3: 'Checkpoint 3, kuantum mekaniğinin matematiğine ve teorilerine giriş sağlar; teknik kitaplar, araştırma makaleleri ve ileri düzey videolar içerir.',
    c4: 'Checkpoint 4, kuantum fiziğinde uzmanlaşmayı hedefleyenler için hazırlanmıştır. Bu aşamada, ileri düzey ders kitapları, akademik makaleler bulunur.',
    c5: 'Checkpoint 5, Kuantum Yol Haritası\'nın son aşamasıdır. Bu noktaya gelmek için uzun bir yol katettiniz. Sizi tebrik eder, artık kuantum alanının bir uzmanı olarak sizi uğurlayacak son kaynakları sunuyoruz.',
    take: 'Beni oraya götür!'
  },
};

const roadmapBody = () => {
  const { language } = useLanguage();
  return (
    <div className="mb-4">
      <div className="mt-8 flex flex-col gap-4 rounded-md border p-3 shadow-md">
        <h1 className="text-2xl font-semibold">{translations[language].h1}</h1>
        <p className="leading-7">
          {translations[language].p1}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-between gap-4 rounded-lg border bg-sky-100 p-3 shadow-lg dark:bg-sky-950"
        >
          <h1 className="text-2xl font-semibold">Checkpoint 1</h1>
          <p className="text-sm leading-6">
            {translations[language].c1}
          </p>
          <Link to={'/checkpoint-1'}>
            <Button className="w-full font-bold">{translations[language].take}</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-between gap-4 rounded-lg border bg-blue-200 p-3 shadow-lg dark:bg-blue-950"
        >
          <h1 className="text-2xl font-semibold">Checkpoint 2</h1>
          <p className="text-sm leading-6">
            {translations[language].c2}
          </p>
          <Link to={'/checkpoint-2'}>
            <Button className="w-full font-bold">{translations[language].take}</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-between gap-4 rounded-lg border bg-indigo-300 p-3 shadow-lg dark:bg-indigo-950"
        >
          <h1 className="text-2xl font-semibold">Checkpoint 3</h1>
          <p className="text-sm leading-6">
            {translations[language].c3}
          </p>
          <Link to={'/checkpoint-3'}>
            <Button className="w-full font-bold">{translations[language].take}</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-between gap-4 rounded-lg border bg-violet-300 p-3 shadow-lg dark:bg-violet-950"
        >
          <h1 className="text-2xl font-semibold">Checkpoint 4</h1>
          <p className="text-sm leading-6">
            {translations[language].c4}
          </p>
          <Link to={'/checkpoint-4'}>
            <Button className="w-full font-bold">{translations[language].take}</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-between gap-4 rounded-lg border bg-purple-300 p-3 shadow-lg dark:bg-purple-950"
        >
          <h1 className="text-2xl font-semibold">Checkpoint 5</h1>
          <p className="text-sm leading-6">
            {translations[language].c5}
          </p>
          <Link to={'/checkpoint-5'}>
            <Button className="w-full font-bold">{translations[language].take}</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default roadmapBody
