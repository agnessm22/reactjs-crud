import React from 'react'
import { Container , Row, Card } from 'reactstrap'
import RowGaleri from './RowGaleri'

function Galeri() {
    return(
        <div>
            <Container>
                <hr/>
                <Card body inverse color="danger">
                    <h1>Galeri OMK Santo Lukas Pemalang</h1> 
                </Card>
                <Row>
                    <RowGaleri/>
                </Row>
            </Container>
        </div>
    )
}

export default Galeri