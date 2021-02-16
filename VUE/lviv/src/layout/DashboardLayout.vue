<template>
  <div class="layout">
    <aside id="sidenav-open">
      <nav>
        <div class="sticky">
          <Search />
          <Login />
        </div>
        <h4>my</h4>
        <router-link to="/">Home</router-link>
        <h4>settings</h4>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/notifications">Notifications</router-link>
        <router-link to="/icons">Icons</router-link>
        <router-link to="/table-list">TableList</router-link>
      </nav>
      <a
        href="#"
        id="sidenav-close"
        title="Close Menu"
        aria-label="Close Menu"
        onclick="window.history.back()"
      ></a>
    </aside>
    <main id="content">
      <Header />
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<script>
import Login from "@/layout/LoginForm.vue";
import Search from "@/layout/Search.vue";
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
export default {
  components: {
    Search,
    Header,
    Footer,
    Login
  },
  methods: {}
};
</script>
<style></style>
