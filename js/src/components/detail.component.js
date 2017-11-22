Vue.component( 'detail', {
    props: ['detail'],
    template: '<section>' +
                    '<h4>{{ detail.title }}</h4>' +
                    '<div v-html="detail.body"></div>' +
                '</section>',
    data: function() {
        return {};
    }
} );