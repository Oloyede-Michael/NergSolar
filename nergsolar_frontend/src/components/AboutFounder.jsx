import React from 'react';
import { Linkedin, Mail, Award, Target } from 'lucide-react';

const AboutFounder = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Meet Our Founder
          </h2>
          <p className="text-lg text-gray-600">
            Leading the solar energy revolution
          </p>
        </div>

        {/* Founder Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for CEO image */}
                <div className="aspect-[4/5] bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                  <img
                    src="images/ceo_image.jpg"
                    alt="Egbor Daniel Leonard - CEO of Drivex Energy"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative badge */}
                <div className="absolute bottom-6 left-6 bg-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-bold text-lg">CEO & Founder</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Egbor Daniel Leonard
                </h3>
                <p className="text-xl text-cyan-500 font-semibold mb-6">
                  CEO & Founder of Drivex Energy
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  With over a 5 years of experience in renewable energy, Egbor Daniel Leonard 
                  founded Drivex Energy with a vision to make clean, sustainable energy accessible 
                  to everyone. His passion for environmental conservation and innovative 
                  technology has driven the company to become a leader in the solar industry.
                </p>
                <p>
                  Under his leadership, Drivex Energy has helped hundreds of homes and businesses 
                  transition to solar power, reducing carbon footprints and energy costs. 
                  Daniel's commitment to excellence and customer satisfaction has been the 
                  cornerstone of Drivex Energy's success.
                </p>
                <p>
                  His expertise spans solar technology, sustainable business practices,Chemistry and 
                  strategic growth, making him a respected voice in the renewable energy sector.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Award className="text-cyan-500" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">5+ Years</p>
                    <p className="text-sm text-gray-600">Industry Experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Target className="text-cyan-500" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">1000+</p>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-6">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/daniel-leonard-744033269"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new&to=danegbor@gmail.com" 
                  className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-lg transition-colors" 
                  aria-label="Email" 
                  target="_blank"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;