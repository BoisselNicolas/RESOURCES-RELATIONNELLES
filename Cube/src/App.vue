<template>
  <ion-app>
    <menu-header></menu-header>
    <ion-content>
      <ion-router-outlet id="main" />
    </ion-content>
  </ion-app>
</template>

<script >
import { IonApp, IonRouterOutlet, IonContent } from "@ionic/vue";
import { defineComponent } from "vue";
import User from "../src/services/User";
import MenuHeader from "../src/views/menu/menuHeader";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    MenuHeader,
    IonContent
  },
  data() {
    return {
      nomUser: "",
      prenomUser: "",
      mailUser: "",
    };
  },
  async mounted() {
    if (sessionStorage.getItem("UserId")) {
      this.IdUser = sessionStorage.getItem("UserId");
      const user = await User.getCurrentUser({
        IdUser: this.IdUser,
      });

      this.nomUser = user.data.lastnameUser;
      this.prenomUser = user.data.firstnameUser;
      this.mailUser = user.data.mailUser;
    }
  },
});
</script>
