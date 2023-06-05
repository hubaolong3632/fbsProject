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

    ipReturn:function (){
        return ip;
    },



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


                    if(data.code==9090){ //如果秘钥过期等等
                        console.log("测试1:")
                        console.log(data.code)
                        window.location.href="login.html"
                    }



                    resolve(data);
                },
                error: function (error) {
                    alert("获取资源错误,可能接口损坏")
                    console.log(error)
                    reject(error);
                }
            });
        });

        return pro;

    },

    //ajax 对于文件请求 把 processData和 contentType设置成false formData包含文件数据，而processData和contentType选项设置为false以确保正确处理数据。
    ajaxFile:function (url,method,param,$) {
            let pro = new Promise(function(resolve, reject) {
                $.ajax({
                     url: ip + url,//请求ip加上请求地址
                    type: method,

                    dataType: "json",
                    data: param.data || '',
                    processData: false,
                    contentType: false,

                    headers: {
                        "Authorization":localStorage.getItem('key'),  //设置请求key

                    },


                    success: function (data) {
                        if(data.code==9090){ //如果秘钥过期等等
                            console.log("测试1:")
                            console.log(data.code)
                            window.location.href="login.html"
                        }
                        resolve(data);
                    },
                    error: function (error) {
                        alert("文件上传错误")
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
                    alert("登入接口错误")
                    console.log(error)
                    reject(error);
                }
            });
        });

        return pro;
    }
}

export default ajax;