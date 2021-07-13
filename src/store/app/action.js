import axios from 'axios'

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
