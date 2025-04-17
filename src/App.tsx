import React from 'react';
import { Instagram, Atom as Tiktok, Send, Coffee, Youtube, Brain, Video, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFF3E6] px-4 py-12">
      <div className="max-w-lg mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <img
            src="img/K.png"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h1 className="text-xl font-bold text-[#4A9D6B] mb-2">@karmoussa_code</h1>
          <p className="text-gray-600 mb-6" dir="rtl">
            .ستجدون هنا كل المواقع اللتي اشاركها في فيديوهاتي
          </p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://www.instagram.com/karmoussa_code/" className="text-gray-600 hover:text-[#4A9D6B] transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com/@karmossa_code" className="text-gray-600 hover:text-[#4A9D6B] transition-colors">
              <Tiktok className="w-6 h-6" />
            </a>
            <a href="https://www.t.me/karmoussacode" className="text-gray-600 hover:text-[#4A9D6B] transition-colors">
              <Send className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {[
            {
              icon: <Brain className="w-5 h-5" />,
              text: "🧠 Learn Python",
              href: "#",
              gradient: "from-[#4A9D6B] to-[#3D8257]"
            },
            {
              icon: <Video className="w-5 h-5" />,
              text: "🎥 TikTok Tips",
              href: "#",
              gradient: "from-[#FF9B50] to-[#E88B45]"
            },
            {
              icon: <MessageCircle className="w-5 h-5" />,
              text: "📝 Join My Telegram Channel",
              href: "#",
              gradient: "from-[#4A9D6B] to-[#3D8257]"
            },
            {
              icon: <Coffee className="w-5 h-5" />,
              text: "☕ Support Me",
              href: "#",
              gradient: "from-[#FF9B50] to-[#E88B45]"
            }
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`
                block w-full px-6 py-3 
                bg-white rounded-full
                shadow-[0_4px_0_0_rgba(0,0,0,0.1)]
                transform hover:-translate-y-1 transition-all
                border border-gray-100
                group
                relative
                overflow-hidden
              `}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r ${link.gradient}`} />
              <div className="flex items-center justify-center gap-3">
                <span className="text-[#4A9D6B] group-hover:text-[#3D8257] transition-colors">
                  {link.icon}
                </span>
                <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {link.text}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-[#4A9D6B]">
          Made with ❤️ by Karmoussa Code
        </footer>
      </div>
    </div>
  );
}

export default App;