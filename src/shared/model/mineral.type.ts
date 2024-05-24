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
  id?: number;
  title: string;
  content: string;
};

export interface CategoryType {
  id: number;
  name: string;
  description: string;
  group?: number;
}

export interface GroupType {
  id: number;
  name: string;
}
