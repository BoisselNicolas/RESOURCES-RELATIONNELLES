<template>
  <ion-page>
    <menu-header></menu-header>
    <ion-content>
      <div>
        <ion-card v-for="ressource in RessourcesArray" :key="ressource._id">
          <ion-card-header>
            <ion-card-subtitle
              >{{ TimeStampToDate(ressource.datePublication) }} -
              {{ ressource.categories }}</ion-card-subtitle
            >
            <ion-card-title v-on:click="detailRessource(ressource._id)">{{
              ressource.title
            }}</ion-card-title>
          </ion-card-header>

          <ion-card-content
            v-on:click="detailRessource(ressource._id)"
            maxlength="10"
            size="10"
          >
            {{ ressource.content }}
          </ion-card-content>

          <ion-icon name="accessibility-outline"></ion-icon>
          <ion-row class="cardfooter">
            <ion-col>
              <ion-icon
                name="arrow-up-outline"
                v-on:click="ExploitedRessource(ressource._id)"
                style="font-size: 30px;"
              ></ion-icon>
              <ion-icon
                name="arrow-down-outline"
                v-on:click="UnExploitedRessource(ressource._id)"
                style="font-size: 30px;"
              ></ion-icon>
              <ion-icon
                name="star-outline"
                v-on:click="FavRessource(ressource._id)"
                style="font-size: 30px; color: #f1bb39"
              ></ion-icon>
              <ion-button v-on:click="detailRessource(ressource._id)"
                >Voir plus</ion-button
              >
            </ion-col>
          </ion-row>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script >
import {
  IonContent,
  IonPage,
  IonButton,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonIcon,
  IonCol,
  IonRow
} from "@ionic/vue";
import { defineComponent } from "vue";
import RessourceServices from "../services/Ressources";
import MenuHeader from "../views/menu/menuHeader";
import { addIcons } from "ionicons";
import { arrowUpOutline, arrowDownOutline, starOutline } from "ionicons/icons";

export default defineComponent({
  name: "Profil",
  data() {
    return {
      CurrentUser: "",
      RessourcesArray: [],
    };
  },
  created() {
    addIcons({
      "arrow-up-outline": arrowUpOutline,
      "arrow-down-outline": arrowDownOutline,
      "star-outline": starOutline,
    });
  },
  components: {
    IonContent,
    IonPage,
    IonButton,
    MenuHeader,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonIcon,
    IonCol,
    IonRow
  },
  methods: {
    async deleteRessource(RessourceId) {
      await RessourceServices.deleteRessource({
        RessourceId: RessourceId,
      });
      this.$router.push("/profil");
    },
    TimeStampToDate: function (timestamp) {
      const date = new Date(timestamp * 1).toLocaleDateString("FR");
      return date;
    },
    editRessource(RessourceId) {
      this.$router.push(`/profil/ressource/edit/${RessourceId}`);
    },
    detailRessource(RessourceId) {
      this.$router.push(`/profil/ressource/${RessourceId}`);
    },
    ExploitedRessource(RessourceId){
      console.log("Exploited" + RessourceId)
    },
    UnExploitedRessource(RessourceId){
      console.log("UnExploited" + RessourceId)
    },
    FavRessource(RessourceId){
      console.log("Fav" + RessourceId)
    }
  },
  async mounted() {
    const rslt = await RessourceServices.getRessources();
    this.RessourcesArray = rslt.data;
    console.log(this.$store.state.role);

    /*       console.log(sessionStorage.getItem('accessToken'))
      const role = await AuthenticationService.getRole()
      sessionStorage.setItem('AccesRole', role.data)
      console.log(sessionStorage.getItem('AccesRole'))
 */
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
</style>