export interface Hospital {
  id: string;
  name: string;
  address: string;
  googleMapsLink: string;
  contactNumber: string;
  image?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  hospitalId: string;
  opdDays: string;
  contactInfo: string;
  image?: string;
}

export interface Condition {
  id: string;
  name: string;
  symptoms: string[];
  specialties: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface DoctorRecommendation {
  condition: string;
  doctor: Doctor;
  hospital: Hospital;
}