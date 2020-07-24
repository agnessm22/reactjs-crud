import { GET_JADWALKEGIATAN_LIST,
    GET_JADWALKEGIATAN_DETAIL,
    POST_JADWALKEGIATAN_CREATE,
    PUT_JADWALKEGIATAN_EDIT } from "../actions/jadwalkegiatanAction";

let initialState = { 
    getJadwalKegiatanList: false,
    errorJadwalKegiatanList: false,
    getJadwalKegiatanDetail: false,
    errorJadwalKegiatanDetail: false,
    getResponDataJadwalKegiatan: false,
    errorResponDataJadwalKegiatan: false,
    title: "Selamat Datang"
};
const jadwalkegiatan = (state = initialState, action) => {
    switch (action.type) {
        case GET_JADWALKEGIATAN_LIST:
            return {
                ...state,
                getJadwalKegiatanList: action.payload.data,
                errorJadwalKegiatanList: action.payload.errorMessage,
            };

            case GET_JADWALKEGIATAN_DETAIL:
            return {
                ...state,
                getJadwalKegiatanDetail: action.payload.data,
                errorJadwalKegiatanDetail: action.payload.errorMessage,
            };

            case POST_JADWALKEGIATAN_CREATE:
                return {
                    ...state,
                    getResponDataJadwalKegiatan: action.payload.data,
                    errorResponDataJadwalKegiatan: action.payload.errorMessage,
                };

                case PUT_JADWALKEGIATAN_EDIT:
                return {
                    ...state,
                    getResponDataJadwalKegiatan: action.payload.data,
                    errorResponDataJadwalKegiatan: action.payload.errorMessage,
                };

            default:
                return state;
    }
};

export default jadwalkegiatan;