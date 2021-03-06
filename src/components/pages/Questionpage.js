import React from 'react';
import { connect } from "react-redux";
import './../style/style.css';
import { storeAnswerF, submitIkm } from './../../store/app/action';
import checkSVG from './../assets/img/check.svg';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const mySwal = withReactContent(Swal)

function Questionpage({ question, answer, storeAnswerF, submitIkm }) {
    const [i, setI] = React.useState(0)
    const [color, setColor] = React.useState('#f368e0')

    const next = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        if (i === question.length - 1) {
            mySwal.fire({
                icon: 'success',
                title: 'Terima Kasih!',
                text: 'Survey sudah kami terima.'
            }).then(() => {
                window.location = "https://portalmpp.dinartech.com"
            })
            submitIkm(answer)
        } else {
            setI(i + 1)
            setColor(`#${randomColor}`)
        }
    }

    const prev = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        if (i === 0) {
            mySwal.fire({
                icon: 'warning',
                title: 'Peringatan',
                text: 'Anda berada di halaman pertama.'
            })
        } else {
            setI(i - 1)
            setColor(`#${randomColor}`)
        }
    }

    const storeAnswer = (id, ans) => {
        const payload = {
            id,
            ans
        }
        storeAnswerF(payload)
        console.log(answer)
        next()
    }

    return (
        <div className="q-container" >

            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div className="wave waveTop" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div className="wave waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}}></div>
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div className="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}}></div>
                </div>
            </div>

            <div className="question">
                <span>{question[i].q}</span>
            </div>
            <div className="option">
                {question[i].o.map((opt, i) =>
                    <div className={answer[opt.q] === opt.o ? "selected" : "noselected"} onClick={() => storeAnswer(opt.q, opt.o)}>{opt.o} </div>
                )}
            </div>
            <div className="footer">
                <div style={{ width: '25%' }}>
                    <button className="btn" style={{ backgroundColor: '#ee5253' }} onClick={prev}>Kembali</button>
                </div>
                <div style={{ width: '50%' }}>

                </div>
                <div style={{ width: '25%' }}>
                    <button className="btn" style={{ backgroundColor: '#54a0ff', float: 'right' }} onClick={next}>Selanjutnya</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        question: app.question,
        answer: app.answer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeAnswerF : payload => dispatch(storeAnswerF(payload)),
        submitIkm : payload => dispatch(submitIkm(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionpage);
