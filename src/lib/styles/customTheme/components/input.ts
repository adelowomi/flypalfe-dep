import type { DeepPartial, Theme } from '@chakra-ui/react';

const Button: DeepPartial<Theme['components']['Input']> = {
  variants: {
    outline: {
      field: {
        borderColor: 'brand.100',
        borderRadius: '5px',
        background: '#FFFFFF',
        border: '1px solid #007F82',
        boxSizing: 'border-box',
        boxShadow: '0px 0px 9px rgba(0, 127, 130, 0.37)',
        bordeRadius: '5px',
        height: '4rem',
        _focus: {
          borderColor: 'brand.200',
        },
        _placeholder: {
          fontSize: '.8rem',
        },
      },
    },
  },
};

export default Button;
