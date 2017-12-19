Vue.component( 'detail-list', {
  props: ['details'],
  template: '<section id="details">' +
              '<div class="container">' +
                '<div class="column flex-1">' +
                  '<h2>Framework details</h2>' +
                  '<detail v-for="(detail, index) in details"' +
                    ' :key="index"' +
                    ' :detail="detail"></detail>' +
                '</div>' +
              '</div>' +
            '</section>',
  data: function() {
    return {};
  }
} );
