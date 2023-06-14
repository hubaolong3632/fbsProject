import ajax1 from './ajax.js'

//主页右侧替换
//MagicBoardReplacement  MBRL  魔板替换
let MBRl={
    //在这里防止html代码
     html:`
          <section class="mailbox-env">

      <!--      <div class="row">-->

              <!-- Compose Email Form -->
              <div class="col-sm-12 mailbox-right">

                <div class="mail-compose">

                  <form method="post" role="form">

                    <!-- Header Title and Button Options -->
                    <div class="mail-header">
                      <div class="row">
                        <div class="col-sm-6">
                          <h3>
                            <i class="linecons-pencil"></i><font _mstmutation="1" _msttexthash="11479338" _msthash="166">修改文章</font></h3>
                        </div>

                        <div class="col-sm-3 col-xs-5">
                          <p onclick="deleteArtilr()"  class="btn btn-gray btn-single btn-icon btn-icon-standalone btn-icon-standalone-right btn-block">
                            <i class="linecons-fire"></i>
                            <span _msttexthash="5917184" _msthash="167">清空</span>
                          </p>
                        </div>


                        <div class="col-sm-3 col-xs-8">
                          <p onclick="issueAdd_artile()" class="btn btn-secondary btn-single btn-icon btn-icon-standalone btn-icon-standalone-right btn-block">   <span _msttexthash="5786547" _msthash="168">修改</span></p>

                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="add_zt" _msttexthash="9818302" _msthash="169">主题：</label>
                      <input type="text" class="form-control" id="add_zt" tabindex="1">
                      <p style="color: red" id="p_zt"></p>

                    </div>


                    <div class="form-group hidden" _msthidden="1">
                      <label for="bcc" _msttexthash="28353" _msthidden="1" _msthash="173">BCC:</label>
                      <input type="text" class="form-control" id="bcc" tabindex="2">
                    </div>

<!--                    <div class="form-group">-->
<!--                      <label for="subject" _msttexthash="13525915" _msthash="174">摘要：</label>-->
<!--                      <input type="text" class="form-control" id="subject" tabindex="1">-->
<!--                      <p style="color: red" id="p_zy"></p>-->
<!--                    </div>-->
<!--                    -->
                    
                    
            
                    

                    <!--       富士康文本编译器-->
                    <link href="https://unpkg.com/@wangeditor/editor@latest/dist/css/style.css" rel="stylesheet">
<!--                    <link rel="stylesheet" href="css/style.css">-->
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
<!--                    <script src="https://unpkg.com/@wangeditor/editor@latest/dist/index.js"></script>-->
<!--                    <script src="js/index.js"></script>   &lt;!&ndash;配置文件的引入&ndash;&gt;-->




                  </form>

                </div>


              </div>

            <div class="col-sm-12 mailbox-right">

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title">文章分类选项</h3>
                    <div class="panel-options">
                      <a href="#" data-toggle="panel">
                        <span class="collapse-icon">–</span>
                        <span class="expand-icon">+</span>
                      </a>

                    </div>
                  </div>
                  
                  
                  <div class="panel-body">
                  
                     <div class="form-group">
                      <label for="select_name">姓名选择：</label>
                      <select class="form-control selectpicker" id="select_name" data-style="btn-primary">
                      </select>
                    </div>

                  
                  
                  

                    <div class="form-group">
                      <label for="sboxit-1">主标题：</label>
                      <select class="form-control selectpicker" id="sboxit-1" data-style="btn-primary">
                        <option value="">请选择</option>
                        <option value="新闻">新闻</option>
                        <option value="业绩">业绩</option>
                        <option value="观点">观点</option>
                      </select>
                      <p style="color: red" id="p_zbt"></p>
                    </div>


                  

                    <div class="form-group">
                      <label for="sboxit-2">次标题：</label>
                      <select class="form-control selectpicker" id="sboxit-2" data-style="btn-primary">

                      </select>
                    </div>


                  </div>
                </div>


              </div>
          </section>

     
     `,

    //在这里进行操作
    htmlMagic : async function (document1,id) {

         let ip1 = ajax1.ipReturn(); //ip
        document1.getElementById("indexHtml1").innerHTML=this.html; //需要跳转的地址


        //   内容
        let p_zt =  document.getElementById("p_zt");
        let p_zy =  document.getElementById("p_zy");
        let p_zbt =  document.getElementById("p_zbt");

        let select_name = document.getElementById("select_name");


        let yi = document.getElementById("sboxit-1"); //主标题
        let er = document.getElementById("sboxit-2"); //次标题

        let  select_name_id=  document.getElementById("select_name"); //姓名
        let  add_zt_id=    document.getElementById("add_zt");  //主题 不能超过100个字符
        let subject_id=   document.getElementById("subject");// 哉要  不能超过100个字符





        //初始的模板
        let selectBox = yi;
        let sboxit2_cbq = er;
        selectBox.onchange =selectBoxonchange;
        function selectBoxonchange(){ //如果主内容内容发生改变
            if(selectBox.value=="新闻"){
                sboxit2_cbq.innerHTML=`
                     <option value="新闻">新闻</option>
                `
            }else{
                sboxit2_cbq.innerHTML=`
                     <option value="企业合规">企业合规</option>
                     <option value="知识产权">知识产权</option>
                     <option value="信用管理">信用管理</option>
                `
            }
            console.log("执行修改");
        };



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


        // 用于初始化显示所有模块
        //文章查询替换块
        let param = { //数据的提交区域
            data: { //json格式传输
                "id":id
            },
        }


        //ajax请求
        let json = await ajax1.ajaxPromise("artile/fromArticle_id", 'post', param, $);
        let text;
        for(let data of json.data) {
            for (let columnList of data.columnList) {
                for (let articleList of columnList.articleList) {  //获取所有文章
                    yi.value=  data.classes;
                    selectBoxonchange(); //刷新下面的选项
                    er.value= columnList.column;
                    select_name_id.value=articleList.name;
                    add_zt_id.value=articleList.title;
                    // subject_id.value=articleList.abs;
                    text= articleList.text;




                }
            }
        }



        //初始化正文
        const editor = createEditor({
            selector: '#editor-container',
            html: text,
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





        //获取所有人的名字
        let is_name = await ajax1.ajaxPromise("attorney/from_attorney_null_name", "post", "", $); //  记得把ajax打开

        for(let a of  is_name.data){
            select_name.innerHTML+=`
             <option value="${a.name}">${a.name}</option>
            `;
        }








        window.deleteArtilr=function(){ //清空所有内容
            if (confirm("确定要清空所有内容吗？")) {
                document.getElementById("add_zt").value="";  //主题
                document.getElementById("subject").value="";// 摘要
                editor.setHtml('<p1><br></p1>')
            }
        }


        window.issueAdd_artile=async function () { //修改文章


            let param = { //数据的提交区域
                data: { //json格式传输
                    "id":id,
                    "title": "",
                    "abs": "",
                    "text": "",
                    "name":"",
                    "roughtext":"",
                    "columnkey": "",
                    "columnvalue": ""
                },
            }


            param.data.columnvalue = yi.value; //主标题选中的
            param.data.columnkey = er.value;    //次标题选中的



            param.data.name =  select_name_id.value
            param.data.title =  add_zt_id.value.slice(0, 100);  //主题 不能超过100个字符
            // param.data.abs =   subject_id.value.slice(0, 100);// 中等  不能超过100个字符


            param.data.text = editor.getHtml(); // 获取编辑器的内容 并且压缩成一行 内容
            param.data.roughtext = editor.getText().slice(0, 100)+"..."; //分小标题



            p_zt.innerText ="";
            p_zy.innerText ="";
            p_zbt.innerText="";

            let noBool=false;
            if(param.data.title==null||param.data.title.trim()==""){ //主题
                p_zt.innerText="主题不能为空";
                noBool=true;
            }

            // if(param.data.abs==null||param.data.abs.trim()=="..."){ //摘要
            //     p_zy.innerText ="摘要不能为空";
            //     noBool=true;
            // }
            if(param.data.columnvalue==null||param.data.columnvalue.trim()==""){ //主标题
                p_zbt.innerText ="主标题不能为空";
                noBool=true;
            }

            if(noBool==true){
                return;
            }

            let newVar = await ajax1.ajaxPromise("artile/update_article", "post", param, $); //  记得把ajax打开
            //设置弹窗内容
            document.getElementById("show_message").innerHTML=`
                       <h2 class="text-center mb-4">${newVar.msg} :${newVar.data}</h2>
                    <hr>

                       <a href="index.html?id=${id}" class="btn btn-primary d-block mx-auto mb-3">查看文章:${param.data.title}</a>
                    <hr>
            `;
            document.getElementById('modal-overlay').style.display = 'flex';//显示弹窗

        }



    }



};


export default MBRl;
