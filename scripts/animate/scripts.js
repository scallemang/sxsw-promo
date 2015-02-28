// Globals
var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|webOS)/);
var isRetina = window.devicePixelRatio > 1 ? true : false;
var breakpointNav = 900;
var breakpointMobile = 640;

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-svg-cssclasses-load
 */
;window.Modernizr=function(a,b,c){function v(a){j.cssText=a}function w(a,b){return v(prefixes.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={svg:"http://www.w3.org/2000/svg"},n={},o={},p={},q=[],r=q.slice,s,t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.svg=function(){return!!b.createElementNS&&!!b.createElementNS(m.svg,"svg").createSVGRect};for(var A in n)u(n,A)&&(s=A.toLowerCase(),e[s]=n[A](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)u(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},v(""),i=k=null,e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/**
 * Debounce and throttle function's decorator plugin 1.0.5
 *
 * Copyright (c) 2009 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
(function(e){e.extend({debounce:function(e,t,n,r){if(arguments.length==3&&typeof n!="boolean"){r=n;n=false}var i;return function(){var s=arguments;r=r||this;n&&!i&&e.apply(r,s);clearTimeout(i);i=setTimeout(function(){!n&&e.apply(r,s);i=null},t)}},throttle:function(e,t,n){var r,i,s;return function(){i=arguments;s=true;n=n||this;if(!r){(function(){if(s){e.apply(n,i);s=false;r=setTimeout(arguments.callee,t)}else{r=null}})()}}}})})(jQuery)

// Site Script
$(document).ready(function(){

  // UNIVERSAL
  
    // REMOVE PRELOAD CLASS TO ALLOW CSS TRANSITIONS
    $('body').removeClass('preload');
  
    // CHANGE HASH TO CURRENT SECTION
    function updateHash() {
      var windowPosition = $(window).scrollTop();
      var headerAdjustment = $('header').outerHeight();
      $('section').each(function(){
        var section = $(this);
        var hash = section.attr('id');
        if (windowPosition >= ($(this).offset().top - headerAdjustment) && windowPosition <= (section.offset().top + section.outerHeight() - headerAdjustment)) {
          var navLink = $('.main-nav a[href="#'+hash+'"]');
          if (section.is('section:eq(0)')) {
            history.replaceState('', document.title, window.location.pathname);
          } else {
            history.replaceState('', document.title, window.location.pathname + '#' + hash);
          }
          if (!navLink.hasClass('current')) {
            $('.main-nav .current').removeClass('current');
            navLink.addClass('current');
          }
        } else if (windowPosition == 0) {
          history.replaceState('', document.title, window.location.pathname);
          $('.main-nav .current').removeClass('current');
        }
      });
    }
    $(window).scroll($.debounce(updateHash, 250));
    
    // SVG FALLBACK
    function svgFallback(){
      $('.svg-wrap').each(function(){
        var fallbackImg = $(this).attr('data-fallback-src');
        if(fallbackImg) {
          $(this).children('svg, .svg-image').remove();
          $(this).prepend('<img src="'+fallbackImg+'" alt="Decorative illustration" />');
        }
      });
    }
    if (!Modernizr.svg) {
      svgFallback();
    }
    
    // MODALS
      // Modal placement
      function placeModal(modal) {
        var availHeight = $(window).height();
        if ((modal.outerHeight() + 30) <= availHeight) {
          if (modal.hasClass('current')) {
            modalTop = (availHeight - modal.outerHeight() + 30) / 2;
          } else {
            modalTop = -modal.outerHeight();
          }
          modal.css({
            'position': 'fixed',
            'margin-left': -(modal.outerWidth() / 2),
            'margin-top': modalTop
          });
        } else {
          if (modal.hasClass('current')) {
            modalTop = $(window).scrollTop() + 75;
          } else {
            modalTop = $(window).scrollTop() - modal.outerHeight();
          }
          modal.css({
            'position': 'absolute',
            'margin-left': -(modal.outerWidth() / 2),
            'margin-top': modalTop
          });
        }
      }
      
      $(window).on('load resize', function(){
        $('.modal').each(function() {
          var modal = $(this);
          placeModal(modal);
        });
      });
        
      // Trigger on click
      $('.modal-trigger').click(function(e){
        e.preventDefault();
        var availHeight = $(window).height();
        var matchingModal = $(this).attr('href');
        $('.page-overlay').show().fadeTo(200, 0.8, function(){
          if (($(matchingModal).outerHeight() + 30) <= availHeight) {
            var modalTop = (availHeight - $(matchingModal).outerHeight() + 30) / 2;
          } else {
            var modalTop = $(window).scrollTop() + 75;
          }
          $(matchingModal).addClass('current').show().animate({'margin-top': modalTop}, 300);
        });
      });
      
      // Close modal on "blur" or close button
      $('.close, .page-overlay').click(function(e){
        e.preventDefault();
        var availHeight = $(window).height();
        var currentModal = $('.modal.current');
        if (($(currentModal).outerHeight() + 30) <= availHeight) {
            var modalTop = -currentModal.outerHeight();
          } else {
            var modalTop = $(window).scrollTop() - currentModal.outerHeight();
          }
        $(currentModal).animate({'margin-top': modalTop}, 300, function(){
          $(currentModal).hide().removeClass('current');
          $('.page-overlay').fadeTo(200, 0).hide();
        });
      });
          
    // OPEN SHARE LINKS IN POPUPS
    $('.share-links a').click(function(e) {
      e.preventDefault();
      window.open(this.href, null, "toolbar=no,navbar=no,width=540,height=380");
    });
    
    // SHARE LINKS: LINK SELECTION
    $('.copy-text').click(function() {
      $(this).select();
    })

	// HEADER
	
    function headerSVG() {

      function parametric(cx, cy, r, deg) {
        var rad = deg * (Math.PI/180)
        var coords = {};
        coords.x = cx + r * Math.cos(rad)
        coords.y = cy + r * Math.sin(rad)
        return coords;
      }

      var canvas = 1240;
      var draw = SVG('svg-canvas').size(canvas, canvas);
      draw.viewbox(0, 0, canvas, canvas)
      var canvasOrgin = canvas/2;
      var orbitDelay = 500;
      var orbitFade = 1000;
      var orbits = [];
      if($(window).width() > 640.0) {
        var nodeDiameter = 8;
        var strokeWeight = 1;
      } else {
        var nodeDiameter = 12;
        var strokeWeight = 2;
      }

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function buildOrbit(diameter, nodeCount, direction, orbitSpeed, theOpacity) {
        var parentDiameter = diameter;
        var parentRadius = parentDiameter/2;
        var pos = (canvas-parentDiameter)/2;
        var padDiameter = parentDiameter+50;
        var pasPos = (canvas-padDiameter)/2;

        // Orbits
        var orbit = draw.group();

        orbit.pad = orbit.circle(padDiameter);
        orbit.pad.x(pasPos);
        orbit.pad.y(pasPos);
        orbit.attr({fill: 'transparent'})
        

        // Draw smaller circles
        var nodeRadius = nodeDiameter/2;
        var nodeCreationSpeed = 80;

        for (i = 0; i < nodeCount; i++) { 
          var deg = (360/nodeCount) * i;
          if(deg < 270) {
            var nodes = [];
            var coords = parametric(canvasOrgin, canvasOrgin, parentRadius, deg);
            var theNode = orbit.circle(nodeDiameter);
            theNode.x(coords.x - nodeRadius);
            theNode.y(coords.y - nodeRadius);
            theNode.attr({ class: 'point', stroke: '#03c4eb', 'stroke-weight': strokeWeight, fill: '#ffffff', opacity: 0, rx: nodeRadius, ry: nodeRadius });
            theNode.animate(0, '<>', nodeCreationSpeed*getRandomInt(1, 40)).attr({ opacity: theOpacity });
          }
        }

        // Setup orbit
        if(direction == 'cw') {
          var rotationDestination = 360;
        } else {
          var rotationDestination = -360;
        }

        // Animate orbit after nodes have entered
        orbit.animate(orbitSpeed, '-', 0).transform({rotation: rotationDestination}).loop();

      }

      buildOrbit(200, 27, 'ccw', 25000, 1.0);
      buildOrbit(450, 45, 'cw', 40000, 1.0);
      buildOrbit(700, 60, 'ccw', 60000, 1.0);
      buildOrbit(950, 70, 'cw', 80000, 1.0);
      buildOrbit(1200, 80, 'ccw', 100000, 1.0);

      function nodeScale() {
        if($(window).width() > 640.0) {
          nodeDiameter = 8;
          strokeWeight = 1;
          $('#svg-canvas .point').attr({ 'stroke-width': strokeWeight, rx: nodeDiameter/2, ry: nodeDiameter/2 });
        } else {
          nodeDiameter = 10;
          strokeWeight = 2;
          $('#svg-canvas .point').attr({ 'stroke-width': strokeWeight, rx: nodeDiameter/2, ry: nodeDiameter/2 });
        }
      }

      $(window).resize($.debounce(nodeScale, 250));

    }
    headerSVG();

	  $('.content').css('padding-top', $('header').outerHeight());
	  
	  // JUMP LINKS
	  $('#main-nav a').click(function(e) {
	    e.preventDefault();
	    var navLink = $(this);
	    var winTop = $(window).scrollTop();
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        var hash = this.hash.slice(1);
        if ($(window).width() <= breakpointNav) {
          var headerHeight = $('header').outerHeight() - $('.main-nav').outerHeight() - 20;
        } else {
          var headerHeight = $('header').outerHeight() - 20;
        }
        if (navLink.parent('li').index() == 0) {
          $('html,body').animate({
            scrollTop: 0
          }, 1000, function(){
            history.replaceState('', document.title, window.location.pathname);
          });
          if ($(window).width() <= breakpointNav) {
            $('#main-nav').slideUp(200).removeClass('open');
            $('.content, footer').fadeTo(200, 1);
          }
        } else {
          target = target.length ? target : $('#' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - headerHeight
            }, 1000, function(){
              history.replaceState('', document.title, window.location.pathname + '#' + hash);
            });
            if ($(window).width() <= breakpointNav) {
              if ((target.offset().top - winTop) < 75 || (winTop - target.offset().top) > -75) {
                $('#main-nav').slideUp(200).removeClass('open');
                $('.content, footer').fadeTo(200, 1);
                updateHash();
              }
            }
            return false;
          }
        }
      }
    });

    /* SUPPRESS CURRENT NAV ITEM ON HOVER
    * Don't want to toggle .current because mouseLeave could trigger after a click event
    */
    $('.main-nav a').mouseenter(function() {
      if (!$(this).hasClass('current')) {
        $('.main-nav .current').addClass('suppress-current');
      }   
    }).mouseleave(function() {
      $('.main-nav .suppress-current').removeClass('suppress-current');
    });
    
    // TOGGLE MAIN NAV
    var initialWinTop = 0;
    $('#toggle-nav').click(function(e){
      e.preventDefault();
      
      // For use with scrolling-on-close
      initialWinTop = $(window).scrollTop();
      
      if ($('#main-nav').hasClass('open')) {
        $('#main-nav ul').animate({'margin-top': '1em'}, function(){
          $('#main-nav').removeClass('open').slideUp(200);
          $('.content, footer').fadeTo(200, 1);
        });
      } else {
        $('#main-nav').toggleClass('open').slideToggle(200, function(){
          $('#main-nav ul').animate({'margin-top': 0});
          $('.content, footer').fadeTo(200, 0.2);
        });
      }
      
    });
    
    // TOGGLE BETWEEN SMALL / LARGE NAVS
    
      // What size browser are we on?
      if ($(window).width() > breakpointNav) {
        var navSize = 'large';
      } else {
        var navSize = 'small';
      }
      
      // Toggle on resize
      function toggleNavSize() {
        if ($(window).width() > breakpointNav) {
          if (navSize === 'small') {
            if (!$('#main-nav').hasClass('open')) {
              $('#main-nav').show().addClass('open');
            }
            $('#main-nav ul').css('margin-top', 0);
            $('.content, footer').css('opacity', '1');
            $('.content').css('padding-top', $('header').outerHeight());
            navSize = 'large';
          }
        } else {
          if (navSize === 'large') {
            $('#main-nav').slideUp(200, function(){
              $('.content').css('padding-top', $('header').outerHeight());
              $(this).removeClass('open');
              $('#main-nav ul').css('margin-top', '1em');
            });
            navSize = 'small';
          }
        }
      }
      $(window).resize($.debounce(toggleNavSize, 250));
      
    // MOBILE - HIDE NAV ON SCROLL
    $(window).scroll(function(){
      if ($(window).width() <= breakpointNav) {
        if (($(window).scrollTop() - initialWinTop) >= 75 || ($(window).scrollTop() - initialWinTop) <= -75) {
          if ($('#main-nav').hasClass('open')) {
            $('#main-nav').slideUp(200).removeClass('open');
            $('.content, footer').fadeTo(200, 1);
          }
        }
      }
    });
    
    // MOBILE - HIDE NAV ON "BLUR"
    $('.content, footer').click(function(){
      if ($(window).width() <= breakpointNav) {
        if ($('#main-nav').hasClass('open')) {
          $('#main-nav').slideUp(200).removeClass('open');
          $('.content, footer').fadeTo(200, 1);
        }
      }
    });
    
	// EXITS
	
	  // Random openings in boxes
  	var cardClasses = ['top', 'right', 'bottom', 'left'];
  	$('.exit-card').each(function(){
    	$(this).css('border-'+cardClasses[Math.floor(Math.random()*cardClasses.length)], '0 none');
  	});
	
	  // Scroll to animate section title
	  function animateDoor() {
	  
	    if ($(window).width() <= breakpointMobile) {
	      $('#door-title').width('100%');
	    } else {
	  
	    var winTop = $(window).scrollTop();
	    var doorTop = $('#door').offset().top;
	    var doorHeight = $('#door').outerHeight();
	    var startAnimation = doorTop - $('header').outerHeight() - 100; // Want it to start before scroll hits the door
	    var textWidth = $('#door-title span').outerWidth();
	    
	    // Animate width as scrolling through door area
  	  if (winTop >= startAnimation && winTop < (doorTop + doorHeight)) {
  	  
  	    // Set width as % of scrolltop through door area
  	    var newWidth = textWidth * (1 - ((winTop - startAnimation) / doorHeight / 4)); /* last integer is basically speed, higher = slower speed */
    	  $('#door-title').width(newWidth);

      // Above door
  	  } else if (winTop < startAnimation) {
    	  $('#door-title').width(textWidth);
  	  }
  	  
  	  }
  	  
	  }
	  
	  $(window).on('scroll resize', function(){
  	  animateDoor();
	  });
  	
  	// Fancy load in cards
  	var cardsLoaded = false;
  	function fadeInCards() {
  	  var waitTime = 0;
    	$('.exit-card').each(function() {
  			var card = $(this);
  			setTimeout(function() {
  				card.fadeTo(100, 1);
  			}, waitTime);
  			waitTime += 100;
  		});
  		cardsLoaded = true;
    }
    if (isMobile) {
      fadeInCards();
    }
		$(window).scroll(function(){
		  var firstCard = $('.exit-card-col:eq(0) .exit-card:eq(0)');
  		if (!cardsLoaded && ($(window).scrollTop() + $(window).height()) >= (firstCard.offset().top + firstCard.outerHeight())) {
    		fadeInCards();
  		}
		});
	
	// COMPANIES
	
	  // INVESTMENTS
	  if ( !Modernizr.svg || isMobile ) {
      $('#companies').addClass('no-svg');
    }
    else {
	  	  
  	  $(function(){
  
  			var SVG_INSTANCE = SVG('investment-canvas').size('100%', '100%')
  			var CANVAS = SVG_INSTANCE.group();
  
  			// ----------------------------------------
  			// PAGE RESIZING
  			// Only runs on initial load, not window resize
        
  			if ($(window).width() >= 1000) {
    			var CANVAS_SIZE = 1000;
    			var CANVAS_OFFSET_X = 500;
    			var CANVAS_OFFSET_Y = 500;
    			$('.investments').addClass('initial-large');
  			} else {
    			var CANVAS_SIZE = 800;
    			var CANVAS_OFFSET_X = 400;
    			var CANVAS_OFFSET_Y = 400;
    			$('.investments').addClass('initial-small');
  			}
  
  			function setCanvasOffsets() {
  				CANVAS_OFFSET_X = $('.investments').innerWidth() / 2;
  				CANVAS_OFFSET_Y = $('.investments').innerHeight() / 2;;
  				CANVAS.transform({x:CANVAS_OFFSET_X, y:CANVAS_OFFSET_Y});
  			}
  			setCanvasOffsets();
  			$(window).resize(setCanvasOffsets);
  
  			// ----------------------------------------
  			// VECTORS
  
  			var Vector = function(_x, _y) {
  			  
  			  this.x = _x || 0;
  			  this.y = _y || 0;
  			  
  			  this.dist = function(vector) {
  			    var dx = this.x - vector.x;
  			    var dy = this.y - vector.y;
  			    return Math.sqrt(dx*dx + dy*dy);
  			  };
  
  			  this.minus = function(vector) {
  			    return new Vector(
  			      this.x - vector.x,
  			      this.y - vector.y);
  			  };
  			  
  			  this.scale = function(scale) {
  			    this.x *= scale;
  			    this.y *= scale;
  			  };
  			  
  			  this.apply = function(vector) {
  			    this.x += vector.x;
  			    this.y += vector.y;
  			  };
  
  			  this.length = function() {
  			  	return Math.sqrt(this.x*this.x + this.y*this.y);
  			  }
  
  			};
  
  
  			// ----------------------------------------
  			// NODES
  
  			var NODES = [];
  			if ($(window).width() >= 1000) {
  			  	var RADIUS_SMALL = 25;
    			var RADIUS_MEDIUM = 45;
    			var RADIUS_LARGE = 60;
  			} else {
    			var RADIUS_SMALL = 18;
    			var RADIUS_MEDIUM = 38;
    			var RADIUS_LARGE = 50;
  			}
  			var RADIUS_ANIMATION_SPEED = 0.15;
  			var TEXT_ANIMATION_SPEED = 0.10;
  			var BLUE = "#03C4EB";
  			var GRAY = "#bdbecf"
  			var GRAY_TXT = "#8183A4"
  			var Node = function(_home, _label) {
  				this.home = _home; // Home position
  				this.pos = new Vector(_home.x, _home.y); // Current position
  				this.radius = RADIUS_SMALL;
  				this.targetRadius = this.radius;
  				this.textOpacity = 0;
  				this.targetTextOpacity = 0;
  				this.label = _label;
  				this.defaultStyle = 'small';
  				this.currentStyle = 'small';
  				this.url = null;
  				NODES.push(this);
  
  				// Initialize
  				this.svgGroup = CANVAS.group();
  				this.svgCircle = this.svgGroup.circle()
  				this.svgCircle.fill("#fff").stroke(GRAY);
  				this.svgText = this.svgGroup.text(this.label);
  				this.svgText.font({
  				 	family:   'open-sans, helvetica neue, helvetica',
  					size:     12,
  					anchor:   'middle',
  					leading:  '1.2em',
  				})
  				if (this.label.indexOf('\n') == -1) {
  					this.svgText.transform({
  						y: -9,
  					});
  				}
  				else {
  					this.svgText.transform({
  						y: -16,
  					});
  				}
  
  
  				// Click events:
  				var self = this;
  				this.svgGroup.click(function() {
  					if (self.url) {
  						var win = window.open(self.url, '_blank');
  					}
  				})
  
  
  				this.setStyle = function(style) {
  
  					if (this.currentStyle == style) return;
  
  					var targetStyle = style;
  					if (targetStyle == 'default') targetStyle = this.defaultStyle;
  
  					if (targetStyle == 'large') {
  						this.targetRadius = RADIUS_LARGE;
  						this.targetTextOpacity = 1;  
  						this.svgText.fill(BLUE);
  						this.svgCircle.stroke(BLUE);
  					}
  					else if (targetStyle == 'medium') {
  						this.targetRadius = RADIUS_MEDIUM;
  						this.targetTextOpacity = 1;
  						this.svgText.fill(GRAY_TXT);
  						this.svgCircle.stroke(GRAY);
  
  					}
  					else if (targetStyle == 'small') {
  						this.targetRadius = RADIUS_SMALL;
  						this.targetTextOpacity = 0;
  						this.svgText.fill(GRAY_TXT);
  						this.svgCircle.stroke(GRAY);
  					}
  
  					this.currentStyle = targetStyle;
  
  				}
  
  				this.draw = function() {
  					// size
  					this.radius += (this.targetRadius - this.radius) * RADIUS_ANIMATION_SPEED;
  					var d = this.radius*2;
  					this.svgCircle.size(d, d);
  					// text
  					this.textOpacity += (this.targetTextOpacity - this.textOpacity) * TEXT_ANIMATION_SPEED;
					this.svgText.opacity(this.textOpacity);
            // position
  					this.svgGroup.transform({
  						x: this.pos.x,
  						y: this.pos.y,
  					})
  				}
  			}
  
  
  			var EDGES = [];
  			var Edge = function(_n1, _n2) {
  			  this.n1 = _n1;
  			  this.n2 = _n2;
  			  this.homeLength = this.n1.home.dist(this.n2.home);
  			  EDGES.push(this);
  
  			  this.length = function() {
  			    return this.n1.pos.dist(this.n2.pos);
  			  };
  			};
  
  
  			// ----------------------------------------
  			// INITIAL NODE & EDGE CREATION
  
  			var HOME_RADIUS = 0.36 * CANVAS_SIZE;
  			var RADIUS_VARIANCE = 0.1;
  			var INITIAL_RADIUS_SCALE = 0.1;
  
  			var elements = $(".investments li");
  			elements.each(function(i, e) {
  
  				var el = $(e);
  				var p = (i / elements.length)*Math.PI*2;
  				var r = HOME_RADIUS + Math.random()*RADIUS_VARIANCE - RADIUS_VARIANCE/2;
  
  				var home = new Vector(
  					Math.sin(p)*r,
  					Math.cos(p)*r );
  
  				var label =  el.text();
  				label = label.replace(" ", "\n");
  				var n = new Node(home, label);
  
  				n.pos = new Vector(
  					Math.sin(p)*r*INITIAL_RADIUS_SCALE,
  					Math.cos(p)*r*INITIAL_RADIUS_SCALE);
  
  				if (el.hasClass('medium')) {
  					n.defaultStyle = 'medium'
  				}
  				else if (el.hasClass('large')) {
  					n.defaultStyle = 'large'
  				}
  
  				url = $("a",e).attr('href');
  				if (url) {
  					n.url = url;
  				}
  
  				n.setStyle('default');
  				n.draw();
  
  			});
  
  
  			// Create Edges
  			var EDGE_SPAN = 12;
  			for (var i=0; i<NODES.length; i++) {
  				var n1 = NODES[i]
  				for (var j=1; j<EDGE_SPAN; j++) {
  					var n2 = NODES[(i+j) % NODES.length];
  					new Edge(n1,n2);
  				}
  			}
  
  			// ----------------------------------------
  			// FORCES & ANIMATION
  
  			var EDGE_FORCE = 0.3;
  			var EDGE_PADDING = 30;
  
  			function applyEdgeForces() {
  				for (e in EDGES) {
  					var edge = EDGES[e];
  
  					// Edge lengths
  					var min_length = edge.n1.radius + edge.n2.radius;
  					min_length += EDGE_PADDING;
  					var target_length = min_length;
  					var length = edge.length();
  
  					// Collisions
  					if (length < min_length) {
  						// Calculate forces
  						var force = edge.n1.pos.minus(edge.n2.pos);
  						var stretch = length - min_length;
  						force.scale( stretch / length * EDGE_FORCE );
  						// Apply forces
  						edge.n2.pos.apply(force);
  				    	force.scale(-1);
  				    	edge.n1.pos.apply(force);  
  					}
  				}
  			}
  
  			function applyHomeForces() {
  				var HOME_FORCE = 0.1;
  				for (n in NODES) {
  					var node = NODES[n];
  				    var diff = node.home.minus(node.pos);
  				    diff.scale(HOME_FORCE);
  				    node.pos.apply(diff);
  				}
  			}
  
  			function redraw() {
  				for (n in NODES) {
  					NODES[n].draw();
  				}
  			}
  
  			var ANIMATION_TIMER = null;

  			function startAnimation() {
  				if (ANIMATION_TIMER != null) return;
  				ANIMATION_TIMER = setInterval(function() {
	  				applyHomeForces();
	  				applyEdgeForces();
	  				redraw();
  				},1000/30)
  			}

  			setTimeout(function() {
  				startAnimation();
  			},300)
  
  
  			// ----------------------------------------
  			// MOUSE MOVEMENTS
  
  			$("#investment-canvas").mousemove(function(e) {
  
  				var offset = $("#investment-canvas").offset();
  				var mouse = new Vector(
  					e.pageX - offset.left - CANVAS_OFFSET_X,
  					e.pageY - offset.top - CANVAS_OFFSET_Y
  				);
  
  				for (n in NODES) {
  					var node = NODES[n];
  					var dist = mouse.dist(node.pos);
  
  					if (dist < 150) {
  						node.setStyle('large');
  					}
  					else if (dist < 210 && node.defaultStyle != 'large') {
  						node.setStyle('medium');
  					}
  					else {
  						node.setStyle('default');
  					}
  				}
  
  			});
  
  		});
  		
    }
	  	
	// PORTFOLIO IMPACT
	
	  $('.video-link').click(function(e){
	    e.preventDefault();
      var videoSrc = $(this).attr('href')+'?hd=1&rel=0&autohide=1&showinfo=0&autoplay=1';
      var videoHeight = $(this).attr('data-video-height');
      var videoWidth = $(this).attr('data-video-width');
      var embedWrap = $(this).siblings('.embed-wrap');
      
	    $(this).fadeTo(500, 0).css('z-index', '-1');
	    embedWrap.prepend('<iframe width="'+videoWidth+'" height="'+videoHeight+'" src="'+videoSrc+'" frameborder="0" allowfullscreen></iframe>');
	    embedWrap.fitVids();
      $(this).unbind('click');
	  });
	
	// WORKING TOGETHER
	
	  // Fancy load in columns
  	var peopleLoaded = false;
  	function fadeInPeople() {
  	  var waitTime = 0;
    	$('.people-col').each(function() {
  			var col = $(this);
  			setTimeout(function() {
  				col.animate({
  				  'opacity': '1',
  				  'padding-top': '1em'
  				}, 300);
  			}, waitTime);
  			waitTime += 300;
  		});
  		peopleLoaded = true;
    }
    
    if (isMobile) {
      fadeInPeople();
    }
    
		$(window).scroll(function(){
		  var firstPerson = $('.people-col:eq(0) .person-fav:eq(0)');
  		if (!peopleLoaded && ($(window).scrollTop() + $(window).height()) >= (firstPerson.offset().top + firstPerson.outerHeight())) {
    		fadeInPeople();
  		}
		});
	
});