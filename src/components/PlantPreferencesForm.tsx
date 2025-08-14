import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PlantPreferences } from '@/types/plants';
import { Leaf, Sun, Droplets, Home, Ruler } from 'lucide-react';

interface PlantPreferencesFormProps {
  onSubmit: (preferences: PlantPreferences) => void;
}

export const PlantPreferencesForm = ({ onSubmit }: PlantPreferencesFormProps) => {
  const [preferences, setPreferences] = useState<PlantPreferences>({
    lightCondition: 'partial-shade',
    careLevel: 'medium',
    plantType: 'any',
    location: 'indoor',
    size: 'any'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  const updatePreference = <K extends keyof PlantPreferences>(
    key: K,
    value: PlantPreferences[K]
  ) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card variant="nature" className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-primary">
          <Leaf className="h-6 w-6" />
          Find Your Perfect Plants
        </CardTitle>
        <CardDescription>
          Tell us about your preferences and we'll recommend the best plants for you
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Light Condition */}
          <div className="space-y-4">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Sun className="h-4 w-4" />
              Light Conditions
            </Label>
            <RadioGroup
              value={preferences.lightCondition}
              onValueChange={(value: any) => updatePreference('lightCondition', value)}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="full-sun" id="full-sun" />
                <Label htmlFor="full-sun" className="cursor-pointer">
                  <div>
                    <div className="font-medium">Full Sun</div>
                    <div className="text-sm text-muted-foreground">6+ hours direct light</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="partial-shade" id="partial-shade" />
                <Label htmlFor="partial-shade" className="cursor-pointer">
                  <div>
                    <div className="font-medium">Partial Shade</div>
                    <div className="text-sm text-muted-foreground">Bright indirect light</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="low-light" id="low-light" />
                <Label htmlFor="low-light" className="cursor-pointer">
                  <div>
                    <div className="font-medium">Low Light</div>
                    <div className="text-sm text-muted-foreground">Minimal direct sun</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Care Level */}
          <div className="space-y-4">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Droplets className="h-4 w-4" />
              Care Level
            </Label>
            <RadioGroup
              value={preferences.careLevel}
              onValueChange={(value: any) => updatePreference('careLevel', value)}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="low" id="low-care" />
                <Label htmlFor="low-care" className="cursor-pointer">
                  <div>
                    <div className="font-medium">Low Maintenance</div>
                    <div className="text-sm text-muted-foreground">Minimal care needed</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="medium" id="medium-care" />
                <Label htmlFor="medium-care" className="cursor-pointer">
                  <div>
                    <div className="font-medium">Medium Care</div>
                    <div className="text-sm text-muted-foreground">Regular attention</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="high" id="high-care" />
                <Label htmlFor="high-care" className="cursor-pointer">
                  <div>
                    <div className="font-medium">High Maintenance</div>
                    <div className="text-sm text-muted-foreground">Frequent care</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Plant Type */}
          <div className="space-y-4">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              Plant Type
            </Label>
            <RadioGroup
              value={preferences.plantType}
              onValueChange={(value: any) => updatePreference('plantType', value)}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="flowering" id="flowering" />
                <Label htmlFor="flowering" className="cursor-pointer font-medium">Flowering</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="foliage" id="foliage" />
                <Label htmlFor="foliage" className="cursor-pointer font-medium">Foliage</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="succulent" id="succulent" />
                <Label htmlFor="succulent" className="cursor-pointer font-medium">Succulent</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="any" id="any-type" />
                <Label htmlFor="any-type" className="cursor-pointer font-medium">Any Type</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Home className="h-4 w-4" />
              Location
            </Label>
            <RadioGroup
              value={preferences.location}
              onValueChange={(value: any) => updatePreference('location', value)}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="indoor" id="indoor" />
                <Label htmlFor="indoor" className="cursor-pointer font-medium">Indoor</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="outdoor" id="outdoor" />
                <Label htmlFor="outdoor" className="cursor-pointer font-medium">Outdoor</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="both" id="both-location" />
                <Label htmlFor="both-location" className="cursor-pointer font-medium">Either</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Size */}
          <div className="space-y-4">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Ruler className="h-4 w-4" />
              Plant Size
            </Label>
            <RadioGroup
              value={preferences.size}
              onValueChange={(value: any) => updatePreference('size', value)}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="small" id="small" />
                <Label htmlFor="small" className="cursor-pointer font-medium">Small</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="medium" id="medium-size" />
                <Label htmlFor="medium-size" className="cursor-pointer font-medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="large" id="large" />
                <Label htmlFor="large" className="cursor-pointer font-medium">Large</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-accent">
                <RadioGroupItem value="any" id="any-size" />
                <Label htmlFor="any-size" className="cursor-pointer font-medium">Any Size</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" variant="gradient" size="lg" className="w-full">
            Find My Perfect Plants
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};