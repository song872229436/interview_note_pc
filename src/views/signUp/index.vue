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
          <router-link :to="{name:'signIn'}">登录</router-link>
          <b>·</b>
          <router-link :to="{name:'signUp'}" class="active" id="js-sign-up-btn">注册</router-link>
        </div>
      </h4>

      <div class="js-sign-up-container">
        <form
          accept-charset="UTF-8"
          action="/users/register"
          class="new_user"
          id="new_user"
          method="post"
        >
          <input name="utf8" type="hidden" value="✓" />
          <input
            name="authenticity_token"
            type="hidden"
            value="MKJ4VDV2DnIi4CtGTRQJLTGebrZ33l5sbxoQeZHzqhQMjtJD/Y2HK9LsxzrRGBM1R/vtwiHY5xT29stwsO2xPg=="
          />
          <div class="input-prepend restyle">
            <input id="user_nickname" name="user[nickname]" placeholder="你的昵称" type="text" value />
            <i class="iconfont ic-user"></i>
          </div>
          <!-- <div class="input-prepend restyle no-radius js-normal">
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
          </div>-->
          <input id="security_number" name="security_number" type="hidden" />
          <div class="input-prepend">
            <input id="user_password" name="user[password]" placeholder="设置密码" type="password" />
            <i class="iconfont ic-password"></i>
          </div>
          <input
            class="sign-up-button"
            data-disable-with="注册"
            id="sign_up_btn"
            name="commit"
            type="submit"
            value="注册"
          />
          <p class="sign-up-msg">
            点击 “注册” 即表示您同意并愿意遵守面试
            <br />
            <a href="http://www.jianshu.com/p/c44d171298ce" target="_blank">用户协议</a> 和
            <a href="http://www.jianshu.com/p/2ov8x3" target="_blank">隐私政策</a> 。
          </p>
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