<template>
      <div>
        <ion-item>
          <ion-button href="/profil/typeressource/add"
            >Ajouter un type de ressource</ion-button
          >
        </ion-item>
        <ul v-for="TOP in TypeOfRessourceArray" :key="TOP._id">
          <label>Type de ressources</label>
          <li>{{ TOP.Nom }}</li>
          <ion-button v-on:click="deleteTypeOfRessource(TOP._id)"
            >delete</ion-button
          >
          <ion-button v-on:click="editTypeOfRessource(TOP._id)"
            >Edit</ion-button
          >
        </ul>
      </div>
</template>

<script>
import { IonItem, IonButton } from "@ionic/vue";
import TypeOfRessourceService from "../../services/TypeDeRessource";
export default {
  name: "",
  data() {
    return {
      TypeOfRessourceArray: [],
    };
  },
  components: {
    IonItem,
    IonButton,
  },
  async mounted() {
    const rslt = await TypeOfRessourceService.GetAllTypeOfRessource();
    this.TypeOfRessourceArray = rslt.data;
  },
  methods: {
    async deleteTypeOfRessource(id) {
      TypeOfRessourceService.DeleteTypeOfRessource({
        idTypeOfRessource: id,
      });
    },
    editTypeOfRessource(id) {
      this.$router.push(`/profil/typeressource/edit/${id}`);
    },
  },
};
</script>

