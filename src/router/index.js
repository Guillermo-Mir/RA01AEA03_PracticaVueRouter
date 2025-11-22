import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ()=>import('@/views/Home.vue')  
    },
    {
      path: "/Recipes",
      name: "recipes",
      component: ()=>import('@/views/Recipes.vue'),
      children: [{
        path: ":id",
        name: "recipeDetail",
        component: ()=>import('@/views/RecipeDetail.vue'),
      }]
    },
    { 
      path: "/HomeProvide", 
      name:"homeprovide", 
      component: () => import("@/App2.vue") }
  ],
})

export default router