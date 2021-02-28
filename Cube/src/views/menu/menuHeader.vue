<template>
  <div>
    <ion-header>
      <ion-grid>
        <ion-row class="Aligner">
          <ion-col size="2">
            <ion-button v-on:click="openFirst">Open</ion-button>
          </ion-col>
          <ion-col size="10">Ressource Relationnelles</ion-col>
        </ion-row>
      </ion-grid>
    </ion-header>

    <ion-menu side="start" menu-id="first" content-id="main">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-avatar>
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>
          <ion-title>Start Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content >
          <ion-item href="/home">Accueil</ion-item>
          <ion-item href="/profil">Profil</ion-item>
          <ion-item href="/profil/settings">Account</ion-item>
          <ion-item 
          v-if="connected" 
          v-on:Click="IWantToBedisconnected"
          >Deconnexion</ion-item
          >
          <ion-item v-else href="'/profil/login'">Connexion</ion-item>
        
      </ion-content>
    </ion-menu>
  </div>
</template>

<script >
import {
  IonHeader,
  IonButton,
  IonGrid,
  IonCol,
  IonRow,
  IonAvatar,
  IonContent,
  IonItem,
  IonMenu,
  IonTitle,
  IonToolbar,
  menuController,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonHeader,
    IonButton,
    IonGrid,
    IonCol,
    IonRow,
    IonAvatar,
    IonContent,
    IonItem,
    IonMenu,
    IonTitle,
    IonToolbar,
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
    if (this.$store.state.token != "") {
      this.connected = true;
    } else {
      this.connected = false;
    }
  },
  methods: {
    IWantToBeConnected() {
      this.$router.push("/profil/login");
    },
    IWantToBedisconnected() {
      this.$store.commit("SetRole", 0);
      this.$store.commit("SetToken", "");
      this.$router.replace("/home");
    },
    openFirst() {
      menuController.enable(true, "first");
      menuController.open("first");
    },
    pushOn(link){
      this.$router.push(link)
    }
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