import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { withRouter } from './withRouter';

const CardGrid = ({ cards, cardDisabled }) => {
  const containerRef = useRef(null);
  const [filteredCards, setFilteredCards] = useState(cards);

  useEffect(() => {
    const container = containerRef.current;
    const numCards = filteredCards.length;
    const cardHeight = container.querySelector('.card')?.clientHeight;
    container.style.height = `${Math.ceil(numCards / 5) * cardHeight}px`;
  }, [filteredCards]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const newFilteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(query)
    );
    setFilteredCards(newFilteredCards);
  };

  return (
    <div>
      <Form className="mb-3">
        <Form.Control type="search" placeholder="Search..." onChange={handleSearch} />
      </Form>
      <div ref={containerRef}>
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredCards.map((card, idx) => (
            <Col key={idx}>
              <Link to={card.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="card-hover">
                  <Card.Body style={{padding: 'unset', height: '7rem'}}>
                    <table>
                      <tbody>
                        <tr>
                          <td className="card-icon" style={{ margin: '2rem' }}>
                            {card.icon ? (
                              <FontAwesomeIcon
                                icon={card.icon}
                                size="2xl"
                                style={{ color: '#746f76' }}
                              />
                            ) : null}
                          </td>
                          <td>
                            <Card.Title style={{ fontSize: '1.2rem' }}>{card.title}</Card.Title>
                            <Card.Text style={{ fontSize: '0.9rem' }}>{card.text}</Card.Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default withRouter(CardGrid);
