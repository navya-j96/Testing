import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WorldApp</h3>
            <p className="text-gray-300">
              A modern React application built with Vite and TypeScript.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://react.dev" className="text-gray-300 hover:text-white transition-colors">React</a></li>
              <li><a href="https://vitejs.dev" className="text-gray-300 hover:text-white transition-colors">Vite</a></li>
              <li><a href="https://tailwindcss.com" className="text-gray-300 hover:text-white transition-colors">Tailwind CSS</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-300">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by WorldApp Team
          </p>
        </div>
      </div>
    </footer>
  );
}
