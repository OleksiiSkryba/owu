<template>
  <label class="login">
    <svg
      class="icon"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 1.7C11.5335 1.7 6.48243 4.61655 3.74917 9.35C1.0172 14.0835 1.0172 19.9165 3.74917 24.65C6.48246 29.3835 11.5335 32.3 17 32.3C20.4918 32.3133 23.8809 31.1193 26.5917 28.9199C29.9014 26.2557 31.9559 22.3365 32.2602 18.0984C32.5657 13.8603 31.0954 9.68748 28.2003 6.57682C25.3063 3.46636 21.249 1.69986 17.0003 1.69986L17 1.7ZM27.9956 24.411C27.2651 22.1412 25.014 20.2514 21.9925 19.2447C20.7069 20.6405 18.8967 21.4361 17 21.4361C15.1021 21.4347 13.292 20.6405 12.0074 19.2447C8.98463 20.2514 6.73335 22.1413 6.00439 24.411C4.20212 21.7388 3.43579 18.5008 3.8475 15.3041C4.25921 12.1073 5.82242 9.17082 8.24234 7.04174C10.6622 4.91276 13.7752 3.7387 16.9987 3.7387C20.2221 3.7387 23.3353 4.91276 25.7564 7.04041C28.1763 9.16939 29.7395 12.1057 30.1513 15.3027C30.563 18.4995 29.7966 21.7376 27.9957 24.411L27.9956 24.411Z"
        fill="white"
      ></path>
      <path
        d="M22.5049 13.6092C22.5049 16.9919 20.0399 19.736 17 19.736C13.9586 19.736 11.4937 16.9921 11.4937 13.6092C11.4937 10.2251 13.9587 7.48236 17 7.48236C20.0401 7.48236 22.5049 10.2249 22.5049 13.6092Z"
        fill="white"
      ></path>
    </svg>
    <input type="checkbox" class="checkbox" />

    <div class="tabs">
      <div class="tab">
        <input type="radio" class="rd" id="rd1" name="rd" checked />
        <label class="tab-label" for="rd1">Login</label>
        <div class="tab-content">
          <form @submit.prevent="login">
            <input
              type="email"
              placeholder="Email address..."
              v-model="email"
            />
            <br />
            <input
              type="password"
              placeholder="password..."
              v-model="password"
            />
            <br />
            <button type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <div class="tab">
        <input type="radio" class="rd" id="rd2" name="rd" />
        <label class="tab-label" for="rd2">Register</label>
        <div class="tab-content">
          <form @submit.prevent="register">
            <input
              type="email"
              placeholder="Email address..."
              v-model="email"
            />
            <br />
            <input
              type="password"
              placeholder="password..."
              v-model="password"
            />
            <br />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <div class="tab">
        <input type="radio" class="rd" id="rd3" name="rd" />
        <label for="rd3" class="tab-close">
          <button @click="logout">Logout</button>
        </label>
      </div>
    </div>
  </label>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Loginform",
  components: {},
  data() {
    return { email: "", password: "" };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully logged in");
          this.$router.push("/dashboard");
        })
        .catch(error => {
          alert(error.message);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully logged out");
          this.$router.push("/");
        })
        .catch(error => {
          alert(error.message);
          this.$router.push("/");
        });
      console.log("Logout");
    }
  }
};
</script>

<style scoped>
/* h2 {
  margin: 0 0 0.5em;
  font-weight: normal;
} */
input.rd {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

/* Accordion styles */
.tabs {
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
  display: none;
  width: 218px;
}

.tab {
  width: 100%;
  color: white;
  overflow: hidden;
}
.tab-label {
  display: flex;
  justify-content: space-between;
  padding: 0.1em 1em;
  background: #2c3e50;
  /* font-weight: bold; */
  cursor: pointer;
  /* Icon */
}
.tab-label:hover {
  background: #1a252f;
}
.tab-label::after {
  content: "❯";
  width: 1em;
  height: 1em;
  text-align: center;
  transition: all 0.35s;
}
.tab-content {
  max-height: 0;
  padding: 0 1em;
  color: #2c3e50;
  /* background: white; */
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  transition: all 0.35s;
}
.tab-close {
  display: flex;
  justify-content: flex-end;
  padding: 0.2em 1em;
  font-size: 1em;
  background: #2c3e50;
  cursor: pointer;
}
.tab-close:hover {
  background: #1a252f;
}
.checkbox {
  display: none;
}

.checkbox:checked ~ .tabs {
  display: block;
}

input:checked + .tab-label {
  background: #1a252f;
}
input:checked + .tab-label::after {
  transform: rotate(90deg);
}
input:checked ~ .tab-content {
  max-height: 100vh;
  padding: 1em;
}
</style>
