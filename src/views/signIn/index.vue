<template>
  <div class="sign">
    <div class="logo"><a href="/"><img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"
             alt="Logo"></a></div>
    <div class="main">

      <h4 class="title">
        <div class="normal-title">
          <!-- <a class="active"
             href="/sign_in">登录</a> -->
          <router-link class="active"
                       :to="{name:'signIn'}">登录</router-link>
          <b>·</b>
          <router-link id="js-sign-up-btn"
                       :to="{name:'signUp'}">注册</router-link>
        </div>
      </h4>
      <div class="js-sign-in-container">
        <form id="new_session"
              action="/sessions"
              accept-charset="UTF-8"
              method="post"><input name="utf8"
                 type="hidden"
                 value="✓"><input type="hidden"
                 name="authenticity_token"
                 value="naFpWjXZ880lbagYlAEhoBbwsMwt9KZ6tFWxJUcdjb6hjcNN/SJ6lNVhRGQIDTu4YJUzuHvyHwItuWosZgOWlA==">

          <!-- 正常登录登录名输入框 -->
          <div class="input-prepend restyle js-normal">
            <input placeholder="手机号或邮箱"
                   type="text"
                   name="session[email_or_mobile_number]"
                   id="session_email_or_mobile_number">
            <i class="iconfont ic-user"></i>
          </div>

          <!-- 海外登录登录名输入框 -->

          <div class="input-prepend">
            <input placeholder="密码"
                   type="password"
                   name="session[password]"
                   id="session_password">
            <i class="iconfont ic-password"></i>
          </div>
          <input value="false"
                 type="hidden"
                 name="session[oversea]"
                 id="session_oversea">
          <div>
            <input id="sign-in-form-captcha-challenge"
                   name="captcha[validation][challenge]"
                   autocomplete="off"
                   type="hidden">
            <input id="sign-in-form-captcha-gt"
                   name="captcha[validation][gt]"
                   autocomplete="off"
                   type="hidden">
            <input id="sign-in-form-captcha-validate"
                   name="captcha[validation][validate]"
                   autocomplete="off"
                   type="hidden">
            <input id="sign-in-form-captcha-seccode"
                   name="captcha[validation][seccode]"
                   autocomplete="off"
                   type="hidden">
          </div>
          <div class="remember-btn">
            <input type="checkbox"
                   value="true"
                   checked="checked"
                   name="session[remember_me]"
                   id="session_remember_me"><span>记住我</span>
          </div>
          <div class="forget-btn">
            <a class=""
               data-toggle="dropdown"
               href="">登录遇到问题?</a>
          </div>
          <button class="sign-in-button"
                  id="sign-in-form-submit-btn"
                  type="button">
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