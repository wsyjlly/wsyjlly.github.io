<template>
  <div id="third-title" class="r-n-sb-c">
    <input id="title-name" type="text" placeholder="请输入笔记标题"
           v-model="this.$store.state.currentNote.name">
    <div id="save" @click="saveEditor">保存</div>
  </div>
</template>

<script>
  export default {
    name: 'EditorTitle',
    computed:{
      /*title(){
        return this.$store.state.currentNote.name;
      }*/
    },
    methods:{
      saveEditor(){
        let currentNote = this.$store.state.currentNote;
        let editor = this.$store.state.editor.txt.html();
        this.$store.state.note_list.forEach(function (e) {
          if (e ===currentNote){
            e.content = editor;
            console.log(e.content);
            alert("保存成功！")
          }
        })
      },
    }
  }
</script>

<style scoped>
  #third-title{
    width: 100%;
    height: 60px;
    font-size: 24px;
    background: rgba(219,219,219,0.2);
    border-bottom: solid 1px rgba(65,184,131,0.3);
  }
  #title-name{
    border: none;
    font-size: 24px;
    font-weight: 700;
    padding:0 30px 0 10px;
    /*background: #bbdff4;*/
    width: 100%;
    height: 50px;
    border-bottom: solid 1px rgba(65,184,131,0.3);
    /*border-right: solid 1px rgba(65,184,131,0.3);*/
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    outline: none;
  }
  #save{
    width: 100px;
    height: 32px;
    line-height: 32px;
    font-size: 16px;
    background:  rgba(65,184,131,0.8);
    text-align: center;
    cursor: pointer;
    margin-left: -20px;
    margin-right: 20px;
    border-radius: 20px;
  }
</style>
