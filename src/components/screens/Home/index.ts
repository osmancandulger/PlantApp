export { default } from './Home';
export type CategoryImage = {
  id: number;
  name: string;
  url: string;
  width: number;
  height: number;
  ext: string;
};

export type Category = {
  id: number;
  name: string;
  title: string;
  rank: number;
  image: CategoryImage;
};
