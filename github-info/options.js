new Vue({
    el: '#app',
    data: {
        showLogin: true,
    },
    methods: {
        saveOptions() {
            localStorage.setItem('showLogin', this.showLogin);
            window.close();
        }
    },
    created: function () {
        let v = localStorage.getItem('showLogin');
        if (v === 'false') this.showLogin = false;
    }
});