<div class="app">
    <c-menu v-with="menuData"></c-menu>
    <button
        v-on="click: onClick"
    >Active item: {{menuData.activeIndex}} {{menuData.items[menuData.activeIndex].name}}</button>
</div>