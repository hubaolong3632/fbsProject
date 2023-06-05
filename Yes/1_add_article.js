import ajax1 from './ajax.js'
//主页右侧替换(流量界面)
let MBRl = {//MagicBoardReplacement  MBRL  魔板替换
    //在这里写html代码
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
                            <i class="linecons-pencil"></i><font _mstmutation="1" _msttexthash="11479338" _msthash="166">撰写文章</font></h3>
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
                      <p style="color: red" id="p_zt"></p>

                    </div>


                    <div class="form-group hidden" _msthidden="1">
                      <label for="bcc" _msttexthash="28353" _msthidden="1" _msthash="173">BCC:</label>
                      <input type="text" class="form-control" id="bcc" tabindex="2">
                    </div>

                    <div class="form-group">
                      <label for="subject" _msttexthash="13525915" _msthash="174">摘要：</label>
                      <input type="text" class="form-control" id="subject" tabindex="1">
                      <p style="color: red" id="p_zy"></p>
                    </div>
                    
                    
                    
            
                    

                    <!--       富士康文本编译器-->
                    <!--<link href="https://unpkg.com/@wangeditor/editor@latest/dist/css/style.css" rel="stylesheet">-->
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
    htmlMagic: async function (document1) {

       // let ip1="http://00000.work:19099/"  // 注意这里也有一个ip更换服务器需要更换当前ip
        let ip1 = ajax1.ipReturn();

        document1.getElementById("indexHtml1").innerHTML = this.html; //需要跳转的地址



        const { createEditor, createToolbar } = window.wangEditor

        const editorConfig = {
            MENU_CONF:{},
            placeholder: 'Type here...',
            onChange(editor) {
                // const html = editor.getHtml()
                // console.log('editor content', html)
            }
        }


        editorConfig.MENU_CONF['uploadImage'] = { //上传图片
            fieldName: 'file',
            server: ip1+'imgifile',

            headers: {
                Authorization: localStorage.getItem('key'),

            },

        }

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



        //   内容
        let p_zt =  document.getElementById("p_zt");
        let p_zy =  document.getElementById("p_zy");
        let p_zbt =  document.getElementById("p_zbt");

        let select_name = document.getElementById("select_name");

        let is_name = await ajax1.ajaxPromise("attorney/from_attorney_null_name", "post", "", $); //  记得把ajax打开

        for(let a of  is_name.data){
            select_name.innerHTML+=`
             <option value="${a.name}">${a.name}</option>
            `;
        }





        let selectBox = document.getElementById("sboxit-1");
        let sboxit2_cbq = document.getElementById("sboxit-2");

        selectBox.onchange = function() { //如果主内容内容发生改变
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


            console.log("执行添加");
            // console.log(selectBox.value); // 在控制台输出选择框的值
        };


        window.deleteArtilr=function(){ //清空所有内容
            if (confirm("确定要清空所有内容吗？")) {
                document.getElementById("add_zt").value="";  //主题
                document.getElementById("subject").value="";// 摘要
                editor.setHtml('<p1><br></p1>')
            } else {
                // 用户点击了“取消”按钮
                // 在这里执行你的代码或者不做任何事情
            }
        }


        window.issueAdd_artile=async function () { //添加文章


            let param = { //数据的提交区域
                data: { //json格式传输
                    "title": "",
                    "abs": "",
                    "text": "",
                    "columnkey": "",
                    "columnvalue": "",
                    "name":"",
                    "roughtext":""
                },
            }




            let yi = document.getElementById("sboxit-1");
            param.data.columnvalue = yi.value; //主标题选中的



            let er = document.getElementById("sboxit-2");
            // param.data.columnkey = er.options[er.selectedIndex].value;    //次标题选中的
            param.data.columnkey = er.value;    //次标题选中的



            // let er = document.getElementById("sboxit-2");
            param.data.name = document.getElementById("select_name").value;
        console.log( param.data.name );
            param.data.title = document.getElementById("add_zt").value.slice(0, 100);  //主题 不能超过100个字符
            param.data.abs = document.getElementById("subject").value.slice(0, 100);// 中等  不能超过100个字符


            param.data.text = editor.getHtml(); // 获取编辑器的内容 并且压缩成一行 内容
            param.data.roughtext = editor.getText().slice(0, 100)+"...";



            p_zt.innerText ="";
            p_zy.innerText ="";
            p_zbt.innerText="";

            let noBool=false;
            if(param.data.title==null||param.data.title.trim()==""){ //主题
                p_zt.innerText="主题不能为空";
                noBool=true;
            }

            if(param.data.abs==null||param.data.abs.trim()=="..."){ //摘要
                p_zy.innerText ="摘要不能为空";
                noBool=true;
            }


            if(param.data.columnvalue==null||param.data.columnvalue.trim()==""){ //主标题
                p_zbt.innerText ="主标题不能为空";
                console.log("主为空")

                noBool=true;
            }

            // console.log(param);
            if(noBool==true){
                return;
            }


            let newVar = await ajax1.ajaxPromise("artile/add_artile", "post", param, $); //  记得把ajax打开
            //设置弹窗内容
            document.getElementById("show_message").innerHTML=`
               <h2 class="text-center mb-4">${newVar.msg} :${newVar.data.massage}</h2>
            <hr>
               <a href="index.html?id=${newVar.data.id}" class="btn btn-primary d-block mx-auto mb-3">查看文章:${param.data.title}</a>
            <hr>
            `;
            document.getElementById('modal-overlay').style.display = 'flex';//显示弹窗




            // $("#myModal").modal();
            // document.querySelector('.modal-backdrop').remove();



            // console.log(param);
            console.log(newVar);

        }


        //  判断是否为空           哉要截取50个字        各种错误码的处理         发布那个按钮调整一下













    }


};


export default MBRl;
