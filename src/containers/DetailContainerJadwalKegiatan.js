import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'
import { connect } from "react-redux";
import { getJadwalKegiatanDetail } from "../actions/jadwalkegiatanAction";
import DetailJadwalKegiatanComponent from "../components/DetailJadwalKegiatanComponent";

class DetailContainerJadwalKegiatan extends Component {
    componentDidMount() {
        this.props.dispatch(getJadwalKegiatanDetail(this.props.match.params.id));
    }
    render() {
        
        return(
            <Container>
                <BackComponent />
            <h1>Detail Jadwal</h1>
            <DetailJadwalKegiatanComponent />
            </Container>
        )
    }
}

export default connect()(DetailContainerJadwalKegiatan);