import Api from './Api'

export default {
    AddCategories (name){
        return Api().post('addCategories', name)
    },
    GetAllCategories (){
        return Api().post('GetAllCategories')
    },
    DeleteCategories (id){
        return Api().post('DeleteCategories', id)
    },
    EditCategories (id){
        return Api().post('EditCategories', id)
    },
    getOneCategorie(id){
        return Api().post('getOneCategories', id)
    }
}

