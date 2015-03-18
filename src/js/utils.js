SW.utils = {
    checkLocalStorage: function(){
        try {
            return 'localStorage' in window && window.localStorage !== null;
        } catch (e) {
            return false;
        }
    }(),
    getPreloader : function() {
        var preloader = {
            htmlText: '<div id="preloader" class="preloader"><span class="spinner"></span></div>',
            stop: function() {
                $('#preloader').remove();
            }
        };
        return preloader;
    }
};