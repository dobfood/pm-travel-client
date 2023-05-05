export interface Image {
  url: string;
  name: string;
}
export interface province {
  _id: string;
  title: string;
}

export interface Tour {
  _id: string;
  idCategory: province;
  title: string;
  departure: province;
  destination: province;
  numberDay: number;
  price: number;
  content: string;
  images: Image[];
  totalViews: number;
  maxNumber: number;
  rating: number;
  description: string;
  thumbnail: Image;
  codeTour: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  _id: string;
  title: string;
  thumbnail: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
}
