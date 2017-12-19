Vue.component( 'feature', {
  props: ['feature', 'flipped'],
  template: '<div class="container flex-align-center feature">' +
              '<div :class="classes.image">' +
                '<img src="http://via.placeholder.com/400x400">' +
              '</div>' +
              '<div :class="classes.text">' +
                '<h3>{{ feature.title }}</h3>' +
                '<div v-html="feature.body"></div>' +
              '</div>' +
            '</div>',
  data: function() {
    return {
      classes: {
        image: {
          column: true,
          'flex-1': true,
          'flex-order-2': this.flipped
        },
        text: {
          column: true,
          'flex-2': true,
          'flex-order-1': this.flipped
        }
      }
    };
  }
} );
