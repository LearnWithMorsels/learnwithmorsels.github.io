Vue.component('hero', {
    template: '<header>' +
                    '<h1>{{ welcome }}</h1>' +
                '</header>',
    data: function() {
        return {
            welcome: 'Welcome to Morsels!'
        };
    }
});