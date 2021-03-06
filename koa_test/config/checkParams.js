// 校验前端传过来的参数，校验不通过则抛出异常
const CatchError = require('./catchError');

class check{
    constructor(ctx, ...paramsArr) {
        this.ctx = ctx;
        this.paramsArr = paramsArr;
    }

    // 验证字段名是否正确
    checkParamName() {
        const flag = this.paramsArr.indexOf(undefined)
        if(flag !== -1) {
            throw new CatchError('请求参数错误', 400);
        }
    }

    // 验证用户输入是否为空
    checkEmptyVal(list) {
        const index = this.paramsArr.indexOf('');
        if(index !== -1) {
            throw new CatchError(list[index], 202);
        }
    }

}

class chRegister extends check{
    chRegisterFun() {
        const list = ['姓名不能为空', '密码不能为空'];
        super.checkParamName();
        super.checkEmptyVal(list);
    }
}

module.exports = { check, chRegister};