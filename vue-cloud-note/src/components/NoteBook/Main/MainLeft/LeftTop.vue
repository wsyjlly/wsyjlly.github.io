<template>
  <div id="first-top" class="r-n-sb-c">
    <div>我的笔记本</div>
    <img src="../../../../../static/images/add.png" alt="" width="25" height="25" @click="addNoteBook">
  </div>
</template>

<script>
  export default {
    name: 'LeftTop',
    methods:{
      addNoteBook(){
        this.$store.state.messageWindowUseType = 0;
        this.$store.state.isMessageWindowShow = true;
        this.$store.state.isInputShow = true;
        this.$store.state.isSelectShow = false;
        this.$store.state.messageWindowContent.title = "添加笔记本";
        this.$store.state.messageWindowContent.content = "";
      }
    }
  }
</script>

<style scoped>

</style>
