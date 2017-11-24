Vue.component( 'feature', {
    props: ['feature'],
    template: '<div class="feature">' +
                    '<h3>{{ feature.title }}</h3>' +
                    '<div v-html="feature.body"></div>' +
                '</div>',
    data: function() {
        return {};
    }
} );