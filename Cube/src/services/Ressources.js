import Api from './Api'

export default {
    addRessource(data){
        return Api().post('addRessource', data)
    },
    getRessources(){
        return Api().post('getAllRessources')
    },
    getOneRessource(id){
        return Api().post('getOneRessource', id)
    },
    deleteRessource(id){
        return Api().post('deleteRessources', id)
    },
    updateRessource(data){
        return Api().post('editRessource', data)
    }

}

