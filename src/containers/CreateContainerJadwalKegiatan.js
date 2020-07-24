import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'
import FormComponent from '../components/FormComponent'
import { connect } from "react-redux";
import { postJadwalKegiatanCreate } from '../actions/jadwalkegiatanAction'
import swal from "sweetalert";

const mapStateToProps = (state) => {
    return {
        getResponDataJadwalKegiatan: state.jadwalkegiatan.getResponDataJadwalKegiatan,
        errorResponDataJadwalKegiatan: state.jadwalkegiatan.errorResponDataJadwalKegiatan,
    }
}

class CreateContainerJadwalKegiatan extends Component {

    handleSubmit(data){
        this.props.dispatch(postJadwalKegiatanCreate(data))
    }

    render() {
        if(this.props.getResponDataJadwalKegiatan || this.props.errorResponDataJadwalKegiatan) {
            if(this.props.errorResponDataJadwalKegiatan) {
            swal("Failed!", this.props.errorResponDataJadwalKegiatan, "error");
            } else {
            swal("Data Berhasil Ditambahkan!", "Nama Kegiatan : " + this.props.getResponDataJadwalKegiatan.namakegiatan, "success");
        }}
        return (
            <Container>
                <BackComponent />
            <h1>Create Jadwal</h1>
            <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        )
    }
}

export default connect(mapStateToProps, null)(CreateContainerJadwalKegiatan)