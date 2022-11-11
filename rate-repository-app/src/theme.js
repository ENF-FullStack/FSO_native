import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      navBackground: '#24292f',
      mainBackground: '#e1e4e8',
      inputBorder: '#999999',
      error: '#ff0000',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
    fontWeights: {
      normal: '400',
      bold: '600',
    },
  };
  
  export default theme;