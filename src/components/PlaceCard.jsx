import React from 'react';
import { Button, Card } from 'react-bootstrap';

import img6 from '../assets/img-6.png';
import img7 from '../assets/img-7.png';
import img8 from '../assets/img-8.png';
import img9 from '../assets/img-9.png';
import img10 from '../assets/img-10.png';
import img11 from '../assets/img-11.png';
import img12 from '../assets/img-12.png';
import img13 from '../assets/img-13.png';

const PlaceCard = () => {
  return (
    <div className="my-3">
      <div className="text-center">
        <h1
          className="fw-bolder has-text-align-center has-link-color alignwide wp-elements-42fba39c03805361ed3af13f42a8538e wp-block-post-title has-text-color"
          style={{
            color: '#333333',
            fontSize: 'clamp(24px, 1.5rem + ((1vw - 3.2px) * 1.663), 40px)',
            fontWeight: 400,
          }}
        >
          Interior Designers Near Me: 7 Best Ways to Get <br />
          Local Design Help in 2024
        </h1>

        {/* First Two Images as Headers */}
        <div className="row mt-3 g-4 justify-content-center">
          <div className="col-lg-8 col-md-10">
            {/* Image 6 */}
            <div className="mb-4">
              <img src={img6} alt="Header Image 1" style={{ width: '100%', height: 'auto' }} />
              <div className="text-start mt-2">
                <h5 className="text-secondary">By DECORILLA</h5>
                <p className="fs-5 text-justify">
                  Searching for “interior designers near me” to transform your space into something spectacular? Whether you’re revamping a room or overhauling your entire home, finding the right affordable interior design nearby can make all the difference. So read on for our round-up of the top 7 ways to find designers near you.
                </p>
                <div className="d-flex justify-content-center">
                </div>
              </div>
            </div>

            {/* Image 7 */}
            <div>
              <br />
              <br />
              <h2>Finding Interior Designers Near Me 101</h2>
              <img src={img7} alt="Header Image 2" style={{ width: '100%', height: 'auto' }} />
              <div className="text-start mt-2">
                <h5 className="text-secondary">Living room by Decorilla interior designer, Dina H.</h5>
                <p className="fs-5 text-justify">
                  Luxury transitional living room by Decorilla interior designers near me.
                  <br /><br />
                  Before we jump into the best interior design help near you, let’s take a look at some frequently asked questions that will be sure to prepare you in making the best decision for your interior design project.
                </p>
                <p className="fs-5 text-start">
                  <strong>How much do interior designers and decorators charge near me?</strong><br />
                  Typically, an interior designer will cost from $50-$200 per hour. Variables like the home’s size and location, as well as the length of the project, affect the final price. Fortunately, new alternatives like online interior design have a more accessible budget and can save you thousands! Online interior design services range from $79 – $1849 per room and are typically flat rates.
                </p>
                <div className="d-flex justify-content-center">
                  <Button variant="primary">Explore Categories</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* Second Row */}
 
        <div className="row mt-5 g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <Card className="p-2 d-flex flex-column align-items-center" style={{ width: '100%', maxWidth: '30rem' }}>
              <Card.Img height="280px" variant="top" src={img8} />
              <Card.Body className="text-center">
                <Card.Title>KITCHEN INTERIOR</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary"> All Designs</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <Card className="p-2 d-flex flex-column align-items-center" style={{ width: '100%', maxWidth: '30rem' }}>
              <Card.Img height="280px" variant="top" src={img9} />
              <Card.Body className="text-center">
                <Card.Title>WASHROOM INTERIOR </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">All Designs </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <Card className="p-2 d-flex flex-column align-items-center" style={{ width: '100%', maxWidth: '30rem' }}>
              <Card.Img height="280px" variant="top" src={img10} />
              <Card.Body className="text-center">
                <Card.Title>BEDROOM INTERIOR</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">All Designs</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row mt-5 g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <Card className="p-2 d-flex flex-column align-items-center" style={{ width: '100%', maxWidth: '30rem' }}>
              <Card.Img height="280px" variant="top" src={img12} />
              <Card.Body className="text-center">
                <Card.Title>LIVINGROOM INTERIOR</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">All Designs</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <Card className="p-2 d-flex flex-column align-items-center" style={{ width: '100%', maxWidth: '30rem' }}>
              <Card.Img height="280px" variant="top" src={img13} />
              <Card.Body className="text-center">
                <Card.Title>DINING INTERIOR</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">All Designs</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <Card className="p-2 d-flex flex-column align-items-center" style={{ width: '100%', maxWidth: '30rem' }}>
              <Card.Img height="280px" variant="top" src={img11} />
              <Card.Body className="text-center">
                <Card.Title>Decor Catalogue</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Decor Catalogue</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default PlaceCard;


