<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          
          <ion-button @click="openStart">Open Start Menu</ion-button>
        </ion-toolbar>
        <ion-toolbar>
          <ion-title size="large" >Blank</ion-title>
        </ion-toolbar>
        
      </ion-header>
     <ion-menu id="start" side="start" content-id="main-content">
      
      <ion-content id="main-content">
        <ion-list>
          <ion-item>
            <ion-icon name="mail" slot="start"></ion-icon>
            <ion-label>Inbox</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="paper-plane" slot="start"></ion-icon>
            <ion-label>Outbox</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="heart" slot="start"></ion-icon>
            <ion-label>Favorites</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="archive" slot="start"></ion-icon>
            <ion-label>Archived</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="trash" slot="start"></ion-icon>
            <ion-label>Trash</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="warning" slot="start"></ion-icon>
            <ion-label>Spam</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        <ion-button  href="/profil">
          <ion-label>Profil</ion-label>
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonIcon,IonItem,IonList,IonMenu, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton, 
    IonLabel,
    IonIcon,
    IonItem,
    IonList,
    IonMenu,
    },
    methods: {
      openStart() {
      document.querySelector("#start").open("start");
    },
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