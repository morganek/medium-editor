/*global meditor*/

(function (window, document) {
    'use strict';

    meditor.util = {
        extend: function extend(b, a) {
            var prop;
            if (b === undefined) {
                return a;
            }
            for (prop in a) {
                if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop) === false) {
                    b[prop] = a[prop];
                }
            }
            return b;
        },

        // https://github.com/jashkenas/underscore
        isElement: function isElement(obj) {
            return !!(obj && obj.nodeType === 1);
        },

        htmlEntities: function htmlEntities(str) {
            // converts special characters (like <) into their escaped/encoded values (like &lt;).
            // This allows you to show to display the string without the browser reading it as HTML.
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        },

        isListItemChild: function (node) {
            var parentNode = node.parentNode,
                tagName = parentNode.tagName.toLowerCase();
            while (meditor.common.parentElements.indexOf(tagName) === -1 && tagName !== 'div') {
                if (tagName === 'li') {
                    return true;
                }
                parentNode = parentNode.parentNode;
                if (parentNode && parentNode.tagName) {
                    tagName = parentNode.tagName.toLowerCase();
                } else {
                    return false;
                }
            }
            return false;
        }

    };

}(window, document));
