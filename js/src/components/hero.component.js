Vue.component( 'hero', {
    props: ['content'],
    template: '<header>' +
                    '<h1>{{ content.header }}</h1>' +
                    '<p>{{ content.subheader }}</p>' +
                    '<a href="https://github.com/LearnWithMorsels/Morsels/releases?label=latest">' +
                        '<img src="https://img.shields.io/github/release/LearnWithMorsels/Morsels.svg?style=for-the-badge&logo=github">' +
                    '</a>' +
                    '<br>' +
                    //'<a href="http://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">' +
                    //    '<img src="https://img.shields.io/github/license/LearnWithMorsels/Morsels.svg?style=for-the-badge">' +
                    //'</a>' +
                    '<a href="https://travis-ci.org/LearnWithMorsels/Morsels" target="_blank">' +
                        '<img src="https://img.shields.io/travis/LearnWithMorsels/Morsels.svg?style=for-the-badge">' +
                    '</a>' +
                    '<br>' +
                    '<a href="https://gitter.im/MorselsElearning/Lobby" target="_blank">' +
                        '<img src="https://img.shields.io/gitter/room/MorselsElearning/Lobby.svg?style=for-the-badge&logo=gitter-white">' +
                    '</a>' +
                '</header>',
    data: function() {
        return {
        };
    }
} );