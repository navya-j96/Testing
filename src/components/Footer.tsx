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
              <li>
                <a href="https://react.dev" className="text-gray-300 hover:text-white transition-colors">
                  React
                </a>
              </li>
              <li>
                <a href="https://vitejs.dev" className="text-gray-300 hover:text-white transition-colors">
                  Vite
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/" className="text-gray-300 hover:text-white transition-colors">
                  TypeScript
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              info@worldapp.example
            </p>
            <p className="text-gray-300">
              +1 (555) 123-4567
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} WorldApp. All rights reserved.
          </p>
          <p className="flex items-center text-gray-300 mt-4 sm:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
