import { Check, Zap, Shield, Globe, Smartphone, Code } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function FeaturesPage() {
  return (
    <PageTransition>
      <div className="bg-gradient-to-br from-green-50 to-teal-100">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
              Powerful <span className="text-green-600">Features</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Discover all the tools and capabilities that make our platform the perfect choice for your next project.
            </p>
          </div>
        </section>
        
        {/* Main Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: <Globe className="h-8 w-8 text-green-600" />,
                title: "Global Reach",
                description: "Connect with users around the world with our powerful platform that supports multiple languages and regions.",
                features: [
                  "Multi-language support",
                  "Regional content adaptation",
                  "Global CDN for fast loading",
                  "Localized user experiences"
                ]
              },
              {
                icon: <Zap className="h-8 w-8 text-yellow-600" />,
                title: "Lightning Fast",
                description: "Optimized performance ensures your application runs smoothly, with minimal load times and maximum efficiency.",
                features: [
                  "Optimized code execution",
                  "Advanced caching strategies",
                  "Lazy loading capabilities",
                  "Performance monitoring tools"
                ]
              },
              {
                icon: <Shield className="h-8 w-8 text-purple-600" />,
                title: "Secure by Design",
                description: "Built with security in mind to protect your data and users from potential threats and vulnerabilities.",
                features: [
                  "End-to-end encryption",
                  "Regular security audits",
                  "GDPR compliance tools",
                  "Advanced authentication options"
                ]
              },
              {
                icon: <Smartphone className="h-8 w-8 text-blue-600" />,
                title: "Mobile Optimized",
                description: "Create responsive applications that work flawlessly across all devices, from desktops to smartphones.",
                features: [
                  "Responsive design framework",
                  "Touch-optimized interfaces",
                  "Device-specific enhancements",
                  "Offline capabilities"
                ]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="bg-gray-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* Technical Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Technical Specifications</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-8 bg-green-600 text-white">
                <Code className="h-10 w-10 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Modern Tech Stack</h3>
                <p className="text-green-100 mb-6">
                  Built with the latest technologies to ensure optimal performance and developer experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    <span>React 18+</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    <span>Vite Build System</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    <span>Tailwind CSS</span>
                  </li>
                </ul>
              </div>
              
              <div className="col-span-2 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Specifications</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Frontend</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Component-based architecture</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>State management solutions</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Responsive design system</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Accessibility compliance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Performance</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Code splitting & lazy loading</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Tree shaking optimization</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Efficient rendering strategies</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Optimized asset delivery</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Developer Experience</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Hot module replacement</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>TypeScript integration</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>ESLint & Prettier setup</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Testing framework included</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Deployment</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Static site generation</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>CI/CD pipeline ready</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Environment configuration</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Build optimization tools</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
