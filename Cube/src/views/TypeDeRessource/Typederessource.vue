<template>
    <ion-page>
        <menu-header></menu-header>
        <ion-content>
            <div class="container">
                <ion-item>
                    <ion-button href="/profil/typeressource/add">Ajouter un type de ressource</ion-button>
                </ion-item>
                <ul v-for="TOP in TypeOfRessourceArray" :key="TOP._id" >
                    <label>Type de ressources</label>
                    <li>{{ TOP.Nom }}</li> 
                    <ion-button v-on:click="deleteTypeOfRessource(TOP._id)" >delete</ion-button>
                    <ion-button v-on:click="editTypeOfRessource(TOP._id)">Edit</ion-button>
                </ul>
            </div>
        </ion-content>
    </ion-page>
    
</template>

<script>
import {
  IonItem,
  IonButton,
  IonPage,
  IonContent
} from "@ionic/vue";
import TypeOfRessourceService from '../../services/TypeDeRessource'
import MenuHeader from '../menu/menuHeader.vue';
export default {
    name: "",
    data(){
        return{
            TypeOfRessourceArray: []
        }
    },
    components: {
        IonItem,
        IonButton,
        IonPage,
        IonContent,
        MenuHeader
    },
    async mounted(){
        const rslt = await TypeOfRessourceService.GetAllTypeOfRessource()
        this.TypeOfRessourceArray = rslt.data
    },
    methods: {
        async deleteTypeOfRessource(id){
            TypeOfRessourceService.DeleteTypeOfRessource({
                idTypeOfRessource: id
            })
        },
        editTypeOfRessource(id){
            this.$router.push(`/profil/typeressource/edit/${id}`)
        }
    }
}
</script>

<style scoped>
    ion-item{
     margin-top: 10%;
    }
</style>