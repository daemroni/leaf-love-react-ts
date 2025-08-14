export interface PlantPreferences {
  lightCondition: 'full-sun' | 'partial-shade' | 'low-light';
  careLevel: 'low' | 'medium' | 'high';
  plantType: 'flowering' | 'foliage' | 'succulent' | 'any';
  location: 'indoor' | 'outdoor' | 'both';
  size: 'small' | 'medium' | 'large' | 'any';
}

export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  image: string;
  lightCondition: string[];
  careLevel: 'low' | 'medium' | 'high';
  plantType: 'flowering' | 'foliage' | 'succulent';
  location: 'indoor' | 'outdoor' | 'both';
  size: 'small' | 'medium' | 'large';
  features: string[];
  careInstructions: {
    watering: string;
    light: string;
    temperature: string;
    humidity: string;
  };
}