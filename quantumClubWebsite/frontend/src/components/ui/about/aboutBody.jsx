import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const translations = {
  en: {
    h1: 'Hello and welcome!',
    p1: 'This place is a community where you can venture into the magical world of quantum physics. Our goal is to provide a platform for everyone interested in quantum physics and related topics, encouraging the exchange of information among peers and exploring the mysteries of quantum mechanics. Even though the level of knowledge varies among our members, they share the same passion for learning together.',
    p2: 'For some, it may seem that the idea of quantum mechanics has popped out of a sci-fi movie, but we surely acknowledge it as the truth!',
    h2: 'Our Mission',
    p3: 'Discovering the mysteries of the quantum world and inviting everyone into this exciting field is our mission. Those who are deeply interested in science gather in our community to debate, learn, and explore. Your mission, should you choose to accept it, is to venture into the depths of the quantum universe. If you feel ready, then this community is just right for you!',
    p4: 'Here, everyone learns about what makes up quantum mechanics, how it works, and why it is so exciting! Through the events, conferences, and workshops we organize, we enable everyone to take a step further into the quantum universe and spread knowledge.',
    h3: 'One More Thing',
    p5: 'Our Quantum Community is not just for those interested in science, it\'s also for anyone seeking fun and extraordinary experiences. Remember, quantum mechanics might have quite a few different rules, but as you learn them, you\'ll gain a deep understanding of how things work.',
    p6: 'Join us now, on this epic exciting adventure towards the magical world of quantum!',
    social: 'Follow Us On',
  },
  tr: {
    h1: 'Merhaba ve hoş geldiniz!',
    p1: 'Burası, kuantum fiziğiyle dolu büyülü bir dünyaya kapılarınızı açacağınız kuantum topluluğu. Amacımız, kuantum fiziği ve ilgili konularla ilgilenen herkesi bir araya getirerek bilgi paylaşımını teşvik etmek ve kuantum mekaniğinin gizemli dünyasını keşfetmek için bir platform sağlamaktır. Üyelerimiz her seviyeden bilgiye sahip olsa da ortak bir tutku ve merakla birbirine bağlıdır.',
    p2: 'Kimileri için kuantum bir bilim kurgu filminden fırlamış gibi gelebilir ama bizim için bu gerçekliğin ta kendisi!',
    h2: 'Misyonumuz:',
    p3: 'Bizim misyonumuz, kuantumun gizemli dünyasını keşfetmek ve bu heyecan verici alana herkesi davet etmek. Bilimsel merakla dolu olanlar, birlikte tartışmak, öğrenmek ve keşfetmek için bu toplulukta buluşuyorlar. Kuantumun derinliklerine doğru bir yolculuk için hazır mısınız? İşte bu topluluk tam da sizin için!',
    p4: 'Burada herkes, kuantum fiziğinin ne olduğunu, nasıl çalıştığını ve neden bu kadar heyecan verici olduğunu öğrenecek. Düzenleyeceğimiz etkinlikler, konferanslar ve atölyelerle bilgiyi yaygınlaştırıyoruz ve herkesin kuantum dünyasına bir adım daha yaklaşmasını sağlıyoruz.',
    h3: 'Daha Fazlası',
    p5: 'Kuantum Topluluğu sadece bilimle ilgilenenler için değil, aynı zamanda eğlenceli ve sıradışı bir deneyim arayanlar için de bir yerdir. Unutmayın, kuantumun kuralları biraz farklı olabilir, ama bu kuralları öğrendikçe dünyanın nasıl işlediğine dair daha derin bir anlayış kazanacaksınız.',
    p6: 'Gel, bizimle bu heyecan verici yolculuğa çık ve kuantumun büyülü dünyasını keşfet!',
    social: 'Bizi Takip Edin',
  },
};

const AboutBody = () => {
  const { language } = useLanguage();

  return (
    <div className="p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">{translations[language].h1} 🤩</h1>
      <p className="text-lg leading-relaxed">
        {translations[language].p1}
      </p>
      <p className="mt-4 text-lg font-semibold text-center">🚀 {translations[language].p2}</p>
      
      <h2 className="text-2xl font-bold mt-6">💫 {translations[language].h2}:</h2>
      <p className="text-lg leading-relaxed mt-2">
        {translations[language].p3}
      </p>
      <p className="text-lg leading-relaxed mt-4">
        {translations[language].p4}
      </p>
      
      <h2 className="text-2xl font-bold mt-6">🤖 {translations[language].h3}:</h2>
      <p className="text-lg leading-relaxed mt-2">
        {translations[language].p5}
      </p>
      <p className="text-lg font-semibold text-center mt-4">{translations[language].p6} 🥳🥳</p>

      <h2 className="text-2xl font-bold mt-16 text-center">{translations[language].social}:</h2>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://www.youtube.com/@kuantumhesaplama" className="transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer">
          <Youtube size={40} className="text-red-700" />
        </a>
        <a href="https://www.instagram.com/iau_kuantumhesaplama/" className="transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer">
          <Instagram size={40} className="text-pink-600" />
        </a>
        <a href="https://www.tiktok.com/@iau_kuantumhesaplama" className="transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={40} className="text-cyan-700" />
        </a>
        <a href="https://www.linkedin.com/company/iau-kuantum-toplulu%C4%9Fu/" className="transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer">
          <Linkedin size={40} className="text-blue-700" />
        </a>
      </div>
    </div>
  );
};

export default AboutBody;