# API Setup Documentation

## Environment Configuration

This project manages API base URL through environment variables.

### Creating .env File

Create a `.env` file in the project root directory:

```bash
# API Configuration
API_BASE_URL=URL
```

### Environment Variables

| Variable       | Description  | Example |
| -------------- | ------------ | ------- |
| `API_BASE_URL` | API base URL | `URL`   |

## API Service Structure

API requests are managed in `src/services/` using RTK Query. This structure:

- Uses environment variables
- Integrates with RTK Query's `fetchBaseQuery`
- Provides timeout management
- Offers TypeScript support
- Separates models and API configuration

### File Structure

```
src/services/
├── api.ts          # Base query configuration
├── models.ts       # API type definitions
└── index.ts        # Service exports
```

### Base Query Configuration

```typescript
// src/services/api.ts
export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  timeout: 10000,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});
```

### Models Definition

```typescript
// src/services/models.ts
export interface Category {
  id: number;
  name: string;
  title: string;
  rank: number;
  image: CategoryImage;
  // ... other properties
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
```

## Redux Integration

API services are integrated with Redux Toolkit Query. API endpoints are defined in `src/store/slices/apiSlice.ts` using the base query.

### Hook Usage

```typescript
import { useGetCategoriesQuery, useGetQuestionsQuery } from '../store/slices/apiSlice';

// In component
const { data: categories, isLoading, error } = useGetCategoriesQuery();
const { data: questions, isLoading: questionsLoading } = useGetQuestionsQuery();
```

## Adding New Endpoints

1. Define new types in `src/services/models.ts`
2. Define new endpoint in `src/store/slices/apiSlice.ts`

### Example

```typescript
// src/services/models.ts
export interface NewResponse {
  id: number;
  name: string;
  // ... other properties
}

// src/store/slices/apiSlice.ts
getNewEndpoint: builder.query<NewResponse, void>({
  query: () => 'newEndpoint',
  providesTags: ['NewEndpoint'],
}),

// Usage
const { data: newData } = useGetNewEndpointQuery();
```

## Benefits

- ✅ Leverages RTK Query's caching features
- ✅ Automatic re-fetching
- ✅ Optimistic updates
- ✅ Background refetching
- ✅ Request deduplication
- ✅ Environment variable support
- ✅ TypeScript support
- ✅ Separated concerns (models vs API config)

## Project Structure

```
src/
├── services/
│   ├── api.ts          # Base query configuration
│   ├── models.ts       # API type definitions
│   └── index.ts        # Service exports
├── store/
│   └── slices/
│       └── apiSlice.ts # RTK Query endpoints
└── types/
    └── env.d.ts        # Environment variable types
```

## Development Workflow

1. **Environment Setup**: Create `.env` file with required variables
2. **Add Types**: Define response types in `src/services/models.ts`
3. **Create Endpoint**: Add new endpoint in `src/store/slices/apiSlice.ts`
4. **Use in Components**: Import and use generated hooks

## Error Handling

RTK Query provides built-in error handling:

```typescript
const { data, error, isLoading } = useGetCategoriesQuery();

if (error) {
  console.error('API Error:', error);
}
```

## Caching Strategy

RTK Query automatically caches responses and provides:

- **Cache Invalidation**: Using `providesTags` and `invalidatesTags`
- **Background Updates**: Automatic refetching when app regains focus
- **Optimistic Updates**: Immediate UI updates before server response
