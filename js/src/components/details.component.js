Vue.component( 'detail-list', {
    props: ['details'],
    template: '<section id="details">' +
                    '<h2>Framework details</h2>' +
                    '<detail v-for="(detail, index) in details"' +
                        ' :key="index"' +
                        ' :detail="detail"></detail>' +
                '</section>',
    data: function() {
        return {};
    }
} );