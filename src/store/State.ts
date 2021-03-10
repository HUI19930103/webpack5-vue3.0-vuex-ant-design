/*
 * @description: 全局状态管理
 * @Author: Huanghui
 * @Date: 2021-03-10 11:05:21
 */

interface stateObj {
    counter: number,
    [propName: string]: any
}

const state: stateObj = {
    counter: 0
}

export default state;