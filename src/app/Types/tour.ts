export interface ITour {
  _id: string;
  name: string;
  slug?: string;
  duration: number;
  maxGroupSize: number;
  difficulty: "easy" | "medium" | "difficult";
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  priceDiscount?: number;
  summary: string;
  description?: string;
  imageCover: string;
  images?: string[];
  createdAt: Date;
  startDates?: Date[]; // Make it optional to match the backend model
  secretTour?: boolean;
  startLocation?: {
    description: string;
    type: string;
    coordinates: number[];
    address?: string;
  };
  locations?: {
    description?: string;
    day?: number;
    type: string;
    coordinates: number[];
  }[];
}

export interface TourProps {
  tour: ITour;
}
