<template>
      <div class="content">
        <ion-item>
          <ion-textarea
            v-bind:value="title"
            placeholder="Titre"
            v-model="title"
          ></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-textarea
            placeholder="Enter more information here..."
            v-model="content"
            v-bind:value="content"
            auto-grow="true"
            wrap="soft"
          ></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-label>Catégorie</ion-label>
          <ion-select v-model="categories" v-bind:value="categories">
            <ion-select-option
              v-for="cat in CategoriesArray"
              :key="cat._id"
              v-bind:value="cat.Nom"
              >{{ cat.Nom }}</ion-select-option
            >
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-button v-on:click="editRessource">Mettre à jour</ion-button>
        </ion-item>
      </div>
</template>

<script>
import {
  IonItem,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonTextarea,
  IonContent
} from "@ionic/vue";
import RessourceServices from "../../services/Ressources";
import MenuHeader from "../../views/menu/menuHeader";
import CategoriesServices from "../../services/Categories";

export default {
  name: "Edit Ressource",
  data() {
    return {
      title: "",
      content: "",
      categories: "",
      id: "",
      CategoriesArray: [],
    };
  },
  methods: {
    async editRessource() {
      const res = await RessourceServices.updateRessource({
        titleRessource: this.title,
        contentRessource: this.content,
        categoriesRessource: this.categories,
        idRessource: this.id,
      });
      console.log(res)
      this.$router.push("/profil");
    },
  },
  async mounted() {
    this.id = this.$route.params.id;
    const rslt = await RessourceServices.getOneRessource({
      RessourceId: this.id,
    });
    this.title = rslt.data.title;
    this.content = rslt.data.content;
    this.categories = rslt.data.categories;
    const cat = await CategoriesServices.GetAllCategories();
    this.CategoriesArray = cat.data;
    console.log("toto")
  },
  components: {
    IonItem,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonTextarea,
  },
};
</script>

