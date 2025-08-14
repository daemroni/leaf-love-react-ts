import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plant } from '@/types/plants';
import { Sun, Droplets, Thermometer, Wind, MapPin, Ruler } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

export const PlantCard = ({ plant }: PlantCardProps) => {
  const getCareIcon = (level: string) => {
    switch (level) {
      case 'low': return '🌿';
      case 'medium': return '🌱';
      case 'high': return '🌳';
      default: return '🌿';
    }
  };

  const getSizeIcon = (size: string) => {
    switch (size) {
      case 'small': return 'S';
      case 'medium': return 'M';
      case 'large': return 'L';
      default: return 'M';
    }
  };

  return (
    <Card variant="plant" className="overflow-hidden group cursor-pointer">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {getCareIcon(plant.careLevel)} {plant.careLevel} care
          </Badge>
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            <Ruler className="h-3 w-3 mr-1" />
            {getSizeIcon(plant.size)}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{plant.name}</CardTitle>
            <CardDescription className="italic text-sm">
              {plant.scientificName}
            </CardDescription>
          </div>
          <Badge 
            variant="outline" 
            className="ml-2 border-primary text-primary"
          >
            <MapPin className="h-3 w-3 mr-1" />
            {plant.location}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {plant.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {plant.features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm">
            <Sun className="h-4 w-4 text-terracotta" />
            <span className="text-muted-foreground">
              {plant.lightCondition.join(' / ')}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Droplets className="h-4 w-4 text-sage" />
            <span className="text-muted-foreground">
              {plant.careInstructions.watering.split(',')[0]}
            </span>
          </div>
        </div>

        <div className="pt-3 space-y-2 border-t border-border/50">
          <h4 className="font-medium text-sm text-primary">Quick Care Guide</h4>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Sun className="h-3 w-3" />
              <span>{plant.careInstructions.light}</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="h-3 w-3" />
              <span>{plant.careInstructions.temperature}</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-3 w-3" />
              <span>{plant.careInstructions.humidity}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};