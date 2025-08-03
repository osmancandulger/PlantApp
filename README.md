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
- **Navigation**: React Navigation v7
- **Styling**: Emotion Native
- **Animations**: React Native Reanimated
- **Testing**: Jest + React Native Testing Library
- **Internationalization**: i18next

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

## 🚀 Getting Started

> **📖 Need help setting up your environment?** Check [Environment Setup Guide](docs/environment-setup.md) for detailed instructions.

### Prerequisites

- Node.js >= 18
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

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

| Home Screen                                                          | Plant Scanner                                                              | My Garden                                                                |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ![Home](https://via.placeholder.com/300x600/4CAF50/FFFFFF?text=Home) | ![Scanner](https://via.placeholder.com/300x600/4CAF50/FFFFFF?text=Scanner) | ![Garden](https://via.placeholder.com/300x600/4CAF50/FFFFFF?text=Garden) |

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
```

### Component Architecture

The app follows Atomic Design principles:

- **Atoms**: Basic UI components (Button, Input, Typography)
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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️**
