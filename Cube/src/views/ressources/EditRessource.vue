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
                    <ion-button  v-on:click="editRessource" >Edit</ion-button>
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
import RessourceServices from "../../services/Ressources"
export default {
    name: "Edit Ressource",
    data(){
        return{
            title: "",
            content: "",
            categories: "",
            id: ""
        }
    },
    methods: {
        editRessource(){
            RessourceServices.updateRessource({
                titleRessource: this.title,
                contentRessource: this.content,
                categoriesRessource: this.categories,
                idRessource: this.id
            })
        }
    },
    async mounted(){
        this.id = this.$route.params.id
        const rslt = await RessourceServices.getOneRessource({
            RessourceId: this.id
        })
        this.title = rslt.data.title;
        this.content = rslt.data.content;
        this.categories = rslt.data.categories;
    },
    components: {
        IonContent,
        IonItem,
        IonButton,
        IonPage
    }

    
}
</script>

<style scoped>
.content{
    margin-top: 15%;
}
</style>