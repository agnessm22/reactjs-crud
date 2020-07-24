import React from 'react'
import {
    Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardDeck
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function RowGaleri() {

    const {value, setValue } = useContext(CartContext)
    return(
        <Col>
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="https://3.bp.blogspot.com/-jXPD7L7ogok/W8CnfVFKOJI/AAAAAAAAANg/_cH7QVM5zdASzDfBDMNTvowiJoSeA70WwCKgBGAs/s1600/LRG_DSC01471.jpeg" alt="Card image cap" />
                    <CardBody>
                        <h3><CardSubtitle>Misa 17 Agustus</CardSubtitle></h3>
                        <CardText>Lokasi: Gereja St Lukas Pemalang</CardText>
                    </CardBody>
                </Card>
            </CardDeck>

            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="https://3.bp.blogspot.com/-NlcCtBmWgUE/W8P4rRd6nyI/AAAAAAAADJ4/HNDwZhDiQiY6081bIQSjSWdrHdM7Po-KQCLcBGAs/s1600/LRG_DSC01658.JPG" alt="Card image cap" />
                    <CardBody>
                        <h3><CardSubtitle>Senam Bersama</CardSubtitle></h3>
                        <CardText>Lokasi: Halaman Depan Gereja St Lukas Pemalang</CardText>
                    </CardBody>
                </Card>
            </CardDeck>

            <CardDeck>
                <Card>
                    <CardImg top width="50%" src="https://2.bp.blogspot.com/-ZIst5oDpufc/W8CtyGY12LI/AAAAAAAAAPI/2792MO778BQb1El2w_c6DZ0a-GSwytzWACKgBGAs/s1600/IMG_6003.jpeg" alt="Card image cap" />
                    <CardBody>
                        <h3><CardSubtitle>LDK Pengurus OMK</CardSubtitle></h3>
                        <CardText>Lokasi: Aula Gereja St Lukas Pemalang</CardText>
                    </CardBody>
                </Card>
            </CardDeck>

            <CardDeck>
                <Card>
                    <CardImg top width="50%" src="https://www.sesawi.net/wp-content/uploads/2019/01/IMG_6529.jpeg" alt="Card image cap" />
                    <CardBody>
                        <h3><CardSubtitle>Drama Musikal "Semesta Bernyanyi"</CardSubtitle></h3>
                        <CardText>Lokasi: Gereja St Lukas Pemalang</CardText>
                    </CardBody>
                </Card>
            </CardDeck>

        </Col>
    )
}

export default RowGaleri