// 组件

const template = `<button @click="count++">User clicked {{count}} times</button>`

export default {
    data() {
        return {
            count: 0,
        };
    },
    template,
};