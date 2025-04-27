import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import FAQ from '../../components/FAQ/Faq';
import Nosotros from '../../components/Nosotros/Nosotros';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <Pricing />
            <Nosotros />
            <FAQ />
        </>
    )
}

export default Home;