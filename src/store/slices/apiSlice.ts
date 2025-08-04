import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../services';
import { CategoriesResponse, QuestionsResponse } from '../../services/models';

// API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Categories', 'Questions'],
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesResponse, void>({
      query: () => 'getCategories',
      providesTags: ['Categories'],
    }),
    getQuestions: builder.query<QuestionsResponse, void>({
      query: () => 'getQuestions',
      providesTags: ['Questions'],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetQuestionsQuery } = apiSlice;
