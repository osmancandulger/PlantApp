import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Types
export interface CategoryImage {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: CategoryImage;
}

export interface CategoriesResponse {
  data: Category[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Question {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

export type QuestionsResponse = Question[];

// API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app/',
  }),
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
