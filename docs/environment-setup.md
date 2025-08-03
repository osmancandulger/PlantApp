# 🛠️ Environment Setup Guide

This guide will help you set up your development environment for the PlantApp React Native project.

## 📋 Prerequisites

Before you begin, make sure you have the following installed on your system:

### System Requirements

- **Operating System**: macOS (for iOS development), Windows/Linux/macOS (for Android development)
- **Node.js**: Version 18 or higher
- **Git**: Latest version
- **Java Development Kit (JDK)**: Version 11 or higher (for Android development)

### Required Software

#### 1. Node.js and npm

Download and install Node.js from [nodejs.org](https://nodejs.org/):

```bash
# Verify installation
node --version
npm --version
```

#### 2. React Native CLI

Install the React Native CLI globally:

```bash
npm install -g @react-native-community/cli
```

#### 3. Git

Download and install Git from [git-scm.com](https://git-scm.com/):

```bash
# Verify installation
git --version
```

## 🍎 iOS Development Setup (macOS only)

### 1. Install Xcode

1. Download Xcode from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835)
2. Install Xcode Command Line Tools:
   ```bash
   xcode-select --install
   ```

### 2. Install CocoaPods

CocoaPods is required for iOS dependency management:

```bash
# Install CocoaPods
sudo gem install cocoapods

# Verify installation
pod --version
```

### 3. Install Ruby Bundler

```bash
# Install bundler
gem install bundler

# Verify installation
bundle --version
```

## 🤖 Android Development Setup

### 1. Install Android Studio

1. Download Android Studio from [developer.android.com](https://developer.android.com/studio)
2. Install Android Studio with the following components:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device
   - Performance (Intel HAXM)

### 2. Configure Android SDK

1. Open Android Studio
2. Go to **Preferences** → **Appearance & Behavior** → **System Settings** → **Android SDK**
3. Install the following SDK platforms:
   - Android 13 (API level 33)
   - Android 12 (API level 32)
   - Android 11 (API level 30)

### 3. Configure Environment Variables

Add the following to your shell profile (`.bash_profile`, `.zshrc`, etc.):

```bash
# Android SDK
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### 4. Create Android Virtual Device (AVD)

1. Open Android Studio
2. Go to **Tools** → **AVD Manager**
3. Click **Create Virtual Device**
4. Select a device (e.g., Pixel 4)
5. Select a system image (e.g., API 33)
6. Complete the setup

## 🔧 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/PlantApp.git
cd PlantApp
```

### 2. Install Dependencies

```bash
# Install Node.js dependencies
npm install
# OR
yarn install
```

### 3. iOS Setup (macOS only)

```bash
# Install Ruby dependencies
bundle install

# Install CocoaPods dependencies
cd ios && pod install
```

### 4. Environment Configuration

Create a `.env` file in the root directory (if needed):

```bash
# Copy example environment file
cp .env.example .env
```

## 🚀 Running the Application

### Start Metro Bundler

```bash
npm start
# OR
yarn start
```

### Run on iOS (macOS only)

```bash
npm run ios
# OR
yarn ios
```

### Run on Android

```bash
npm run android
# OR
yarn android
```

## 🧪 Testing Setup

### Install Testing Dependencies

The project uses Jest and React Native Testing Library:

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 🔍 Troubleshooting

### Common Issues

#### 1. Metro Bundler Issues

```bash
# Clear Metro cache
npx react-native start --reset-cache
```

#### 2. iOS Build Issues

```bash
# Clean iOS build
cd ios
xcodebuild clean
cd ..

# Reinstall pods
cd ios
pod deintegrate
pod install
cd ..
```

#### 3. Android Build Issues

```bash
# Clean Android build
cd android
./gradlew clean
cd ..

# Clear React Native cache
npx react-native start --reset-cache
```

#### 4. Node Modules Issues

```bash
# Clear node modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### Platform-Specific Issues

#### iOS Issues

- **Xcode version**: Ensure you're using a compatible Xcode version
- **CocoaPods**: Run `pod install` after any native dependency changes
- **Simulator**: Reset simulator if it's not responding

#### Android Issues

- **SDK versions**: Ensure you have the correct Android SDK versions installed
- **AVD**: Create a new AVD if the current one has issues
- **Gradle**: Clean and rebuild the project

## 📱 Device Testing

### Physical Device Setup

#### iOS Device

1. Connect your iPhone via USB
2. Trust the computer on your iPhone
3. Open the project in Xcode
4. Select your device as the target
5. Build and run

#### Android Device

1. Enable Developer Options on your Android device
2. Enable USB Debugging
3. Connect your device via USB
4. Run `adb devices` to verify connection
5. Run the app with `npm run android`

## 🔧 Development Tools

### Recommended IDE/Editor

- **Visual Studio Code** with React Native extensions
- **Android Studio** for Android development
- **Xcode** for iOS development

### Useful Extensions

For VS Code:

- React Native Tools
- ESLint
- Prettier
- TypeScript and JavaScript Language Features

## 📚 Additional Resources

- [React Native Official Documentation](https://reactnative.dev/docs/getting-started)
- [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)
- [Android Studio Documentation](https://developer.android.com/studio)
- [Xcode Documentation](https://developer.apple.com/xcode/)

## 🆘 Getting Help

If you encounter issues:

1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information

---

**Need help?** Check our [GitHub Issues](https://github.com/yourusername/PlantApp/issues) or create a new one!
