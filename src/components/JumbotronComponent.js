import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    title: state.jadwalkegiatan.title
  }
}
const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">Ini adalah website OMK Santo Lukas Pemalang.</p>
        <hr className="my-2" />
        <p>Copyright @agnes 2020</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);