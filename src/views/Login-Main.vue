<template>
  <div id="app" class="w-100 h-100">
    <Header></Header>
    <div style="display:flex;flex-direction: column;" class="h-100">
      <!-- 上面的控白 -->
      <div class="m-4"></div>
      <div class="container p-4">
        <!-- 三種登入方式 -->

        <b-button squared variant="outline-success" class="mb-2 shadow bg-whit">
          <font-awesome-icon :icon="['fab', 'line']" class="brand-icon mx-1" />使用 LINE 登入
        </b-button>
        <b-button squared variant="outline-primary" class="mb-2 shadow bg-whit">
          <font-awesome-icon :icon="['fab', 'facebook-square']" class="brand-icon mx-1" />使用 Facebook 登入
        </b-button>
        <b-button squared variant="outline-secondary" class="mb-2 shadow bg-whit">
          <font-awesome-icon :icon="['fab', 'google-plus-square']" class="brand-icon mx-1" />使用 Google 登入
        </b-button>
        <!-- 間隔 -->
        <div class="login-method-separator">或</div>
        <hr class="mx-4" />
        <!-- 帳號 -->
        <b-input-group squared class="mb-2 shadow bg-whit">
          <b-input-group-prepend is-text>
            <font-awesome-icon icon="envelope" />
          </b-input-group-prepend>
          <b-form-input></b-form-input>
        </b-input-group>
        <!-- 密碼 -->
        <b-input-group squared class="mb-2 shadow bg-whit">
          <b-input-group-prepend is-text>
            <font-awesome-icon icon="lock" />
          </b-input-group-prepend>
          <b-form-input></b-form-input>
        </b-input-group>

        <div class="row justify-content-md-center">
          <b-button squared variant="success" class="mx-auto mb-2 shadow bg-whit w-50">登入</b-button>
        </div>

        <!-- 忘記密碼、註冊帳號 -->
        <div class="row justify-content-md-center">
          <div class="mx-auto">
            <a href="./about" class="px-1">忘記密碼?</a>
            <a href="./" class="px-1">註冊帳號</a>
          </div>
        </div>
        <!-- 下面空白 -->
        <div class="m-3"></div>

        <div class="row justify-content-md-center">
          <div class="mx-auto">
            註冊即代表同意遵守
            <a href="./loginFirst">使用者條款</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Header from "../components/Header";

export default {
  name: "App",
  components: { Header },
};
</script>

<style>
#app {
  font-size: 12px;
}
.container button {
  width: 100%;
  font-size: 14px;
  font-weight: bold;
}

.brand-icon {
  font-size: 20px;
  vertical-align: text-top;
}

.login-method-separator {
  text-align: center;

  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
