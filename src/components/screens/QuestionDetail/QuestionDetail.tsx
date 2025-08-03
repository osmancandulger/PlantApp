import React from 'react';
import { WebView } from 'react-native-webview';
import { Screen } from ':atoms/';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './QuestionDetail.styles';
import { RouteProp, useRoute } from '@react-navigation/native';

type QuestionDetailScreenParams = {
  QuestionDetail: {
    uri: string;
  };
};

type QuestionDetailScreenRouteProp = RouteProp<QuestionDetailScreenParams, 'QuestionDetail'>;

const QuestionDetail: React.FC = () => {
  const styles = useStyleSheet(initialStyle());
  const route = useRoute<QuestionDetailScreenRouteProp>();
  const { uri } = route.params;

  return (
    <Screen>
      <WebView source={{ uri }} style={styles.webview} startInLoadingState={true} />
    </Screen>
  );
};

export default QuestionDetail;
