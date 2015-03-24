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
    },
    transliterate : (
        function() {
            var
                rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э і а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),
                eng = "shh sh ch cz yu ya yo zh ' y' e` i a b v g d e z y j k l m n o p r s t u f x  ".split(/ +/g);
            return function(text, engToRus) {
                var x;
                for(x = 0; x < rus.length; x++) {
                    text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);

                }
                return text.replace(/(\+)?\s+/g, '');
            };
        }
    )()
};