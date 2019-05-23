<template>
  <div id="second-top" class="r-n-sb-c">
    <div>{{$store.state.secondColumnTitle}}</div>
    <img src="../../../../../static/images/add.png" alt="" width="25" height="25" @click="addNote" v-show="$store.state.noteAddIsShow">
  </div>
</template>

<script>
  export default {
    name: 'CenterTop',
    methods:{
      addNote(){
        this.$store.state.messageWindowUseType = 3;
        this.$store.state.isMessageWindowShow = true;
        this.$store.state.isInputShow = true;
        this.$store.state.isSelectShow = false;
        this.$store.state.messageWindowContent.title = "添加笔记";
        this.$store.state.messageWindowContent.content = "";
      }
    }
  }
</script>

<style scoped>

</style>
