<template>
  <div id="alert-full" class="r-n-c-c" v-show="this.$store.state.isMessageWindowShow">
    <div id="alert" class="r-n-c-c">
      <div id="alert-content" class="c-n-fs-c">
        <div id="alert-title" class="r-n-c-c">{{$store.state.messageWindowContent.title}}</div><hr/>
        <p type="text" placeholder="笔记本名称"
           v-show="!$store.state.isInputShow&&!$store.state.isSelectShow">{{$store.state.messageWindowContent.content}}</p>
        <input type="text" placeholder="请输入名称"
               v-model="$store.state.messageWindowContent.content"
               v-show="$store.state.isInputShow">
        <select name="" id=""
                v-model="$store.state.messageWindowContent.content"
                v-show="$store.state.isSelectShow">
          <option value="请选择目标笔记本" selected="selected" disabled>请选择目标笔记本</option>
          <option :value="item.id" v-for="item in folder_list" :key="item.id">{{item.name}}</option>
        </select>
        <div id="alert-result" class="r-n-sa-c">
          <a href="javascript:;"

             @click="ensureMessageWindow">确定</a>
          <a href="javascript:void(0);"
             @click="closeMessageWindow">取消</a>
        </div>
      </div>
      <div id="close"
           @click="closeMessageWindow">
        <img src="../../../static/images/delete.png" alt="" width="30" height="30">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AlertFull',
    data(){
      return {
        folder_list:this.$store.state.folder_list
      }
    },
    computed:{
      noteId(){
        return this.$store.state.note_list.reduce((total,item)=> total = item.id>total? item.id:total,0)+1;
      }
    },
    methods:{
      closeMessageWindow(){
        this.$store.state.isMessageWindowShow = false;
        this.$store.state.messageWindowContent = {title:"",content:""};
      },
      ensureMessageWindow(){
        let store = this.$store.state;
        switch (store.messageWindowUseType) {
          /*
          * 点击确认按钮添加笔记本
          * */
          case 0:{
            let name = store.messageWindowContent.content;
            if (name==='') return;
            let newNoteBook = {
              id:store.folder_list.reduce((total,item)=> total = item.id>total? item.id:total,0)+1,
              name:name,
              isEdit:false
            }
            store.folder_list.push(newNoteBook);
            store.currentFolder = store.folder_list[store.folder_list.length-1];
            store.main_title = store.currentFolder.name;
            store.folder_note_list = [];
            store.currentNote = {};
            store.editor.txt.html("");

            store.folder_list.forEach((e1) => e1.isEdit=false);
            store.isMessageWindowShow = false;
            store.messageWindowContent = {title:"",content:""};
            break;
          }
          /*
          * 点击确认按钮修改笔记本
          * */
          case 1:{
            store.folder_list.forEach((folder) =>
              folder === store.currentFolder ?
              folder.name = store.messageWindowContent.content:{});
            store.folder_list.forEach((e1) => e1.isEdit=false);
            store.isMessageWindowShow = false;
            store.messageWindowContent = {title:"",content:""};
            break;
          }
          /*
          * 点击确认按钮删除笔记本
          * */
          case 2:{
            store.folder_list.forEach((folder,index,folder_list) =>
              folder === store.currentFolder ? folder_list.splice(index,1):{});
            store.note_list = store.note_list.filter((note) => note.nbId !== store.currentFolder.id );
            console.log(store.note_list);
            /*
            * 删除文件夹后更新当前文件夹为第一个文件夹和当前文件为第一个文件夹的第一个文件
            * */
            if (store.folder_list.length===0){
              store.folder_note_list = [];
              store.currentFolder = {};
              store.currentNote = {};
              store.main_title = "NOTE BOOK";
              store.editor.txt.html("");
              store.isMessageWindowShow = false;
              store.messageWindowContent = {title:"",content:""};
              store.main_title = store.currentFolder.name;
              return
            }
            store.currentFolder = store.folder_list[0];
            store.folder_note_list = [];
            store.note_list.forEach((e)=>
              e.nbId ===store.currentFolder.id ? store.folder_note_list.push(e):{});
            if (store.folder_note_list.length!==0) {
              store.currentNote = store.folder_note_list[0]
            } else {
              store.currentNote = {};
              store.editor.txt.html("");
            }
            store.editor.txt.html(store.currentNote.content);

            store.isMessageWindowShow = false;
            store.messageWindowContent = {title:"",content:""};
            store.main_title = store.currentFolder.name;
            break;
          }
          /*
          * 点击确认按钮添加笔记名称
          * */
          case 3:{
            let that = this;
            let name = store.messageWindowContent.content;
            if (name==='') return;
            store.temporaryObject = {}
            store.temporaryObject.name = name;

            /*
            * 当前笔记本对象不为空时直接选择当前笔记本对象id为当前新建笔记的nbId
            * */
            if (store.currentFolder !== {}){
              store.temporaryObject.id = that.noteId;
              store.temporaryObject.nbId = store.currentFolder.id;
              store.temporaryObject.content = "";
              store.temporaryObject.isDeleted = false;
              store.temporaryObject.isCollected = false;
              store.temporaryObject.isEdit = false;
              store.note_list.push(store.temporaryObject);
              store.folder_note_list.push(store.temporaryObject);
              store.currentNote = store.folder_note_list[store.folder_note_list.length-1];
              store.main_title = store.currentFolder.name;
              store.editor.txt.html("");

              store.note_list.forEach((e1) => e1.isEdit=false);
              store.isOneFolderNoteListShow = true;
              store.isMessageWindowShow = false;
              return
            }

            /*
            * 当前笔记本对象为空时，弹出下拉列表，选择笔记本对象id为当前新建笔记的nbId
            * */
            store.messageWindowUseType = 4;
            store.isMessageWindowShow = true;
            store.isInputShow = false;
            store.isSelectShow = true;
            store.messageWindowContent.title = "选择笔记所在笔记本";
            store.messageWindowContent.content = "请选择目标笔记本";
            break;
          }
          /*
          * 选择添加笔记到哪个笔记本
          * */
          case 4:{
            let that = this;
            let nbId = parseInt(store.messageWindowContent.content);
            if(isNaN(nbId)) return;
            store.temporaryObject.id = that.noteId;
            store.temporaryObject.nbId = nbId
            store.temporaryObject.content = "";
            store.temporaryObject.isDeleted = false;
            store.temporaryObject.isCollected = false;
            store.temporaryObject.isEdit = false;
            store.note_list.push(store.temporaryObject);
            store.folder_note_list.push(store.temporaryObject);
            store.currentNote = store.folder_note_list[store.folder_note_list.length-1];
            store.main_title = store.currentFolder.name;
            store.editor.txt.html("");

            store.note_list.forEach((e1) => e1.isEdit=false);
            store.isOneFolderNoteListShow = true;
            store.isMessageWindowShow = false;
            break;
          }
          /*
          * 移动笔记
          * */
          case 5:{
            let nbId = parseInt(store.messageWindowContent.content);
            if(isNaN(nbId)) return;
            //将移动笔记的笔记本ID号改为目标笔记本ID
            store.note_list.forEach((note) => note.id === store.currentNote.id ?
              note.nbId = nbId:{})
            console.log(store.currentFolder.id);
            console.log(parseInt(store.messageWindowContent.content));
            //同步移除当前笔记本的已经移动了的这个笔记
            store.folder_note_list.forEach((e,index,list)=>e===store.currentNote ?
              list.splice(index,1):{});
            store.note_list.forEach((e1) => e1.isEdit=false);
            store.isMessageWindowShow = false;
            break;
          }
          /*
          * 删除笔记到回收站
          * */
          case 6:{
            store.note_list.forEach((e) => e === store.currentNote ?
              e.isDeleted=true:{});
            store.folder_note_list.forEach((e,index,list)=>e===store.currentNote ?
              list.splice(index,1):{});
            store.note_list.forEach((e1) => e1.isEdit=false);
            store.isMessageWindowShow = false;
            break;
          }
          /*
          * 恢复笔记到笔记本
          * */
          case 7:{
            let nbId = parseInt(store.messageWindowContent.content);
            if(isNaN(nbId)) return;
            //将笔记状态改为未删除，将笔记本ID号改为目标笔记本ID
            store.note_list.forEach((note) => {
              if (note.id === store.currentNote.id ) {
                note.isDeleted = false;
                note.nbId = nbId;
              }
            })
            //同步移除回收站中已经移动了的这个笔记
            store.delete_list.forEach((e,index,list)=>e===store.currentNote ?
              list.splice(index,1):{});
            store.note_list.forEach((e1) => e1.isEdit=false);
            store.isMessageWindowShow = false;
            break;
          }
          /*
          * 彻底删除笔记
          * */
          case 8:{
            store.note_list.forEach((e,index,note_list) => e === store.currentNote ?
              note_list.splice(index,1):{});
            store.delete_list.forEach((e,index,delete_list)=>e===store.currentNote ?
              delete_list.splice(index,1):{});
            console.log(store.note_list);
            store.isMessageWindowShow = false;
            break;
          }
          /*
          * 点击确认按钮删除笔记本
          * */
          case 9:{
            store.note_list.forEach((e) => e === store.currentNote ?
              e.isCollected=false:{});
            store.collect_list.forEach((e,index,list)=>e===store.currentNote ?
              list.splice(index,1):{});
            store.note_list.forEach((e1) => e1.isEdit=false);
            store.isMessageWindowShow = false;
            break;
          }
        }
      }
    }
  }
