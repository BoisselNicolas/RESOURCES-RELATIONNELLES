<template>
    <ion-page>
        <ion-content>
            <div class="content">
                <ion-item>
                    <input type="text" placeholder="Titre" v-model="title"/>
                </ion-item>
            <ion-item>
                <input type="textaera" placeholder="content" v-model="content">
                </ion-item>
                <ion-item>
                    <input type="text" placeholder="catégories" v-model="categories">
                </ion-item>
                <ion-item>
                    <ion-button  v-on:click="NewRessource" >Ajouter</ion-button>
                </ion-item>
            </div>
            
        </ion-content>
    </ion-page>
</template>

<script>
import {
  IonContent,
  IonItem,
  IonButton,
  IonPage
} from "@ionic/vue";
import { defineComponent } from "vue";
import RessourceServices from "../../services/Ressources"
export default defineComponent ({
    name: "Profil Ressource Add",
    components: {
        IonContent,
        IonItem,
        IonButton,
        IonPage
    },
    data(){
        return{
            title: "",
            categories: "",
            content: ""
        }
    },
    methods:{
        async NewRessource(){
            const rslt = await RessourceServices.addRessource({
                titleRessource : this.title ,
                contentRessource: this.content,
                categoriesRessource: this.categories,
                idUser: sessionStorage.getItem('UserId'),
            })
            this.$router.push('/profil')
        }
    }
})
</script>

<style scoped>
.content{
    margin-top: 15%;
}
</style>