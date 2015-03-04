var isLocalStrg = function supports_html5_storage() {
    try {
        return 'localStorage' in window && window.localStorage !== null;
    } catch (e) {
        return false;
    }
}();

var styles = $('.dropdown-menu').find('input');

styles.on ('click', function () {
    var setStyle = $( 'input:checked' ).val();

    if (isLocalStrg) {
        localStorage.setItem ('class', setStyle);
        $('body').attr ('class', setStyle);
    }
});
