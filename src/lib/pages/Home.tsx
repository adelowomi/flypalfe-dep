import Faq from 'lib/components/sections/home/Faq';
import Help from 'lib/components/sections/home/Help';
import Hero from 'lib/components/sections/home/Hero';
import HeroInfo from 'lib/components/sections/home/HeroInfo';
import HeroMini from 'lib/components/sections/home/HeroMini';
import InfoBox from 'lib/components/sections/home/InfoBox';
import Locations from 'lib/components/sections/home/Locations';
import Services from 'lib/components/sections/home/Services';
import Head from 'next/head';
// import Fade from 'react-reveal/Fade';
const Fade = require('react-reveal/Fade');

function Home() {
  return (
    <>
      <Head>
        <title>FlyPal</title>
      </Head>
      <Hero />
      <Fade bottom>
        <HeroInfo />

        <Help />
        <Locations />
        <HeroMini />
        <InfoBox />
        <Services />
        <Faq />
      </Fade>
    </>
  );
}

export default Home;
