import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Input, FormGroup, Col, Label, Row, Form, Button } from 'reactstrap';
import JadwalKegiatanValidation from '../validations/JadwalKegiatanValidation'

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning },
}) => (
    <Row>
        <Col md="12">
            <Label htlmFor="{input}" className="col-form-label">
                {label}
            </Label>
        </Col>
        <Col md="12">
            <Input
            {...input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}>
            </Input>
            {touched &&
            ((error && <p style={{ color: "red" }}>{error}</p>) ||
            (warning && <p style={{color: "brown" }}>{warning}</p>))}
        </Col>
    </Row>

);

const mapStateToProps = (state) => {
    return {
        initialValues : {
            namakegiatan : state.jadwalkegiatan.getJadwalKegiatanDetail.namakegiatan,
            tanggal : state.jadwalkegiatan.getJadwalKegiatanDetail.tanggal,
            keterangan : state.jadwalkegiatan.getJadwalKegiatanDetail.keterangan,
        }
    }
}

class FormComponent extends Component {
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Col md="6">
                        <FormGroup>
                            <Field
                            type="text"
                            name="namakegiatan"
                            component={renderField}
                            label="Nama Kegiatan :" />
                        </FormGroup>
                    </Col>

                    <Col md="6">
                        <FormGroup>
                            <Field
                            type="text"
                            name="tanggal"
                            component={renderField}
                            label="Tanggal :" />
                        </FormGroup>
                    </Col>

                    <Col md="6">
                        <FormGroup>
                            <Field
                            type="text"
                            name="keterangan"
                            component={renderField}
                            label="Keterangan :" />
                        </FormGroup>
                    </Col>
                </FormGroup>
        
        <FormGroup row>
            <Col md="12">
                <FormGroup>
                    <Button color="primary" type="submit"
                    disabled={this.props.submitting}>Submit</Button>
                </FormGroup>
            </Col>
        </FormGroup>
            
            </Form>

        )
    }
}
FormComponent = reduxForm({
    form: "formCreateJadwalKegiatan",
    validate: JadwalKegiatanValidation,
    enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent)