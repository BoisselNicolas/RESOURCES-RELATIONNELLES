<template>
  <ion-card>
    <router-link v-bind:to="detailRessource">
      <ion-card-header>
        <ion-card-subtitle>
          {{ TimeStampToDate(date) }} -
          {{ categories }}
        </ion-card-subtitle>
        <ion-card-title>{{ title }}</ion-card-title>
      </ion-card-header>
    </router-link>
    <router-link v-bind:to="detailRessource">
      <ion-card-content>
        {{ content }}
      </ion-card-content>
    </router-link>
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
          v-on:click="deleteRessource(id)"
          style="font-size: 30px; color: red"
        ></ion-icon>
        <router-link v-bind:to="detailRessource">
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
      return `/profil/ressource/${this.id}`;
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
      const rslt = await RessourceServices.getUserRessources();
      this.RessourcesArray = rslt.data;
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
