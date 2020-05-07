<template>
  <div class="sign">
    <div class="logo">
      <a href="/">
        <img alt="Logo" src="../../assets/img/logo.png" />
      </a>
    </div>
    <div class="main">
      <h4 class="title">
        <div class="normal-title">
          <!-- <a class="active"
          href="/sign_in">登录</a>-->
          <router-link :to="{name:'signIn'}" class="active">登录</router-link>
          <b>·</b>
          <router-link :to="{name:'signUp'}" id="js-sign-up-btn">注册</router-link>
        </div>
      </h4>
      <div class="js-sign-in-container">
        <form accept-charset="UTF-8" action="/sessions" id="new_session" method="post">
          <input name="utf8" type="hidden" value="✓" />
          <input
            name="authenticity_token"
            type="hidden"
            value="naFpWjXZ880lbagYlAEhoBbwsMwt9KZ6tFWxJUcdjb6hjcNN/SJ6lNVhRGQIDTu4YJUzuHvyHwItuWosZgOWlA=="
          />

          <!-- 正常登录登录名输入框 -->
          <div class="input-prepend restyle js-normal">
            <input
              id="session_email_or_mobile_number"
              name="session[email_or_mobile_number]"
              placeholder="请输入账号"
              type="text"
            />
            <i class="iconfont ic-user"></i>
          </div>

          <!-- 海外登录登录名输入框 -->

          <div class="input-prepend">
            <input
              id="session_password"
              name="session[password]"
              placeholder="请输入账号"
              type="password"
            />
            <i class="iconfont ic-password"></i>
          </div>
          <input id="session_oversea" name="session[oversea]" type="hidden" value="false" />
          <div>
            <input
              autocomplete="off"
              id="sign-in-form-captcha-challenge"
              name="captcha[validation][challenge]"
              type="hidden"
            />
            <input
              autocomplete="off"
              id="sign-in-form-captcha-gt"
              name="captcha[validation][gt]"
              type="hidden"
            />
            <input
              autocomplete="off"
              id="sign-in-form-captcha-validate"
              name="captcha[validation][validate]"
              type="hidden"
            />
            <input
              autocomplete="off"
              id="sign-in-form-captcha-seccode"
              name="captcha[validation][seccode]"
              type="hidden"
            />
          </div>
          <div class="remember-btn">
            <input
              checked="checked"
              id="session_remember_me"
              name="session[remember_me]"
              type="checkbox"
              value="true"
            />
            <span>记住我</span>
          </div>
          <div class="forget-btn">
            <router-link :to="{name:'forgePsw'}" class="active">忘记密码?</router-link>
            <!-- <a class data-toggle="dropdown" href>忘记密码?</a> -->
          </div>
          <button class="sign-in-button" id="sign-in-form-submit-btn" type="button">
            <span id="sign-in-loading"></span>
            登录
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'signIn',
    components: {},
    data: () => {
      return {
        process: process.env.NODE_ENV
      }
    },
    created() {
      console.log('看到我你就输了')
    }
  }
</script>

<style lang="scss" scoped>
  @import 'index.scss';
</style>