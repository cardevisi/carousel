(function(){
    "use strict";    
    function Carousel() {
        
        var self = this;
        var QUANT = 5;
        var WIDTH = 500;
        var HEIGHT = 100;
        var MARGIN = 10;
        var index = 0;
        var SHOW = 1;
        var CAROUSEL_WRAPPER = 'carousel-wrapper';
        var CAROUSEL = 'carousel';
        var SLIDE = 'slide';

        self.init = function(){
            var container = document.getElementById(CAROUSEL_WRAPPER);
            if(!container) {
                return;
            }

            applyStyles(container, {width : (WIDTH + MARGIN) + 'px'});

            var div = document.createElement('div');
            applyAttributes(div, {'id' : CAROUSEL});
            applyStyles(div, {
                'width' : QUANT * (WIDTH + MARGIN) + 'px',
                'height' : HEIGHT + 'px'
            });
            
            div.appendChild(createItens());
            container.appendChild(div);
            createAnimate();
        };

        function goto(value) {
            var slide = document.getElementById(SLIDE);
            var posX = SHOW * (WIDTH + MARGIN);
            applyStyles(slide, {'left' :  posX * index + 'px'});
        }
        
        function createAnimate () {
            var prev = document.getElementById('prev');
            prev.addEventListener ('click', function() {
                if (index >= 0) {
                    index = -QUANT;
                }
                goto(++index);
            });
            var next = document.getElementById('next');
            next.addEventListener ('click', function() {
                if (index <= -(QUANT-1)) {
                    index = 1;
                }
                goto(--index);
            });
        }

        function applyStyles (element, styles) {
            for (var key in styles) {
                if (styles.hasOwnProperty(key)) {
                    element.style[key] = styles[key];
                }
            }
        }

        function applyAttributes(element, attributes) {
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    element.setAttribute(key, attributes[key]);
                }
            }
        }

        function createItens () {
            var ul = document.createElement('ul');
            applyAttributes(ul, {'id' : 'slide', 'class' : 'animate'});
            applyStyles(ul, {
                'width'     : QUANT * (WIDTH + MARGIN) + 'px',
                'position'  : 'absolute',
                'left'      : '0',
                'zIndex'    : -1
            });

            
            for (var i = 0; i <= QUANT; i++) {
                var img = document.createElement('img');
                applyAttributes(img, {'src' : 'http://placehold.it/100x100'});
                
                var li = document.createElement('li');
                applyStyles(li, {
                    'marginRight'   : MARGIN + 'px',
                    'width'         : WIDTH + 'px',
                    'height'        : HEIGHT + 'px',
                    'float'         : 'left',
                    'display'       : 'block'
                });

                var leftContainer = document.createElement('div');
                applyStyles(leftContainer, {
                    'width'         : '50px',
                    'height'        : '50px',
                    'background'    : '#ff0000',
                    'float'         : 'left',
                    'display'       : 'block'
                });

                li.appendChild(leftContainer);
                li.textContent = i.toString();
                li.appendChild(img);
                ul.appendChild(li);
            };    
            return ul;
        }

    }
    window.Carousel = Carousel;
})();