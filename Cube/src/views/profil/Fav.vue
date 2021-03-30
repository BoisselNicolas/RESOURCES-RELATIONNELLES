<template>
  <ion-page>
    <ion-content>
      <div>
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>28/02/2021 - Video Games</ion-card-subtitle>
            <ion-card-title v-on:click="detailRessource(ressource._id)"
              >Updating</ion-card-title
            >
          </ion-card-header>

          <ion-card-content v-on:click="detailRessource(ressource._id)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquam at sapien quis vehicula. Phasellus bibendum velit nec
            malesuada ultrices. Vestibulum erat dui, interdum eu dolor sed,
            feugiat semper nunc. Nam velit ligula, eleifend id eleifend et,
            posuere sit amet turpis. Suspendisse quis dolor orci. Nullam ipsum
            ipsum, ultricies commodo turpis vel, tincidunt feugiat nisl. Cras
            quis odio eu enim mollis consequat. Nunc sit amet lacus tincidunt,
            blandit lorem in, pulvinar ligula. Etiam a libero vitae justo
            facilisis malesuada et ac mauris. Nam eu gravida lacus. Quisque
            ornare pellentesque molestie. Phasellus ex ipsum, fringilla eget
            fringilla a, placerat at orci.
          </ion-card-content>

          <ion-icon name="accessibility-outline"></ion-icon>
          <ion-row class="cardfooter">
            <ion-col>
              <ion-button>Voir plus</ion-button>
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
  IonRow,
  IonCol,
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonIcon,
    IonRow,
    IonCol,
  },
  data() {
    return {
      RessourcesArray: [],
      index: 0,
      tempArray: [],
    };
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