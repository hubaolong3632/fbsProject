// let ip="http://localhost:8080/api/";
// let ip="http://localhost:9090/";
let ip="http://00000.work:19099/";
let ajax={
    formateString:function(str,data){ //魔板匹配
        return str.replace(/\{#(\w+)#\}/g,function(match,key){
            return typeof data[key]===undefined?'':data[key]
        })
    }
    ,


    //ajax 对于其他所有请求 带上密钥
    ajaxPromise:function (url,method,param,$) {
            let pro = new Promise(function(resolve, reject) {
                $.ajax({
                     url: ip + url,//请求ip加上请求地址
                    type: method,

                    dataType: "json",
                    data: param.data || '',

                    headers: {
                        "Authorization":localStorage.getItem('key'),  //设置请求key

                    },


                    success: function (data) {
                        // console.log("当前:" + data.code)
                        // console.log(data)
                        // console.log("测试1:")
                        // console.log(data.data)

                        if(data.code==9090){ //如果秘钥过期等等
                            console.log("测试1:")
                            console.log(data.code)
                            window.location.href="login.html"
                        }


                        resolve(data);
                    },
                    error: function (error) {
                        alert("错误")
                        console.log(error)
                        reject(error);
                    }
                });
            });

        return pro;

    },

    //ajax用于登入的ajax不带密钥
    ajaxlogin:function (url, method, param, $) {
        let pro = new Promise(function(resolve, reject) {
            $.ajax({
                url: ip + url,//请求ip加上请求地址
                type: method,
                dataType: "json",
                data: param.data || '',
                success: function (data) {

                console.log("登入成功")

                    resolve(data);
                },
                error: function (error) {
                    alert("错误")
                    console.log(error)
                    reject(error);
                }
            });
        });

        return pro;
    }
}

export default ajax;