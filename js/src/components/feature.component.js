Vue.component( 'feature', {
    props: ['feature'],
    template: '<section>' +
                    '<h3>{{ feature.title }}</h3>' +
                    '<div v-html="feature.body"></div>' +
                '</section>',
    data: function() {
        return {};
    }
} );