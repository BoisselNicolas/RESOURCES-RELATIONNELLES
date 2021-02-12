<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Connexion</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Connexion</ion-title>
        </ion-toolbar>
        
      </ion-header>
    
      <div id="container">
        <ion-item >
            <ion-label color="light">Email</ion-label>
            <ion-input color="light" type="mail" placeholder="Adresse email"></ion-input>
            </ion-item>

            <ion-item>
            <ion-label color="light">Mot de passe</ion-label>
            <ion-input color="light" type="password" placeholder="Mot de passe"></ion-input>
        </ion-item>
        <ion-item lines="none">
             <ion-button color="light" slot="end" fill="clear">Mot de passe oublié ?</ion-button>
        </ion-item>
        <ion-button color="light" expand="block" shape="round" fill="outline">Connexion</ion-button>
        <br>
        <ion-button color="tertiary" expand="block" shape="round">Inscription</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, 
    IonLabel,
    IonInput
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