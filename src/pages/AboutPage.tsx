import { Users, Award, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="bg-white py-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About WorldApp
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Learn more about our mission, values, and the team behind WorldApp.
            </p>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="mt-16 bg-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  At WorldApp, we're dedicated to creating innovative web experiences that connect people around the globe. 
                  Our mission is to provide developers with the tools they need to build amazing applications that make a difference.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  We believe in the power of technology to transform lives and businesses. 
                  That's why we're committed to creating solutions that are not only powerful and flexible, 
                  but also accessible and easy to use.
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl text-center mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of working together. By combining our diverse skills and perspectives, 
                we create solutions that are greater than the sum of their parts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do. From code quality to user experience, 
                we're committed to delivering the best possible solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We're always looking for new and better ways to solve problems. By embracing innovation, 
                we stay ahead of the curve and deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mt-16 bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl text-center mb-12">
              Our Team
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Alex Johnson',
                  role: 'Founder & CEO',
                  image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
                {
                  name: 'Sarah Chen',
                  role: 'CTO',
                  image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
                {
                  name: 'Michael Rodriguez',
                  role: 'Lead Developer',
                  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
                {
                  name: 'Emily Wong',
                  role: 'UX Designer',
                  image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
              ].map((person, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">{person.name}</h3>
                    <p className="text-blue-600">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
