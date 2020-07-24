import axios from 'axios'

export const GET_JADWALKEGIATAN_LIST = "GET_JADWALKEGIATAN_LIST";
export const GET_JADWALKEGIATAN_DETAIL = "GET_JADWALKEGIATAN_DETAIL";
export const POST_JADWALKEGIATAN_CREATE = "POST_JADWALKEGIATAN_CREATE";
export const PUT_JADWALKEGIATAN_EDIT = "PUT_JADWALKEGIATAN_EDIT";

export const getJadwalKegiatanList = ()  => {
    return (dispatch) => {
        axios
        .get("http://my-json-server.typicode.com/agnessm22/reactjs-crud/jadwalkegiatan")
        .then(function (response) {
            dispatch({
                type: GET_JADWALKEGIATAN_LIST,
                payload: {
                data: response.data,
                errorMessage: false,
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: GET_JADWALKEGIATAN_LIST,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })
        })
    };
};

export const getJadwalKegiatanDetail = (id)  => {
    return (dispatch) => {
        axios
        .get("http://my-json-server.typicode.com/agnessm22/reactjs-crud/jadwalkegiatan/"+id)
        .then(function (response) {
            dispatch({
                type: GET_JADWALKEGIATAN_DETAIL,
                payload: {
                data: response.data,
                errorMessage: false,
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: GET_JADWALKEGIATAN_DETAIL,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })
        })
    };
};

export const deleteDataJadwalKegiatan = () => {
    return (dispatch) => {
        dispatch({
            type: GET_JADWALKEGIATAN_DETAIL,
            payload: {
                data: false,
                errorMessage: false,
            }
        })

        dispatch({
            type: POST_JADWALKEGIATAN_CREATE,
            payload: {
                data: false,
                errorMessage: false,
            }
        })

    }
}

export const postJadwalKegiatanCreate = (data)  => {
    return (dispatch) => {
        axios
        .post("http://my-json-server.typicode.com/agnessm22/reactjs-crud/jadwalkegiatan", data)
        .then(function (response) {
            dispatch({
                type: POST_JADWALKEGIATAN_CREATE,
                payload: {
                data: response.data,
                errorMessage: false,
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: POST_JADWALKEGIATAN_CREATE,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })
        })
    };
};

export const putJadwalKegiatanUpdate = (data, id)  => {
    return (dispatch) => {
        axios
        .put("http://my-json-server.typicode.com/agnessm22/reactjs-crud/jadwalkegiatan/"+id, data)
        .then(function (response) {
            dispatch({
                type: PUT_JADWALKEGIATAN_EDIT,
                payload: {
                data: response.data,
                errorMessage: false,
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: PUT_JADWALKEGIATAN_EDIT,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })
        })
    };
};

export const deleteJadwal = (id)  => {
    return (dispatch) => {
        axios
        .delete("http://my-json-server.typicode.com/agnessm22/reactjs-crud/jadwalkegiatan/"+id)
        .then(function (response) {
            
        })
        .catch(function (error) {
            
        })
    };
};