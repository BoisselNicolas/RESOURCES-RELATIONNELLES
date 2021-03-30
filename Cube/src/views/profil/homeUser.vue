<template>
      <div>
        <ion-item>
          <ion-button href="/profil/ressource/add">
            Ajouter une ressource
          </ion-button>
          <ion-button v-if="$store.state.role >= 2" href="/profil/categories">
            Catégories
          </ion-button>
          <ion-button
            v-if="$store.state.role >= 2"
            href="/profil/typeressource"
          >
            Type de ressource
          </ion-button>
        </ion-item>
        <div v-for="ressource in RessourcesArray" :key="ressource._id">
          <ressource-card
            v-bind:date="ressource.datePublication"
            v-bind:categories="ressource.categories"
            v-bind:content="ressource.content"
            v-bind:id="ressource._id"
            v-bind:title="ressource.title"
          ></ressource-card>
        </div>
      </div>
</template>

<script >
import {
  IonButton,
  IonItem,
} from "@ionic/vue";
import { defineComponent } from "vue";
import RessourceServices from "../../services/Ressources";
import RessourceCard from "../ressources/RessourceCard";

export default defineComponent({
  name: "Profil",
  data() {
    return {
      CurrentUser: "",
      RessourcesArray: [],
    };
  },
  components: {
    IonButton,
    IonItem,
    RessourceCard,
  },
  async mounted() {
    const rslt = await RessourceServices.getUserRessources();
    this.RessourcesArray = rslt.data;
    console.log(this.$route.fullPath);
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
