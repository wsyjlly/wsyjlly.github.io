<template>
  <div>
    <Top :style="{width:main_width+'px'}"/>
    <Main :main_height="main_height" :main_width="main_width" :style="{width:main_width+'px',height:main_height-62+'px'}"/>
    <AlertFull />
  </div>
</template>

<script>
  import Top from "./NoteBook/Top";
  import Main from "./NoteBook/Main";
  import AlertFull from "./NoteBook/AlertFull";
  export default {
    name: 'NoteBookModule',
    data(){
      return{
        main_height:window.innerHeight,
        main_width:window.innerWidth,
      }
    },
    components:{
      Top,
      Main,
      AlertFull
    },
    created:function(){
      this.setWindowSize();
      window.onresize = ()=>{
        this.setWindowSize();
      }
    },
    /*updated:function(){
      this.setWindowSize();
    },
    mounted:function(){
      this.setWindowSize();
    },*/
    methods:{
      setWindowSize () {
        let that = this;
        that.main_height = window.innerHeight<=500? 500:window.innerHeight;
        that.main_width = window.innerWidth<=1000? 1000:window.innerWidth;
      },
      getScrollWidth(){
        let element = document.getElementsByTagName("body");
        let outer = document.createElement("div");
        let inner = document.createElement("div");
        let width;
        outer.appendChild(inner);
        element[0].appendChild(outer);
        outer.style.width = "100px";
        outer.style.height = "100px";
        outer.style.overflow = "auto";
        inner.style.width = "200px";
        inner.style.height = "100px";
        width = outer.offsetWidth - outer.clientWidth
        element[0].removeChild(outer);
        return width;
      }
    }
  }
</script>

<style>
  /*html{*/
  /*overflow:hidden;*/
  /*}*/
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*overflow: auto;*/
  }
</style>
