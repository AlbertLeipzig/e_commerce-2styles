export interface IButton {
  text: string;
  action: () => void;
}

export interface IDeadline {
  day: number;
  month: number;
  hour: number;
  minute: number;
}

export interface IEmployee extends IPerson {
  img: string;
  role: string;
  socialMedia: {
    tw: string;
    ig: string;
    li: string;
  };
}

export interface IOrder extends IProduct {
  quantity: number;
}

export interface IPerson {
  id: string;
  email: string;
  address: string;
  firstName: string;
  lastName: string;
}

export interface IProduct {
  id: string;
  title: string;
  price: number;
  fullPrice: number;
  stars: number;
  numberOfReviews: number;
  images: string[];
  colors: string[];
  description: string;
}

export interface IRemainingTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface IUser extends IPerson {
  img?: string;
}
