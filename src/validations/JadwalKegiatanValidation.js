const JadwalKegiatanValidation = (values) => {
    const errors = {};
    if (!values.namakegiatan || values.namakegiatan === "") {
        errors.namakegiatan = "Nama harus diisi";
    }

    if (!values.tanggal || values.tanggal === "") {
        errors.tanggal = "Tanggal harus diisi";
    }

    if (!values.keterangan || values.keterangan === "") {
        errors.keterangan = "Keterangan harus diisi";
    }
    return errors;
}

export default JadwalKegiatanValidation