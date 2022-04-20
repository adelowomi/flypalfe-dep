import { Text } from '@chakra-ui/react';
import { number } from 'yup';

type SideNav = {
  steps: number;
  name: string;
  step: number;
};

function SideNavLinks({ steps, name, step }: SideNav) {
  let num = steps + 1;
  console.log(step);
  console.log(steps);
  console.log(num);

  return (
    <Text
      fontSize="1.3rem"
      color={step >= steps ? 'brand.500' : 'white'}
      pos="relative"
      w="260px"
      _after={{
        content:
          step >= num || step === 4
            ? 'url(../assets/check.png)'
            : num === 3
            ? '""'
            : '""',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        w: '23px',
        h: '23px',
        pos: 'absolute',
        borderRadius: '50%',
        fontWeight: '900',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        border:
          step === steps
            ? '5px solid #FCC13F'
            : step > steps || step !== 5
            ? ''
            : '5px solid white',
      }}
      _before={{
        content: '""',
        w: '70px',
        pos: 'absolute',
        border:
          step === steps || step >= num
            ? '3px solid #FCC13F'
            : steps !== 4
            ? '3px solid white'
            : num === 5
            ? ''
            : '',

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
