import { Hospital } from '../types';

export const hospitals: Hospital[] = [
  {
    id: 'ssl-bhu',
    name: 'Sir Sunderlal Hospital (BHU)',
    address: 'Banaras Hindu University, Varanasi - 221005',
    googleMapsLink: 'https://maps.google.com/?q=Sir+Sunderlal+Hospital+BHU+Varanasi',
    contactNumber: '+91 542 236 8444',
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'heritage',
    name: 'Heritage Hospital',
    address: '1/16, Chetganj, Varanasi - 221001',
    googleMapsLink: 'https://maps.google.com/?q=Heritage+Hospital+Chetganj+Varanasi',
    contactNumber: '+91 542 242 3690',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'popular',
    name: 'Popular Hospital',
    address: 'Bhelupur, Varanasi - 221010',
    googleMapsLink: 'https://maps.google.com/?q=Popular+Hospital+Bhelupur+Varanasi',
    contactNumber: '+91 542 244 2714',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'galaxy',
    name: 'Galaxy Hospital',
    address: 'Manduadih, Varanasi - 221005',
    googleMapsLink: 'https://maps.google.com/?q=Galaxy+Hospital+Manduadih+Varanasi',
    contactNumber: '+91 542 243 0241',
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'apex',
    name: 'Apex Super Specialty Hospital',
    address: 'Chetganj, Varanasi - 221001',
    googleMapsLink: 'https://maps.google.com/?q=Apex+Super+Specialty+Hospital+Chetganj+Varanasi',
    contactNumber: '+91 542 230 8703',
    image: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'ujala',
    name: 'Ujala Cygnus Laxmi Super Specialty Hospital',
    address: 'Jaitpura, Varanasi - 221005',
    googleMapsLink: 'https://maps.google.com/?q=Ujala+Cygnus+Laxmi+Super+Specialty+Hospital+Jaitpura+Varanasi',
    contactNumber: '+91 542 250 0623',
    image: 'https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'panacea',
    name: 'Panacea Hospital',
    address: 'Manduadih, Varanasi - 221005',
    googleMapsLink: 'https://maps.google.com/?q=Panacea+Hospital+Manduadih+Varanasi',
    contactNumber: '+91 542 243 1001',
    image: 'https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'dheeraj',
    name: 'Dheeraj Hospital',
    address: 'Bhelupur, Varanasi - 221010',
    googleMapsLink: 'https://maps.google.com/?q=Dheeraj+Hospital+Bhelupur+Varanasi',
    contactNumber: '+91 542 236 7789',
    image: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'varanasi-medical',
    name: 'Varanasi Hospital & Medical Research Center',
    address: 'Shivpur, Varanasi - 221010',
    googleMapsLink: 'https://maps.google.com/?q=Varanasi+Hospital+Medical+Research+Center+Shivpur+Varanasi',
    contactNumber: '+91 542 244 1599',
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'shubham',
    name: 'Shubham Hospital',
    address: 'Lanka, Varanasi - 221005',
    googleMapsLink: 'https://maps.google.com/?q=Shubham+Hospital+Lanka+Varanasi',
    contactNumber: '+91 542 243 3456',
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const getHospitalById = (id: string): Hospital | undefined => {
  return hospitals.find(hospital => hospital.id === id);
};