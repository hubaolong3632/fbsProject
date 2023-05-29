//主页右侧替换(流量界面)
let MBRl = {//MagicBoardReplacement  MBRL  魔板替换
    //在这里写html代码
    html: `
     <!--  用户信息，通知和菜单栏 -->
 <div class="row" id="index">
 <div class="col-sm-6">
     <div class="xe-widget xe-counter xe-counter-purple" data-count=".num" data-from="1" data-to="20"  data-duration="3" data-easing="false">
         <div class="xe-icon">
                <i class="linecons-user"></i>
         </div>
         <div class="xe-label">
                <strong class="num">1k</strong>
                 <span>今日访问量</span>
         </div>
     </div>



 </div>
 
 
 <div class="col-sm-6">
     <div class="xe-widget xe-counter xe-counter-purple" data-count=".num" data-from="1" data-to="117" data-duration="3" data-easing="false">
     <div class="xe-icon">
          <i class="linecons-user"></i>
     </div>
          <div class="xe-label">
               <strong class="num">1k</strong>
                 <span>今日点击量</span>
          </div>
      </div>

 </div>
 </div>
     
     
     
     `,

    //在这里进行操作
    htmlMagic: async function (document1) {

        document1.getElementById("indexHtml1").innerHTML = this.html; //需要跳转的地址

    }


};


export default MBRl;
