// 验证密码复杂性是网站在用户输入初始密码后需要进行的一步操作。
//现在，小A的网站需要验证密码的复杂性，小A对一个足够复杂的密码拥有如下要求：

// 1.要有数字

// 2.要有大写字母

// 3.要有小写字母

// 4.要有特殊字符

// 5.长度不得小于8

// 现在给你密码，请你判断这个密码是否足够复杂

function complex(str){
    // let rep=/(a-z)+(A-Z)+(\W)+(0-9)+]{8}/;
    let rep=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d$@$!%*?&]{8,}/;

    let result=rep.exec(str);
    console.log(result);
}
complex('!tylyt6924')