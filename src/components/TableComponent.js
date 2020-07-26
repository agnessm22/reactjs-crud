import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import swal from "sweetalert";
import { deleteJadwal } from "../actions/jadwalkegiatanAction"; 
import './Fungsional/CSS/desain.css';

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  swal({
    title: "Apakah Anda yakin menghapus data ini?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteJadwal(id))
      swal("Data Berhasil Dihapus", {
        icon: "success",
      });
    } else {
      swal("Data Gagal Dihapus");
    }
  });
}



const defaultSorted =[{
    dataField: 'id',
    order: 'asc'
}];

const mapStateToProps = (state) => {
  return {
    getJadwalKegiatanList: state.jadwalkegiatan.getJadwalKegiatanList,
    errorJadwalKegiatanList: state.jadwalkegiatan.errorJadwalKegiatanList
  }
}

const TableComponent = (props) => {
  const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true,
    headerStyle: () => {
        return { width: "5%" };
    },
  }, {
    dataField: 'namakegiatan',
    text: 'Nama Kegiatan',
    sort: true
  }, {
    dataField: 'tanggal',
    text: 'Tanggal',
    sort: true
  }, {
      dataField: 'keterangan',
      text: 'Keterangan'
  }, {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
          return (
              <div>
                <Link to={"/detail/"+row.id}>
                  <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faInfo} /> Detail
                  </Button>
                </Link>
                <Link to={"/edit/"+row.id}>
                  <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faEdit} /> Edit
                  </Button>
                </Link>
              
                  <Button color="dark" className="mr-2" onClick={() => handleClick(props.dispatch, row.id)}>
                      <FontAwesomeIcon icon={faTrash} /> Delete
                  </Button>
              </div>
              );
          },
      },
  ];
    return (
    <Container>
       <h2 className="header"> JADWAL KEGIATAN </h2>
      { props.getJadwalKegiatanList ? 
        <ToolkitProvider
  bootstrap4 keyField='id' data={ props.getJadwalKegiatanList } columns={ columns } defaultSorted={ defaultSorted }
  search
>
  {
    props => (
      <div>
        <Row>
          <Col>
          <Link to="/createjadwalkegiatan">
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faUserPlus} /> Create Jadwal Kegiatan
                </Button>
              </Link>
          </Col>
          <Col>
          <div className="float-right">
        <SearchBar { ...props.searchProps } placeholder="Search .." />
        </div>
          </Col>
        </Row>
        
        <BootstrapTable
          { ...props.baseProps} pagination={ paginationFactory() }
        />
      </div>
    )
  }
</ToolkitProvider> : (<div className="text-center">
{ props.errorJadwalKegiatanList ? <h4>{props.errorJadwalKegiatanList}</h4> : <Spinner color="dark" />}</div>) }
        </Container>
    )
}

export default connect(mapStateToProps, null)(TableComponent);
