import React, { useEffect, useRef } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardGrid = ({ cards }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const numCards = cards.length;
    const cardHeight = container.querySelector('.card').clientHeight;
    container.style.height = `${Math.ceil(numCards / 5) * cardHeight}px`;
  }, [cards]);

  return (
    <div ref={containerRef}>
      <Row xs={1} md={2} lg={5} className="g-4">
        {cards.map((card, idx) => (
          <Col key={idx}>
            <Card className="card-hover">
              <Card.Body>
                <table>
                  <tbody>
                    <tr>
                      <td className="card-icon" style={{ margin: '1rem' }}>
                        {card.icon ? <FontAwesomeIcon icon={card.icon} /> : null}
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
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardGrid;
