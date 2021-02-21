<template>
  <ion-page>
    <ion-content >
      <div class="container">
        <ion-item>
          <ion-button href="/profil/ressource/add"> Ajouter une ressource </ion-button>
          <ion-button href="/profil/categories"> Catégories </ion-button>
          <ion-button href="/profil/typeressource"> Type de ressource </ion-button>
          
        </ion-item>
        <ul v-for="ressource in RessourcesArray" :key="ressource._id" >
            <label>Ressources</label>
            <li>{{ ressource.title }}</li> 
            <li>{{ ressource.content }}</li>
            <li>{{ ressource.categories }}</li>
            <li>{{ ressource.datePublication }}</li>
            <ion-button v-on:click="deleteRessource(ressource._id)" >delete</ion-button>
            <ion-button v-on:click="editRessource(ressource._id)">Edit</ion-button>
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

} from "@ionic/vue";
import { defineComponent } from "vue";
import RessourceServices from "../../services/Ressources"

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

 ion-item{
   margin-top: 10%;
 }
</style>