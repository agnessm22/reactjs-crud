import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import './CSS/desain.css';
import logo from './CSS/logo.jpeg'

const HomePage = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="homedesain"><img src={logo}/></h1>
            <h2 className="hai">Selamat Datang Orang Muda!!</h2>
            <p className="isi">Ini adalah website yang berisi informasi seputar OMK St Lukas Pemalang</p>
            <p className="by">Copyright @agnes 201701034</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default HomePage