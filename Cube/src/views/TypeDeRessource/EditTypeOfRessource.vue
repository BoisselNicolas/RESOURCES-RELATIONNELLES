<template>
    <ion-page>
        <menu-header></menu-header>
        <ion-content>
             <div class="container">
                <ion-item>
                    <label>Nom : </label>
                    <input type="text" placeholder="Nom..." v-model="nameType"/>
                    <ion-button
                        v-on:click="editType"
                    > Editer </ion-button>
                </ion-item>
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
            nameType: "",
            id: ""
        }
    },
     components: {
        IonItem,
        IonButton,
        IonPage,
        IonContent,
        MenuHeader
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