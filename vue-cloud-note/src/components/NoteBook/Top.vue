/* eslint-disable */
<template>
	<div id="top" class="r-n-sb-c">
    <div id="top-left" class="r-n-c-c">
      <img src="../../../static/images/cloud-note.png" alt="" height="20" width="20">
      <p>Simple Cloud Note</p>
    </div>
    <div id="top-center">{{main_title}}</div>
    <div id="top-right" class="r-n-c-c">
      <img id="user-img" src="../../../static/images/user.jpg" alt="" height="37" width="37">
      <div id="username">简单点</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Top',
    data(){
      return{
        // main_title:this.GLOBAL.main_title
      }
    },
    computed:{
      main_title () {
        return this.$store.state.main_title
      }
    },
    watch:{

    },
    created:function () {
      // console.log(this.GLOBAL);
    }
  }
</script>

<style scoped>
  #top{
    height: 60px;
    width:100%;
    font-size: 18px;
    background: #f9f9f9;
    border-bottom: solid 1px rgb(65,184,131);
  }
  #top-left{
    height: 37px;
    line-height: 60px;
    width: 200px;
    font-size: 16px;
    font-weight: 700;
    background: #ffffff;
    border-radius: 10px;
    margin-left: 10px;
    cursor: pointer;
    border: solid 1px #f1f1f1;
  }
  #top-left:hover,
  #top-center:hover,
  #username:hover{
    border: solid 1px rgb(65,184,131);
  }
  #top-left img{
    /*background: #42b983;*/
    padding: 3px;
    border-radius: 5px 5px 5px 0;
    border: solid 1px #41b883;
  }
  #top-left p{
    margin-left: 10px;
  }
  #top-center{
    height: 37px;
    line-height: 37px;
    padding: 0 20px 0 20px;
    background: #ffffff;
    border-radius: 10px;
    cursor: pointer;
    border: solid 1px #f1f1f1;
  }
  #top-right{
    height: 60px;
    /*width: 200px;*/
    line-height: 60px;
    padding: 0 30px 0 30px;
    background: #ffffff;
    cursor: pointer;
    border-left: solid 1px #41b883;
  }
  #user-img{
    border-radius: 50%;
    background: #41b883;
  }
  #username{
    height: 37px;
    line-height: 37px;
    margin-left: 10px;
    padding: 0 10px 0 10px;
    border-radius: 18px;
    font-size: 16px;
    letter-spacing: 2px;
    background: #fafafa;
    /*border: solid 1px #41b883;*/
    border: solid 1px rgba(65,184,131,0.1);
  }
</style>
