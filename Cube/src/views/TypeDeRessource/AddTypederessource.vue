<template>
        <ion-item>
          <label>Nouveau type de ressource : </label>
          <input type="text" placeholder="Nom..." v-model="nameType" />
          <ion-button v-on:click="addtype"> Ajouter </ion-button>
        </ion-item>
</template>

<script>
import { IonItem, IonButton } from "@ionic/vue";
import TypeOfRessourceService from "../../services/TypeDeRessource";
export default {
  name: "",
  data() {
    return {
      nameType: "",
    };
  },
  methods: {
    async addtype() {
      await TypeOfRessourceService.AddTypeOfRessource({
        NameTypeOfRessource: this.nameType,
      });
      this.$router.push("/profil/typeressource");
    },
  },
  components: {
    IonItem,
    IonButton,
  },
};
</script>
<style scoped>
.container {
  margin-top: 10%;
}
</style>