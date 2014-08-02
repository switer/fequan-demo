
require('c-menu');

module.exports = Vue.extend({
    data: {
        menuData: {
            items: [{name: 'news'},{name: 'game'},{name: 'live'}],
            activeIndex: 0
        }
    },
    template: __inline('app.tpl'),
    ready: function () {
        // TODO
    },
    methods: {
        onClick: function () {
            this.$data.menuData.activeIndex ++;
        }
    }
})


