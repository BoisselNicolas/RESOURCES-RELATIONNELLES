<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Inscription</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Inscription</ion-title>
        </ion-toolbar>
        
      </ion-header>
    
      <div id="container">
          <label for="" style="color:red"> {{ response.data }} </label>

          <ion-item>
            
            <label>Nom</label>
            <input type="text" placeholder="Nom" v-model="lastname">
          </ion-item>
        <ion-item>
          <label>Prénom</label>
          <input type="text" placeholder="Prenom" v-model="firstname">
        </ion-item>
        <ion-item>
          <label>Mail</label>
          <input type="text"  placeholder="Mail" v-model="mail">
        </ion-item>
        <ion-item>
          <label>Mot de passe</label>
          <input type="password"  placeholder="Mot de passe" v-model="password">
        </ion-item>
        <ion-item>
          <ion-button
          v-on:click="registration"
          >  Je m'inscris</ion-button>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton} from '@ionic/vue';
import { defineComponent } from 'vue';
import AuthenticationService from "../../services/AuthenticationService";

export default defineComponent({
  name: 'SignUp',
  data(){
    return{
      lastname: "",
      firstname: "",
      mail: "",
      password: "",
      response: ""
    }
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonButton
  },
  methods: {
    async registration () {
      
      console.log(this.firstname);
      console.log(this.lastname);
      console.log(this.mail);
      console.log(this.password);

      const response = await AuthenticationService.register({
        nomUser: this.lastname,
        prenomUser: this.firstname,
        mailUser: this.mail,
        passwordUser: this.password,
      })
      console.log(response)
      this.response = response
      if(response.data == "ok"){
        this.$router.push('/profil/login')
      }
    }
  }
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