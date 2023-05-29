import ajax1 from './ajax.js'

//主页右侧替换
//MagicBoardReplacement  MBRL  魔板替换
let MBRl={
    //在这里防止html代码
     html:`
     
     
     `,

    //在这里进行操作
    htmlMagic : async function (document1) {

        let param = { //数据的提交区域
            data: { //json格式传输
                "username": "11",
                "password": "2222",
            },
        }

        //ajax请求
        let json = await ajax1.ajaxPromise("login1", 'post', param, $);




        document1.getElementById("indexHtml1").innerHTML=this.html; //需要跳转的地址

    }



};


export default MBRl;
