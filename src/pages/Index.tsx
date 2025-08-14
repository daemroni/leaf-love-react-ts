import { useState } from 'react';
import { PlantPreferencesForm } from '@/components/PlantPreferencesForm';
import { PlantRecommendations } from '@/components/PlantRecommendations';
import { PlantPreferences } from '@/types/plants';
import heroImage from '@/assets/hero-plants.jpg';
import { Leaf, Heart, Sun, Droplets } from 'lucide-react';

const Index = () => {
  const [preferences, setPreferences] = useState<PlantPreferences | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handlePreferencesSubmit = (prefs: PlantPreferences) => {
    setPreferences(prefs);
    setShowRecommendations(true);
  };

  const handleBack = () => {
    setShowRecommendations(false);
  };

  if (showRecommendations && preferences) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <PlantRecommendations preferences={preferences} onBack={handleBack} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-sage/5 to-terracotta/5">
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-96 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-forest/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4 px-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Find Your Perfect Plant
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                Discover plants that match your lifestyle, space, and care preferences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Personalized Matches</h3>
            <p className="text-muted-foreground">
              Get plant recommendations tailored to your specific preferences and environment
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center">
              <Sun className="h-8 w-8 text-terracotta" />
            </div>
            <h3 className="text-xl font-semibold">Expert Care Tips</h3>
            <p className="text-muted-foreground">
              Learn exactly how to care for each plant with detailed guidance and tips
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <Droplets className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Success Guaranteed</h3>
            <p className="text-muted-foreground">
              Choose from carefully curated plants that are perfect for your skill level
            </p>
          </div>
        </div>

        {/* Preferences Form */}
        <PlantPreferencesForm onSubmit={handlePreferencesSubmit} />
      </div>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold text-primary">PlantMatch</span>
          </div>
          <p className="text-muted-foreground">
            Helping you create the perfect green space, one plant at a time
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;