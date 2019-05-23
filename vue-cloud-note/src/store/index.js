/*store*/
import Vue from 'vue'
import Vuex from 'vuex'
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state :{
    name:"",
    password:"",
    main_title : "NOTE BOOK",
    secondColumnTitle:"我的笔记",
    noteAddIsShow:true,
    isMessageWindowShow:false,
    isInputShow:false,
    isSelectShow:false,
    isDeletedShow:false,
    isCollectedShow:false,
    isOneFolderNoteListShow:false,
    messageWindowContent:{
      title:"",
      content:""
    },
    messageWindowUseType:0,
    editor:{},
    currentFolder: {},
    currentNote:{},
    temporaryObject:{},
    temporaryArray:[],
    folder_list:[
      {
        id:100000,
        name:"简单点",
        isEdit:false
      },
      {
        id:100001,
        name:"SimplePoint",
        isEdit:false
      },
      {
        id:100002,
        name:"Target1",
        isEdit:false
      },
      {
        id:100003,
        name:"Target2",
        isEdit:false
      },
      {
        id:100004,
        name:"Target3",
        isEdit:false
      },
      {
        id:100005,
        name:"Target4",
        isEdit:false
      },
      {
        id:100006,
        name:"Target5",
        isEdit:false
      },
      {
        id:100007,
        name:"Target6",
        isEdit:false
      },
      {
        id:100008,
        name:"Target7",
        isEdit:false
      },
      {
        id:100009,
        name:"Target8",
        isEdit:false
      }
    ],
    note_list:[
      {
        id:1234456,
        nbId:100000,
        name:"20190514",
        content:"<p>今天天气不错，还晒不死人！😬<br></p>",
        isDeleted:false,
        isCollected:true,
        isEdit:false
      },
      {
        id:1234534,
        nbId:100000,
        name:"20190515",
        content:" <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">" +
          "<tbody><tr><th>&nbsp;学号<br></th><th>姓名<br></th><th>班级<br></th><th>idCard" +
          "<br></th><th>毕业方向<br></th></tr><tr><td>&nbsp;1601141019</td><td>晏沈威<br>" +
          "</td><td>16物联网 <br></td><td>412728199708124566 <br></td><td>就业<br></td></tr>" +
          "</tbody></table>\n",
        isDeleted:false,
        isCollected:true,
        isEdit:false
      },
      {
        id:10000,
        nbId:100000,
        name:"20190516",
        content:"0000000000000000000",
        isDeleted:false,
        isCollected:true,
        isEdit:false
      },
      {
        id:10001,
        nbId:100000,
        name:"20190517",
        content:"11111111111111111111111111111",
        isDeleted:false,
        isCollected:true,
        isEdit:false
      },
      {
        id:10002,
        nbId:100001,
        name:"20190518",
        content:"22222222222222222222222222222222",
        isDeleted:false,
        isCollected:true,
        isEdit:false
      },
      {
        id:10003,
        nbId:100000,
        name:"20190519",
        content:"3333333333333333333333333333333333333333",
        isDeleted:false,
        isCollected:true,
        isEdit:false
      },
      {
        id:10004,
        nbId:100000,
        name:"20190520",
        content:"444444444444444444444444444444444444444444444",
        isDeleted:false,
        isCollected:true,
        isEdit:false
      },
      {
        id:10005,
        nbId:100001,
        name:"20190521",
        content:"555555555555555555555555555555555",
        isDeleted:false,
        isCollected:true,
        isEdit:false
      },
      {
        id:1235456,
        nbId:100005,
        name:"20190522",
        content:"",
        isDeleted:false,
        isCollected:false,
        isEdit:false
      },
      {
        id:1265456,
        nbId:100001,
        name:"20190523",
        content:"",
        isDeleted:false,
        isCollected:false,
        isEdit:false
      },
      {
        id:123756,
        nbId:100000,
        name:"20190524",
        content:"",
        isDeleted:false,
        isCollected:true,
        isEdit:false
      },
      {
        id:123496,
        nbId:100003,
        name:"20190525",
        content:"",
        isDeleted:false,
        isCollected:false,
        isEdit:false
      }
    ],
    folder_note_list:[],
    delete_list:[],
    collect_list:[]
  },
  /*状态分模块*/
  modules: {
    // cart,
    // products
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
