//主页右侧替换(流量界面)
import ajax1 from "./ajax.js";

let MBRl = {//MagicBoardReplacement  MBRL  魔板替换
    //在这里写html代码
    html: `

           
     
<div class="panel panel-default">
  <div class="panel-heading">
   <h3 class="panel-title">添加律师</h3>
   <div class="panel-options">
    <a href="#" data-toggle="panel">
     <span class="collapse-icon">–</span>
     <span class="expand-icon">+</span>
    </a>
  
   </div>
  </div>
  <div class="panel-body">

   <form role="form" class="form-horizontal">

    <div class="form-group">
     <label  name="show_ys" class="col-sm-1 control-label" for="field-1" >姓名</label>

     <div class="col-sm-10">
      <input id="name" type="text" class="form-control" id="field-1">
     </div>
    </div>
    
    

    <div class="form-group">
     <label  name="show_ys" class="col-sm-1 control-label" for="field-3">手机号</label>

     <div class="col-sm-10">
      <input id="phone" type="text" class="form-control" id="field-3">
     </div>
     
    </div>


      <div class="form-group">
     <label  name="show_ys"  class="col-sm-1 control-label" for="field-3">邮箱</label>

     <div class="col-sm-10">
      <input type="email" class="form-control"  id="mail">
     </div>
     
    </div>
    
    
    <div class="form-group">
     <label  name="show_ys" class="col-sm-1 control-label" for="field-4">个人头像</label>

     <div class="col-sm-10">
      <input type="file" class="form-control" id="img" accept="image/*" defaultValue="选择头像">
      
     <img id="img_file" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" height="15%" width="10%">
     </div>
    </div>
    
    
    
      <div class="form-group">
     <label  name="show_ys" class="col-sm-1 control-label" for="field-4">透明图像</label>

     <div class="col-sm-10">
      <input type="file" class="form-control" id="img_to" accept="image/*" defaultValue="选择头像">
      
     <img id="img_file_to" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" height="15%" width="10%">
     </div>
    </div>
    
    
    
    

      <div class="form-group-separator"></div>
    <div class="form-group-separator"></div>

    <div class="form-group">
     <label  name="show_ys" class="col-sm-1 control-label" for="field-2">签名</label>

     <div class="col-sm-10">
      <input type="text" class="form-control" id="signatare">
      
     </div>
    </div>

    <div class="form-group">
     <label name="show_ys" class="col-sm-1 control-label" for="field-2">合作伙伴</label>

     <div class="col-sm-10">
      <input type="text" class="form-control" id="partner" >
     </div>
    </div>





    <div class="form-group-separator"></div>
    <div class="form-group-separator"></div>
    <div class="form-group">
     <label  name="show_ys" class="col-sm-1 control-label" for="field-5">基本信息</label>

     <div class="col-sm-10">
      <textarea class="form-control autogrow" cols="5" id="essential" style="overflow-x: hidden; overflow-y: auto; resize: none; height: 50px; height: 300px; width: 100%;"></textarea>
     </div>
    </div>
    
    
    
    
    
    <div class="form-group">
     <label  name="show_ys" class="col-sm-1 control-label" for="field-5">工作经历</label>

     <div class="col-sm-10">
     <textarea class="form-control autogrow" cols="5" id="workexperience" style="overflow-x: hidden; overflow-y: auto; resize: none; height: 50px; height: 300px; width: 100%;"></textarea>
<!--      <textarea class="form-control autogrow" cols="5" id="workexperience" style="overflow: hidden; overflow-wrap: break-word; resize: horizontal; height: 300px; width: 100%;"></textarea>-->

     </div>
    </div>
    
    
    
    
    
    <div class="form-group">
     <label   name="show_ys" class="col-sm-1 control-label" for="field-5" >代表业绩</label>

     <div class="col-sm-10">
      <textarea class="form-control autogrow" cols="5" id="representative"style="overflow-x: hidden; overflow-y: auto; resize: none; height: 50px; height: 300px; width: 100%;"></textarea>
     </div>
    </div>
    
    
 
    <div class="form-group">
     <label  name="show_ys" class="col-sm-1 control-label" for="field-5">教育背景</label>

     <div class="col-sm-10">
      <textarea class="form-control autogrow" cols="5" id="educational"  style="overflow-x: hidden; overflow-y: auto; resize: none; height: 50px; height: 300px; width: 100%;"></textarea>
     </div>
    </div>
    
    
    
    <div class="form-group">
     <label  name="show_ys" class="col-sm-1 control-label" for="field-5">工作语言</label>

     <div class="col-sm-10">
      <textarea class="form-control autogrow" cols="5" id="cn"style="overflow-x: hidden; overflow-y: auto; resize: none; height: 50px; height: 100px; width: 100%;"></textarea>
     </div>
    </div>
    <div class="form-group">
      <label  name="show_ys" class="col-sm-1 control-label" for="field-5">律师等级</label>
     <div class="col-sm-10">
<!--           <label for="sboxit-1"></label>-->
                      <select class="form-control selectpicker" id="rank" data-style="btn-primary">
                        <option value="1">层级一</option>
                        <option value="2">层级二</option>
                        <option value="3">层级三</option>
                        <option value="4">层级四</option>
                        <option value="5">层级五</option>
                        <option value="6">层级六</option>
                        <option value="7">层级七</option>
                        <option value="8">层级八</option>
                        <option value="9">层级九</option>
                        <option value="999">层级隐</option>
                      </select>
     </div>
                
   </div>
      <div class="form-group">
         <div class="form-group">
    

    

    <div class="form-group-separator"></div>
    <div class="form-group-separator"></div>
 <div class="form-group-separator">
      <div class="col-sm-6">
        <input type="button" class="form-control btn btn-primary" id="partner1" value="清空" onclick="delete_lawyerAdd()">
      </div>
      <div class="col-sm-6">
        <input type="button" class="form-control btn btn-success" id="partner" value="提交" onclick="lawyerAdd()">
      </div>
</div>










</form>

</div>

</div>








     `,

    //在这里进行操作
    htmlMagic: async function (document1) {
        document1.getElementById("indexHtml1").innerHTML = this.html; //需要跳转的地址





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


        //图片的上传透明图像
        document.getElementById('img_to').addEventListener('change', async function (event) {

            //设置文件
            let formData = new FormData();
            formData.append('file',event.target.files[0]);
            let attorneyImg = {
                data:  formData
            }
            //  图片回显
            let promise = await ajax1.ajaxFile("multiFileAttorney","post",attorneyImg,$);
            document.getElementById("img_file_to").src=promise.data.href;

        });







        window.delete_lawyerAdd=async  function () {
            document1.getElementById("name").value=           "";
            document1.getElementById("partner").value=        "";
            document1.getElementById("signatare").value=      "";
            document1.getElementById("phone").value=          "";
            document1.getElementById("mail").value=           "";

            document1.getElementById("essential").value=      "";
            document1.getElementById("workexperience").value= "";
            document1.getElementById("representative").value= "";
            document1.getElementById("educational").value=    "";
            document1.getElementById("cn").value=             "";
        }



        window.lawyerAdd=async function () {
            let attorney = {
                data: {
                    "name": "",
                    "partner": "",
                    "signatare": "",
                    "phone": "",
                    "mail": "",
                    "img": "",
                    "img_to": "",
                    "essential": "",
                    "workexperience": "",
                    "representative": "",
                    "educational": "",
                    "cn": "",
                    "rank": ""
                }
            }

            attorney.data.name = document1.getElementById("name").value;
            attorney.data.partner = document1.getElementById("partner").value;
            attorney.data.signatare = document1.getElementById("signatare").value;
            attorney.data.phone = document1.getElementById("phone").value;
            attorney.data.mail = document1.getElementById("mail").value;
            attorney.data.img = document.getElementById("img_file").src;
            attorney.data.essential = document1.getElementById("essential").value;
            attorney.data.workexperience = document1.getElementById("workexperience").value;
            attorney.data.representative = document1.getElementById("representative").value;
            attorney.data.educational = document1.getElementById("educational").value;
            attorney.data.cn = document1.getElementById("cn").value;
            attorney.data.rank = document1.getElementById("rank").value;

            attorney.data.img_to = document.getElementById("img_file_to").src;






            let sum_massage=0;
            for (let key in attorney.data) {
                if (attorney.data[key] === "") {
                    //设置字体名字为红色
                    sum_massage++;
                    document.getElementById(key).parentNode.parentNode.querySelector("[name='show_ys']").style.color = "red"
                }else{
                    document.getElementById(key).parentNode.parentNode.querySelector("[name='show_ys']").style.color = "#808080"
                }
            }


            //普通图片
            let fileInput = document.getElementById("img");
            if (fileInput.files.length === 0) {
                sum_massage=1;
                fileInput.parentNode.parentNode.querySelector("[name='show_ys']").style.color = "red"

            } else {
                fileInput.parentNode.parentNode.querySelector("[name='show_ys']").style.color = "#808080"
            }

            //透明图片
            let img_to = document.getElementById("img_to");
            if (img_to.files.length === 0) {
                sum_massage=1;
                img_to.parentNode.parentNode.querySelector("[name='show_ys']").style.color = "red"

            } else {
                img_to.parentNode.parentNode.querySelector("[name='show_ys']").style.color = "#808080"
            }



            //判断是否全部填写
            if(sum_massage>0){


                document.getElementById("show_message").innerHTML=`
                 <hr>
                    <h2 class="text-center mb-4" style="color: red">请注意,你的数据并没有填写完!请填写完成之后重新提交</h2>
                <hr>
                 `;

                document.getElementById('modal-overlay').style.display = 'flex';

                return;
            }



            let newVar = await ajax1.ajaxPromise("attorney/insert_attorney", "post", attorney, $); //  记得把ajax打开


            // console.log(attorney)
            // console.log(newVar)
            if(newVar.code==1){
                //设置弹窗内容
                document.getElementById("show_message").innerHTML=`
               <h2 class="text-center mb-4">${newVar.msg} : 律师添加成功</h2>
                <hr>
                  <a href="../BST/web/lvshijianli.html?lsid=${newVar.data}" class="btn btn-primary d-block mx-auto mb-3">查看律师</a>

                <hr>
            `;

            }else{
                document.getElementById("show_message").innerHTML=`
                    <h2 class="text-center mb-4" style="color: red">${newVar.msg} :  ${attorney.data.name}   ${newVar.data} </h2>
                <hr>
                <hr>
            `;
            }

            // 显示遮罩弹窗
            document.getElementById('modal-overlay').style.display = 'flex';


        }

    }


};


export default MBRl;
