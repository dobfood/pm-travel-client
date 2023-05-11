export interface Image {
  url: string;
  name: string;
}
export interface province {
  _id: string;
  title: string;
}
export interface tours{
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
  ratting: number;
  description: string;
  thumbnail: Image;
  codeTour: string;
  createdAt: Date;
  updatedAt: Date;
  schedule: Schedule;
}
export interface Tour {
  tour : tours;
  total:number
}

export interface Schedule {
  day: number;
  title: string;
  content: string;
}
export interface Category {
  _id: string;
  title: string;
  thumbnail: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
}
