import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Search, Building, User, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Your Health, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              MediBud helps you find the right healthcare professionals in Varanasi based on your symptoms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => navigate('/symptom-checker')}
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                <Activity className="mr-2 h-5 w-5" />
                Check Symptoms
              </button>
              <button 
                onClick={() => navigate('/hospitals')}
                className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-blue-950 transition-colors duration-300 shadow-lg"
              >
                <Building className="mr-2 h-5 w-5" />
                Find Hospitals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How MediBud Works</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Simple steps to find the right healthcare professional for your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">Describe Symptoms</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Tell us about your symptoms in detail using our chatbot interface.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">Get Recommendations</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Receive potential diagnoses and recommended specialists based on your symptoms.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">Connect with Doctors</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Find contact details and OPD timings to schedule your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Comprehensive healthcare information tailored for Varanasi residents</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Symptom Checker Card */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Symptom Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our intelligent system analyzes your symptoms and suggests possible health conditions, helping you understand what might be causing your discomfort.
                </p>
                <button 
                  onClick={() => navigate('/symptom-checker')}
                  className="text-blue-600 dark:text-blue-500 font-medium flex items-center hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  Try Symptom Checker <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Hospital Directory Card */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Hospital & Doctor Directory</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Browse our comprehensive database of hospitals and doctors in Varanasi, complete with specialties, addresses, and contact information.
                </p>
                <button 
                  onClick={() => navigate('/hospitals')}
                  className="text-blue-600 dark:text-blue-500 font-medium flex items-center hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  Explore Directory <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find the Right Care?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't let health concerns wait. Describe your symptoms and get matched with the best healthcare professionals in Varanasi.
          </p>
          <button 
            onClick={() => navigate('/symptom-checker')}
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 shadow-lg"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;