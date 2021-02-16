import { createRouter, createWebHistory } from "vue-router";
import firebase from "firebase";
import StarterLayout from "../layout/StarterLayout.vue";
import DashboardLayout from "@/layout/DashboardLayout.vue";

// GeneralViews
import Home from "../views/Home.vue";
import NotFound from "@/views/NotFoundPage.vue";

// Admin views
const Dashboard = () =>
  import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue");
const Profile = () =>
  import(/* webpackChunkName: "common" */ "@/views/Profile.vue");
const Notifications = () =>
  import(/* webpackChunkName: "common" */ "@/views/Notifications.vue");
const Icons = () =>
  import(/* webpackChunkName: "common" */ "@/views/Icons.vue");
// const Maps = () => import(/* webpackChunkName: "common" */ "@/views/Maps.vue");
const Typography = () =>
  import(/* webpackChunkName: "common" */ "@/views/Typography.vue");
const TableList = () =>
  import(/* webpackChunkName: "common" */ "@/views/TableList.vue");

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: StarterLayout,
    children: [
      {
        path: "home",
        name: "home",
        component: Home
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        path: "/register",
        name: "Register",
        component: () =>
          import(/* webpackChunkName: "Register" */ "../views/Register.vue")
      }
    ]
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
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
      // {
      //   path: "maps",
      //   name: "maps",
      //   component: Maps
      // },
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
    ],
    meta: {
      authRequired: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound
  }
  // { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert("You must be logged in to see this page");
      next({
        path: "/"
      });
    }
  } else {
    next();
  }
});

export default router;
