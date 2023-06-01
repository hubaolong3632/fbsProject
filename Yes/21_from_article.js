import ajax1 from './ajax.js'
//主页右侧替换(流量界面)
let MBRl = {//MagicBoardReplacement  MBRL  魔板替换
    //在这里写html代码
    html:` 
  <style>


    .parent-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .my-sidebar-submenu {
      box-shadow: none;
      border: none;
    }
    li {
      width: 100%;
    }

  </style>
 
    <div class="parent-wrapper">
          <div class="col-sm-3 mailbox-right">
            <div class="panel panel-default">



              <div style="width: 250px; background-color: #fdfdfd;" >
                <div class="my-sidebar"  style="background-color: #fdfdfd;">
                  <ul class="my-sidebar-menu" style="background-color: #fdfdfd;">
                    <li class="my-sidebar-menu-header" onclick="init_init()">全部栏目</li>
                    <li class="my-sidebar-dropdown" style="background-color: #fdfdfd;">
                      <a href="#">新闻<i class="fa fa-caret-down"></i></a>
                      <ul class="my-sidebar-submenu">
                        <li><a href="#"  onclick="fromArticleTitle(this)">新闻</a></li>
                      </ul>
                    </li>




                    <li class="my-sidebar-dropdown">
                      <a href="#">业绩<i class="fa fa-caret-down"></i></a>
                      <ul class="my-sidebar-submenu">
                        <li><a href="#" onclick="fromArticleTitle(this)">企业合规</a></li>
                        <li><a href="#" onclick="fromArticleTitle(this)">知识产权</a></li>
                        <li><a href="#" onclick="fromArticleTitle(this)">信用管理</a></li>
                      </ul>
                    </li>

                    <li class="my-sidebar-dropdown">
                      <a href="#" >观点<i class="fa fa-caret-down"></i></a>
                      <ul class="my-sidebar-submenu">
                        <li><a href="#" onclick="fromArticleTitle(this)">企业合规</a></li>
                        <li><a href="#" onclick="fromArticleTitle(this)">知识产权</a></li>
                        <li><a href="#" onclick="fromArticleTitle(this)">信用管理</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

             <div class="col-sm-9 mailbox-right">
               <div class="panel panel-default">
               <div style="width: calc(100% - 100px);margin-left: 30px;">
            <div>
              <div style="display: inline-block;">
                <p style="display: inline-block; margin-right: 10px;">标题:</p>
                <input type="text"style="width: 300px;border-radius: 5px;border: 1px solid slategray;">
              </div>
              <button style="margin-left: 50px;width: 100px;background-color: rgb(255, 255, 255);border: 0.5px solid;border-radius: 5px;">查询</button>
            </div>

            <!-- 表格容器 -->
            <table class="table"style="width: 100%;">
              <thead>
              <tr>
                <th style="" >ID</th>
                <th style="">标题</th>
                <th style="">栏目</th>
                <th style="">发布日期</th>
                <th style="">状态</th>
                <th style="">编辑</th>
                <th style="color: red">删除</th>
              </tr>
              </thead>
              <tbody id="tableBody">
              <!-- 动态生成表格内容 -->
              </tbody>
            </table>

            <!-- 分页器容器 -->
            <nav>
              <ul class="pagination" id="pagination" style="height: 40px;overflow: auto;padding-left:80%;">
                <!-- 动态生成分页器 -->
              </ul>
            </nav>
          </div>
               </div>
            </div>
   </div>


 `,
    //在这里进行操作
    htmlMagic: async function (document1) {
        document1.getElementById("indexHtml1").innerHTML = this.html; //需要跳转的地址






        //查询文章
        window.fromArticleTitle=async function (zj) {
            // init_article("1");
            console.log(zj.innerText)
            //
            let element = zj.parentNode.parentNode.parentNode.querySelector("a").innerText; //获取父亲的父亲的父亲的a标签
            //
            console.log(element);

            let classesColumn = { //数据的提交区域
                data: { //json格式传输
                    "column": zj.innerText,//子节点
                    "classes":zj.parentNode.parentNode.parentNode.querySelector("a").innerText,  //父节点
                },
            }

            let promiseClassesColumn = await ajax1.ajaxPromise("artile/fromArticle_ClassesAndColumn_Admin", "post", classesColumn, $);
            init_article(promiseClassesColumn);

        }


        //初始化代码
        window.init_init=async function () {
            let promise = await ajax1.ajaxPromise("artile/from", "post", "", $);//第一个的全部栏目
            init_article(promise);
        }
        init_init(); //执行初始化


        function init_article(promise){

            let dataAdd = [];
            for(let data of promise.data) {
                for (let columnList of data.columnList) {
                    for (let articleList of columnList.articleList) {  //获取所有文章
                        articleList.classesColumn=data.classes+"-"+columnList.column;
                        dataAdd.push(articleList);
                    }
                }
            }

            // 模拟数据
            let pageSize = 10; // 每页显示的记录条数
            let currentPage = 1; // 当前页码
            let totalPage = Math.ceil(dataAdd.length / pageSize); // 总页数
            let start = (currentPage - 1) * pageSize; // 记录的起始位置
            let end = start + pageSize; // 记录的结束位置

            // 动态生成表格内容
            let html = '';
            for(let i = start; i < end; i++){
                if(i >= dataAdd.length) break;
                let item = dataAdd[i];
                if(item.state=="已发布"){
                    html += `<tr>
          <td style="padding: 10px;">${item.id}</td>
          <td style="padding: 10px;">${item.title}</td>
          <td style="padding: 10px;">${item.classesColumn}</td>
          <td style="padding: 10px;"><span style="margin-left: 10px;">${item.date}</span></td>
          <td style="padding: 10px;"><button style="background-color:#55ff00;color:#111010;border:1px solid green;border-radius: 10px;margin-left: 10px;">${item.state}</button></td>
          <td><button style="padding: 0;margin: 0 10px;background-color: transparent;border: none;color: blue;">编辑</button></td>
          <td><button style="margin-left: -10px;background-color: transparent;border: none;color: red; ">彻底删除</button></td>
        </tr>`;
                }else{
                    html += `<tr>
          <td style="padding: 10px;">${item.id}</td>
          <td style="padding: 10px;">${item.title}</td>
          <td style="padding: 10px;">${item.classesColumn}</td>
          <td style="padding: 10px;"><span style="margin-left: 10px;">${item.date}</span></td>
          <td style="padding: 10px;"><button style="background-color:#d75a7b;color:#111010;border:1px solid green;border-radius: 10px;margin-left: 10px;">${item.state}</button></td>
          <td><button style="padding: 0;margin: 0 10px;background-color: transparent;border: none;color: blue;">编辑</button></td>
          <td><button style="margin-left: -10px;background-color: transparent;border: none;color: red; ">彻底删除</button></td>
        </tr>`;
                }
            }
            //
            // html += ``;
            $('#tableBody').html(html);

            // 动态生成分页器
            let paginationHtml = '';
            if(totalPage > 1){ // 总页数大于1才显示分页器
                paginationHtml += `<li class="page-item"><a class="page-link" href="#" data-page="prev">上一页</a></li>`;
                for(let i = 1; i <= totalPage; i++){
                    if(i == currentPage){
                        paginationHtml += `<li class="page-item active"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
                    }else{
                        paginationHtml += `<li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
                    }
                }
                paginationHtml += `<li class="page-item"><a class="page-link" href="#" data-page="next">下一页</a></li>`;
            }
            $('#pagination').html(paginationHtml);



            // 分页器的点击事件
            $('#pagination').on('click', 'li a', function(e){
                e.preventDefault();
                let page = $(this).data('page');
                switch(page){
                    case 'prev':
                        if(currentPage > 1){
                            currentPage--;
                        }else{
                            alert('当前已经是第一页！');
                        }
                        break;
                    case 'next':
                        if(currentPage < totalPage){
                            currentPage++;
                        }else{
                            alert('当前已经是最后一页！');
                        }
                        break;
                    default:
                        currentPage = page;
                }
                start = (currentPage - 1) * pageSize;
                end = start + pageSize;
                // 动态生成表格内容
                let html = '';
                for(let i = start; i < end; i++){
                    if(i >= dataAdd.length) break;
                    let item = dataAdd[i];
                    html += `<tr>
          <td style="padding: 10px;">${item.id}</td>
          <td style="padding: 10px;">${item.title}</td>
          <td style="padding: 10px;">${item.classesColumn}</td>
          <td style="padding: 10px;"><span style="margin-left: 10px;">${item.date}</span></td>
          <td style="padding: 10px;"><button style="background-color:greenyellow;color:green;border:1px solid green;border-radius: 10px;margin-left: 10px;">${item.state}</button></td>
          <td><button style="padding: 0;margin: 0 10px;background-color: transparent;border: none;color: blue;">编辑</button></td>
          <td><button style="margin-left: -10px;background-color: transparent;border: none;color: #b0215e;">彻底删除</button></td>
        </tr>`;
                }
                $('#tableBody').html(html);
                // 动态生成分页器
                let paginationHtml = '';
                if(totalPage > 1){ // 总页数大于1才显示分页器
                    paginationHtml += `<li class="page-item"><a class="page-link" href="#" data-page="prev">上一页</a></li>`;
                    for(let i = 1; i <= totalPage; i++){
                        if(i == currentPage){
                            paginationHtml += `<li class="page-item active"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
                        }else{
                            paginationHtml += `<li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
                        }
                    }
                    paginationHtml += `<li class="page-item"><a class="page-link" href="#" data-page="next">下一页</a></li>`;
                }
                $('#pagination').html(paginationHtml);
            });

        }





    }


};


export default MBRl;