</script>

<style scoped>

  #alert-full{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left: 0;
    background: rgba(219,219,219,0.8);
    /*background: rgba(66,185,131,0.3);*/
    /*background: #42b983;*/
    z-index: 10001;
    /*display: none;*/
  }
  #alert{
    width: 360px;
    height: 240px;
    position: relative;
    /*background: #EEEEEE;*/
    background: #ffffff;
    z-index: 100001;
    border-radius: 3px;
  }
  #alert-content{
    width: 300px;
    height: 180px;
    background: #f5f5f5;
    border-radius: 5px;
    border: solid 1px rgba(65,184,131,0.5);
  }
  #alert-title{
    width: 300px;
    height: 60px;
    /*background: #55a6db;*/
    font-size: 24px;
  }
  #alert-content>input,#alert-content>p{
    width: 240px;
    height: 30px;
    /*background: #eedcda;*/
    border: solid 1px #DBDBDB;
    font-size: 18px;
    margin: 20px 0 20px 0;
    padding: 0 10px 0 10px;
    /*display: none;*/
  }
  #alert-content>p{
    text-align: center;
    border: none;
  }
  #alert-content>select{
    width: 240px;
    height: 30px;
    /*background: #eedcda;*/
    border: solid 1px #DBDBDB;
    font-size: 18px;
    margin: 20px 0 20px 0;
    padding: 0 10px 0 10px;
    /*display: none;*/
  }
  #alert-content>hr{
    width: 100%;
    /*height: 2px;*/
    border: solid 1px #ff3b2f;
  }
  #alert-result{
    width: 298px;
    height: 40px;
    /*background: #eedcda;*/
    /*border: solid 1px #1296db;*/
    font-size: 18px;
  }
  #alert-result a{
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
  #close{
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    /*background: #000;*/
  }
</style>
