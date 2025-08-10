import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { hospitals } from '../data/hospitals';
import { Hospital } from '../types';
import HospitalCard from '../components/features/HospitalCard';
import SearchBar from '../components/features/SearchBar';
import { Building } from 'lucide-react';

const HospitalsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>(hospitals);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredHospitals(hospitals);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = hospitals.filter(hospital => 
        hospital.name.toLowerCase().includes(query) || 
        hospital.address.toLowerCase().includes(query)
      );
      setFilteredHospitals(filtered);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleHospitalClick = (hospitalId: string) => {
    navigate(`/hospitals/${hospitalId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 mb-4">
            <Building className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Hospitals in Varanasi</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Find the best hospitals in Varanasi with complete information
          </p>
        </div>

        <div className="mb-8 max-w-lg mx-auto">
          <SearchBar 
            placeholder="Search hospitals by name or area..." 
            onSearch={handleSearch} 
          />
        </div>

        {filteredHospitals.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No hospitals found matching "{searchQuery}".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map(hospital => (
              <HospitalCard 
                key={hospital.id} 
                hospital={hospital} 
                onClick={() => handleHospitalClick(hospital.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalsPage;