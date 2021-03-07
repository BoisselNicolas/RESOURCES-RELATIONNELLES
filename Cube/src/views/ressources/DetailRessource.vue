<template>
  <ion-page>
    <menu-header></menu-header>
    <ion-content class="container">
      <h1>{{ title }}</h1>
      <label for=""> {{ TimeStampToDate(date) }} | {{ categories }} | {{ types }}</label>
      <div>
        <label for=""> {{ content }} </label>
      </div>
      <div class="comment-box">
          <ion-card v-for="com in CommentsArray" v-bind:key="com._id">
            <ion-card-content>
                  <strong>{{com.content}}</strong>
                  <p>
                   {{TimeStampToDate(com.datePublication)}}
                  </p>
            </ion-card-content>

          </ion-card>
        </div>
    </ion-content>
    <ion-footer padding>
        <ion-textarea  type="text" placeholder="Comment .... " v-model="comment"></ion-textarea>
        <ion-button ion-button small float-right round v-on:click="addComment">Send</ion-button>
      </ion-footer>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonButton, IonTextarea, IonFooter, IonCard, IonCardContent } from "@ionic/vue";
import { defineComponent } from "vue";
import RessourceServices from "../../services/Ressources";
import TypesServices from "../../services/TypeDeRessource";
import CommentaireServices from "../../services/Commentaire";
import MenuHeader from "../menu/menuHeader";
export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonPage,
    MenuHeader,
    IonButton,
    IonTextarea,
    IonFooter,
    IonCard,
    IonCardContent
  },
  data() {
    return {
      title: "",
      content: "",
      categories: "",
      date: "",
      types : "",
      id: "",
      comment: "",
      CommentsArray: []
    };
  },
  methods: {
    openStart() {
      document.querySelector("#start").open("start");
    },
    TimeStampToDate: function(timestamp){
      const date = new Date(timestamp * 1).toLocaleDateString("FR")
      return date
    },
    async addComment(){
      const rslt = await CommentaireServices.addComment({
        RessourceId: this.id,
        content: this.comment
      })
      const commentTemp = await CommentaireServices.getAllComments({
       RessourceId: this.id,
      })
      this.CommentsArray = commentTemp.data
    }
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
    const typeRslt = await TypesServices.getOneRessource({
      RessourceId : this.id,
    })
    this.types = typeRslt.data.Nom;
    const commentTemp = await CommentaireServices.getAllComments({
       RessourceId: this.id,
    })
    this.CommentsArray = commentTemp.data
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