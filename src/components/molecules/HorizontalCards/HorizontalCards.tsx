import React from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import { View, Text, TouchableOpacity } from ':atoms/';
import { css } from '@emotion/native';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './HorizontalCards.styles.ts';
import { HorizontalCardsProps } from './types';
import { BlurView } from '@react-native-community/blur';

const HorizontalCards: React.FC<HorizontalCardsProps> = ({
  data,
  containerStyle,
  cardStyle,
  imageStyle,
  titleStyle,
  subtitleStyle,
  onPressItem,
}) => {
  const styles = useStyleSheet(initialStyle());

  const renderCard = (item: any) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.card, cardStyle]}
      onPress={() => onPressItem?.(item)}
      activeOpacity={0.8}
    >
      <ImageBackground
        source={{ uri: item.image_uri }}
        style={css([styles.cardImage, imageStyle])}
        resizeMode="cover"
      >
        <View style={styles.textContainer}>
          <BlurView
            style={css(styles.blurContainer)}
            blurType="dark"
            blurAmount={50}
            reducedTransparencyFallbackColor="red"
          />
          <Text style={css([styles.title, titleStyle])}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={css([styles.container, containerStyle])}
      contentContainerStyle={styles.contentContainer}
    >
      {data.map(renderCard)}
    </ScrollView>
  );
};

export default HorizontalCards;
