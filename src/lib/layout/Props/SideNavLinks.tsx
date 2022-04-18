import { Text } from '@chakra-ui/react';

type SideNav = {
  color: string;
  content: any;
  circle: any;
  line: any;
  name: string;
};

function SideNavLinks({ color, content, circle, line, name }: SideNav) {
  return (
    <Text
      fontSize="1.3rem"
      color={color}
      pos="relative"
      w="260px"
      _after={{
        content,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        w: '23px',
        h: '23px',
        pos: 'absolute',
        borderRadius: '50%',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        border: circle,
      }}
      _before={{
        content: '""',
        w: '70px',
        pos: 'absolute',
        border: line,
        transform: 'rotate(-90deg)',
        right: '-24px',
        top: '173%',
      }}
    >
      {name}
    </Text>
  );
}

export default SideNavLinks;
