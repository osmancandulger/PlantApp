/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useRef } from 'react';
import { Screen, Typography, Button, View } from ':atoms/';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Onboarding.styles';
import useRouting from ':hooks/useRoutings';
import { ScreenNames } from ':enums/screens';
import { Carousel, PaginationIndicator } from ':molecules/';
import { Trans } from 'react-i18next';
import { Image } from 'react-native';
import { css } from '@emotion/native';
import { t } from 'i18next';
import { CarouselRef } from ':components/molecules/Carousel';

const Onboarding: React.FC = () => {
  const styles = useStyleSheet(initialStyle());
  const { push } = useRouting();
  const [currentPosition, setCurrentPosition] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);

  const handleContinue = () => {
    if (currentPosition < 1) {
      const success = carouselRef.current?.goToNextPage();
      if (!success) {
        push(ScreenNames.PAYWALL);
      }
    } else {
      push(ScreenNames.PAYWALL);
    }
  };

  const handlePositionChange = (position: number) => {
    setCurrentPosition(position);
  };

  const FirstSlide = () => (
    <View style={styles.slideContainer}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Typography style={styles.title}>
            <Trans
              i18nKey="onboarding.identify.title"
              components={{
                bold: (
                  <Typography variant="h1" style={[styles.title, styles.titleBold]}>
                    <></>
                  </Typography>
                ),
              }}
            />
          </Typography>
          <View style={styles.brushContainer}>
            <Image source={require('../../../assets/vectors/brush.png')} style={styles.brush} />
          </View>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/onboarding-phone.png')}
          style={css(styles.onboardingPhone)}
        />
      </View>
    </View>
  );

  const SecondSlide = () => (
    <View style={styles.slideContainer}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Typography style={styles.title}>
            <Trans
              i18nKey="onboarding.guide.title"
              components={{
                bold: (
                  <Typography variant="h1" style={[styles.title, styles.titleBold]}>
                    <></>
                  </Typography>
                ),
              }}
            />
          </Typography>
          <View style={styles.guideContainer}>
            <Image
              source={require('../../../assets/vectors/brush.png')}
              style={css(styles.brush, styles.guideBrush)}
            />
          </View>
        </View>
      </View>

      <View style={styles.careGuideContainer}>
        <Image
          source={require('../../../assets/images/care-guide-image.png')}
          style={css(styles.careGuideImage)}
        />
      </View>
    </View>
  );

  return (
    <Screen backgroundColor="#FFFFFF">
      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          pagesLength={2}
          autoPlay={false}
          onSnapToItem={handlePositionChange}
          style={styles.carouselContainer}
          showIndicator={false}
          customFooter={
            <View style={styles.footer}>
              <Button
                title={t('onboarding.continue-button.title')}
                onPress={handleContinue}
                size="large"
                style={styles.footerButton}
              />
              <PaginationIndicator totalPages={2} currentPage={currentPosition} />
            </View>
          }
        >
          <View key="slide1" style={styles.page}>
            <FirstSlide />
          </View>
          <View key="slide2" style={styles.page}>
            <SecondSlide />
          </View>
        </Carousel>
      </View>
    </Screen>
  );
};

export default Onboarding;
