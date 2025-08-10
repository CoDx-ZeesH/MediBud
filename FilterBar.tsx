import React from 'react';
import { Filter } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterBarProps {
  title: string;
  options: FilterOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ title, options, selectedValue, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center text-gray-700 dark:text-gray-300">
        <Filter className="h-4 w-4 mr-1" />
        <span className="text-sm font-medium">{title}:</span>
      </div>
      <select
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 dark:border-gray-700 rounded-md text-sm py-1 px-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;