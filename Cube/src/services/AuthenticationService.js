import Api from './Api'
import { defineComponent } from "vue";

export default defineComponent({
    register(credentials) {
        return Api().post('register', credentials)
    },
    login(credentials) {
        return Api().post('login', credentials)
    },
    getRole() {
        return Api().post('/api/user/role')
    }
})

