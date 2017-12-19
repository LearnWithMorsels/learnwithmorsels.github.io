Vue.component( 'navigation', {
  props: ['content'],
  template: '<nav class="site-navigation">' +
              '<section class="container flex-justify-end">' +
                '<a v-for="item in content"' +
                  ' :href="itemLink(item)"' +
                  ' class="column">{{ item.title }}</a>' +
              '</section>' +
            '</nav>',
  data: function() {
    return {};
  },
  methods: {
    itemLink: function( item ) {
      return item.href || ( '#' + item.id );
    }
  }
} );
