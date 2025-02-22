interface Bikes {
  id?: number;
  brand: string;
  name: string;
  max_clearance: number;
  year: number;
}

export const seedData: Bikes[] = [
  {
    brand: "Canyon",
    name: "Grizl",
    max_clearance: 50,
    year: 2025
  },
  {
    brand: "Trek",
    name: "Checkpoint",
    max_clearance: 50,
    year: 2025
  },
  {
    brand: "Specialized",
    name: "Diverge",
    max_clearance: 47,
    year: 2025
  },
  {
    brand: "Fara",
    name: "F/Gravel",
    max_clearance: 50,
    year: 2025
  }
];