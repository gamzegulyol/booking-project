import {Card, Button, Container,Row,ListGroup,ListGroupItem} from "react-bootstrap";
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom';

const Home = ({ hotels }) => {
    console.log(hotels);
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            dispatch({ type: 'hotel/request' });
            try {
                const result = await fetch(`http://localhost:3000/hotel`)
                console.log(result);
                const res = await result.json();

                dispatch({ type: 'hotel/success', data: res.data });
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [dispatch]);

    const history = useHistory();
    const _onClick = id => {
        console.log(id);
        history.push({ pathname: '/detail', state: { hotelId: id } }); 
}

return(
    <Container>
        <Row>
        {hotels.map(item => (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imageUrl}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}
                    </Card.Text>
                </Card.Body> 
                    <ListGroup className="flush">
                    <ListGroupItem>{item.price}</ListGroupItem>
                    <ListGroupItem>{item.city}</ListGroupItem>
                    </ListGroup>
                <Card.Body>
                    <Button variant="primary"  onClick={() => _onClick(item._id)} key={item._id}>Oteli Gör</Button>
                </Card.Body>
                </Card>
        ))}
            </Row>
    </Container>
)
}

const mapStateToProps = (state) => {
    return {
        hotels: state.app.hotels
    };
}

export default withRouter(connect(mapStateToProps)(Home));