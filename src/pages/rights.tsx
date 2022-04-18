import { Accordion, Box, Container } from '@chakra-ui/react';
import Accordions from 'lib/layout/Props/Accordions';

function rights() {
  return (
    <Box w="full" bgColor="white" mb="5rem" mt="3rem">
      <Container maxW="90%">
        <Accordion defaultIndex={[0]} allowMultiple>
          <Accordions
            title="Compensation and terms of your air passenger Right"
            content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque eu tincidunt tortor aliquam nulla facilisi. Praesent
          elementum facilisis leo vel fringilla est ullamcorper. Porta lorem
          mollis aliquam ut. Eget egestas purus viverra accumsan in nisl nisi
          scelerisque. Habitant morbi tristique senectus et. Volutpat lacus
          laoreet non curabitur gravida arcu ac tortor dignissim. Lorem ipsum
          dolor sit amet consectetur adipiscing elit. <br />
          <br />
          Pellentesque elit ullamcorper dignissim cras tincidunt lobortis.
          Gravida arcu ac tortor dignissim. Vitae nunc sed velit dignissim
          sodales ut eu sem. Ultricies mi quis hendrerit dolor. Magna ac
          placerat vestibulum lectus mauris ultrices eros in. Ultrices vitae
          auctor eu augue ut lectus arcu bibendum at. Massa sed elementum tempus
          egestas sed sed risus pretium quam. Sapien pellentesque habitant morbi
          tristique senectus et. In vitae turpis massa sed elementum tempus
          egestas sed sed. Tellus pellentesque eu tincidunt tortor aliquam nulla
          facilisi cras fermentum. Malesuada fames ac turpis egestas.
          <br />
          <br />
          Aliquam etiam erat velit scelerisque in. Odio eu feugiat pretium nibh
          ipsum consequat. Cras sed felis eget velit aliquet sagittis. Porttitor
          lacus luctus accumsan tortor posuere ac. Nibh ipsum consequat nisl vel
          pretium lectus quam id. Mattis enim ut tellus elementum sagittis
          vitae. Phasellus vestibulum lorem sed risus ultricies tristique nulla.
          Ligula ullamcorper malesuada proin libero nunc consequat interdum. Et
          sollicitudin ac orci phasellus. Diam quis enim lobortis scelerisque."
          />
        </Accordion>
      </Container>
    </Box>
  );
}

export default rights;
