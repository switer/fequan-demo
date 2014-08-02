<div class="c-menu">
    <a href="{{href}}"
        v-repeat="items"
        v-on="click: onRedirect"
        v-class="active: $index == activeIndex"
    >{{name}}</a>
</div>