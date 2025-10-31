import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function NotFoundPage() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <h1 className="text-9xl font-black text-gray-200 mb-4">404</h1>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found !!!
          </h2>
          
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link 
            to="/" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
