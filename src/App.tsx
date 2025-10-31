import { Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <Globe className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-black text-gray-800 mb-4">
          Hello World!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Welcome to your new React application built with Vite and TypeScript.
          This is your starting point for creating amazing web experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="https://react.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Learn React
          </a>
          <a 
            href="https://vitejs.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Explore Vite
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
