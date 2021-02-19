import Api from './Api'


export default {
    getCurrentUser(id){
        return Api().post('getCurrentUser', id)
    }
}