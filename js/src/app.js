new Vue( {
    el: '#app',
    template: '<div>' +
                    '<navigation :content="nav"></navigation>' +
                    '<hero :content="content.hero"></hero>' +
                    '<features id="features" :features="content.features"></features>' +
                    '<detail-list id="details" :details="content.details"></detail-list>' +
                    '<foot></foot>' +
                '</div>',
    data: {
        nav: [
            {
                title: 'Features',
                id: 'features'
            },
            {
                title: 'More',
                id: 'details'
            },
            {
                title: 'Github',
                href: 'https://github.com/LearnWithMorsels/Morsels'
            }
        ],
        content: {
            hero: {
                header: 'Bitesize elearning',
                subheader: 'A new approach to learning'
            },
            features: [
                {
                    title: 'Bite-size elearning',
                    body: '<p>Inspired by the chunking theory Morsels uses cards to deliver your learning in manageable bite-size pieces. This memory-friendly approach to learning helps to keep your content, brief, relevant and easy to remember.</p>'
                },
                {
                    title: 'Engage your learners',
                    body: '<p>Morsels suite of intuitive interactions and components brings a fun and fresh experience that keeps learners active and engaged in your online training.</p>'
                },
                {
                    title: 'Learning reinforcement',
                    body: '<p>Morsels is the perfect platform for your reinforcement programme. In fact, it is designed to work in parallel with your existing elearning as a takeaway and support tool.</p>'
                },
                {
                    title: 'Learn on the go',
                    body: '<p>Optimised for all modern browsers, Morsels is both lightweight and intuitive in its design, making it the ideal companion for learning on the move.</p><p>With offline support, you\'ll never be left in the dark.</p>'
                },
                {
                    title: 'Create your own reference library',
                    body: '<p>Save important cards to your favourites so you can jump to them easily in the future.</p>'
                },
                {
                    title: 'Upcoming: Authoring tool',
                    body: '<p>Use the simple drag and drop interface to create courses, interactions, and quizzes. Preview and publish your content with ease, and publish in next to no time.</p>'
                }
            ],
            details: [
                {
                    title: 'Open source',
                    body: '<p>Be part of our community and let\'s make morsels better together</p>'
                },
                {
                    title: 'HTML5, responsive',
                    body: '<p>Modern markup ensures Morsels courses work well on all your devices. With responsive, touch-first methodologies, it is built for the many.</p>'
                },
                {
                    title: 'SCORM xAPI compliant',
                    body: '<p>?</p>'
                },
                {
                    title: 'Expandable',
                    body: '<p>Developers can easily add additional interactions to further the featureset of Morsels.</p>'
                },
                {
                    title: 'Fast',
                    body: '<p>Optimised for speed.</p>'
                },
                {
                    title: 'Multilingual',
                    body: '<p>Straight out of the box, Morsels offers multilingual and RTL language support.</p>'
                }
            ]
        }
    }
} );
