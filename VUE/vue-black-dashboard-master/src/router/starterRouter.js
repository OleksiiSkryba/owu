import Vue from 'vue';
import Router from 'vue-router';
import SampleLayout from '../layout/starter/SampleLayout.vue';
import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import Starter from '../layout/starter/SamplePage.vue';
// import Dashboard from '../pages/Dashboard.vue';
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      redirect: '/home',
      component: SampleLayout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Starter 
        }
      ]
    },
    {
      path: "/dashboard",
      component: DashboardLayout,
      // redirect: "/dashboard",
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: Dashboard
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "notifications",
          name: "notifications",
          component: Notifications
        },
        {
          path: "icons",
          name: "icons",
          component: Icons
        },
        {
          path: "maps",
          name: "maps",
          component: Maps
        },
        {
          path: "typography",
          name: "typography",
          component: Typography
        },
        {
          path: "table-list",
          name: "table-list",
          component: TableList
        }
      ]
    },
    { path: "*", component: NotFound },
  ]
});
