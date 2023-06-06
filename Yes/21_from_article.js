import ajax1 from './ajax.js'
import update_article_1  from '../Yes/1_update_article.js'

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
                    <li class="my-sidebar-menu-header" onclick="init_init()" style="cursor: pointer;">全部栏目</li>
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
                <input id="text_from_input" type="text"style="width: 300px;border-radius: 5px;border: 1px solid slategray;">
              </div>
              <button onclick="fromArticle_title_Admin(this)"  style="margin-left: 50px;width: 100px;background-color: rgb(255, 255, 255);border: 0.5px solid;border-radius: 5px;">查询</button>
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
        await init_init(); //执行初始化





        //数据模板
        function generateTableHTML(dataAdd) {

            let html = '';
            const buttonStyle = 'padding: 0;margin: 0 10px;background-color: transparent;border: none;';

            for (let i = 0; i < dataAdd.length; i++) {
                const { id, title, classesColumn, date, state } = dataAdd[i];
                const buttonColor = (state === '已发布') ? '#55ff00' : '#d75a7b';
                html += `
              <tr>
                <td style="padding: 10px;">${id}</td>
                <td style="padding: 10px;">${title}</td>
                <td style="padding: 10px;">${classesColumn}</td>
                <td style="padding: 10px;"><span style="margin-left: 10px;">${date}</span></td>
                <td style="padding: 10px;">
                  <button onclick="state_update(this)" style="background-color:${buttonColor};color:#111010;border:1px solid green;border-radius: 10px;margin-left: 10px;">${state}</button>
                </td>
                <td>
                  <button style="${buttonStyle}color: blue;" onclick="update_article_by(this)">编辑</button>
                </td>
                <td>
                  <button style="${buttonStyle}color: red;" onclick="remove_article(this)">彻底删除</button>
                </td>
              </tr>`;
            }
            return html;
        }
        function modele(pageSize, currentPage, totalPage, start, end, dataAdd) {
            // 计算需要生成的数据
            const data = dataAdd.slice(start, end);
            // 动态生成表格内容
            const tableHTML = generateTableHTML(data);
            return tableHTML;
        }
        //数据模板


        //修改文章
        window.update_article_by= async function (this_article){
            let id = this_article.parentNode.parentNode.querySelectorAll("td")[0].innerText;
            await update_article_1.htmlMagic(document,id);

        }

        //设置文章状态
        window.state_update=  async function (this_article) {


            let id = this_article.parentNode.parentNode.querySelectorAll("td")[0].innerText;
            let title = this_article.parentNode.parentNode.querySelectorAll("td")[1].innerText;
            let state = this_article.parentNode.parentNode.querySelectorAll("td")[4].innerText;


            let article_delete = {
                data: {
                    "id": id,
                    "state":state=="已发布"?"待发布":"已发布"
                }

            }
            console.log(article_delete)

            if (confirm(`确定修改文章:  ${title}   状态为  ${article_delete.data.state}  吗?`)) { //如果点击了修改
                let sc = await ajax1.ajaxPromise("artile/update_id__state", "post", article_delete, $)
                console.log(sc)
                if (sc.code == 1) {
                    if(article_delete.data.state=="已发布"){
                        this_article.style.backgroundColor = "#55ff00";
                        this_article.style.color = "#111010";
                        this_article.style.border = "1px solid green";
                        this_article.style.borderRadius = "10px";
                        this_article.style.marginLeft = "10px";
                        this_article.innerText = "已发布";
                    }else{
                        this_article.style.backgroundColor = "#d75a7b";
                        this_article.style.color = "#111010";
                        this_article.style.border = "1px solid green";
                        this_article.style.borderRadius = "10px";
                        this_article.style.marginLeft = "10px";
                        this_article.innerText = "待发布";
                    }

                }else{
                    alert("修改失败!")
                }
            }

        }

        //彻底删除代码
       window.remove_article=  async function (this_article) {

           let id = this_article.parentNode.parentNode.querySelectorAll("td")[0].innerText;
           let title = this_article.parentNode.parentNode.querySelectorAll("td")[1].innerText;

           let article_delete = {
               data: {
                   "id": id
               }

           }

           if (confirm(`确定要删除文章:  ${title}    吗?`)) { //如果点击了全都
               let sc = await ajax1.ajaxPromise("artile/delete_article", "post", article_delete, $)
               if (sc.code == 1) {
                   this_article.parentNode.parentNode.parentNode.removeChild(this_article.parentNode.parentNode); //删除当前记录
               }
               alert(sc.data);//删除文章输出状态
           }

       }


        //模糊查询
        window.fromArticle_title_Admin =  async function (from){

         let text_from_input=   document.getElementById("text_from_input").value;
         console.log(text_from_input)

            let text_from={
                data:{
                    "title":text_from_input
                }
            }

            let promise = await ajax1.ajaxPromise("artile/fromArticle_title_Admin", "post", text_from, $);//第一个的全部栏目

            console.log(promise);

            init_article(promise);


        }


        //初始化和数据替换
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


           // 数据魔板替换
           let html= modele( pageSize,currentPage ,totalPage ,start   ,end   , dataAdd);
            $('#tableBody').html(html);

            // 动态生成分页器
            let paginationHtml = '';
            if(totalPage > 1){ // 总页数大于1才显示分页器
                paginationHtml += `<li class="page-item"><a class="page-link" href="#" data-page="prev" >上一页</a></li>`;
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
                // 数据魔板替换
                let html= modele( pageSize,currentPage ,totalPage ,start   ,end   , dataAdd);
                $('#tableBody').html(html);
                // 动态生成分页器
                let paginationHtml = '';
                if(totalPage > 1){ // 总页数大于1才显示分页器
                    paginationHtml += `<li class="page-item"><a class="page-link" href="#" data-page="prev" style="padding-left:1%">上一页</a></li>`;
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

            document.getElementById("pagination").style="";

        }





    }


};


export default MBRl;
