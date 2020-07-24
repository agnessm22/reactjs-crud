import React from 'react'
import { connect } from "react-redux";
import { Table } from 'reactstrap'

const mapStateToProps = (state) => {
    return {
        getJadwalKegiatanDetail: state.jadwalkegiatan.getJadwalKegiatanDetail,
        errorJadwalKegiatanDetail: state.jadwalkegiatan.errorJadwalKegiatanDetail,
    };
};

const DetailJadwalKegiatanComponent = (props) => {
    return (
        <Table striped>
          <tbody>
            <tr>
              <td width="200">Nama</td>
              <td width="10">:</td>
              <td>{props.getJadwalKegiatanDetail.namakegiatan}</td>
            </tr>
            <tr>
              <td width="200">Tanggal</td>
              <td width="10">:</td>
              <td>{props.getJadwalKegiatanDetail.tanggal}</td>
            </tr>
            <tr>
              <td width="200">Keterangan</td>
              <td width="10">:</td>
              <td>{props.getJadwalKegiatanDetail.keterangan}</td>
            </tr>
          </tbody>
        </Table>
      );
}
export default connect(mapStateToProps, null)(DetailJadwalKegiatanComponent);