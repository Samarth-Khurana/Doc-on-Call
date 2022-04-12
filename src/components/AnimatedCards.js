import React, { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import classes from '../assets/css/Card.module.css'
import '../assets/css/Card.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Card = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <div>
      <Container className={classes.container1}>
        <Row>
          <Col data-aos="fade-right" className={classes.colstyle}>
            <h1 className={classes.heading}>
              Go from offer letter to onboarded in minutes
            </h1>

            <span className={classes.content}>
              {' '}
              Got a new hire in Germany or maybe Brazil? Set them up to work
              compliantly in minutes. Create a custom contract that’s compliant
              with local laws, send it to sign, and they'll get onboarded almost
              instantly.
            </span>
          </Col>
          <Col className={classes.colstyle}>
            <Image
              data-aos="fade-left"
              className={classes.backgroundcard}
              src="https://www.letsdeel.com/hubfs/Deel/Images/Typwriter%20image.webp"
              fluid
            />
            <Image
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
              className={classes.childcard}
              src="https://www.letsdeel.com/hubfs/onboardui.gif"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Card
