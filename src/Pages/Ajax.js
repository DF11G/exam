import * as value from '../enums/AjaxResponseEnums'
import { message } from 'antd';
export function ajaxReturn(n, method) {
    switch (n) {
        case value.UNKNOWN_WRONG:
            message.error('未知错误')
            break
        case value.SUCCESS:
            message.success('成功')
            method()
            break
    }
}
