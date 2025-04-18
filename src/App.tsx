import React from 'react';
import {  Send, Coffee } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b  from-[#fce7c8] to-[#639056] px-4 py-12">
      <div className="max-w-lg mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <img
            src="img/K.png"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h1 className="text-xl font-bold text-[#4A9D6B] mb-2">@karmoussa_code</h1>
          <p className="text-gray-600 mb-6 font-cairo" dir="rtl">
            .ستجدون هنا كل المواقع اللتي اشاركها في فيديوهاتي
          </p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-8">
            {/* Instagram */}
            <a href="https://www.instagram.com/karmoussa_code/" className="text-gray-600 hover:text-[#4A9D6B] transition-colors"  title="Instagram">
              <FaInstagram  className="w-6 h-6" />
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@karmossa_code" className="text-gray-600 hover:text-[#4A9D6B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                <title>Tiktok</title>
                <path d="M448,209.6v66.9c-38.3,0-73.5-11.8-103.4-31.7v99.2c0,74.5-60.6,135.1-135.1,135.1S74.4,418.6,74.4,344.1s60.6-135.1,135.1-135.1c4.4,0,8.7,0.2,13,0.6v67.2c-4.2-0.8-8.6-1.3-13-1.3c-37.5,0-68,30.5-68,68s30.5,68,68,68s68-30.5,68-68V64h66.9c0,52.1,42.2,94.3,94.3,94.3Z"/>
              </svg>
            </a>
            {/* Email */}
            <a href="mailto:karmoussacode@gmail.com" className="text-gray-600 hover:text-[#4A9D6B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <title> Email me </title>
                <path d="M1.5 4.5A2.5 2.5 0 0 1 4 2h16a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.5-2.5v-15zm2.26.5 8.23 6.26L20.24 5H3.76zM3 6.87v12.13c0 .28.22.5.5.5h17a.5.5 0 0 0 .5-.5V6.87l-8.65 6.58a1.5 1.5 0 0 1-1.7 0L3 6.87z"/>
              </svg>
            </a>
            {/* YouTube
            <a href="https://youtube.com/@karmoussacode?si=2eahAwPM2sjhsmsi" className="text-gray-600 hover:text-[#4A9D6B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6 fill-current">
                <path d="M549.65 124.08C534.37 81.64 497.75 48 454.4 48H121.6C78.25 48 41.63 81.64 26.35 124.08 16 152.82 8 192.4 8 256s8 103.18 18.35 131.92C41.63 430.36 78.25 464 121.6 464h332.8c43.35 0 80-33.64 95.28-76.08C568 359.18 576 319.6 576 256s-8-103.18-18.35-131.92zM232 334.75V177.25L361 256l-129 78.75z"/>
              </svg>
            </a> */}

            {/* X (Twitter) */}
            {/* <a href="https://x.com/KarmoussaCode?t=yK60eMP8rjbAcftvp3MwNA&s=08" className="text-gray-600 hover:text-[#4A9D6B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                <path d="M475.4 0L320 178.7 149.3 0H0l215.3 230.5L0 512h137.4l164.6-184.6L460.8 512H512L291.2 273.7 512 0h-36.6z"/>
              </svg>
            </a> */}
            {/* Telegram */}
            <a href="https://www.t.me/karmoussacode" className="text-gray-600 hover:text-[#4A9D6B] transition-colors"  title="Telegram">
              <Send className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Links Section */}
<div className="space-y-6">

{/* Bolt.new Link */}
<div className="text-center">
  <p className="text-gray-700 mb-2">📌 هذا الموقع يساعدك في خلق تطبيقات و مواقع حسب رغبتك في دقائق</p>
  <a
    href="https://bolt.new/?rid=pqwxgb" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 px-6 py-3 bg-white rounded-full shadow border border-gray-100 hover:-translate-y-1 transition-all group "
  >
    <img src="/img/bolt.png" alt="Bolt Logo" className="w-5 h-5" />
    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">Bolt.new</span>
  </a>
</div>

{/* Telegram Roadmap */}
<div className="text-center">
  <a
    href="https://t.me/karmoussacode/20" // <-- Replace with your real Telegram post link
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 px-6 py-3 bg-white rounded-full shadow border border-gray-100 hover:-translate-y-1 transition-all group"
  >
    <img src="/img/telegram.png" alt="Roadmap" className="w-8 h-8 rounded-full" />
    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors"> خارطة الطريق لمبرمج مواقع ويب</span>
  </a>
</div>

{/* GitHub Link */}
<a
  href="https://github.com/KarmoussaCode" 
   target="_blank" // <-- to open in a new tab
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 px-6 py-3 bg-white rounded-full shadow border border-gray-100 hover:-translate-y-1 transition-all group"
>
  <svg className="w-5 h-5 fill-current text-gray-600 group-hover:text-gray-800" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.4 0 12.07c0 5.34 3.44 9.86 8.21 11.46.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.07-3.34.74-4.04-1.63-4.04-1.63-.54-1.39-1.32-1.76-1.32-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.26 1.83 1.26 1.06 1.84 2.78 1.31 3.46 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.46-2.38 1.22-3.22-.12-.31-.53-1.56.12-3.25 0 0 1.01-.33 3.3 1.23a11.4 11.4 0 0 1 3-.41c1.02 0 2.05.14 3 .41 2.29-1.56 3.3-1.23 3.3-1.23.65 1.69.24 2.94.12 3.25.76.84 1.22 1.91 1.22 3.22 0 4.62-2.81 5.63-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12.07C24 5.4 18.63 0 12 0z"/>
  </svg>
  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">GitHub</span>
</a>

{/* Buy Me a Coffee */}
<a
  href="donate.html" // <-- Replace if needed
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 px-6 py-3 bg-white rounded-full shadow border border-gray-100 hover:-translate-y-1 transition-all group"
>
  <Coffee className="w-5 h-5 text-[#FF9B50] group-hover:text-[#E88B45]" />
  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">Buy Me Kas Jus</span>
</a>
{/* Sparkles */}
  <div className="sparkle" style={{ top: '15%', left: '80%' }}></div>
  <div className="sparkle" style={{ top: '50%', left: '90%' }}></div>
  <div className="sparkle" style={{ bottom: '0px', left: '30%' }}></div>
  <div className="sparkle" style={{ bottom: '20%', left: '87%' }}></div>
  <div className="sparkle" style={{ top: '20%', left: '10%' }}></div>
  <div className="sparkle" style={{ top: '80%', left: '40%' }}></div>
  <div className="sparkle" style={{ bottom: '1%', left: '93%' }}></div>
  <div className="sparkle" style={{ bottom: '30%', left: '85%' }}></div>
  <div className="sparkle" style={{ top: '40%', left: '20%' }}></div>
  <div className="sparkle" style={{ top: '60%', left: '5%' }}></div>
  <div className="sparkle" style={{ bottom: '20%', left: '10%' }}></div>
  <div className="sparkle" style={{ bottom: '43%', left: '50%' }}></div>
  <div className="sparkle" style={{ top: '10%', left: '30%' }}></div>
  <div className="sparkle" style={{ top: '98%', left: '6%' }}></div>
</div>




        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-[#fce7c8]">
          Made with ❤️ by Karmoussa Code
        </footer>
      </div>
    </div>
  );
}

export default App;