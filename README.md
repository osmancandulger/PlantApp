# 🌱 PlantApp

A modern React Native mobile application designed to help users identify, care for, and manage their plants. Built with TypeScript, Redux Toolkit, and a atomic component-based architecture.

## ✨ Features

- **🌿 Plant Identification**: Scan and identify plants using your device's camera
- **🏡 My Garden**: Track and manage your plant collection
- **🔍 Plant Diagnosis**: Get detailed care information and troubleshooting
- **📱 Modern UI**: Beautiful, intuitive interface with smooth animations
- **🌍 Multi-language Support**: Internationalization with i18next
- **🎨 Theme Support**: Light and dark mode with custom theming
- **📊 Plant Care Tracking**: Monitor watering, fertilizing, and growth
- **🔔 Care Reminders**: Never forget to water your plants again

## 🏗️ Architecture

### Tech Stack

- **Framework**: React Native 0.80.2
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Data Fetching**: RTK Query (Redux Toolkit Query)
- **Navigation**: React Navigation v7
- **Styling**: Emotion Native
- **Animations**: React Native Reanimated
- **Testing**: Jest + React Native Testing Library
- **Internationalization**: i18next

### Prerequisites

- Node.js >= 18
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

## 🚀 Getting Started

> **📖 Need help setting up your environment?** Check [Environment Setup Guide](docs/environment-setup.md) for detailed instructions.

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Complex components
│   └── screens/        # Screen components
├── navigation/         # Navigation configuration
├── store/             # Redux store and slices
├── hooks/             # Custom React hooks
├── themes/            # Theme configuration
├── constants/         # App constants
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── assets/            # Images, icons, fonts
└── locale/            # Internationalization files
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/PlantApp.git
   cd PlantApp
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # OR using Yarn
   yarn install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   # Install CocoaPods dependencies
   bundle install
   bundle exec pod install
   ```

### Running the App

1. **Start Metro bundler**

   ```bash
   npm start
   # OR
   yarn start
   ```

2. **Run on Android**

   ```bash
   npm run android
   # OR
   yarn android
   ```

3. **Run on iOS**
   ```bash
   npm run ios
   # OR
   yarn ios
   ```

## 🧪 Testing

Run the test suite:

```bash
npm test
# OR
yarn test
```

Run tests with coverage:

```bash
npm test -- --coverage
```

## 📱 Screenshots
| Get started | Onboarding 
|-------------|------------
| <img width="180" height="809" alt="Screenshot 2025-08-04 at 09 55 27" src="https://github.com/user-attachments/assets/1b9bcb63-6aef-489e-acc7-14d08b66d879" /> | <img width="180" height="809" alt="Screenshot 2025-08-04 at 09 55 33" src="https://github.com/user-attachments/assets/34aef967-24c8-4b3e-87f0-9d1ab406d96f" />  <img width="180" height="809" alt="Screenshot 2025-08-04 at 09 55 40" src="https://github.com/user-attachments/assets/9fa3f458-0768-454c-bda9-c0786fbe7efb" /> 

| Paywall | Home
|---------|--------
| <img width="180" height="809" alt="Screenshot 2025-08-04 at 09 55 45" src="https://github.com/user-attachments/assets/a68b6f6e-37d2-4d6b-b7b2-5a7e8576b919" /> | <img width="180" height="809" alt="Screenshot 2025-08-04 at 09 55 09" src="https://github.com/user-attachments/assets/6d8c9c05-cd9d-4fbe-a976-2db17aa5e728" />  <img width="180" height="809" alt="Screenshot 2025-08-04 at 10 01 43" src="https://github.com/user-attachments/assets/00053505-51dd-4566-9db1-2ffd2769f8bc" />


## Demo
https://github.com/user-attachments/assets/139c5114-f663-4a93-9563-2e24c6c60a9f
## 🛠️ Development

### Code Style

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

### Available Scripts

```bash
npm run android      # Run on Android
npm run ios         # Run on iOS
npm start           # Start Metro bundler
npm test            # Run tests
npm run lint        # Run ESLint
npm run commitlint  # Validate commit messages
```

### Commit Message Convention

This project uses commitlint to enforce conventional commit messages. Only the following commit types are allowed:

- `feat`: New features
- `fix`: Bug fixes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `chore`: Maintenance tasks, dependencies, etc.
- `docs`: Documentation changes
- `refactor`: Code refactoring

**Examples:**

```bash
git commit -m "feat: add plant scanning functionality"
git commit -m "fix: resolve navigation issue in home screen"
git commit -m "style: format code with prettier"
git commit -m "chore: update dependencies"
```

**Invalid examples:**

```bash
git commit -m "test: add new test"        # ❌ 'test' type not allowed
git commit -m "docs: update readme"       # ❌ 'docs' type not allowed
git commit -m "refactor: improve code"    # ❌ 'refactor' type not allowed
```

### Component Architecture

The app follows Atomic Design principles:

- **Atoms**: Basic UI components (Button, Input, Text)
- **Molecules**: Complex components (Carousel, HorizontalCards)
- **Organisms**: Screen-level components
- **Templates**: Layout structures
- **Pages**: Complete screens

## 📦 Dependencies

### Core Dependencies

- `react-native`: 0.80.2
- `@reduxjs/toolkit`: State management
- `react-navigation`: Navigation
- `react-native-reanimated`: Animations
- `@emotion/native`: Styling
- `i18next`: Internationalization

### Development Dependencies

- `typescript`: Type safety
- `jest`: Testing framework
- `@testing-library/react-native`: Testing utilities
- `eslint`: Code linting
- `prettier`: Code formatting

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Use conventional commit messages
- Follow the existing code style
- Update documentation as needed

---

**Made with ❤️**
