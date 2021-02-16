<template>
  <header>
    <a
      href="#sidenav-open"
      id="sidenav-button"
      class="hamburger"
      title="Open Menu"
      aria-label="Open Menu"
    >
      <svg
        viewBox="0 0 50 40"
        role="presentation"
        focusable="false"
        aria-label="trigram for heaven symbol"
      >
        <line x1="0" x2="100%" y1="10%" y2="10%"></line>
        <line x1="0" x2="100%" y1="50%" y2="50%"></line>
        <line x1="0" x2="100%" y1="90%" y2="90%"></line>
      </svg>
    </a>
    <!-- <h1>Site Title</h1> -->
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
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
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-block-size: 3rem;
  -webkit-margin-after: 1rem;
  margin-block-end: 1rem;
  /* position: static; */
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
  stroke: #ff1492;
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
  stroke: #e2e2e2;
  stroke: var(--text);
  stroke-width: 7px;
  transition: stroke 0.25s ease;
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
</style>
