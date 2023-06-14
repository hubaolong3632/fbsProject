import ajax1 from './ajax.js'
//主页右侧替换(流量界面)
let MBRl = {//MagicBoardReplacement  MBRL  魔板替换
    //在这里写html代码
    html:`   
<!--    边框分割线-->
    <style>  
        hr {
                  border: none;
                  height: 1px;
                  background: #333;
                  margin: 10px 0;
           }
    </style>
         <section class="mailbox-env">

      <!--      <div class="row">-->

              <!-- Compose Email Form -->
              <div class="col-sm-12 mailbox-right">
                <div class="mail-compose">
                    <!-- Header Title and Button Options -->
                    <div class="mail-header">
                      <div class="row">
                        <div class="col-sm-6">
                          <h3>
                            <i class="linecons-pencil"></i><font _mstmutation="1" _msttexthash="11479338" _msthash="166">企业合规</font></h3>
                        </div>

                        <div class="col-sm-3 col-xs-5">
                          <p onclick="deleteArtilr()"  class="btn btn-gray btn-single btn-icon btn-icon-standalone btn-icon-standalone-right btn-block">
                            <i class="linecons-fire"></i>
                            <span _msttexthash="5917184" _msthash="167">清空</span>
                          </p>
                        </div>


      <!--                  <span _msttexthash="5786547" _msthash="168" >发布</span>-->
                        <div class="col-sm-3 col-xs-8">
                          <p onclick="issueAdd_artile()" class="btn btn-secondary btn-single btn-icon btn-icon-standalone btn-icon-standalone-right btn-block">   <span _msttexthash="5786547" _msthash="168">发布</span></p>

                        </div>
                      </div>
                    </div>


                    <div class="form-group">
                      <label for="add_zt" _msttexthash="9818302" _msthash="169">主题：</label>
                      <input type="text" class="form-control" id="add_zt" tabindex="1">
                    </div>
                    
                    
                   
                   
                    
                <hr>
                 <label for="subject" _msttexthash="13525915" _msthash="174">专业团队介绍(文字->100字):</label>
                 <div class="form-group">
                      <textarea id="zytd_text" class="form-control autogrow" cols="3" id="essential" style="overflow-x: hidden; overflow-y: auto; resize: none; height: 50px; height: 100px; width: 100%;"></textarea>
                </div>
                
                
                
                 <hr>
<!--                 图片选择区域-->
                 <div>
                          <label  name="show_ys"  for="field-4">专业团队介绍(图片):</label>
                          <input type="file" class="form-control" id="img" accept="image/*" defaultValue="选择头像">
                         <img id="img_file" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" height="15%" width="10%">
                  </div>
                    
                    
                  <hr>
                  <hr>
                  <hr>
   

                    
                    <style>
                      #editor—wrapper {
                        border: 1px solid #ccc;
                        z-index: 100; /* 按需定义 */
                      }
                      #toolbar-container { border-bottom: 1px solid #ccc; }
                      #editor-container { height: 500px; }
                    </style>
                    <div id="editor—wrapper">
                      <div id="toolbar-container"><!-- 工具栏 --></div>
                      <div id="editor-container"><!-- 编辑器 --></div>
                    </div>





                </div>


              </div>

            <div class="col-sm-12 mailbox-right">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title">推荐律师</h3>
                    <div class="panel-options">
                      <a href="#" data-toggle="panel">
                        <span class="collapse-icon">–</span>
                        <span class="expand-icon">+</span>
                      </a>

                    </div>
                  </div>
                  
                  
                  <div class="panel-body">
                  
                     <div class="form-group">
                      <label for="select_name">推荐律师选择：</label>
                      <select class="form-control selectpicker" id="select_name" data-style="btn-primary">
                      </select>
                    </div>

                  </div>
                </div>


              </div>
          </section>

`,
    //在这里进行操作
    htmlMagic: async function (document1) {

        let ip1 = ajax1.ipReturn();

        document1.getElementById("indexHtml1").innerHTML = this.html; //需要跳转的地址

        const { createEditor, createToolbar } = window.wangEditor

        const editorConfig = {
            MENU_CONF:{},
            placeholder: 'Type here...',
            onChange(editor) {
            }
        }


        editorConfig.MENU_CONF['uploadImage'] = { //上传图片
            fieldName: 'file',
            server: ip1+'imgifile',

            headers: {
                Authorization: localStorage.getItem('key'),

            },


        }

        //图片的上传
        document.getElementById('img').addEventListener('change', async function (event) {

            //设置文件
            let formData = new FormData();
            formData.append('file',event.target.files[0]);
            let attorneyImg = {
                data:  formData
            }
            //  图片回显
            let promise = await ajax1.ajaxFile("multiFileAttorney","post",attorneyImg,$);
            document.getElementById("img_file").src=promise.data.href;

        });


        const editor = createEditor({
            selector: '#editor-container',
            html: '<p1><br></p1>',
            config: editorConfig,
            mode: 'default', // or 'simple'
        })

        const toolbarConfig = {}

        const toolbar = createToolbar({
            editor,
            selector: '#toolbar-container',
            config: toolbarConfig,
            mode: 'default', // or 'simple'
        })


        //设置当前是哪个界面
        let name_from="企业合规";




        //律师的选项
        let select_name = document.getElementById("select_name");
        let is_name = await ajax1.ajaxPromise("attorney/from_attorney_null_name", "post", "", $); //  记得把ajax打开
        console.log(is_name);
        for(let a of  is_name.data){
            select_name.innerHTML+=`
             <option value="${a.id}">${a.name}</option>
            `;
        }



        //初始化上面选项的界面
        let init_view = await ajax1.ajaxPromise("artile/from_introduce?name="+name_from+"", "post", "", $); //  记得把ajax打开
        console.log(init_view);

          document.getElementById("add_zt").value=       init_view.data.introduce.title ; //主题
          document.getElementById("zytd_text").value=    init_view.data.introduce.rigthtext ;  //专业团队的文字
          document.getElementById("img_file").src=       init_view.data.introduce.rigthimg  ; //专业团队的图片
          document.getElementById("select_name").value=  init_view.data.introduce.attorney_id; //获取选中的名称律师的id
          // document.getElementById("select_name").value=  init_view.data.attorney.name; //获取选中的名称律师的id
          editor.setHtml(init_view.data.introduce.text); // 获取编辑器的内容 并且压缩成一行 内容

        // param.data.title   = document.getElementById("add_zt").value   //主题
        // param.data.rigthtext   = document.getElementById("zytd_text").value   //专业团队的文字
        // param.data.rigthimg     = document.getElementById("img_file").src   //专业团队的图片
        // param.data.attorney_id   = document.getElementById("select_name").value; //获取选中的名称律师的id
        // param.data.text           =     editor.getHtml(); // 获取编辑器的内容 并且压缩成一行 内容












        window.deleteArtilr=function(){ //清空所有内容
            // if (confirm("确定要清空所有内容吗？")) {
            //     document.getElementById("add_zt").value="";  //主题
            //     document.getElementById("subject").value="";// 摘要
            //     editor.setHtml('<p1><br></p1>')
            // } else {
            //     // 用户点击了“取消”按钮
            //     // 在这里执行你的代码或者不做任何事情
            // }
        }


        window.issueAdd_artile=async function () { //修改内容文章


            let param = { //数据的提交区域
                data: { //json格式传输
                    "title": "", //主题
                    "text": "", //正文
                    "rigthimg": "", //专业团队图片
                    "attorney_id":"", //律师的id
                    "rigthtext": "", //专业团队文字
                    "name_bst":name_from, //类型
                },
            }

            //
            // param.data.title = document.getElementById("add_zt").value.slice(0, 100);  //主题 不能超过100个字符



       param.data.title   = document.getElementById("add_zt").value   //主题
       param.data.rigthtext   = document.getElementById("zytd_text").value   //专业团队的文字
       param.data.rigthimg  = document.getElementById("img_file").src   //专业团队的图片
       param.data.attorney_id   = document.getElementById("select_name").value; //获取选中的名称律师的id
       param.data.text =     editor.getHtml(); // 获取编辑器的内容 并且压缩成一行 内容

            console.log(param);


            let newVar = await ajax1.ajaxPromise("artile/update_introduce", "post", param, $); //修改大标题
            //设置弹窗内容
            document.getElementById("show_message").innerHTML=`
               <h2 class="text-center mb-4">企业合规模块修改</h2>
            <hr>
               <a class="btn btn-primary d-block mx-auto mb-3">企业合规模块模块修改完成</a>
            <hr>
            `;
            document.getElementById('modal-overlay').style.display = 'flex';//显示弹窗


            console.log(newVar);

        }















    }


};


export default MBRl;
