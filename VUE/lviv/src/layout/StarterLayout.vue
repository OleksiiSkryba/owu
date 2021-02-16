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
        <router-link to="/about">About</router-link>
        <h4>settings</h4>
        <router-link to="/dashboard">Dashboard</router-link>
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
