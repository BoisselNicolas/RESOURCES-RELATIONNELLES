<template>
  <ion-page>
    <menu-header></menu-header>
    <ion-content>
      <div >
        <ion-item>
          <ion-button href="/profil/ressource/add"> Ajouter une ressource </ion-button>
          <ion-button v-if="$store.state.role >= 2" href="/profil/categories"> Catégories </ion-button>
          <ion-button v-if="$store.state.role >= 2" href="/profil/typeressource"> Type de ressource </ion-button>

        </ion-item>

        <ion-card v-for="ressource in RessourcesArray" :key="ressource._id" >
          <ion-card-header>
            <ion-card-subtitle>{{ TimeStampToDate(ressource.datePublication) }}  - {{ ressource.categories }}</ion-card-subtitle>
            <ion-card-title v-on:click="detailRessource(ressource._id)">{{ ressource.title }}</ion-card-title>
          </ion-card-header>

          <ion-card-content v-on:click="detailRessource(ressource._id)">
            {{ ressource.content }}
          </ion-card-content>
          
          
          <ion-icon name="accessibility-outline"></ion-icon>
          <ion-row class="cardfooter">
            <ion-col>
              <ion-icon 
              name="create-outline"
              v-on:click="editRessource(ressource._id)"
              style="font-size:30px; color: #F1BB39"
              ></ion-icon>
              <ion-icon 
              name="trash-outline" 
              v-on:click="deleteRessource(ressource._id)" 
              style="font-size:30px; color: red"
              ></ion-icon>
                  <ion-button v-on:click="detailRessource(ressource._id)" >Voir plus</ion-button>
            </ion-col>
          </ion-row>
        </ion-card> 
      </div>
    </ion-content>
  </ion-page>
</template>

<script >
import {
  IonContent,
  IonPage,
  IonButton,
  IonItem,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonIcon

} from "@ionic/vue";
import { defineComponent } from "vue";
import RessourceServices from "../../services/Ressources"
import MenuHeader from '../../views/menu/menuHeader'
import { addIcons } from 'ionicons';
import { trashOutline, createOutline } from 'ionicons/icons';

export default defineComponent({
  name: "Profil",
  data() {
    return {
      CurrentUser: "",
      RessourcesArray: [],
    }
  },
  created() {
    addIcons({
      'trash-outline': trashOutline,
      'create-outline': createOutline
    });
  },
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonItem,
    MenuHeader,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonIcon,
  },
  methods: {
      async deleteRessource(RessourceId){
        await RessourceServices.deleteRessource({
          RessourceId: RessourceId
        });
        this.$router.push('/profil')
      },
      editRessource(RessourceId){
        this.$router.push(`/profil/ressource/edit/${RessourceId}`)
      },
      detailRessource(RessourceId){
        this.$router.push(`/profil/ressource/${RessourceId}`)
      },
      TimeStampToDate: function(timestamp){
        const date = new Date(timestamp * 1).toLocaleDateString("FR")
        return date
      },

    },
    async mounted(){
      
      const rslt = await RessourceServices.getUserRessources();
      this.RessourcesArray = rslt.data
      console.log(this.$store.state.role)
      
/*       console.log(sessionStorage.getItem('accessToken'))
      const role = await AuthenticationService.getRole()
      sessionStorage.setItem('AccesRole', role.data)
      console.log(sessionStorage.getItem('AccesRole'))
 */

 
    },
    
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

</style>