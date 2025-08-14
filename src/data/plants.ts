import { Plant } from '@/types/plants';
import monsteraImg from '@/assets/monstera.jpg';
import pothosImg from '@/assets/pothos.jpg';
import succulentsImg from '@/assets/succulents.jpg';
import snakePlantImg from '@/assets/snake-plant.jpg';
import peaceLilyImg from '@/assets/peace-lily.jpg';
import rubberTreeImg from '@/assets/rubber-tree.jpg';

export const plants: Plant[] = [
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    description: 'The iconic Swiss cheese plant with stunning perforated leaves that bring tropical vibes to any space.',
    image: monsteraImg,
    lightCondition: ['partial-shade', 'low-light'],
    careLevel: 'medium',
    plantType: 'foliage',
    location: 'indoor',
    size: 'large',
    features: ['Air-purifying', 'Statement plant', 'Climbing vine'],
    careInstructions: {
      watering: 'Water when top inch of soil is dry, typically weekly',
      light: 'Bright, indirect light. Avoid direct sunlight',
      temperature: '65-80°F (18-27°C)',
      humidity: 'Prefers high humidity (50-60%)'
    }
  },
  {
    id: 'pothos',
    name: 'Golden Pothos',
    scientificName: 'Epipremnum aureum',
    description: 'A versatile trailing plant perfect for beginners, known for its heart-shaped leaves and easy care.',
    image: pothosImg,
    lightCondition: ['partial-shade', 'low-light'],
    careLevel: 'low',
    plantType: 'foliage',
    location: 'indoor',
    size: 'medium',
    features: ['Very easy care', 'Trailing plant', 'Air-purifying'],
    careInstructions: {
      watering: 'Water when soil is dry, very forgiving',
      light: 'Low to bright indirect light',
      temperature: '65-85°F (18-29°C)',
      humidity: 'Average home humidity is fine'
    }
  },
  {
    id: 'succulents',
    name: 'Succulent Mix',
    scientificName: 'Various species',
    description: 'A delightful collection of water-storing plants that add geometric beauty with minimal care requirements.',
    image: succulentsImg,
    lightCondition: ['full-sun', 'partial-shade'],
    careLevel: 'low',
    plantType: 'succulent',
    location: 'both',
    size: 'small',
    features: ['Drought tolerant', 'Unique shapes', 'Low maintenance'],
    careInstructions: {
      watering: 'Water deeply but infrequently, every 2-3 weeks',
      light: 'Bright, direct light preferred',
      temperature: '60-80°F (15-27°C)',
      humidity: 'Low humidity preferred'
    }
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    description: 'An architectural plant with striking upright leaves, perfect for modern spaces and low-light corners.',
    image: snakePlantImg,
    lightCondition: ['low-light', 'partial-shade'],
    careLevel: 'low',
    plantType: 'foliage',
    location: 'indoor',
    size: 'medium',
    features: ['Extremely low maintenance', 'Air-purifying', 'Modern look'],
    careInstructions: {
      watering: 'Water every 2-4 weeks, drought tolerant',
      light: 'Low to bright indirect light',
      temperature: '60-85°F (15-29°C)',
      humidity: 'Average home humidity'
    }
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum wallisii',
    description: 'An elegant flowering houseplant with glossy leaves and graceful white blooms that signal your care.',
    image: peaceLilyImg,
    lightCondition: ['low-light', 'partial-shade'],
    careLevel: 'medium',
    plantType: 'flowering',
    location: 'indoor',
    size: 'medium',
    features: ['Beautiful white flowers', 'Air-purifying', 'Tells you when to water'],
    careInstructions: {
      watering: 'Keep soil consistently moist but not soggy',
      light: 'Low to medium indirect light',
      temperature: '65-80°F (18-27°C)',
      humidity: 'High humidity preferred (40-50%)'
    }
  },
  {
    id: 'rubber-tree',
    name: 'Rubber Tree',
    scientificName: 'Ficus elastica',
    description: 'A stunning focal point with large, glossy leaves that bring sophistication to any interior design.',
    image: rubberTreeImg,
    lightCondition: ['partial-shade'],
    careLevel: 'medium',
    plantType: 'foliage',
    location: 'indoor',
    size: 'large',
    features: ['Glossy leaves', 'Statement plant', 'Fast growing'],
    careInstructions: {
      watering: 'Water when top inch of soil is dry',
      light: 'Bright, indirect light',
      temperature: '65-75°F (18-24°C)',
      humidity: 'Average to high humidity'
    }
  }
];