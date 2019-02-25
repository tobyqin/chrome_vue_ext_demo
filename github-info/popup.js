var popup = new Vue({
    el: '#app',
    data: {
        message: 'Not on github now.',
        userInfo: null
    },
    methods: {
        getUserId(url) {
            let userId = '';
            let regex = /github.com\/([^\/]*)\//;
            let found = url.match(regex);
            if (found && found.length > 1) {
                userId = found[1];
                this.getUserInfo(userId);
            }
        },
        getUserInfo(userId) {
            fetch('https://api.github.com/users/' + userId).then(res => {
                return res.json();
            }).then(json => {
                    this.userInfo = json;
                    this.message = this.userInfo.name;
                }
            );
        }
    },
    created: function () {
        chrome.tabs.getSelected(null, tab => {
            this.getUserId(tab.url);
        });
    }
});