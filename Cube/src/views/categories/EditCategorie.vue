<template>
    <ion-page>
        <ion-content>
            <ion-item class="content">
                <label>Nom de la catégories : </label>
                <input type="text" placeholder="Nom..." v-model="nameCategorie"/>
                <ion-button
                    v-on:click="updateCategorie"
                > Mettre à jour </ion-button>
            </ion-item>
        </ion-content>
    </ion-page>
</template>

<script>
import {
  IonButton,
  IonItem,
  IonContent,
  IonPage

} from "@ionic/vue";
import CategoriesServices from "../../services/Categories"
export default {
    name: "",
    data(){
        return{
            id: "",
            nameCategorie: ""
        }
    },
    methods:{
        async updateCategorie(){
            await CategoriesServices.EditCategories({
                idCategorie: this.id,
                nomCategorie: this.nameCategorie
            })
            this.$router.push('/profil/categories')
        }
    },
    components: {
        IonButton,
        IonItem,
        IonContent,
        IonPage
    },
    async mounted(){
        this.id = this.$route.params.id
        const rslt = await CategoriesServices.getOneCategorie({
            CategorieId: this.id
        })
        this.nameCategorie = rslt.data.Nom;
    }
}
</script>


<style scoped>
.content{
    margin-top: 15%;
}
</style>