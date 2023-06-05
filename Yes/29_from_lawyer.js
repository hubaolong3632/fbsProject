import ajax1  from '../Yes/ajax.js'

//主页右侧替换(流量界面)
let MBRl = {//MagicBoardReplacement  MBRL  魔板替换
    //在这里写html代码
    html: `
<style>
table td{
    font-size: 14px;
    color: #111111;
    font-family: Arial, sans-serif;
}
</style>
  <div class="col-md-12">

    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">律师管理界面</h3>

            <div class="panel-options">
                <a href="#">
                    <i class="linecons-cog"></i>
                </a>

                <a href="#" data-toggle="panel">
                    <span class="collapse-icon">–</span>
                    <span class="expand-icon">+</span>
                </a>

                <a href="#" data-toggle="reload">
                    <i class="fa-rotate-right"></i>
                </a>

                <a href="#" data-toggle="remove">
                    ×
                </a>
            </div>
        </div>
        
        
         <!-- 变成白底红框-->
        <style>
                .btn-delete:hover span{
                    color: #fff !important;
                 }
        </style>
        
        <div class="panel-body">
        
        

            <div class="table-wrapper"><div class="btn-toolbar"><div class="btn-group focus-btn-group"><button class="btn btn-default"><span class="fa-asterisk"></span></button></div><div class="btn-group dropdown-btn-group pull-right"><ul class="dropdown-menu"><li class="checkbox-row"><div class="cbr-replaced cbr-checked"><div class="cbr-input"><input type="checkbox" name="toggle-id7d9ed170d5676-col-1" id="toggle-id7d9ed170d5676-col-1" value="id7d9ed170d5676-col-1" class="cbr cbr-done"></div><div class="cbr-state"><span></span></div></div> <label for="toggle-id7d9ed170d5676-col-1">Last Trade</label></li><li class="checkbox-row"><div class="cbr-replaced cbr-checked"><div class="cbr-input"><input type="checkbox" name="toggle-id7d9ed170d5676-col-2" id="toggle-id7d9ed170d5676-col-2" value="id7d9ed170d5676-col-2" class="cbr cbr-done"></div><div class="cbr-state"><span></span></div></div> <label for="toggle-id7d9ed170d5676-col-2">Trade Time</label></li><li class="checkbox-row"><div class="cbr-replaced cbr-checked"><div class="cbr-input"><input type="checkbox" name="toggle-id7d9ed170d5676-col-3" id="toggle-id7d9ed170d5676-col-3" value="id7d9ed170d5676-col-3" class="cbr cbr-done"></div><div class="cbr-state"><span></span></div></div> <label for="toggle-id7d9ed170d5676-col-3">Change</label></li><li class="checkbox-row"><div class="cbr-replaced cbr-checked"><div class="cbr-input"><input type="checkbox" name="toggle-id7d9ed170d5676-col-4" id="toggle-id7d9ed170d5676-col-4" value="id7d9ed170d5676-col-4" class="cbr cbr-done"></div><div class="cbr-state"><span></span></div></div> <label for="toggle-id7d9ed170d5676-col-4">Prev Close</label></li><li class="checkbox-row"><div class="cbr-replaced cbr-checked"><div class="cbr-input"><input type="checkbox" name="toggle-id7d9ed170d5676-col-5" id="toggle-id7d9ed170d5676-col-5" value="id7d9ed170d5676-col-5" class="cbr cbr-done"></div><div class="cbr-state"><span></span></div></div> <label for="toggle-id7d9ed170d5676-col-5">Open</label></li><li class="checkbox-row"><div class="cbr-replaced cbr-checked"><div class="cbr-input"><input type="checkbox" name="toggle-id7d9ed170d5676-col-6" id="toggle-id7d9ed170d5676-col-6" value="id7d9ed170d5676-col-6" class="cbr cbr-done"></div><div class="cbr-state"><span></span></div></div> <label for="toggle-id7d9ed170d5676-col-6">Bid</label></li></ul></div></div><div class="table-responsive" data-pattern="priority-columns" data-focus-btn-icon="fa-asterisk" data-sticky-table-header="true" data-add-display-all-btn="true" data-add-focus-btn="true">
            
                <div class="sticky-table-header fixed-solution" style="height: 44px; visibility: hidden; width: auto; top: -1px;"><table cellspacing="0" class="table table-small-font table-bordered table-striped" id="id7d9ed170d5676-clone">
                </table></div>
                
                
                <table cellspacing="0" class="table table-small-font table-bordered table-striped">
                
                
                <tbody id="tbodyfrom" class="table table-bordered">
                <tr>
                    <th >ID</th>
                    <th>姓名</th>
                    <th>手机号</th>
                    <th>邮箱</th>
                    <th>文章发布数量</th>
                    <th>修改</th>
                    <th>删除律师</th>
               </tr>
              
                </tbody>
            </table>
        </div>
    </div>
</div>

<script>



</script>
     
     `,
    //在这里进行操作
    htmlMagic: async function (document1) {



        document1.getElementById("indexHtml1").innerHTML = this.html; //需要跳转的地址


        let newVar = await ajax1.ajaxPromise("attorney/from_attorneySum_message", "post", "", $);
            console.log(newVar);
        if(newVar.code==1){
            let fromlog="";
            for(let i=0;i<newVar.data.length; i++){
                fromlog=fromlog+`
                 <tr>
                    <td style="width:10%;">${i + 1}</td>
                    <td style="width:20%;">${newVar.data[i].name}</td>
                    <td style="width:15%;">${newVar.data[i].phone}</td>
                    <td style="width:15%;">${newVar.data[i].mail}</td>
                  <td style="width:5%;text-align: center; vertical-align: middle; color: #00e367">${newVar.data[i].count}</td>
                
                   <td style="cursor: pointer;">
                       <button type="button" class="btn btn-outline-danger btn-delete" data-toggle="modal" data-target="#deleteModal">
                          <span style="color: #3448a8; font-size: 18px;" onclick="update_article(${newVar.data[i].id})">修改</span>
                       </button>
                   </td>
                    
              
                <td style="cursor: pointer;">
                    <button type="button" class="btn btn-danger btn-delete" data-toggle="modal" data-target="#deleteModal">
                        <span style="color: #f6074f; font-size: 18px;" onclick="delete_article(${newVar.data[i].id},'${newVar.data[i].name}',this)"> 彻底删除</span>
                    </button>
                </td>
                
                 </tr>
                `
            }
            document1.getElementById("tbodyfrom").innerHTML+=fromlog; //放置到表单里面


           // 修改律师
           window.update_article=function (){
               alert("修改")
           }

            //删除律师
            window.delete_article=async function (id,name,this_article) {
                if (confirm(`确定要删除律师:  ${name}    吗?`)) { //如果点击了全都

                    let lawyer_id = {
                        data: {
                            "id": id
                        }

                    }

                    let sc = await ajax1.ajaxPromise("attorney/delete_attorney_id", "post", lawyer_id, $)
                    if (sc.code == 1) {//清理前端的
                        this_article.parentNode.parentNode.parentNode.parentNode.removeChild(this_article.parentNode.parentNode.parentNode); //删除当前记录
                    }

                    //设置弹窗内容
                    document.getElementById("show_message").innerHTML=`
                               <h2 class="text-center mb-4">${sc.data}</h2>
                            <hr>
                            <hr>
                          `;
                    document.getElementById('modal-overlay').style.display = 'flex';//显示弹窗

                }

            }

        }else{
           alert(newVar.msg);
        }





    }


};


export default MBRl;
