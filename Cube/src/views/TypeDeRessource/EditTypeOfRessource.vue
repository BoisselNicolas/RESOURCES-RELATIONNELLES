<template>
    <div class="container">
        <ion-item>
            <label>Nom : </label>
            <input type="text" placeholder="Nom..." v-model="nameType"/>
            <ion-button
                v-on:click="editType"
            > Editer </ion-button>
        </ion-item>
    </div>
</template>

<script>
import TypeOfRessourceService from '../../services/TypeDeRessource'
export default {
    name: "",
    data(){
        return{
            nameType: "",
            id: ""
        }
    },
    methods: {
        editType(){
            TypeOfRessourceService.EditTypeOfRessource({
                idTypeDeRessource: this.id,
                nomTypeOFRessource: this.nameType
            })
            this.$router.push('/profil/typeressource')
        }
    },
    async mounted(){
        this.id = this.$route.params.id
        const rslt =  await TypeOfRessourceService.getOneTypeOfRessource({
            idTypeDeRessource: this.id
        })
        this.nameType = rslt.data.Nom
    }
}
</script>
<style scoped>
    .container{
         margin-top: 10%;
    }
</style>