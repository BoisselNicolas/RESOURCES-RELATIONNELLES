<template>
  <ion-page>
    <menu-header></menu-header>
    <ion-content class="container">
      <h1>{{ title }}</h1>
      <label for=""> {{ date }} | {{ categories }} </label>
      <div>
        <label for=""> {{ content }} </label>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from "@ionic/vue";
import { defineComponent } from "vue";
import RessourceServices from "../../services/Ressources";
import MenuHeader from "../menu/menuHeader";
export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonPage,
    MenuHeader,
  },
  data() {
    return {
      title: "",
      content: "",
      categories: "",
      date: "",
      id: "",
    };
  },
  methods: {
    openStart() {
      document.querySelector("#start").open("start");
    },
  },
  async mounted() {
    this.id = this.$route.params.id;
    const rslt = await RessourceServices.getOneRessource({
      RessourceId: this.id,
    });
    this.title = rslt.data.title;
    this.content = rslt.data.content;
    this.categories = rslt.data.categories;
    this.date = rslt.data.datePublication;
    console.log(rslt);
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