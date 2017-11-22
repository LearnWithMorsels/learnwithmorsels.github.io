Vue.component( 'navigation', {
    props: ['content'],
    template: '<nav class="site-navigation">' +
                    '<a v-for="item in content"' +
                        ' :href="itemLink(item)">{{ item.title }}</a>' +
                '</nav>',
    data: function() {
        return {
        };
    },
    methods: {
        itemLink: function( item ) {
            return item.href || ( '#' + item.id );
        }
    }
} );