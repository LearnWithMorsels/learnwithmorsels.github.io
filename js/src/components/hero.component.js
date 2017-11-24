Vue.component( 'hero', {
    props: ['content'],
    template: '<header class="hero">' +
                    '<section>' +
                        '<h1>{{ content.header }}</h1>' +
                        '<p>{{ content.subheader }}</p>' +
                        '<a href="https://github.com/LearnWithMorsels/Morsels/releases?label=latest">' +
                            '<img src="https://img.shields.io/github/release/LearnWithMorsels/Morsels.svg?style=for-the-badge&logo=github">' +
                        '</a>' +
                    '</section>' +
                '</header>',
    data: function() {
        return {
        };
    }
} );