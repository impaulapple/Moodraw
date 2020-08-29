
<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
// import Header from "./components/Header";
// import Main from "./components/Main";

export default {
  name: "App",
  // components: { Header, Main },
};
</script>

<style>
#app {
  overflow: hidden;
  width: 100vw;
  height: 100%;
  font-size: 12px;
}
.p-color-dark {
  background: #357449;
}

.p-color {
  background: #63a375;
}

.p-main-1 {
  background: #e1e2e1;
}

.p-main-0 {
  background: #f5f5f6;
}

.s-color {
  background: #8d6e63;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>