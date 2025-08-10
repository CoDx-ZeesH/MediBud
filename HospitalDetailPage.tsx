import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getHospitalById } from '../data/hospitals';
import { getDoctorsByHospitalId } from '../data/doctors';
import { Hospital, Doctor } from '../types';
import DoctorCard from '../components/features/DoctorCard';
import { MapPin, Phone, ExternalLink, ArrowLeft, User } from 'lucide-react';

const HospitalDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hospital, setHospital] = useState<Hospital | null>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  
  useEffect(() => {
    if (id) {
      const foundHospital = getHospitalById(id);
      if (foundHospital) {
        setHospital(foundHospital);
        setDoctors(getDoctorsByHospitalId(id));
      }
    }
  }, [id]);
  
  if (!hospital) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">Hospital not found.</p>
          <Link to="/hospitals" className="text-blue-600 dark:text-blue-500 flex items-center justify-center mt-4 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Hospitals
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/hospitals" className="inline-flex items-center text-blue-600 dark:text-blue-500 mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Hospitals
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 mb-10">
          <div className="h-64 overflow-hidden">
            <img 
              src={hospital.image || 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
              alt={hospital.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{hospital.name}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">{hospital.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">Contact</h3>
                  <p className="text-gray-600 dark:text-gray-400">{hospital.contactNumber}</p>
                </div>
              </div>
            </div>
            
            <a 
              href={hospital.googleMapsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" /> View on Google Maps
            </a>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <User className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-500" />
            Doctors at {hospital.name}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Find specialists and their OPD timings
          </p>
        </div>
        
        {doctors.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              No doctor information available for this hospital at the moment.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalDetailPage;