Vue.component( 'features', {
    props: ['features'],
    template: '<section id="features">' +
                    '<h2>Features</h2>' +
                    '<feature v-for="(feature, index) in features"' +
                        ' :key="index"' +
                        ' :feature="feature"></feature>' +
                '</section>',
    data: function() {
        return {};
    }
} );