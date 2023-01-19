import React from 'react'
import homeIntro2 from '../../img/home-img2.jpg';

import { Container, Description, Image } from './style';

const Benifits = () => {
    return (
        <Container>
            <Description>
                <h2>High quality learning system</h2>
                <div>
                    <h3>Online platform</h3>
                    <h3>High experienced and talented mentors</h3>
                    <h3>Fast learning system</h3>
                    <h3>Offline school for children</h3>
                </div>
            </Description>
            <Image>
                 <img src={homeIntro2} alt="e-learning students" />
            </Image>
    </Container>
  )
}

export default Benifits;