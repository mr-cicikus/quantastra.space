import React from 'react';
import { useTheme } from 'next-themes';
import Container from './ui/container';
import { Button } from './ui/button';
import { Menu, Moon, Sun, AtomIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';  // Import useLanguage

const translations = {
  en: {
    club: 'Quantum Computing Club',
    roadmap: 'Roadmap',
    events: 'Events',
    team: 'Team',
    aboutUs: 'About Us',
    mag: 'Magazines',
  },
  tr: {
    club: 'Kuantum Hesaplama Kulübü',
    roadmap: 'Yol Haritası',
    events: 'Etkinlikler',
    team: 'Ekibimiz',
    aboutUs: 'Hakkımızda',
    mag: 'Dergilerimiz',
  },
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage(); // Use language context

  return (
    <nav className="sticky top-0 z-10 flex h-14 items-center border-b border-black border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:flex sm:justify-between">
      <Container>
        <div className="relative flex w-full items-center justify-between">
          <div className="flex items-center justify-between gap-3">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 md:hidden" />
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-4 pl-6 pt-5">
                  <Link to="/roadmap">{translations[language].roadmap}</Link>
                  <Link to="/events">{translations[language].events}</Link>
                  <Link to="/team">{translations[language].team}</Link>
                  <Link to="/about">{translations[language].aboutUs}</Link>
                  <Link to="/mag">{translations[language].mag}</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <Link to="/" className="flex flex-row gap-1 md:absolute">
            <AtomIcon className="h-6 w-6" />
            <div className="font-medium">{translations[language].club}</div>
          </Link>
          <nav className="text-g ml-6 hidden flex-row gap-12 md:flex lg:gap-16">
            <Link to="/roadmap" className="text-sm text-foreground/60 transition-colors hover:text-foreground/80">
              {translations[language].roadmap}
            </Link>
            <Link to="/events" className="text-sm text-foreground/60 transition-colors hover:text-foreground/80">
              {translations[language].events}
            </Link>
            <Link to="/team" className="text-sm text-foreground/60 transition-colors hover:text-foreground/80">
              {translations[language].team}
            </Link>
            <Link to="/about" className="text-sm text-foreground/60 transition-colors hover:text-foreground/80">
              {translations[language].aboutUs}
            </Link>
            <Link to="/mag" className="text-sm text-foreground/60 transition-colors hover:text-foreground/80">
              {translations[language].mag}
            </Link>
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Language"
              className="h-6 w-6 -ml-1"
              onClick={toggleLanguage}
            >
              {language === 'en' ? 'EN' : 'TR'}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="h-6 w-6"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
