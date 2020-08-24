<template>
  <div id="app" class="w-100 h-100 light-brown flex-column d-flex">
    <div class="h-25"></div>
    <b-img center v-bind="mainProps" :src="getLogoSrc()" rounded="circle" alt="Moodraw Logo"></b-img>
    <div style="height:80px;"></div>

    <div class="container px-5">
      <b-button squared class="mb-4 w-100 btn btn-brown shadow">登入帳號</b-button>
      <b-button squared class="mb-4 w-100 btn btn-brown shadow">註冊帳號</b-button>
    </div>
    <a href="./loginMain" class="d-block text-center mt-auto mb-4">訪客瀏覽</a>
  </div>
</template>


<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      mainProps: {
        center: true,
        // fluidGrow: true,
        // blank: true,
        // blankColor: '#bbb',
        width: 200,
        height: 200,
        class: "m-2",
        src: require("@/assets/images/logo.png"),
      },
    };
  },
  methods: {
    getLogoSrc() {
      return this.mainProps.src;
    },
  },
};
</script>

<style scoped>
.light-brown {
  background-color: #efebe9;
}
.btn-brown {
  background-color: #795548 !important;
  color: #ffffff !important;
}
.btn-brown:hover {
  background-color: #896052;
}
.btn-brown:focus,
.btn-brown:active,
.btn-brown.active {
  background-color: #392822;
}
.btn-brown.dropdown-toggle {
  background-color: #795548 !important;
}
.btn-brown.dropdown-toggle:hover,
.btn-brown.dropdown-toggle:focus {
  background-color: #896052 !important;
}
.btn-brown:not([disabled]):not(.disabled):active,
.btn-brown:not([disabled]):not(.disabled).active,
.show > .btn-brown.dropdown-toggle {
  background-color: #392822 !important;
}
</style>