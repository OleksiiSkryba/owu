<template>
  <Sidenav />
  <main>
    <Header />
    <!-- <div id="nav"> 
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
    <router-view />
    <h1>aaaaaaaaaa</h1>
  </main>
</template>

<script>
import Sidenav from "@/components/Sidenav.vue";
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Sidenav,
    Header
  }
};
</script>

<style>
:root {
  --surface: #1b1b1b;
  --surface2: #303030;
  --text: #e2e2e2;
  --text2: #ababab;
  --brandHSL: 0 0% 50%;
}
@media (prefers-color-scheme: light) {
  :root {
    --surface: #e2e2e2;
    --surface2: #fffffe;
    --text: #303030;
    --text2: #5e5e5e;
  }
}
@media (min-width: 540px) {
  nav {
    -webkit-padding-before: 4.5rem;
    padding-block-start: 4.5rem;
  }
}
@media (max-width: 540px) {
  nav {
    background-color: #303030;
    background-color: var(--surface2);
    -webkit-border-end: 1px var(--surface1);
    border-inline-end: 1px var(--surface1);
    box-shadow: 5px 0 40px rgba(0, 0, 0, 0.45);
    font-size: 1.5rem;
  }
}
#app {
  display: grid;
  grid: [stack] 1fr / -webkit-min-content [stack] 1fr;
  grid: [stack] 1fr / min-content [stack] 1fr;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-block-size: 100vh;
  font-family: BLOKK, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
    Cantarell, Noto Sans, sans-serif;
  padding: 0;
  background: var(--surface);
  margin: 0;
  color: var(--text);
}

@media (max-width: 540px) {
  #app > aside,
  #app > main {
    grid-area: stack;
  }
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

main {
  padding: 0.5rem 1.5rem;
}

main > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-block-size: 3rem;
  -webkit-margin-after: 1rem;
  margin-block-end: 1rem;
}
</style>
