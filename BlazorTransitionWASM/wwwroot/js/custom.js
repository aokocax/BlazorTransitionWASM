
function Load() {
    var i = 1;
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                window.history.pushState(null, null, 'test'+(i+1));
            } else {
                /* left swipe */
                window.history.pushState(null, null, 'test' + (i-1));
            }
        } else {
            if (yDiff > 0) {
                console.log("down swipe")
            } else {
                console.log("up swipe")
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };
}
