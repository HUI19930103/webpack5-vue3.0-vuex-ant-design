interface mutationObj {
    addCount: Function, // 改变插件加载状态
    [propName: string]: any
}

const mutations: mutationObj = {
    addCount(state) {
        state.counter += 1;
    }
}

export default mutations;