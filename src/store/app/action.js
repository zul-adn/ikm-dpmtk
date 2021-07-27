import axios from 'axios';

const apidev = 'http://127.0.0.1:8000/api'

const storeDatas = (payload) => ({ type : 'STORE_DATAS', datas: payload }) 
const storeDatasDetail = (payload) => ({type: 'STORE_DATAS_DETAIL', datas: payload})
const storeAnswer = (payload) => ({type: 'STORE_ANSWER', datas: payload})
export const resetDetails = () => ({ type: 'RESET_DETAIL' }) 

export const storeAnswerF = (payload) => {
    return (dispatch) => {
        console.log(payload)
        dispatch(storeAnswer(payload))
    }
}  

export const submitIkm = (payload) => {
    
    return (dispatch, getState) => {
        const ans =  getState().app.answer
        axios.post(`${apidev}/createikm`, ans)
        .then( response => {
            console.log(response)
        })  
    }
}
