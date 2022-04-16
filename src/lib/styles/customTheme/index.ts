import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import Button from './components/button';
import fonts from './fonts';
import Input from './components/input';

const customTheme = extendTheme({
  fonts,
  colors,
  components: {
    Button,
    Input,
  },
});

export default customTheme;
