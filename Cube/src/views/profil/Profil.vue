<template>
  <ion-page>
   
    
    <ion-content :fullscreen="true">
      
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
        <ion-button href="/profil/login" color="light" expand="block" shape="round" fill="outline">Connexion</ion-button>
        <br>
        <ion-button href="/profil/signup" color="tertiary" expand="block" shape="round">Inscription</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent,  IonPage,   IonItem, IonLabel, IonInput, IonButton} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Profil',
  components: {
    IonContent,
    IonPage,
    IonItem, 
    IonLabel,
    IonInput,
    IonButton
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

ion-content{
	--ion-background-color: var(--ion-color-dark);
}
</style>