<template>
  <div>
    <ion-header>
      <ion-grid>
        <ion-row class="Aligner">
          <ion-col size="2">
            <ion-icon
              v-on:click="openFirst"
              name="menu-outline"
              style="font-size: 30px"
            ></ion-icon>
          </ion-col>
          <ion-col size="10">
            <img src="../../img/RR.png" style="height: 100px" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-header>

    <ion-menu side="start" menu-id="first" content-id="main">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-avatar class="Aligner">
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-item href="/ressource">Accueil</ion-item>
        <ion-item href="/profil">Profil</ion-item>
        <ion-item href="/profil/fav">Favoris</ion-item>
        <ion-item href="/profil/settings">Settings</ion-item>
        <ion-item v-if="connected" button @click="IWantToBedisconnected"
          >Deconnexion</ion-item
        >
        <ion-item v-else href="/profil/login">Connexion</ion-item>
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
import { IonIcon } from "@ionic/vue";
import { addIcons } from "ionicons";
import { menuOutline } from "ionicons/icons";
export default defineComponent({
  name: "App",
  components: {
    IonHeader,
    IonGrid,
    IonCol,
    IonRow,
    IonAvatar,
    IonContent,
    IonItem,
    IonMenu,
    IonToolbar,
    IonIcon,
  },
  created() {
    addIcons({
      "menu-outline": menuOutline,
    });
  },
  data() {
    return {
      nomUser: "",
      prenomUser: "",
      mailUser: "",
      connected: true,
    };
  },
  setup() {
    const items = [
      {
        text: "logo",
        src: "../../src/img/RR.png",
      },
    ];
    return { items };
  },
  mounted() {
    if (this.$store.state.token != "") {
      this.connected = "Deconnexion";
    } else {
      this.connected = "Connexion";
    }
  },
  methods: {
    IWantToBeConnected() {
      this.$router.push("/profil/login");
    },
    IWantToBedisconnected() {
      this.connected = false;
      this.$store.commit("SetRole", 0);
      this.$store.commit("SetToken", "");
      this.$router.replace("/home");
    },
    openFirst() {
      menuController.enable(true, "first");
      menuController.open("first");
    },
    pushOn(link) {
      this.$router.push(link);
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