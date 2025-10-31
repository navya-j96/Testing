import { Check, Zap, Shield, Globe, Layers, Code } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function FeaturesPage() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: 'Lightning Fast Performance',
      description: 'Built with Vite for near-instant hot module replacement and optimized builds.',
      color: 'bg-yellow-50'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Secure by Design',
      description: 'Implements best practices for web security to keep your application and users safe.',
      color: 'bg-green-50'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: 'Global Accessibility',
      description: 'Designed with internationalization and accessibility in mind for worldwide usage.',
      color: 'bg-blue-50'
    },
    {
      icon: <Layers className="h-8 w-8 text-purple-500" />,
      title: 'Component-Based Architecture',
      description: 'Modular design allows for easy maintenance and scalability as your project grows.',
      color: 'bg-purple-50'
    },
    {
      icon: <Code className="h-8 w-8 text-indigo-500" />,
      title: 'TypeScript Integration',
      description: 'Full TypeScript support for better developer experience and code quality.',
      color: 'bg-indigo-50'
    }
  ];

  return (
    <PageTransition>
      <div className="bg-white py-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Features
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover what makes WorldApp the perfect choice for your next project.
            </p>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${feature.color} p-8 rounded-xl shadow-sm border border-gray-100`}
              >
                <div className="mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Comparison Section */}
        <div className="mt-20 bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl text-center mb-12">
              How We Compare
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">WorldApp</th>
                    <th className="py-4 px-6 text-center">Competitors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { name: 'React Router Integration', worldApp: true, competitors: true },
                    { name: 'TypeScript Support', worldApp: true, competitors: true },
                    { name: 'Optimized Build Process', worldApp: true, competitors: false },
                    { name: 'Animation Library', worldApp: true, competitors: false },
                    { name: 'Responsive Design', worldApp: true, competitors: true },
                    { name: 'Modern UI Components', worldApp: true, competitors: false }
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-800">{item.name}</td>
                      <td className="py-4 px-6 text-center">
                        {item.worldApp ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-red-500">✕</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {item.competitors ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-red-500">✕</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl text-center mb-12">
            What Our Users Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "WorldApp has transformed how we build our web applications. The performance is incredible!",
                author: "Jane Smith",
                role: "CTO, TechCorp"
              },
              {
                quote: "The developer experience is unmatched. Our team's productivity has increased by 40% since switching.",
                author: "Mark Johnson",
                role: "Lead Developer, StartupX"
              },
              {
                quote: "The built-in features saved us months of development time. Highly recommended!",
                author: "Sarah Chen",
                role: "Product Manager, EnterpriseY"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
