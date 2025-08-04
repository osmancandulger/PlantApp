import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type { CategoriesResponse, QuestionsResponse } from './models';
import Config from 'react-native-config';
export const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_BASE_URL,
  timeout: 10000,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});
