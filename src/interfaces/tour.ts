export interface Image {
  url: string;
  name: string;
}

export interface Tour {
  _id: string;
  category: string;
  title: string;
  departure: string;
  destination: string;
  numberDay: number;
  price: number;
  content: string;
  images: Image[];
  totalViews: number;
  rating: number;
  description: string;
  thumbnail: Image;
  codeTour: string;
  createdAt: Date;
  updatedAt: Date;
}
