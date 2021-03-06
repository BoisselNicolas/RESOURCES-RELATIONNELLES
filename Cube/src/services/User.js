import Api from './Api'


export default {
    getCurrentUser(token){
        return Api().post('getCurrentUser', token)
    },
    updateCurrentUser(data){
        return Api().post('UpdateCurrentUser', data)
    }
}