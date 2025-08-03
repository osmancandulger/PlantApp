import React from 'react';
import { Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Screen, Typography, View, Input, Row, GradientText, SvgIcon } from ':atoms/';
import { HorizontalCards, CardItem } from ':molecules/';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Home.styles';
import { t } from 'i18next';
import { css } from '@emotion/native';
import { InputType } from ':enums/common';
import { useTheme } from '@emotion/react';
import { getResponsiveHeight, getResponsiveWidth } from ':utils';
import { useGetCategoriesQuery, useGetQuestionsQuery } from ':store/slices/apiSlice';
const NOTIFICATION_COUNT = 1;
const Home: React.FC = () => {
  const theme = useTheme();
  const styles = useStyleSheet(initialStyle());

  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useGetCategoriesQuery();

  const {
    data: questionsData,
    isLoading: questionsLoading,
    error: questionsError,
  } = useGetQuestionsQuery();
  const getGreeting = (): string => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return t('home.header.greeting.morning');
    } else if (hour < 17) {
      return t('home.header.greeting.afternoon');
    } else if (hour < 21) {
      return t('home.header.greeting.evening');
    } else {
      return t('home.header.greeting.night');
    }
  };

  return (
    <Screen backgroundColor="#FFFFFF">
      <ScrollView style={css(styles.container)} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.headerWrapper}>
            <Row style={styles.leafContainer}>
              <Image source={require('../../../assets/images/leaf.png')} style={styles.brush} />
              <Image source={require('../../../assets/images/leaves.png')} style={styles.brush} />
            </Row>
            <View style={styles.header}>
              <Typography style={styles.headerTitle}>{t('home.header.title')}</Typography>
              <Typography style={styles.headerGreetingText}>{getGreeting()}</Typography>
            </View>

            {/* Search */}
            <View style={styles.searchContainer}>
              <Input
                containerStyle={styles.searchInput}
                placeholder="Search for plants"
                placeholderTextColor="#999999"
                type={InputType.SEARCH}
                enableBlur={true}
              />
            </View>
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <TouchableOpacity style={css(styles.premiumBanner)} onPress={() => {}}>
            <View style={styles.premiumContent}>
              <Row style={styles.premiumContentWrapper}>
                <View style={styles.iconContainer}>
                  <SvgIcon
                    name="envelope"
                    width={getResponsiveWidth(32)}
                    height={getResponsiveHeight(32)}
                    style={styles.envelopeIcon}
                  />
                  <View style={styles.badge}>
                    <Typography style={styles.badgeText}>{NOTIFICATION_COUNT}</Typography>
                  </View>
                </View>
                <View style={styles.textContentWrapper}>
                  <GradientText
                    colors={[theme.color.mildYellow, theme.color.mediumYellow]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.premiumTitleGradient}
                  >
                    <Typography style={styles.premiumTitle}>
                      {t('home.premiumbanner.title')}
                    </Typography>
                  </GradientText>
                  <GradientText
                    colors={[theme.color.yellow, theme.color.darkYellow]}
                    start={{ x: 1, y: 0.5 }}
                    end={{ x: 0, y: 0.5 }}
                  >
                    <Typography style={styles.premiumSubtitle}>
                      {t('home.premiumbanner.subtitle')}
                    </Typography>
                  </GradientText>
                </View>
                <SvgIcon
                  name="chevronRight"
                  width={getResponsiveWidth(24)}
                  height={getResponsiveHeight(24)}
                  style={styles.chevronRight}
                />
              </Row>
            </View>
          </TouchableOpacity>

          <View style={styles.section}>
            <Typography variant="subtitle1" color="primary" style={styles.sectionTitle}>
              {t('home.get-started.title')}
            </Typography>

            {questionsData && (
              <HorizontalCards
                data={questionsData}
                onPressItem={(item: CardItem) => {
                  console.log('Selected item:', item);
                }}
              />
            )}
          </View>

          <View style={styles.section}>
            <View style={styles.categoryGrid}>
              {categoriesData &&
                categoriesData?.data.map((item) => {
                  return (
                    <View style={styles.categoryCard} key={item.id}>
                      <View style={styles.categoryImage}>
                        <ImageBackground
                          source={{ uri: item.image.url }}
                          style={css([styles.cardImage])}
                          resizeMode="cover"
                        >
                          <Typography style={styles.categoryTitle}>{item.title}</Typography>
                        </ImageBackground>
                      </View>
                    </View>
                  );
                })}
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Home;
