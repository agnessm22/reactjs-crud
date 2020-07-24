import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { getJadwalKegiatanDetail, putJadwalKegiatanUpdate } from "../actions/jadwalkegiatanAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
    return {
        getResponDataJadwalKegiatan: state.jadwalkegiatan.getResponDataJadwalKegiatan,
        errorResponDataJadwalKegiatan: state.jadwalkegiatan.errorResponDataJadwalKegiatan,
    }
}

class EditContainerJadwalKegiatan extends Component {

    componentDidMount() {
        this.props.dispatch(getJadwalKegiatanDetail(this.props.match.params.id));
    }

    handleSubmit(data) {
        this.props.dispatch(putJadwalKegiatanUpdate(data, this.props.match.params.id));
    }

    render() {
        if(this.props.getResponDataJadwalKegiatan || this.props.errorResponDataJadwalKegiatan) {
            if(this.props.errorResponDataJadwalKegiatan) {
            swal("Failed!", this.props.errorResponDataJadwalKegiatan, "error");
            } else {
            swal("Data Berhasil Di Update!", "Nama Kegiatan : " + this.props.getResponDataJadwalKegiatan.namakegiatan, "success");
        }}
        return(
        <Container>
            <BackComponent />
            <h1>Edit Jadwal</h1>
            <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
        )
    }
}

export default connect(mapStateToProps, null)(EditContainerJadwalKegiatan)