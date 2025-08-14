import { Plant, PlantPreferences } from '@/types/plants';
import { plants } from '@/data/plants';
import { PlantCard } from './PlantCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Search, Sparkles } from 'lucide-react';

interface PlantRecommendationsProps {
  preferences: PlantPreferences;
  onBack: () => void;
}

export const PlantRecommendations = ({ preferences, onBack }: PlantRecommendationsProps) => {
  const getRecommendedPlants = (): Plant[] => {
    return plants.filter(plant => {
      // Light condition match
      const lightMatch = plant.lightCondition.includes(preferences.lightCondition);
      
      // Care level match (exact or within one level)
      const careMatch = preferences.careLevel === 'low' 
        ? plant.careLevel === 'low' || plant.careLevel === 'medium'
        : preferences.careLevel === 'medium'
        ? true // medium matches all
        : plant.careLevel === 'high' || plant.careLevel === 'medium';
      
      // Plant type match
      const typeMatch = preferences.plantType === 'any' || plant.plantType === preferences.plantType;
      
      // Location match
      const locationMatch = preferences.location === 'both' || 
                            plant.location === 'both' || 
                            plant.location === preferences.location;
      
      // Size match
      const sizeMatch = preferences.size === 'any' || plant.size === preferences.size;
      
      return lightMatch && careMatch && typeMatch && locationMatch && sizeMatch;
    });
  };

  const recommendedPlants = getRecommendedPlants();

  const getPreferencesSummary = () => {
    const conditions = [];
    if (preferences.lightCondition !== 'partial-shade') {
      conditions.push(preferences.lightCondition.replace('-', ' '));
    }
    if (preferences.careLevel !== 'medium') {
      conditions.push(`${preferences.careLevel} maintenance`);
    }
    if (preferences.plantType !== 'any') {
      conditions.push(preferences.plantType);
    }
    if (preferences.location !== 'indoor') {
      conditions.push(preferences.location);
    }
    if (preferences.size !== 'any') {
      conditions.push(`${preferences.size} size`);
    }
    return conditions.join(', ');
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Preferences
        </Button>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-primary flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-terracotta" />
            Your Perfect Plant Matches
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Based on your preferences for: <span className="font-medium text-foreground">{getPreferencesSummary()}</span>
          </p>
        </div>
      </div>

      {/* Results Summary */}
      <Card variant="feature" className="text-center">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2">
            <Search className="h-5 w-5" />
            Found {recommendedPlants.length} Perfect {recommendedPlants.length === 1 ? 'Match' : 'Matches'}
          </CardTitle>
          <CardDescription>
            These plants are perfectly suited to your care preferences and environment
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Plant Grid */}
      {recommendedPlants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      ) : (
        <Card variant="nature" className="text-center py-12">
          <CardContent>
            <div className="space-y-4">
              <div className="text-6xl">🌱</div>
              <h3 className="text-xl font-semibold">No Perfect Matches Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try adjusting your preferences to find plants that might work for your space. 
                Consider being more flexible with care level or plant type.
              </p>
              <Button variant="gradient" onClick={onBack} className="mt-4">
                Adjust Preferences
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Care Tips */}
      {recommendedPlants.length > 0 && (
        <Card variant="nature" className="mt-8">
          <CardHeader>
            <CardTitle className="text-center">🌿 General Care Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Getting Started</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Start with one plant to learn its needs</li>
                  <li>• Choose a consistent watering schedule</li>
                  <li>• Observe your plant for the first few weeks</li>
                  <li>• Don't repot immediately after purchase</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Common Mistakes</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Overwatering (most common cause of death)</li>
                  <li>• Placing plants in dark corners</li>
                  <li>• Using cold water for watering</li>
                  <li>• Ignoring seasonal care changes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};