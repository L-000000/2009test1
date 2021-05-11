let name = "zhangsna"
let age = 22;

let obj = {
    name,
    age,
    sex: "男"
}

let hello = function(){
    console.log("Hello1111");
}

// 将当前模块，供其他模块使用
export{obj,hello}   