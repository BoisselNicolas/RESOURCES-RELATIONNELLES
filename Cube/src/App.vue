<template>
  <ion-app>
    <menu-header></menu-header>
    <ion-router-outlet id="main" />
  </ion-app>
</template>

<script >
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import User from "../src/services/User";
import MenuHeader from "../src/views/menu/menuHeader";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    MenuHeader,
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
