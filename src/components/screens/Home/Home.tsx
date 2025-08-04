import React, { useMemo } from 'react';
import { Image, ImageBackground, ScrollView } from 'react-native';
import { Screen, Text, View, Input, Row, GradientText, SvgIcon, TouchableOpacity } from ':atoms/';
import { HorizontalCards } from ':molecules/';
import { CardItem } from ':molecules/HorizontalCards/types';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Home.styles';
import { t } from 'i18next';
import { css } from '@emotion/native';
import { InputType } from ':enums/common';
import { useTheme } from '@emotion/react';
import { getResponsiveHeight, getResponsiveWidth } from ':utils';
import { useGetCategoriesQuery, useGetQuestionsQuery } from ':store/slices/apiSlice';
import useRouting from ':hooks/useRoutings';
import { ScreenNames } from ':enums/screens';
const NOTIFICATION_COUNT = 1;
const Home: React.FC = () => {
  const theme = useTheme();
  const styles = useStyleSheet(initialStyle());
  const { push } = useRouting();
  const { data: questionsData } = useGetQuestionsQuery();
  const { data: categoriesData } = useGetCategoriesQuery();

  const sortedQuestionsData = useMemo(() => {
    return questionsData?.sort((a, b) => {
      const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
      const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
      return orderA - orderB;
    });
  }, [questionsData]);

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
    <Screen>
      <ScrollView style={css(styles.container)} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.headerWrapper}>
            <Row style={styles.leafContainer}>
              <Image source={require('../../../assets/images/leaf.png')} />
              <Image source={require('../../../assets/images/leaves.png')} />
            </Row>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>{t('home.header.title')}</Text>
              <Text style={styles.headerGreetingText}>{getGreeting()}</Text>
            </View>

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
          <TouchableOpacity style={styles.premiumBanner} onPress={() => {}} activeOpacity={0.8}>
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
                    <Text style={styles.badgeText}>{NOTIFICATION_COUNT}</Text>
                  </View>
                </View>
                <View style={styles.textContentWrapper}>
                  <GradientText
                    colors={[theme.color.mildYellow, theme.color.mediumYellow]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.premiumTitleGradient}
                  >
                    <Text style={styles.premiumTitle}>{t('home.premiumbanner.title')}</Text>
                  </GradientText>
                  <GradientText
                    colors={[theme.color.yellow, theme.color.darkYellow]}
                    start={{ x: 1, y: 0.5 }}
                    end={{ x: 0, y: 0.5 }}
                  >
                    <Text style={styles.premiumSubtitle}>{t('home.premiumbanner.subtitle')}</Text>
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
            <Text variant="subtitle1" color="primary" style={styles.sectionTitle}>
              {t('home.get-started.title')}
            </Text>

            {sortedQuestionsData && (
              <HorizontalCards
                data={sortedQuestionsData}
                onPressItem={(item: CardItem) => {
                  if (item.uri) {
                    push(ScreenNames.QUESTION_DETAIL, {
                      uri: item.uri,
                    });
                  }
                }}
              />
            )}
          </View>

          <View style={styles.section}>
            <View style={styles.categoryGrid}>
              {categoriesData &&
                categoriesData?.data.map((item) => {
                  return (
                    <TouchableOpacity
                      style={styles.categoryCard}
                      key={item.id}
                      onPress={() => null}
                      activeOpacity={0.6}
                    >
                      <View style={styles.categoryImage}>
                        <ImageBackground
                          source={{ uri: item.image.url }}
                          style={css([styles.cardImage])}
                          resizeMode="cover"
                        >
                          <Text style={styles.categoryTitle}>{item.title}</Text>
                        </ImageBackground>
                      </View>
                    </TouchableOpacity>
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
