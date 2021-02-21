<template>
    <div class="container">
        <ion-item>
            <ion-button href="/profil/categories/add">Ajouter une Categories</ion-button>
        </ion-item>
        <ul v-for="cat in CategoriesArray" :key="cat._id" >
             <label>Catégories</label>
              <li>{{ cat.Nom }}</li> 
              <ion-button v-on:click="deleteCategories(cat._id)" >delete</ion-button>
              <ion-button v-on:click="editCategories(cat._id)">Edit</ion-button>
        </ul>
      </div>
</template>

<script>
import CategoriesServices from "../../services/Categories"
export default {
    name: "Categories",
    data(){
        return{
            CategoriesArray: [],
        }
    },
    async mounted() {
       const rslt = await CategoriesServices.GetAllCategories();
       this.CategoriesArray = rslt.data;
       console.log( this.CategoriesArray)
    },
    methods: {
        async deleteCategories(id){
            await CategoriesServices.DeleteCategories({
               idCategories: id
            });
            this.$router.push('/profil/categories')
        },
        editCategories(id){
            this.$router.push(`/profil/categories/edit/${id}`)
        }
    }
}
</script>

<style scoped>
ion-item{
   margin-top: 10%;
}
</style>