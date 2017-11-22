Vue.component('hero', {
    template: '<header>{{ welcome }}</header>',
    data: function() {
        return {
            welcome: 'Welcome to Morsels!'
        };
    }
});