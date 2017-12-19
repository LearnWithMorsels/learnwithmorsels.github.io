Vue.component( 'features', {
  props: ['features'],
  template: '<section id="features">' +
              '<div class="container">' +
                '<div class="column full">' +
                  '<h2>Features</h2>' +
                '</div>' +
              '</div>' +
              '<feature v-for="(feature, index) in features"' +
                ' :key="index"' +
                ' :feature="feature"' +
                ' :flipped="index % 2 === 0"></feature>' +
            '</section>',
  data: function() {
    return {};
  }
} );
