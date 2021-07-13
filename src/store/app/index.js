const initState = {
    datas: [],
    datas_detail: [],
    question: [
        {
            q: "Jenis Kelamin",
            o: [
                {
                    q: "1",
                    o: "Laki - laki"
                },
                {
                    q: "1",
                    o: "Perempuan"
                }
            ]
        }, {
            q: "Usia",
            o: [
                {
                    q: "2",
                    o: "Dibawah 18 tahun"
                },
                {
                    q: "2",
                    o: "18 - 24 tahun"
                },
                {
                    q: "2",
                    o: "25 - 34 tahun"
                },
                {
                    q: "2",
                    o: "35 - 59 tahun"
                },
                {
                    q: "2",
                    o: "60 tahun keatas"
                }
            ]
        }, {
            q: "Pendidikan Terakhir",
            o: [
                {
                    q: "3",
                    o: "SD"
                },
                {
                    q: "3",
                    o: "SMP"
                },
                {
                    q: "3",
                    o: "SMA / SMK"
                },
                {
                    q: "3",
                    o: "Diploma"
                },
                {
                    q: "3",
                    o: "Sarjana (S1)"
                },
                {
                    q: "3",
                    o: "Pasca Sarjana (S2 / S3)"
                }
            ]
        }, {
            q: "Pekerjaan",
            o: [
                {
                    q: "4",
                    o: "PNS"
                },
                {
                    q: "4",
                    o: "TNI / POLRI"
                },
                {
                    q: "4",
                    o: "Karyawan BUMN"
                },
                {
                    q: "4",
                    o: "Karyawan Swasta"
                },
                {
                    q: "4",
                    o: "Wirausaha"
                },
                {
                    q: "4",
                    o: "Pelajar / Mahasiswa"
                },
                {
                    q: "4",
                    o: "Belum Bekerja"
                },
                {
                    q: "4",
                    o: "Lain - lain"
                }
            ]
        }, {
            q: "Jenis Layanan",
            o: [
                {
                    q: "5",
                    o: "DPMTK"
                },
                {
                    q: "5",
                    o: "DUKCAPIL"
                },
                {
                    q: "5",
                    o: "KEMENAG"
                },
                {
                    q: "5",
                    o: "BPN"
                },
                {
                    q: "5",
                    o: "BPJS KESEHATAN"
                },
                {
                    q: "5",
                    o: "BPJS KETENAGAKERJAAN"
                },
                {
                    q: "5",
                    o: "KEJAKSAAN"
                },
                {
                    q: "5",
                    o: "PENGADILAN NEGERI"
                },
                {
                    q: "5",
                    o: "KPP PRATAMA"
                },
                {
                    q: "5",
                    o: "SAMSAT"
                },
                {
                    q: "5",
                    o: "POLRES SINGKAWANG"
                },
                {
                    q: "5",
                    o: "IMIGRASI"
                },
                {
                    q: "5",
                    o: "BKD"
                },
                {
                    q: "5",
                    o: "BANK KALBAR"
                },
                {
                    q: "5",
                    o: "BRI"
                }
            ]
        }, {
            q: "Bagaimana pendapat saudara tentang kesesuaian persyaratan pelayanan dengan jenis pelayanannya?",
            o: [
                {
                    q: "6",
                    o: "Tidak Cepat"
                },
                {
                    q: "6",
                    o: "Kurang Cepat"
                },
                {
                    q: "6",
                    o: "Cepat"
                },
                {
                    q: "6",
                    o: "Sangat Cepat"
                }
            ]
        }, {
            q: "Bagaimana pendapat saudara tentang kewajaran biaya / tarif dalam pelayanan (Khusus izin yang terdapat retribusi)",
            o: [
                {
                    q: "7",
                    o: "Tidak Sesuai"
                },
                {
                    q: "7",
                    o: "Kurang Sesuai"
                },
                {
                    q: "7",
                    o: "Sesuai"
                },
                {
                    q: "7",
                    o: "Sangat Sesuai"
                }
            ]
        }, {
            q: "Bagaimana pendapat saudara tentang kompetensi / kemampuan petugas dalam pelayanan?",
            o: [
                {
                    q: "8",
                    o: "Tidak Kompeten"
                },
                {
                    q: "8",
                    o: "Kurang Kompeten"
                },
                {
                    q: "8",
                    o: "Kompeten"
                },
                {
                    q: "8",
                    o: "Sangat Kompeten"
                }
            ]
        }, {
            q: "Bagaimana pendapat saudara tentang perilaku petugas dalam pelayanan terkait kesopanan dan keramahan? ",
            o: [
                {
                    q: "9",
                    o: "Tidak Sopan dan Ramah"
                },
                {
                    q: "9",
                    o: "Kurang Sopan"
                },
                {
                    q: "9",
                    o: "Sopan dan Ramah"
                },
                {
                    q: "9",
                    o: "Sangat Sopan dan Ramah"
                }
            ]
        }, {
            q: "Bagaimana pendapat saudara tentang kualitas sarana dan prasarana?",
            o: [
                {
                    q: "10",
                    o: "Sangat Baik"
                },
                {
                    q: "10",
                    o: "Cukup Baik"
                },
                {
                    q: "10",
                    o: "Baik"
                },
                {
                    q: "10",
                    o: "Buruk"
                }
            ]
        }, {
            q: "Bagaimana pendapat saudara tentang penanganan pengaduan pengguna layanan?",
            o: [
                {
                    q: "11",
                    o: "Tidak Ada"
                },
                {
                    q: "11",
                    o: "Ada Tetapi Tidak Berfungsi"
                },
                {
                    q: "11",
                    o: "Berfungsi Kurang Maksimal"
                },
                {
                    q: "11",
                    o: "Dikelola Bengan Baik"
                }
            ]
        }, {
            q: "Bagaimana pemahaman Saudara tentang kemudahan prosedur pelayanan?",
            o: [
                {
                    q: "12",
                    o: "Tidak Mudah"
                },
                {
                    q: "12",
                    o: "Kurang Mudah"
                },
                {
                    q: "12",
                    o: "Mudah"
                },
                {
                    q: "12",
                    o: "Sangat Mudah"
                }
            ]
        }, {
            q: "Penilaian Kepuasan",
            o: [
                {
                    q: "13",
                    o: "Sangat Puas"
                },
                {
                    q: "13",
                    o: "Cukup Puas"
                },
                {
                    q: "13",
                    o: "Puas"
                },
                {
                    q: "13",
                    o: "Tidak Puas"
                },
                {
                    q: "13",
                    o: "Sangat Tidak Puas"
                }
            ]
        }
    ],
    answer: {
        "1": '',
        "2": '',
        "3": '',
        "4": '',
        "5": '',
        "6": '',
        "7": '',
        "8": '',
        "9": '',
        "10": '',
        "11": '',
        "12": '',
        "13": ''
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'STORE_DATAS':
            return {
                ...state,
                datas: action.datas
            }
        case 'STORE_DATAS_DETAIL':
            return {
                ...state,
                datas_detail: action.datas
            }
        case 'RESET_DETAIL':
            return {
                ...state,
                datas_detail: []
            }
        case  'STORE_ANSWER':
            return{
                ...state,
                answer : {
                    ...state.answer,
                    [action.datas.id] : action.datas.ans
                } 
            }
        default:
            return state
    }
}