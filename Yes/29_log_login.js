//主页右侧替换(流量界面)
let MBRl = {//MagicBoardReplacement  MBRL  魔板替换
    //在这里写html代码
    html: `

           查看查看操作日志
     
     
     `,

    //在这里进行操作
    htmlMagic: async function (document1) {

        document1.getElementById("indexHtml1").innerHTML = this.html; //需要跳转的地址







    }


};


export default MBRl;
