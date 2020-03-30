<template>
  <div class="sign">
    <div class="logo"><a href="/"><img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"
             alt="Logo"></a></div>
    <div class="main">

      <h4 class="title">
        <div class="normal-title">
          <router-link :to="{name:'signIn'}">登录</router-link>
          <b>·</b>
          <router-link class="active"
                       id="js-sign-up-btn"
                       :to="{name:'signUp'}">注册</router-link>
        </div>
      </h4>

      <div class="js-sign-up-container">
        <form class="new_user"
              id="new_user"
              action="/users/register"
              accept-charset="UTF-8"
              method="post"><input name="utf8"
                 type="hidden"
                 value="✓"><input type="hidden"
                 name="authenticity_token"
                 value="MKJ4VDV2DnIi4CtGTRQJLTGebrZ33l5sbxoQeZHzqhQMjtJD/Y2HK9LsxzrRGBM1R/vtwiHY5xT29stwsO2xPg==">
          <div class="input-prepend restyle">
            <input placeholder="你的昵称"
                   type="text"
                   value=""
                   name="user[nickname]"
                   id="user_nickname">
            <i class="iconfont ic-user"></i>
          </div>
          <div class="input-prepend restyle no-radius js-normal">
            <input type="hidden"
                   value="CN"
                   name="user[mobile_number_country_code]"
                   id="user_mobile_number_country_code">
            <input placeholder="手机号"
                   type="tel"
                   name="user[mobile_number]"
                   id="user_mobile_number">
            <i class="iconfont ic-phonenumber"></i>
          </div>
          <input type="hidden"
                 name="oversea"
                 id="oversea"
                 value="false">
          <input type="hidden"
                 name="force_user_nonexist"
                 id="force_user_nonexist"
                 value="true">
          <div class="input-prepend restyle no-radius security-up-code js-security-number hide">
            <input type="text"
                   name="sms_code"
                   id="sms_code"
                   placeholder="手机验证码">
            <i class="iconfont ic-verify"></i>
            <a tabindex="-1"
               class="btn-up-resend js-send-code-button disable"
               href="javascript:void(0);"
               id="send_code">发送验证码</a>
            <div>
              <div class="captcha"><input name="captcha[validation][challenge]"
                       autocomplete="off"
                       type="hidden"
                       value="a5199038be420f785c05b045566cd687"> <input name="captcha[validation][gt]"
                       autocomplete="off"
                       type="hidden"
                       value="ec47641997d5292180681a247db3c92e"> <input name="captcha[validation][validate]"
                       autocomplete="off"
                       type="hidden"
                       value=""> <input name="captcha[validation][seccode]"
                       autocomplete="off"
                       type="hidden"
                       value=""> <input name="captcha[id]"
                       autocomplete="off"
                       type="hidden"
                       value="">
                <div id="geetest-area"
                     class="geetest"></div>
              </div>
            </div>
          </div>
          <input type="hidden"
                 name="security_number"
                 id="security_number">
          <div class="input-prepend">
            <input placeholder="设置密码"
                   type="password"
                   name="user[password]"
                   id="user_password">
            <i class="iconfont ic-password"></i>
          </div>
          <input type="submit"
                 name="commit"
                 value="注册"
                 class="sign-up-button"
                 id="sign_up_btn"
                 data-disable-with="注册">
          <p class="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书<br> <a target="_blank"
               href="http://www.jianshu.com/p/c44d171298ce">用户协议</a> 和 <a target="_blank"
               href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。</p>
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