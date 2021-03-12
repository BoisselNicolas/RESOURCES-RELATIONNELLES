<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-item>
          <ion-label color="light">Email</ion-label>
          <ion-input
            color="light"
            type="mail"
            placeholder="Adresse email"
            v-model="mail"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label color="light">Mot de passe</ion-label>
          <ion-input
            color="light"
            type="password"
            placeholder="Mot de passe"
            v-model="pass"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-button color="light" slot="end" fill="clear">Mot de passe oublié ?</ion-button>
        </ion-item>
        <ion-button
          v-on:click="loginUser"
          color="light"
          expand="block"
          shape="round"
          fill="outline"
          >Connexion</ion-button
        >
        <br />
        <ion-button
          href="/profil/signup"
          color="tertiary"
          expand="block"
          shape="round"
          >Inscription</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script >
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import AuthenticationService from "../../services/AuthenticationService";
import { useStore } from "vuex";

export default defineComponent({
  name: "Profil",
  data() {
    return {
      error: "",
      messages: [],
      mail: "",
      pass: "",
      temp: "",
    };
  },
  components: {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  methods: {
    async loginUser() {
      const response = await AuthenticationService.login({
        mailUser: this.mail,
        passwordUser: this.pass,
      });
      this.$store.commit("SetRole", response.data.accesRole);
      this.$store.commit("SetToken", response.data.accessToken);
      this.$router.push("/profil");
    },
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

ion-content {
  --ion-background-color: var(--ion-color-dark);
}
</style>