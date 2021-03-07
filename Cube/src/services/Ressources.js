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
    getUserRessources(){
        return Api().post('getUserRessources')
    },
    deleteRessource(id){
        return Api().post('deleteRessources', id)
    },
    updateRessource(data){
        return Api().post('editRessource', data)
    },
    ExploitedRessource(data){
        return Api().post('ExploitedRessource', data)
    },
    UnExploitedRessource(data){
        return Api().post('UnExploitedRessource', data)
    },
    FavRessource(data){
        return Api().post('FavRessource', data)
    },
    IsFav(){
        return Api().post('IsFav')
    },    
    RessourceByCat(NomCat){
        return Api().post('RessourceByCat', NomCat)
    },
    GetAllFav(idRessource){
        return Api().post('getAllFav',idRessource)
    }


}

