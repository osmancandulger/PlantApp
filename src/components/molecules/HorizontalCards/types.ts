export interface CardItem {
  id: number;
  title: string;
  subtitle?: string;
  image_uri: string;
  uri?: string;
  order?: number;
}

export interface HorizontalCardsProps {
  data: CardItem[];
  containerStyle?: any;
  cardStyle?: any;
  imageStyle?: any;
  titleStyle?: any;
  subtitleStyle?: any;
  onPressItem?: (item: CardItem) => void;
}
