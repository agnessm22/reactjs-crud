import React, { Component } from 'react'
import TableComponent from '../components/TableComponent'
import { connect } from 'react-redux' 
import { getJadwalKegiatanList, deleteDataJadwalKegiatan } from '../actions/jadwalkegiatanAction'

class HomeContainerJadwalKegiatan extends Component {
    componentDidMount() {
        this.props.dispatch(getJadwalKegiatanList());
        this.props.dispatch(deleteDataJadwalKegiatan());
    }
    render() {
        return(
        <div>
            <TableComponent />
        </div>
        );
    }
}

export default connect()(HomeContainerJadwalKegiatan);