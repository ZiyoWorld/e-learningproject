import React from 'react'
import { Container, Hide, Description, Image } from './style';
import homeIntro from '../../img/home-img.jpg';
const Home = () => {
  return (
      <Container>
      <Description>
        <div className='Title'>
          <Hide>
            <h2> Be educated so</h2>
          </Hide>
          <Hide>
            <h2> that you <span>can change</span> </h2>
          </Hide>
          <Hide>
            <h2> the world.</h2>
          </Hide>
        </div>
        <p>An Educated mind can teach man. An educated mind is better than empty one</p>
        <button>About Us</button>
      </Description>
      <Image>
        <img src={homeIntro} alt="img-decs"  />
      </Image>
    </Container>
  )
}

export default Home;