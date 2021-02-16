<template>
  <aside id="sidenav-open">
    <nav>
      <div>
        <span href="#" class="burger">
          <svg
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
        </span>
        <span href="#" class="burger">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0726 10.4326C12.4801 10.4326 10.4 12.5451 10.4 15.1053C10.4 17.6978 12.5125 19.7779 15.0726 19.7779C17.6651 19.7779 19.7453 17.6654 19.7453 15.1053C19.744 12.544 17.664 10.4326 15.0726 10.4326Z"
              fill="white"
            ></path>
            <path
              d="M16.0327 0.447479C7.42401 0.447479 0.447693 7.4238 0.447693 16.0324C0.447693 24.6398 7.42401 31.6161 16.0314 31.6161C24.64 31.6161 31.6163 24.6398 31.6163 16.0324C31.6163 7.4238 24.64 0.447479 16.0327 0.447479ZM23.6163 24.0324C23.3926 24.2562 23.0401 24.385 22.6563 24.385C22.2726 24.385 21.9526 24.2575 21.6963 24.0324L18.7526 21.0887L18.4651 21.2487C17.4088 21.825 16.2576 22.145 15.0724 22.145C11.1998 22.145 8.06509 19.0087 8.06509 15.1376C8.06509 11.265 11.2013 8.13023 15.0724 8.13023C18.9451 8.13023 22.0798 11.2665 22.0798 15.1376C22.0798 16.5138 21.6961 17.8251 20.9273 18.9776L20.7348 19.2976L23.6473 22.2101C23.8711 22.4664 24.0311 22.7864 24.0311 23.1376C23.9998 23.4563 23.8723 23.7763 23.616 24.0326L23.6163 24.0324Z"
              fill="white"
            ></path>
          </svg>
        </span>
      </div>
      <h4>
        My
      </h4>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <a href="#">Dashboard</a>
      <a href="#">Profile</a>
      <a href="#">Preferences</a>
      <a href="#">Archive</a>

      <h4>Settings</h4>
      <a href="#">Accessibility</a>
      <a href="#">Theme</a>
      <a href="#">Admin</a>
    </nav>

    <a
      href="#"
      id="sidenav-close"
      title="Close Menu"
      aria-label="Close Menu"
      onclick="window.history.back()"
    ></a>
  </aside>
</template>

<script>
export default {
  name: "Sidenav",
  methods: {
//        e = document.querySelector("#sidenav-open"),
// t = document.querySelector("#sidenav-close"),
// o = document.querySelector("#sidenav-button")
// e.addEventListener("transitionend",
// (function(e){
//     "transform"===e.propertyName&&(
//         (e="#sidenav-open"===document.location.hash)?t.focus():o.focus(),
//     e||history.replaceState(history.state,""))}
//     )),
//     e.addEventListener("keyup",(function(e){
//         "Escape"===e.code&&(
//             window.history.length?window.history.back():document.location.hash="")
//     }))
// //# sourceMappingURL=bundle.js.map
  }
};
</script>

<style>
#sidenav-open {
  --easeOutExpo: cubic-bezier(0.16, 1, 0.3, 1);
  --duration: 0.6s;
  display: grid;
  grid-template-columns: [nav] 2fr [escape] 1fr;
}
@media (max-width: 540px) {
  #sidenav-open {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    overflow: hidden auto;
    -ms-scroll-chaining: none;
    overscroll-behavior: contain;

    visibility: hidden;
    transform: translateX(-110vw);
    will-change: transform;
    transition: transform var(--duration) var(--easeOutExpo),
      visibility 0s linear var(--duration);
  }
  #sidenav-open:target {
    visibility: visible;
    transform: translateX(0);
    transition: transform var(--duration) var(--easeOutExpo);
  }
}
@media (prefers-reduced-motion: reduce) {
  #sidenav-open {
    --duration: 1ms;
  }
}
#sidenav-button,
#sidenav-close {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
}
@media (min-width: 540px) {
  #sidenav-button,
  #sidenav-close {
    display: none;
  }
}
nav {
  display: inline-flex;
  flex-direction: column;
  padding: 2rem;
  font-size: 1.25rem;
  color: #cccaca;
  color: var(--text);
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
nav > h4 {
  text-transform: uppercase;
}
nav > h4:not(:first-child) {
  -webkit-margin-before: 2rem;
  margin-block-start: 2rem;
}
nav a {
  text-decoration: none;
  line-height: 1.25;
}
aside > a {
  outline-offset: -1px;
  outline: 1px solid transparent;
}
aside > a:focus {
  outline-color: #ff1492;
  outline-color: hsl(var(--brandHSL));
  transition: outline-color 0.25s ease;
}
article {
  display: inline-grid;
  gap: 2ch;
  background: #303030;
  background: var(--surface2);
  padding: 2ch;
  border-radius: 1ch;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
article > * {
  margin: 0;
}
article > p + h1,
article > p + h2,
article > p + h3,
article > p + h4,
article > p + h5,
article > p + h6 {
  margin-top: 2ch;
}
:root {
  --surface: #1b1b1b;
  --surface2: #303030;
  --text: #e2e2e2;
  --text2: #ababab;
  --brandHSL: 328 100% 54%;
}
@media (prefers-color-scheme: light) {
  :root {
    --surface: #e2e2e2;
    --surface2: #868686;
    --text: #303030;
    --text2: #5e5e5e;
  }
}

figure,
h1,
h2,
h3,
h4 {
  margin: 0;
  color: #e2e2e2;
  color: var(--text);
}
h2 {
  font-size: 2.5rem;
}
h3 {
  font-size: 1.5rem;
  max-inline-size: 30ch;
}
p {
  line-height: 1.5;
  color: #ababab;
  color: var(--text2);
  max-inline-size: 50ch;
}
a {
  color: #ff7ac1;
  outline-color: #ff1492;
  outline-color: hsl(var(--brandHSL));
  outline-offset: 5px;
}
a:hover {
  color: #ff1492;
  color: hsl(var(--brandHSL));
}
.hamburger {
  --size: 4rem;
  display: flex;
  align-content: center;
  justify-content: center;
  place-content: center;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid transparent;
  -webkit-margin-start: -1rem;
  margin-inline-start: -1rem;
  block-size: var(--size);
  inline-size: var(--size);
  outline: none;
  transition: border-color 0.25s ease, background-color 0.25s ease;
  cursor: pointer;
}
.hamburger:hover {
  border-color: rgba(255, 20, 146, 0.5);
  border-color: hsl(var(--brandHSL) / 50%);
}
.hamburger:focus {
  border-color: rgba(255, 20, 146, 0.12);
  border-color: hsl(var(--brandHSL) / 12%);
  background: rgba(255, 20, 146, 0.1);
  background: hsl(var(--brandHSL) / 10%);
}
.hamburger:hover svg > line {
  stroke: #cccccc;
  stroke: hsl(var(--brandHSL));
}
.hamburger:active {
  background: rgba(255, 20, 146, 0.2);
  background: hsl(var(--brandHSL) / 20%);
}
.hamburger > svg {
  width: 100%;
}
.hamburger > svg > line {
  stroke: #cccccc;
  stroke: var(--text);
  stroke-width: 7px;
  transition: stroke 0.25s ease;
}
.burger {
  padding: 0.5rem;
  box-sizing: border-box;
}
.burger > svg {
  -webkit-filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3));
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3));
}
.burger:hover {
  cursor: pointer;
}
.burger:hover svg {
  fill-opacity: 50%;
  stroke: #cccccc;
}
</style>
