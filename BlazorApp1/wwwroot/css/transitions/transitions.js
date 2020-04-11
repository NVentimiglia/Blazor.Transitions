"use strict";
window.Transitions = {
    animate: function (element, css, anim)
    {
        const node = document.getElementById(element);
        node.className = "";
        setTimeout(function ()
        {
            node.classList.add('animated', css, anim);
        }, 5);
    }
};