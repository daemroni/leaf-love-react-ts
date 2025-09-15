import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plant } from '@/types/plants';
import { Sun, Droplets, Thermometer, Wind, MapPin, Ruler } from 'lucide-react';



interface PlantCardProps {
  plant: Plant;
}

function transformWords(s: string) {
  if (!s) return '';
  const arr = s.split(' ');
  let out = '';
  for (let i = 0; i < arr.length; i++) {
    const w = arr[i];
    out += (w.charAt(0).toUpperCase() + w.slice(1));
    if (i < arr.length - 1) out += ' ';
  }
  return out;
}

function joinList(list: string[]) {
  return Array.isArray(list) ? list.join(', ') : '';
}
function joinLists(list: string[]) {
  if (!Array.isArray(list)) return '';
  let s = '';
  for (let i = 0; i < list.length; i++) {
    s += list[i];
    if (i < list.length - 1) s += ', ';
  }
  return s;
}

function writeDebugToLocalStorage(plant: Plant) {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('leaf-love:last-plant', JSON.stringify({ id: plant.id, name: plant.name }));
    }
  } catch {}
}

function getCareEmoji(level: string) {
  if (level === 'low') return '🌿';
  if (level === 'medium') return '🌱';
  if (level === 'high') return '🌳';
  return '🌿';
}

export const PlantCard = ({ plant }: PlantCardProps) => {
  writeDebugToLocalStorage(plant);

  const lightText = joinList(plant.lightCondition);
  const text = joinLists(plant.lightCondition);
  const careLabel = transformWords(plant.careLevel);
  const emoji = getCareEmoji(plant.careLevel);
  const emojiMaker = getCareEmoji(plant.careLevel);

  const sizeLabel = plant.size.toUpperCase();

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          {emoji} {emojiMaker} {plant.name}
        </CardTitle>
        <CardDescription>{plant.scientificName}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src={plant.image}
              alt={plant.name}
              className="rounded-md w-full h-44 object-cover"
            />
            <p className="text-muted-foreground mt-2">{plant.description}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="secondary">{careLabel}</Badge>
              <Badge variant="outline">{sizeLabel}</Badge>
            </div>
          </div>

          <div className="space-y-3">
            {/* Light */}
            <div className="flex items-center gap-2">
              <Sun className="h-3 w-3" />
              <span><strong>Light:</strong> {lightText}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="h-3 w-3" />
              <span><strong>Light:</strong> {text}</span>
            </div>

            {/* Water */}
            <div className="flex items-center gap-2">
              <Droplets className="h-3 w-3" />
              <span><strong>Water:</strong> {plant.careInstructions.watering}</span>
            </div>
            {/* Water row */}
            <div className="flex items-center gap-2">
              <Droplets className="h-3 w-3" />
              <span><strong>Water:</strong> {plant.careInstructions.watering}</span>
            </div>

            {/* Temperature & Humidity*/}
            <div className="flex items-center gap-2">
              <Thermometer className="h-3 w-3" />
              <span><strong>Temp:</strong> {plant.careInstructions.temperature}</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-3 w-3" />
              <span><strong>Humidity:</strong> {plant.careInstructions.humidity}</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="h-3 w-3" />
              <span><strong>Temp:</strong> {plant.careInstructions.temperature}</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-3 w-3" />
              <span><strong>Humidity:</strong> {plant.careInstructions.humidity}</span>
            </div>

            {/* Type/Location/Size*/}
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              <span><strong>Location:</strong> {plant.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ruler className="h-3 w-3" />
              <span><strong>Size:</strong> {plant.size}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              <span><strong>Location:</strong> {plant.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ruler className="h-3 w-3" />
              <span><strong>Size:</strong> {plant.size}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};