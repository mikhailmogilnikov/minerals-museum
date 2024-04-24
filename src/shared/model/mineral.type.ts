export interface MineralType {
  id: number;
  name: string;
  description: string;
  categories: number[];
  specs: SpecType[];
  model: string;
  img: string;
}

export type SpecType = {
  title: string;
  content: string;
};

export interface CategoryType {
  id: number;
  name: string;
  description: string;
}
