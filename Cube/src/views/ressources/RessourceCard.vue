<template>
  <ion-card>
      <ion-card-header>
        <ion-card-subtitle>
          {{ TimeStampToDate(date) }} -
          {{ categories }}
        </ion-card-subtitle>
        <ion-card-title>{{ title }}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        {{ content }}
      </ion-card-content>
    <ion-icon name="accessibility-outline"></ion-icon>
    <ion-row class="cardfooter" >
      <ion-col>
        <router-link v-bind:to="editRessource" v-if="this.$route.fullPath == '/profil'">
          <ion-icon
            name="create-outline"
            style="font-size: 30px; color: #f1bb39"
          ></ion-icon>
        </router-link>
        <ion-icon
          name="trash-outline"
          v-if="this.$route.fullPath == '/profil'"
          v-on:click="presentAlertConfirm(id)"
          style="font-size: 30px; color: red"
        ></ion-icon>
        <router-link v-bind:to="detailRessource" v-if="this.$route.fullPath == '/ressource'">
          <ion-button>Voir plus</ion-button>
        </router-link>
      </ion-col>
    </ion-row>
  </ion-card>
</template>
<script>
import {
  IonButton,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonIcon,
  alertController
} from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";
import { addIcons } from "ionicons";
import { trashOutline, createOutline } from "ionicons/icons";
import RessourceServices from "../../services/Ressources";

export default defineComponent({
  props: {
    date: String,
    categories: String,
    content: String,
    id: String,
    title: String,
  },
  created() {
    addIcons({
      "trash-outline": trashOutline,
      "create-outline": createOutline,
    });
  },
  computed: {
    editRessource: function () {
      if (!this.id) {
        return "/";
      }
      return `/profil/ressource/edit/${this.id}`;
    },
    detailRessource: function () {
      if (!this.id) {
        return "/";
      }
      return `/ressource/${this.id}`;
    },
  },
  methods: {
    TimeStampToDate: function (timestamp) {
      const date = new Date(timestamp * 1).toLocaleDateString("FR");
      return date;
    },
    async deleteRessource(RessourceId) {
      await RessourceServices.deleteRessource({
        RessourceId: RessourceId,
      });
    },
    async presentAlertConfirm(RessourceId) {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Confirmation requis.',
          message: 'Vous êtes sur le point de supprimer une ressource définitivement.',
          buttons: [
            {
              text: 'Annuler',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                console.log("Annulé")
              },
            },
            {
              text: 'Supprimer',
              handler: () => {
                this.deleteRessource(RessourceId)
                const indexRessource = this.$parent.RessourcesArray.map(item => item._id).indexOf(RessourceId)
                this.$parent.RessourcesArray.splice(indexRessource, 1)
              },
            },
          ],
        });
      return alert.present();
    },
  },

  components: {
    IonButton,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonIcon,
  },
});
</script>
