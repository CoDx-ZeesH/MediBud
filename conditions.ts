import { Condition } from '../types';

export const conditions: Condition[] = [
  {
    id: 'fever',
    name: 'Fever and Flu',
    symptoms: ['fever', 'high temperature', 'chills', 'sweating', 'headache', 'body ache', 'weakness'],
    specialties: ['General Medicine', 'Pediatrics']
  },
  {
    id: 'respiratory',
    name: 'Respiratory Infection',
    symptoms: ['cough', 'sore throat', 'runny nose', 'breathing difficulty', 'congestion', 'sneezing'],
    specialties: ['ENT', 'Pulmonology']
  },
  {
    id: 'joint-pain',
    name: 'Joint Pain',
    symptoms: ['joint pain', 'swelling', 'stiffness', 'limited movement', 'redness around joints'],
    specialties: ['Orthopedics', 'Rheumatology']
  },
  {
    id: 'skin-issues',
    name: 'Skin Conditions',
    symptoms: ['rash', 'itching', 'skin discoloration', 'dryness', 'blisters', 'acne'],
    specialties: ['Dermatology']
  },
  {
    id: 'digestive',
    name: 'Digestive Issues',
    symptoms: ['stomach pain', 'nausea', 'vomiting', 'diarrhea', 'constipation', 'abdominal discomfort', 'indigestion'],
    specialties: ['Gastroenterology', 'General Medicine']
  },
  {
    id: 'headaches',
    name: 'Headaches and Migraines',
    symptoms: ['headache', 'migraine', 'head pain', 'throbbing pain', 'sensitivity to light', 'dizziness'],
    specialties: ['Neurology', 'General Medicine']
  },
  {
    id: 'eye-problems',
    name: 'Eye Problems',
    symptoms: ['eye pain', 'redness in eye', 'blurred vision', 'dry eyes', 'itchy eyes', 'watery eyes'],
    specialties: ['Ophthalmology']
  },
  {
    id: 'heart-issues',
    name: 'Heart Issues',
    symptoms: ['chest pain', 'palpitations', 'shortness of breath', 'dizziness', 'fatigue'],
    specialties: ['Cardiology']
  },
  {
    id: 'gynecological',
    name: 'Gynecological Issues',
    symptoms: ['menstrual pain', 'irregular periods', 'pelvic pain', 'vaginal discharge', 'pregnancy concerns'],
    specialties: ['Gynecology']
  },
  {
    id: 'mental-health',
    name: 'Mental Health Concerns',
    symptoms: ['anxiety', 'depression', 'mood swings', 'sleep problems', 'stress', 'panic attacks'],
    specialties: ['Psychiatry', 'Psychology']
  }
];

export const findConditionsBySymptoms = (userSymptoms: string): Condition[] => {
  const symptomWords = userSymptoms.toLowerCase().split(/\s+/);
  
  return conditions.filter(condition => {
    return condition.symptoms.some(symptom => {
      const symptomWords = symptom.toLowerCase().split(/\s+/);
      return symptomWords.some(word => userSymptoms.toLowerCase().includes(word));
    });
  });
};

export const getSpecialtiesForConditions = (conditionIds: string[]): string[] => {
  const specialties = conditionIds.flatMap(conditionId => {
    const condition = conditions.find(c => c.id === conditionId);
    return condition ? condition.specialties : [];
  });
  
  return [...new Set(specialties)]; // Remove duplicates
};