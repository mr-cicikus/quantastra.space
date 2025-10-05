import React, { useEffect, useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from 'next-themes';

const rootElement = document.getElementById('root');

const renderApp = () => {
    const video = document.getElementById("preloader-video");

    if (video) {
        video.play().catch((error) => console.log("Autoplay blocked:", error));
    } else {
        console.error("Preloader video element not found.");
    }

    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    } else {
        console.error("Preloader element not found.");
    }

    createRoot(rootElement).render(
        <StrictMode>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <App />
            </ThemeProvider>
        </StrictMode>
    );
};

// Preloader stays visible during the app loading
window.addEventListener("load", renderApp);