<template>
  <ion-page>
    <menu-header></menu-header>
    <ion-content>
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
          <ion-label>Type</ion-label>
          <ion-select v-model="types" v-bind:aria-valuemax="types">
            <ion-select-option
              v-for="typ in TypesArray"
              :key="typ._id"
              v-bind:value="typ.Nom"
            >{{typ.Nom}}</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-button v-on:click="NewRessource">Ajouter</ion-button>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonItem, IonButton, IonPage, IonSelect, IonSelectOption, IonLabel, IonTextarea } from "@ionic/vue";
import { defineComponent } from "vue";
import RessourceServices from "../../services/Ressources";
import MenuHeader from "../menu/menuHeader.vue";
import CategoriesServices from "../../services/Categories";
import TypesServices from "../../services/TypeDeRessource";

export default defineComponent({
  name: "Profil Ressource Add",
  components: {
    IonContent,
    IonItem,
    IonButton,
    IonPage,
    MenuHeader,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonTextarea
  },
  data() {
    return {
      title: "",
      categories: "",
      types: "",
      content: "",
      CategoriesArray: [],
      TypesArray: []
    };
  },
  methods: {
    async NewRessource() {
      await RessourceServices.addRessource({
        titleRessource: this.title,
        contentRessource: this.content,
        categoriesRessource: this.categories,
        idUser: sessionStorage.getItem("UserId"),
      });
      this.$router.push("/profil");
    },
  },
  async mounted(){
      const cat = await CategoriesServices.GetAllCategories();
      this.CategoriesArray = cat.data;
      const typ = await TypesServices.GetAllTypeOfRessource();
      this.TypesArray = typ.data;
  }
});
</script>
