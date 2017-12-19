Vue.component( 'hero', {
  props: ['content'],
  template: '<header class="hero">' +
              '<section class="container">' +
                '<div class="column flex-1">' +
                  '<h1>{{ content.header }}</h1>' +
                  '<p>{{ content.subheader }}</p>' +
                  '<a href="https://github.com/LearnWithMorsels/Morsels/releases?label=latest">' +
                    //'<img src="https://img.shields.io/github/release/LearnWithMorsels/Morsels.svg?style=for-the-badge&logo=github">' +
                  '</a>' +
                  '<a href="https://github.com/LearnWithMorsels/Morsels/releases?label=latest" class="button inverted">Get started</a>' +
                '</div>' +
                '<div class="column width-1-3">' +
                  '<div class="card">' +
                    '<p>CARD</p>' +
                  '</div>' +
                '</div>' +
              '</section>' +
            '</header>',
  data: function() {
    return {};
  }
} );
