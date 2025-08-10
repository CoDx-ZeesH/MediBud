import React from 'react';
import { Hospital } from '../../types';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

interface HospitalCardProps {
  hospital: Hospital;
  onClick?: () => void;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital, onClick }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={hospital.image || 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
          alt={hospital.name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{hospital.name}</h3>
        
        <div className="flex items-start mb-2">
          <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
          <p className="text-gray-600 dark:text-gray-300 text-sm">{hospital.address}</p>
        </div>
        
        <div className="flex items-center mb-4">
          <Phone className="w-5 h-5 text-blue-600 dark:text-blue-500 mr-2 flex-shrink-0" />
          <p className="text-gray-600 dark:text-gray-300 text-sm">{hospital.contactNumber}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <a 
            href={hospital.googleMapsLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 dark:text-blue-500 flex items-center hover:underline text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4 mr-1" /> View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;