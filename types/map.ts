type coordLetter = "A" | "B" | "C" | "D" | "E";
type coordNumber = "1" | "2" | "3";

export interface Location {
  coords: `${coordLetter}${coordNumber}`;
  name: string;
  shortName: string;
  color?: string; // overrides color from LocationGroup
}

export interface LocationsGroup {
  name: string;
  color: string;
  locations: Location[];
}
