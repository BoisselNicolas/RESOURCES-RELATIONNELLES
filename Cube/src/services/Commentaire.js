import Api from './Api'
import { defineComponent } from "vue";

export default defineComponent({
    addComment (RessourceId){
        return Api().post('AddComments', RessourceId)
    },
    getAllComments(RessourceId){
        return Api().post('GetAllComment', RessourceId)
    }
})

