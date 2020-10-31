
import { GET_USER_INF, LOG_OUT, PASSWORD_CHANGE, HISTORY_URL, QUESTION, QUESTION_TYPE } from './ActionType'

// 页面状态:
// 0 未登录
// 1 已登录,学生
// 2 已登录,老师
const dataState = {

    userPassword: '',//登录用户密码
    registerName: '',//注册用户名
    registerPassword: '',//注册用户密码
    registerType: '',//注册用户类型
    oldPassword: '',// 旧密码
    newPassword: '',// 新密码
    newPasswordAgain: '',// 新密码确认
    historyURL: '',//历史链接
    setPaperName: '',//设定试卷名字
    setPaperIntroduction: '',//设定试卷简介
    setPaperTime: '',//设定试卷时间
    setStuInf: '',//录入学生信息
    question: 0,//当前题目的类型。问答为0,选择为1
    questionType: 0,//当前题目的类型，单个题目为0，复合题为1
    setPaperLength: 2,//正在编辑的试卷总长度
    curPaperPage: 1,//当前所处页面题号
    curPaperID: '',//当前所处试卷ID
    complexQestionID: '',//复合题ID
    simpleQuestionID: '',//单个题ID
    titleValue: '',//问答题标题
    materialValue: '',//问答题材料
    solutionValue: '',//问答题答案
    complexTitleValue: '',//复合题标题
    complexMaterialValue: '',//复合题材料
    isEditComplexQuestion: 0,//是否在编辑复合题,0为不编辑,1为正在编辑
    //
    name: null,//登录用户姓名
    userType: 1,//用户类型
}

export default (state = dataState, action) => {
    if (action.type === GET_USER_INF) { // 登录获取用户名 更改登录状态
        const newState = JSON.parse(JSON.stringify(state))
        newState.name = action.userInfo.name
        newState.userType = action.value
        return newState
    } else if (action.type === LOG_OUT) { // 登出修改用户状态
        const newState = JSON.parse('{}');
        newState.name = null
        return newState
    } else if (action.type === PASSWORD_CHANGE) { //清除修改密码缓存
        const newState = JSON.parse(JSON.stringify(state))
        newState.oldPassword = ''
        newState.newPassword = ''
        newState.newPasswordAgain = ''
        return newState
    } else if (action.type === HISTORY_URL) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.historyURL = action.url
        return newState
    } else if (action.type === QUESTION) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.question = action.value
        return newState
    } else if (action.type === QUESTION_TYPE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.questionType = action.value
        return newState
    }
    return state
}