import { Users, Award, Calendar } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="bg-gradient-to-br from-purple-50 to-pink-100">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
              About <span className="text-purple-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Learn more about our mission, our team, and why we're passionate about creating amazing web experiences.
            </p>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, WorldApp began with a simple mission: to make web development more accessible and enjoyable for everyone.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of passionate developers and designers work tirelessly to create tools and resources that help businesses and individuals build better web experiences.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve thousands of customers worldwide, from small startups to large enterprises, all united by a common goal: to create exceptional digital experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">10k+</h3>
                <p className="text-gray-600">Happy Users</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">15+</h3>
                <p className="text-gray-600">Awards Won</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">99%</h3>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
              },
              {
                name: "Sarah Williams",
                role: "Lead Designer",
                image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
              },
              {
                name: "Michael Chen",
                role: "Senior Developer",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300"
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-purple-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
