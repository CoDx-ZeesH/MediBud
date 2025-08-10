import React from 'react';
import { Doctor } from '../../types';
import { Calendar, Phone, Building } from 'lucide-react';
import { getHospitalById } from '../../data/hospitals';

interface DoctorCardProps {
  doctor: Doctor;
  onClick?: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onClick }) => {
  const hospital = getHospitalById(doctor.hospitalId);

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
      onClick={onClick}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-40 md:h-auto overflow-hidden">
          <img 
            src={doctor.image || 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
            alt={doctor.name} 
            className="w-full h-full object-cover md:object-center"
          />
        </div>
        <div className="md:w-2/3 p-5">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{doctor.name}</h3>
          <p className="text-blue-600 dark:text-blue-500 font-medium mb-3">{doctor.specialty}</p>
          
          <div className="flex items-start mb-2">
            <Building className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-gray-600 dark:text-gray-300 text-sm">{hospital?.name || 'Hospital information unavailable'}</p>
          </div>
          
          <div className="flex items-start mb-2">
            <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-gray-600 dark:text-gray-300 text-sm">{doctor.opdDays}</p>
          </div>
          
          <div className="flex items-center">
            <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2 flex-shrink-0" />
            <p className="text-gray-600 dark:text-gray-300 text-sm">{doctor.contactInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;