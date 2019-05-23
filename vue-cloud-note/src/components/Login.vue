<template>
<div>
  <div id="login-page" class="c-n-c-c">
    <div id="title">Simple云笔记</div>
    <div id="login" class="r-n-c-c">
      <div id="login-content" class="c-n-fs-c">
        <input type="text" placeholder="请输入账号"
               v-model="$store.state.name">
        <input type="text" placeholder="请输入密码"
               v-model="$store.state.password">
        <div id="login-result" class="r-n-sa-c">
          <router-link  tag="a" to="/" @click.native="login">登录</router-link>
          <a href="javascript:void(0);">注册</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Login',
    methods:{
      login(){
        this.to = "/login";
        this.$router.replace('/login')
        console.log(this.$store.state.name);
        console.log(this.$store.state.password);
        if (this.$store.state.name===""){
          this.$router.replace('/notebook')
        }
      }
    }
  }
</script>

<style scoped>

  #login-page{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left: 0;
    background: #fafafa;
    /*background: rgba(66,185,131,0.3);*/
    /*background: #42b983;*/
    z-index: 10001;
    /*display: none;*/
  }
  #title{
    width: 360px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 24px;
    /*background: #000;*/
  }
  #login{
    width: 360px;
    height: 240px;
    position: relative;
    /*background: #EEEEEE;*/
    background: rgb(65,184,131);
    z-index: 100001;
    border-radius: 3px;
  }
  #login-content{
    width: 300px;
    height: 180px;
    background: #f5f5f5;
    border-radius: 5px;
    border: solid 1px rgba(65,184,131,0.5);
  }
  #login-content>input{
    width: 240px;
    height: 30px;
    /*background: #eedcda;*/
    border: solid 1px #DBDBDB;
    font-size: 18px;
    margin: 20px 0 0 0;
    padding: 0 10px 0 10px;
    outline: none;
    /*display: none;*/
  }
  #login-result{
    width: 298px;
    height: 40px;
    margin-top: 20px;
    font-size: 18px;
  }
  #login-result a{
    text-decoration: none;
    width: 100px;
    height: 30px;
    color: #252A2F;
    line-height: 30px;
    background: #DBDBDB;
    text-align: center;
    border-radius: 10px;
    /*border: solid 1px rgba(65,184,131,0.5);*/
  }
</style>
