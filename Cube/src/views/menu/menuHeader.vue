<template>
    <ion-header>

      <ion-grid>
          <ion-row class="Aligner">
                <ion-col size="2">
                    <ion-avatar>
                        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                    </ion-avatar>
                    <div v-if="nomUser!=''">
                      <label>{{ nomUser }}</label><br>
                      <label>{{ prenomUser }}</label><br>
                      <label>{{ mailUser }}</label><br>
                    </div>
                    <ion-button href="/profil">Account</ion-button>
                </ion-col>
                <ion-col size="10" >Ressource Relationnelles</ion-col>
          </ion-row>
      </ion-grid>


      
      
    </ion-header>
</template>

<script >
import { IonHeader, IonButton, IonGrid, IonCol, IonRow, IonAvatar} from '@ionic/vue';
import { defineComponent } from 'vue';
import User from "../../../src/services/User"

export default defineComponent({
  name: 'App',
  components: {
      IonHeader,
      IonButton,
      IonGrid,
      IonCol,
      IonRow,
      IonAvatar
  },
  data() {
    return {
      nomUser: "",
      prenomUser: "",
      mailUser: "",
    }
  },
  async mounted(){
    if(sessionStorage.getItem('UserId')){
        this.IdUser = sessionStorage.getItem('UserId');
        const user = await User.getCurrentUser({
          IdUser: this.IdUser
        });
        this.nomUser = user.data.lastnameUser;
        this.prenomUser = user.data.firstnameUser;
        this.mailUser = user.data.mailUser;
    }
  }
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