import Api from './Api'

export default {
    AddTypeOfRessource (name){
        return Api().post('addTypeOfRessource', name)
    },
    GetAllTypeOfRessource (){
        return Api().post('GetAllTypeOfRessource')
    },
    DeleteTypeOfRessource (id){
        return Api().post('DeleteTypeOfRessource', id)
    },
    EditTypeOfRessource (id){
        return Api().post('EditTypeOfRessource', id)
    },
    getOneTypeOfRessource(id){
        return Api().post('getOneTypeOfRessource', id)
    }
}

