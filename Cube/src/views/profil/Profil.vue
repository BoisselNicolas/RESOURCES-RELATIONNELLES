<template>
  <ion-page>
    <menu-header></menu-header>
    <ion-content>
      <div >
        <ion-item>
          <ion-button href="/profil/ressource/add"> Ajouter une ressource </ion-button>
          <ion-button href="/profil/categories"> Catégories </ion-button>
          <ion-button href="/profil/typeressource"> Type de ressource </ion-button>
        </ion-item>
        <ul v-for="ressource in RessourcesArray" :key="ressource._id" >

          <ion-card>
            <ion-card-header>
             <!--  <img src="./madison.jpg" /> -->
              <ion-card-subtitle>{{ ressource.datePublication }}  - {{ ressource.categories }}</ion-card-subtitle>
              <ion-card-title>{{ ressource.title }}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              {{ ressource.content }}
            </ion-card-content>
            <ion-button color="warning" v-on:click="editRessource(ressource._id)">Edit</ion-button>
            <ion-button color="danger" v-on:click="deleteRessource(ressource._id)" >delete</ion-button>
            <ion-icon name="arrow-back"
                      style="font-size: 24px; color: green">
            </ion-icon>
          </ion-card> 

          
        </ul>
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
import { logoAngular } from 'ionicons/icons'

export default defineComponent({
  name: "Profil",
  data() {
    return {
      CurrentUser: "",
      RessourcesArray: [],
    }
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
      }

    },
    async mounted(){
      this.CurrentUser = sessionStorage.getItem('UserId');
      if(this.CurrentUser == null){
        this.$router.push("/profil/login");
      }

      const rslt = await RessourceServices.getRessources();
      this.RessourcesArray = rslt.data
      
    

 
    }
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