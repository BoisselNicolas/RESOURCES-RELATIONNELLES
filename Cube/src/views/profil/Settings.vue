<template>
    <div>
      <h1>Informations personnelles</h1>
      <div>
        <ion-label>Nom</ion-label>
        <input type="text" placeholder="Nom" v-model="nomUser" />
      </div>
      <div>
        <ion-label>Prenom</ion-label>
        <input type="text" placeholder="Prenom" v-model="prenomUser" />
      </div>
      <div>
        <ion-label>Mail</ion-label>
        <input type="text" placeholder="Mail" v-model="mailUser" />
      </div>
      <ion-button v-on:click="UpdateUser">Mettre à jour </ion-button>
    </div>
</template>

<script >
import {  IonLabel, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";
import User from "../../../src/services/User";

export default defineComponent({
  name: "App",
  components: {
    IonLabel,
    IonButton,
  },
  data() {
    return {
      nomUser: "",
      prenomUser: "",
      mailUser: "",
      connected: true,
    };
  },
  async mounted() {
    const token = this.$store.state.token;
    const rslt = await User.getCurrentUser({ token: token });
    this.nomUser = rslt.data.UserNom;
    this.prenomUser = rslt.data.UserPrenom;
    this.mailUser = rslt.data.UserMail;
  },
  methods: {
    async UpdateUser() {
      await User.updateCurrentUser({
        nomUser: this.nomUser,
        prenomUser: this.prenomUser,
        mailUser: this.mailUser,
      });
      this.$router.push("/profil/settings");
    },
  },
});
</script>
<style scoped>
.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>