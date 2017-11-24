Vue.component( 'detail', {
    props: ['detail'],
    template: '<div class="detail">' +
                    '<h4>{{ detail.title }}</h4>' +
                    '<div v-html="detail.body"></div>' +
                '</div>',
    data: function() {
        return {};
    }
} );