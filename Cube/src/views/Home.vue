<template>
      <div>
        <div>
          <ion-input
            type="text"
            placeholder="Rechercher un article"
            v-model="filterText"
          ></ion-input>
          <ion-label>Catégorie</ion-label>
          <ion-select
            v-model="categories"
            v-bind:value="categories"
            style="background-color: #febc59; color: white"
          >
            <ion-select-option
              v-for="cat in CategoriesArray"
              :key="cat._id"
              v-bind:value="cat.Nom"
              >{{ cat.Nom }}</ion-select-option
            >
          </ion-select>
          <ion-button v-on:click="RessourceByCat">Filtrer</ion-button>
        </div>
        <div
          v-for="ressource in filteredList(RessourcesArray, filterText)"
          :key="ressource._id"
        >
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
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonIcon,
  IonCol,
  IonRow,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
} from "@ionic/vue";
import { defineComponent } from "vue";
import RessourceServices from "../services/Ressources";
import { addIcons } from "ionicons";
import { arrowUpOutline, arrowDownOutline, starOutline } from "ionicons/icons";
import CategoriesServices from "../services/Categories";
import RessourceCard from "./ressources/RessourceCard";
export default defineComponent({
  name: "Profil",
  data() {
    return {
      CurrentUser: "",
      RessourcesArray: [],
      categories: "",
      CategoriesArray: [],
      filterText: "",
    };
  },
  created() {
    addIcons({
      "arrow-up-outline": arrowUpOutline,
      "arrow-down-outline": arrowDownOutline,
      "star-outline": starOutline,
    });
  },
  components: {
    RessourceCard,
    IonButton,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
  },
  methods: {
    async deleteRessource(RessourceId) {
      await RessourceServices.deleteRessource({
        RessourceId: RessourceId,
      });
      this.$router.push("/profil");
    },
    TimeStampToDate: function (timestamp) {
      const date = new Date(timestamp * 1).toLocaleDateString("FR");
      return date;
    },
    editRessource(RessourceId) {
      this.$router.push(`/profil/ressource/edit/${RessourceId}`);
    },
    detailRessource(RessourceId) {
      this.$router.push(`/profil/ressource/${RessourceId}`);
    },
    ExploitedRessource(RessourceId) {
      console.log("Exploited" + RessourceId);
    },
    UnExploitedRessource(RessourceId) {
      console.log("UnExploited" + RessourceId);
    },
    async FavRessource(RessourceId) {
      console.log("Fav" + RessourceId);
      await RessourceServices.FavRessource({
        RessourceId: RessourceId,
      });
    },
    async RessourceByCat() {
      console.log(this.categories);
      const rslt = await RessourceServices.RessourceByCat({
        NomCat: this.categories,
      });
      console.log(rslt.data);
      this.RessourcesArray = rslt.data;
    },
    filteredList(RessourcesArray, filterText) {
      if (!filterText) {
        return [...RessourcesArray];
      }
      return RessourcesArray.filter((ressource) => {
        return ressource.title.match(new RegExp(filterText, "i"));
      });
    },
  },
  async mounted() {
    const rslt = await RessourceServices.getRessources();
    this.RessourcesArray = rslt.data;
    console.log(this.$store.state.role);
    const cat = await CategoriesServices.GetAllCategories();
    this.CategoriesArray = cat.data;
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