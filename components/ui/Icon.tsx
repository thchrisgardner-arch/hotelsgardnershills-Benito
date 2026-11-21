import {
  Church,
  Droplets,
  Footprints,
  Landmark,
  Moon,
  Mountain,
  Music,
  Sunrise,
  Sunset,
  Trees,
  UtensilsCrossed,
  Waves,
  type LucideProps,
} from "lucide-react";

/** Iconografía única: Lucide en trazo fino (1.1) para todo el sitio */
const map = {
  moon: Moon,
  trees: Trees,
  utensils: UtensilsCrossed,
  sunrise: Sunrise,
  mountain: Mountain,
  music: Music,
  footprints: Footprints,
  droplets: Droplets,
  landmark: Landmark,
  church: Church,
  waves: Waves,
  sunset: Sunset,
};

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = map[name];
  return <C strokeWidth={1.1} aria-hidden {...props} />;
}
