<template>
      <ion-item>
        <label>Nom de la catégories : </label>
        <input type="text" placeholder="Nom..." v-model="nameCategorie" />
        <ion-button v-on:click="addCat"> Ajouter </ion-button>
      </ion-item>
</template>

<script>
import { IonItem, IonButton } from "@ionic/vue";
import CategoriesServices from "../../services/Categories";
export default {
  name: "",
  components: {
    IonItem,
    IonButton,
  },
  data() {
    return {
      nameCategorie: "",
    };
  },
  methods: {
    addCat() {
      CategoriesServices.AddCategories({
        nameCat: this.nameCategorie,
      });
      this.$router.push("/profil/categories");
    },
  },
};
</script>

