import React from 'react'
import { Container } from './style'
const FaqSection = () => {
  return (
      <Container>
          <h2>Any Queistions <span>FAQ</span></h2>
          <div className="questions">
              <div className="questions">
                  <h4>Can I learn programming from 0 on your school!</h4>
                  <div className='answer'>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          Recusandae, accusamus.
                      </p>
                  </div>
                  
              </div>
              <div className="faq-line"></div>
              <div className="questions">
                  <h4>When will new groups open? How I register them? </h4>
                  <div className='answer'>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          Recusandae, accusamus.
                      </p>
                  </div>
              </div>
              <div className="faq-line"></div>
              <div className="questions">
                  <h4>How will I pay for online lessons?</h4>
                  <div className='answer'>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          Recusandae, accusamus.
                      </p>
                  </div>
              </div>
              <div className="faq-line"></div>
              <div className="questions">
                  <h4>Has your school got groups at? </h4>
                  <div className='answer'>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          Recusandae, accusamus.
                      </p>
                  </div>
              </div>
          </div>
    </Container>
  )
}

export default FaqSection