<template>
  <div id="app" style="display:flex;flex-direction: column;" class="w-100 h-100">
    <div style="flex:1 1 auto;">
      <!-- 上面的控白 -->
      <b-img style="width: 100%;" center v-bind="mainProps" :src="getLoginTop()" alt="Moodraw Logo"></b-img>
      <div class="container p-4">
        <b-form-input
          style="margin: auto;"
          id="txt-mail"
          type="email"
          class="my-3"
          required
          placeholder="YOUR EMAIL"
        ></b-form-input>
        <b-form-input
          style="margin: auto;"
          id="txt-pwd"
          type="password"
          class="my-3"
          required
          placeholder="PASSWORD"
        ></b-form-input>

        <div style="position: relative;height:50px;">
          <div class="login-method-separator"></div>
          <b-button variant="outline-secondary" class="text-white btn-login">Login</b-button>
        </div>

        <b-row class="text-center">
          <b-col>
            <b-button style="float:right;" class="btn-brand">
              <font-awesome-icon :icon="['fab', 'line']" class="brand-icon mx-1" />
            </b-button>
          </b-col>
          <b-col>
            <b-button class="btn-brand">
              <font-awesome-icon :icon="['fab', 'google-plus-square']" class="brand-icon mx-1" />
            </b-button>
          </b-col>
          <b-col>
            <b-button style="float:left;" class="btn-brand">
              <font-awesome-icon :icon="['fab', 'facebook-square']" class="brand-icon mx-1" />
            </b-button>
          </b-col>
        </b-row>

        <div class="text-center mt-4 txt-sign-up txt-orange">SIGN UP</div>

        <div class="text-center my-2 txt-guest">Browse as Guest</div>
      </div>

      <div class="m-3"></div>

      <div class="row justify-content-md-center">
        <div class="mx-auto">
          By continuing you agree to our
          <a href="./loginPolicy" class="txt-orange">Terms</a>
          &
          <a href="./loginPolicy" class="txt-orange">Privicy Policy</a>
        </div>
      </div>
    </div>
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
        src: require("@/assets/images/login-top.png"),
      },
    };
  },
  methods: {
    getLoginTop() {
      return this.mainProps.src;
    },
  },
};
</script>

<style scoped>
#app {
  font-size: 12px;
}
.brand-icon {
  font-size: 20px;
  vertical-align: text-top;
}

.login-method-separator {
  position: absolute;
  top: 20px;
  text-align: center;
  height: 2px;
  border: 1px solid #6d6d6d;
  position: absolute;
  width: 100%;
}

input {
  background: #c6c6c6;
  color: #a5a4a4;
  border-radius: 30px;
  text-align: center;
  font-weight: bold;
  height: 30px;
  width: 60%;
}

.txt-orange {
  color: #fc5130;
}

.btn-login {
  width: 120px;
  position: absolute;
  border-radius: 30px;
  background: #fc5130;
  border: 0;
  transform: translate(-50%, 0);
  left: 50%;
  font-weight: bold;
}

.btn-brand {
  background: #006989;
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 50%;
}

.txt-sign-up {
  font-size: 1.3em;
  font-weight: bold;
}

.txt-guest {
  color: #6d6d6d;
  font-weight: bold;
}
</style>
