<template>
  <div class="sign">
    <div class="logo">
      <a href="/">
        <img alt="Logo" src="../../assets/img/logo.png" />
      </a>
    </div>
    <div class="main">
      <h4 class="reset-title">用邮箱重置密码</h4>
      <div class="js-sign-in-container">
        <form accept-charset="UTF-8" action="/passwords/reset_password_via_email" method="post">
          <input name="utf8" type="hidden" value="✓" />
          <input
            name="authenticity_token"
            type="hidden"
            value="1CB4GMUapsHx/1FXa+cbfPmivM9M0PWDmsDN3ihAaQaMFI3yFCLSVVAv4FIYtnsrdeaTSSSh/7XbsT1IFxYQ4Q=="
          />
          <div class="input-prepend restyle no-radius">
            <input id="email" name="email" placeholder="请输入注册或绑定的邮箱" type="text" />
            <i class="iconfont ic-email"></i>
          </div>
          <div class="input-prepend restyle no-radius security-up-code js-security-number">
            <input id="email_code" name="email_code" placeholder="邮箱验证码" type="text" />
            <i class="iconfont ic-verify"></i>
            <a
              :class="{'disable':disable}"
              class="btn-in-resend js-send-code-button"
              href="javascript:void(0);"
            >发送验证码</a>
            <div>
              <div class="captcha">
                <input
                  autocomplete="off"
                  name="captcha[validation][challenge]"
                  type="hidden"
                  value="a3658fc5d44b43c6a234ef9d9fe1ca22"
                />
                <input
                  autocomplete="off"
                  name="captcha[validation][gt]"
                  type="hidden"
                  value="ec47641997d5292180681a247db3c92e"
                />
                <input autocomplete="off" name="captcha[validation][validate]" type="hidden" value />
                <input autocomplete="off" name="captcha[validation][seccode]" type="hidden" value />
                <input autocomplete="off" name="captcha[id]" type="hidden" value />
                <div class="geetest" id="geetest-area"></div>
              </div>
            </div>
          </div>
          <div class="input-prepend restyle no-radius">
            <input id="password" name="password" placeholder="请输入新密码" type="password" />
            <i class="iconfont ic-password"></i>
          </div>
          <div class="input-prepend">
            <input
              id="password_confirmation"
              name="password_confirmation"
              placeholder="请再次输入新密码"
              type="password"
            />
            <i class="iconfont ic-password"></i>
          </div>
          <input
            class="sign-in-button"
            data-disable-with="重置密码"
            name="commit"
            type="submit"
            value="重置密码"
          />
        </form>
        <router-link :to="{name:'signUp'}" class="return">
          <i class="iconfont ic-back"></i>返回登录注册
        </router-link>
        <!-- <router-view class="return"
        :to="{name:'signIn'}"><i class="iconfont ic-back"></i> 返回登录注册<router-view>-->
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
        process: process.env.NODE_ENV,
        disable: true
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