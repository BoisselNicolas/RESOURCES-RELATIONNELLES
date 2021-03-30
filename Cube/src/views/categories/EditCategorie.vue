<template>
      <ion-item class="content">
        <label>Nom de la catégories : </label>
        <input type="text" placeholder="Nom..." v-model="nameCategorie" />
        <ion-button v-on:click="updateCategorie"> Mettre à jour </ion-button>
      </ion-item>
</template>

<script>
import { IonButton, IonItem} from "@ionic/vue";
import CategoriesServices from "../../services/Categories";
export default {
  name: "",
  data() {
    return {
      id: "",
      nameCategorie: "",
    };
  },
  methods: {
    async updateCategorie() {
      await CategoriesServices.EditCategories({
        idCategorie: this.id,
        nomCategorie: this.nameCategorie,
      });
      this.$router.replace("/profil/categories");
    },
  },
  components: {
    IonButton,
    IonItem,
  },
  async mounted() {
    this.id = this.$route.params.id;
    const rslt = await CategoriesServices.getOneCategorie({
      CategorieId: this.id,
    });
    this.nameCategorie = rslt.data.Nom;
  },
};
</script>


