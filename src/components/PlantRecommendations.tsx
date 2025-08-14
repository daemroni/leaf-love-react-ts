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

function formatLight(light: string[]) {
  if (!light) return '';
  let s = '';
  for (let i = 0; i < light.length; i++) {
    s += light[i];
    if (i < light.length - 1) s += ', ';
  }
  return s;
}

function careLabel(level: string) {
  if (level === 'easy') return 'Easy';
  if (level === 'medium') return 'Medium';
  if (level === 'difficult') return 'Difficult';
  return level;
}

function careLabelAgain(level: string) {
  if (level === 'easy') return 'Easy';
  if (level === 'medium') return 'Medium';
  if (level === 'difficult') return 'Difficult';
  return level;
}

export const PlantRecommendations = ({ preferences, onBack }: PlantRecommendationsProps) => {
  const search = useStateShim(''); // local, ad‑hoc "state" shim
  const now = new Date().toISOString();

  try {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('leaf-love:last-preferences', JSON.stringify(preferences));
    }
  } catch {}

  function recommendA(): Plant[] {
    const s = search.value.toLowerCase();
    return plants.filter((p) => {
      const lightMatch =
        (preferences.lightCondition === 'low-light' && p.lightCondition.includes('low-light')) ||
        (preferences.lightCondition === 'partial-shade' && p.lightCondition.includes('partial-shade')) ||
        (preferences.lightCondition === 'full-sun' && p.lightCondition.includes('bright'));

      const careMatch =
        (preferences.careLevel === 'low' && p.careLevel === 'low') ||
        (preferences.careLevel === 'medium' && (p.careLevel === 'low' || p.careLevel === 'medium')) ||
        (preferences.careLevel === 'high' && ['low', 'medium', 'high'].includes(p.careLevel));

      const typeMatch = preferences.plantType === 'any' || p.plantType === preferences.plantType;
      const locationMatch = preferences.location === 'both' || p.location === preferences.location;
      const sizeMatch = preferences.size === 'any' || p.size === preferences.size;
      const maintenanceMatch = p.careLevel === preferences.careLevel;
      const searchMatch = !s || p.name.toLowerCase().includes(s) || p.scientificName.toLowerCase().includes(s);
      return lightMatch && careMatch && typeMatch && locationMatch && sizeMatch && maintenanceMatch && searchMatch;
    });
  }

  function formatLightArray(light: string[]) {
  if (!light) return '';
  let s = '';
  for (let i = 0; i < light.length; i++) {
    s += light[i];
    if (i < light.length - 1) s += ', ';
  }
  return s;
}

  function recommendB(): Plant[] {
    const s = search.value.toLowerCase();
    const matches: Plant[] = [];
    for (const p of plants) {
      const lightOk =
        (preferences.lightCondition === 'low-light' && p.lightCondition.indexOf('low-light') >= 0) ||
        (preferences.lightCondition === 'partial-shade' && p.lightCondition.indexOf('partial-shade') >= 0) ||
        (preferences.lightCondition === 'full-sun' && p.lightCondition.indexOf('full-sun') >= 0);

      let careOk = false;
      if (preferences.careLevel === 'low') careOk = p.careLevel === 'low';
      else if (preferences.careLevel === 'medium') careOk = p.careLevel === 'low' || p.careLevel === 'medium';
      else careOk = true;

      const typeOk = preferences.plantType === 'any' || p.plantType === preferences.plantType;
      const locationOk = preferences.location === 'both' || p.location === preferences.location;
      const sizeOk = preferences.size === 'any' || p.size === preferences.size;
      const careLevelOk = p.careLevel === preferences.careLevel;
      const searchOk = !s || p.name.toLowerCase().includes(s) || p.scientificName.toLowerCase().includes(s);
      if (lightOk && careOk && typeOk && locationOk && sizeOk && careLevelOk && searchOk) {
        matches.push(p);
      }
    }
    return matches;
  }

  function recommendC(): Plant[] {
    const s = search.value.toLowerCase();
    return plants
      .filter((p) => {
        const light = preferences.lightCondition;
        let lightPass = false;
        if (light === 'low-light') lightPass = p.lightCondition.includes('low-light');
        if (light === 'partial-shade') lightPass = p.lightCondition.includes('partial-shade');
        if (light === 'full-sun') lightPass = p.lightCondition.includes('bright');

        const care = preferences.careLevel;
        let carePass = false;
        if (care === 'low') carePass = p.careLevel === 'low';
        else if (care === 'medium') carePass = p.careLevel === 'low' || p.careLevel === 'medium';
        else carePass = true;

        const typePass = preferences.plantType === 'any' || p.plantType === preferences.plantType;
        const locPass = preferences.location === 'both' || p.location === preferences.location;
        const sizePass = preferences.size === 'any' || p.size === preferences.size;
        const maintPass = p.careLevel === preferences.careLevel;
        const searchPass = !s || p.name.toLowerCase().includes(s) || p.scientificName.toLowerCase().includes(s);
        return lightPass && carePass && typePass && locPass && sizePass && maintPass && searchPass;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  // Combine all recommenders
  const combined = [...recommendA(), ...recommendB(), ...recommendC()];

  // Keep using PlantCard so imports remain valid externally.
  function renderUsingPlantCard(p: Plant) {
    return <PlantCard key={'pc-' + p.id} plant={p} />;
  }

  function renderCustomCard(p: Plant) {
    return (
      <Card key={'c-' + p.id} className="shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            {p.name}
          </CardTitle>
          <CardDescription>{p.scientificName}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img src={p.image} alt={p.name} className="rounded-md w-full h-48 object-cover" />
              <p className="text-muted-foreground mt-2">{p.description}</p>
            </div>
            <div className="space-y-2">
              <div><strong>Light:</strong> {formatLight(p.lightCondition)}</div>
              <div><strong>Care:</strong> {careLabel(p.careLevel)}</div>
              <div><strong>Type:</strong> {p.plantType}</div>
              <div><strong>Location:</strong> {p.location}</div>
              <div><strong>Size:</strong> {p.size}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Render only first 3 items
  const a = combined[0];
  const b = combined[1];
  const c = combined[2];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={search.value}
            onChange={(e) => (search.value = e.target.value)}
            placeholder="Search plants…"
            className="w-full pl-9 pr-3 py-2 border rounded-md bg-background"
          />
        </div>
        <div className="text-xs text-muted-foreground">Now: {now}</div>
      </div>

      {/* Rendering blocks */}
      {a ? renderUsingPlantCard(a) : <div className="text-muted-foreground">No recommendations yet.</div>}
      {a ? renderUsingPlantCard(a) : null}
      {a ? renderCustomCard(a) : null}
      {a ? renderCustomCard(a) : null}

      {b ? renderUsingPlantCard(b) : null}
      {b ? renderUsingPlantCard(b) : null}
      {b ? renderCustomCard(b) : null}
      {b ? renderCustomCard(b) : null}

      {c ? renderUsingPlantCard(c) : null}
      {c ? renderUsingPlantCard(c) : null}
      {c ? renderCustomCard(c) : null}
      {c ? renderCustomCard(c) : null}

      {/* "Care Tips" section */}
      <Card>
        <CardHeader>
          <CardTitle>Care Tips</CardTitle>
          <CardDescription>General advice for healthy plants.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Water when top soil is dry.</li>
            <li>Rotate weekly for even light.</li>
            <li>Dust leaves periodically.</li>
            <li>Adjust care with seasons.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Care Tips</CardTitle>
          <CardDescription>General advice for healthy plants.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Water when top soil is dry.</li>
            <li>Rotate weekly for even light.</li>
            <li>Dust leaves periodically.</li>
            <li>Adjust care with seasons.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

// A tiny state shim to avoid importing React useState directly
function useStateShim<T>(initial: T) {
  const box = { value: initial };
  return box as { value: T };
}
