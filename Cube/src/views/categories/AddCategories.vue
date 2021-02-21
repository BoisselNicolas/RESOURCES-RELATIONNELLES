<template>
<ion-page>
    <ion-content>
        <ion-item>
            <label>Nom de la catégories : </label>
            <input type="text" placeholder="Nom..." v-model="nameCategorie"/>
            <ion-button
                v-on:click="addCat"
            > Ajouter </ion-button>
        </ion-item> 
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
import CategoriesServices from "../../services/Categories"
export default {
    name: "",
    components: {
        IonItem,
        IonButton,
        IonPage,
        IonContent
    },
    data(){
        return{
            nameCategorie: ""
        }
    },
    methods: {
        addCat(){
            CategoriesServices.AddCategories({
                nameCat: this.nameCategorie
            })
            this.$router.push('/profil/categories')
        }
    }
    
}
</script>

<style scoped>
ion-item{
   margin-top: 10%;
}
</style>