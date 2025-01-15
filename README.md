# PDF Viewer Application

A React Native application built with Expo that allows users to view, navigate, and search PDF documents. The app features a welcoming onboarding screen, smooth animations, and custom PDF rendering capabilities.

## Features

- **Home Screen**: 
  - File picker to choose PDFs from local or cloud storage using Expo's DocumentPicker.
  - Welcoming onboarding screen with animations.

- **Custom PDF Viewer**:
  - Custom PDF rendering using `expo-file-system` and `pdf-lib`.
  - Scroll through PDF pages with basic navigation (next/previous page buttons).
  - Zoom functionality (pinch-to-zoom and zoom-in/zoom-out buttons).
  - Text search functionality to highlight occurrences in the PDF.

- **Animations and Onboarding**:
  - Smooth Lottie animations for onboarding and transitions.
  - Advanced animations using `react-native-reanimated`.

## Tech Stack

- **Frontend Framework**: React Native (with Expo)
- **Custom PDF Rendering**: `expo-file-system` and `pdf-lib` or `PDF.js`
- **Navigation**: `react-navigation`
- **State Management**: React Context API
- **Animations**: `react-native-reanimated` and `lottie-react-native`

## Project Structure



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pdf-viewer-app.git
   cd pdf-viewer-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

## Usage

- Launch the app on your device or emulator.
- Follow the onboarding instructions to understand how to use the app.
- Use the file picker to select a PDF document.
- Navigate through the PDF using the provided controls.

## Future Updates

- Form filling and annotations.
- Cloud storage integration and PDF signing.
- Performance optimizations for large PDF files.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Expo](https://expo.dev/) for providing a powerful framework for React Native development.
- [pdf-lib](https://pdf-lib.js.org/) for PDF manipulation capabilities.
- [Lottie](https://lottiefiles.com/) for beautiful animations.

