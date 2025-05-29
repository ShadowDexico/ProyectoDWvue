import { createRouter, createWebHistory } from "vue-router";
import RutasVue from "@/views/RutasVue.vue";
import InfoRutasView from "@/views/InfoRutasView.vue";
import LoginView from "@/views/LoginView.vue";
import OAuthRedirect from "@/views/OAuthRedirect.vue";
import InfoAppView from "@/views/InfoAppView.vue";

const routes = [
  {
    path: "/rutass",
    name: "rutas",
    component: RutasVue,
  },
  { 
    path: "/login", 
    component: LoginView 
  },
  { 
    path: "/oauth2/redirect", 
    component: OAuthRedirect
  },
  { 
    path: "/", 
    redirect: "/login" 
  },
  {
    path: "/info",
    name: "inforutas",
    component: InfoRutasView,
  },
  {
    path: "/infoApp",
    name: "Informacion",
    component: InfoAppView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
