import React, { useState, useEffect } from 'react';
import { doctors } from '../data/doctors';
import { Doctor } from '../types';
import DoctorCard from '../components/features/DoctorCard';
import SearchBar from '../components/features/SearchBar';
import FilterBar from '../components/features/FilterBar';
import { User } from 'lucide-react';

const DoctorsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);
  
  // Get unique specialties for filter
  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))].sort();
  const specialtyOptions = specialties.map(specialty => ({
    value: specialty,
    label: specialty
  }));
  
  useEffect(() => {
    let filtered = [...doctors];
    
    // Filter by specialty
    if (selectedSpecialty) {
      filtered = filtered.filter(doctor => doctor.specialty === selectedSpecialty);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(doctor => 
        doctor.name.toLowerCase().includes(query) || 
        doctor.specialty.toLowerCase().includes(query)
      );
    }
    
    setFilteredDoctors(filtered);
  }, [searchQuery, selectedSpecialty]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialty(specialty);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 mb-4">
            <User className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Doctors in Varanasi</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Find the right specialist for your healthcare needs
          </p>
        </div>
        
        <div className="mb-8">
          <div className="max-w-lg mx-auto mb-4">
            <SearchBar 
              placeholder="Search doctors by name or specialty..." 
              onSearch={handleSearch} 
            />
          </div>
          
          <div className="flex justify-center">
            <FilterBar 
              title="Specialty"
              options={specialtyOptions}
              selectedValue={selectedSpecialty}
              onChange={handleSpecialtyChange}
            />
          </div>
        </div>
        
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No doctors found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredDoctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;