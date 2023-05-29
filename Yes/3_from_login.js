import ajax  from '../Yes/ajax.js' //网站访问量
//主页右侧替换(流量界面)
let MBRl = {//MagicBoardReplacement  MBRL  魔板替换
    //在这里写html代码
    html: `
  <div class="col-md-12">

    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">当前账号登入日志</h3>

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
        <div class="panel-body">

            <div class="table-wrapper"><div class="btn-toolbar"><div class="btn-group focus-btn-group"><button class="btn btn-default"><span class="fa-asterisk"></span>日志</button></div><div class="btn-group dropdown-btn-group pull-right"><ul class="dropdown-menu"><li class="checkbox-row"><div class="cbr-replaced cbr-checked"><div class="cbr-input"><input type="checkbox" name="toggle-id7d9ed170d5676-col-1" id="toggle-id7d9ed170d5676-col-1" value="id7d9ed170d5676-col-1" class="cbr cbr-done"></div><div class="cbr-state"><span></span></div></div> <label for="toggle-id7d9ed170d5676-col-1">Last Trade</label></li><li class="checkbox-row"><div class="cbr-replaced cbr-checked"><div class="cbr-input"><input type="checkbox" name="toggle-id7d9ed170d5676-col-2" id="toggle-id7d9ed170d5676-col-2" value="id7d9ed170d5676-col-2" class="cbr cbr-done"></div><div class="cbr-state"><span></span></div></div> <label for="toggle-id7d9ed170d5676-col-2">Trade Time</label></li><li class="checkbox-row"><div class="cbr-replaced cbr-checked"><div class="cbr-input"><input type="checkbox" name="toggle-id7d9ed170d5676-col-3" id="toggle-id7d9ed170d5676-col-3" value="id7d9ed170d5676-col-3" class="cbr cbr-done"></div><div class="cbr-state"><span></span></div></div> <label for="toggle-id7d9ed170d5676-col-3">Change</label></li><li class="checkbox-row"><div class="cbr-replaced cbr-checked"><div class="cbr-input"><input type="checkbox" name="toggle-id7d9ed170d5676-col-4" id="toggle-id7d9ed170d5676-col-4" value="id7d9ed170d5676-col-4" class="cbr cbr-done"></div><div class="cbr-state"><span></span></div></div> <label for="toggle-id7d9ed170d5676-col-4">Prev Close</label></li><li class="checkbox-row"><div class="cbr-replaced cbr-checked"><div class="cbr-input"><input type="checkbox" name="toggle-id7d9ed170d5676-col-5" id="toggle-id7d9ed170d5676-col-5" value="id7d9ed170d5676-col-5" class="cbr cbr-done"></div><div class="cbr-state"><span></span></div></div> <label for="toggle-id7d9ed170d5676-col-5">Open</label></li><li class="checkbox-row"><div class="cbr-replaced cbr-checked"><div class="cbr-input"><input type="checkbox" name="toggle-id7d9ed170d5676-col-6" id="toggle-id7d9ed170d5676-col-6" value="id7d9ed170d5676-col-6" class="cbr cbr-done"></div><div class="cbr-state"><span></span></div></div> <label for="toggle-id7d9ed170d5676-col-6">Bid</label></li></ul></div></div><div class="table-responsive" data-pattern="priority-columns" data-focus-btn-icon="fa-asterisk" data-sticky-table-header="true" data-add-display-all-btn="true" data-add-focus-btn="true">

                <div class="sticky-table-header fixed-solution" style="height: 44px; visibility: hidden; width: auto; top: -1px;"><table cellspacing="0" class="table table-small-font table-bordered table-striped" id="id7d9ed170d5676-clone">
                  
                </table></div><table cellspacing="0" class="table table-small-font table-bordered table-striped">
                <tbody id="tbodyfrom">
                <tr>
                    <th>ID</th>
                    <th>日期</th>
                    <th>登入IP</th>
                    <th>用户名</th>
               </tr>
              
                </tbody>
            </table>
        </div>
    </div>
</div>
     
     `,
    //在这里进行操作
    htmlMagic: async function (document1) {
        document1.getElementById("indexHtml1").innerHTML = this.html; //需要跳转的地址


        let newVar = await ajax.ajaxPromise("fromLog", "post", "", $);

        if(newVar.code==1){
            let fromlog="";
            for(let i=0;i<newVar.data.length; i++){
                fromlog=fromlog+`
                 <tr>
                    <td>${i+1}</td>
                    <td>${newVar.data[i].date}</td>
                    <td>${newVar.data[i].ip}</td>
                    <td>${newVar.data[i].name}</td>
                 </tr>
                `
            }

            document1.getElementById("tbodyfrom").innerHTML+=fromlog; //放置到表单里面

        }else{
            console.log(newVar.msg);
        }





    }


};


export default MBRl;
