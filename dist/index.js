'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".styles_ticker__-0UvZ {\n  display: flex;\n  background-color: #0c0e15;\n  width: 100%;\n  overflow: hidden;\n  flex: 0 0 100%;\n}\n\n.styles_ticker-list__1JKu- {\n  display: flex;\n  flex: 0 0 100%;\n  width: 100%;\n  animation: styles_ticker__-0UvZ 15s infinite linear;\n}\n\n.styles_ticker__-0UvZ:hover .styles_ticker-list__1JKu- {\n  animation-play-state: paused;\n}\n\n@keyframes styles_ticker__-0UvZ {\n  0% {\n    transform: translateX(0%);\n  }\n\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.styles_tickerItem__Vj57z {\n  border-left: 1px solid transparent;\n  display: table-cell;\n  position: relative;\n  vertical-align: top;\n  color: #fff;\n}\n\n.styles_tickerItem__Vj57z:hover {\n  background-color: #000;\n}\n\n.styles_tickerItem__Vj57z:after {\n  background: #2a2e39;\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  bottom: 10px;\n  left: -1px;\n  width: 1px;\n}\n";
var styles = {"ticker":"styles_ticker__-0UvZ","ticker-list":"styles_ticker-list__1JKu-","tickerItem":"styles_tickerItem__Vj57z"};
styleInject(css_248z$2);

var css_248z$1 = ".styles_tickerItemFinancial__m6Lt7 {\n  padding: 10px 15px;\n  height: 50px;\n  width: 180px;\n}\n\n.styles_tickerTopLevel__vRrjN {\n  display: flex;\n  text-transform: uppercase;\n  font-size: 12px;\n  height: 20px;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n}\n\n.styles_tickerStats__7TXcs {\n  display: flex;\n}\n\n.styles_tickerInfo__tzkOM {\n  display: flex;\n  align-items: baseline;\n  margin-left: 0.2rem;\n}\n\n.styles_tickerChangePercentage__GMiXr {\n  font-size: 22px;\n  line-height: 26px;\n}\n\n.styles_tickerCurrentPrice__CnVpc {\n  font-size: 12px;\n  margin: 0 0 0 8px;\n}\n\n.styles_tickerChangeNegative__4JfPL {\n  color: #ef5350;\n}\n\n.styles_tickerChangePositive__9AJcP {\n  color: #26a69a;\n}\n\n.styles_tickerChangeZero__3w-Xu{\n  color: orange;\n}\n";
var stylesFinancial = {"tickerItemFinancial":"styles_tickerItemFinancial__m6Lt7","tickerTopLevel":"styles_tickerTopLevel__vRrjN","tickerStats":"styles_tickerStats__7TXcs","tickerInfo":"styles_tickerInfo__tzkOM","tickerChangePercentage":"styles_tickerChangePercentage__GMiXr","tickerCurrentPrice":"styles_tickerCurrentPrice__CnVpc","tickerChangeNegative":"styles_tickerChangeNegative__4JfPL","tickerChangePositive":"styles_tickerChangePositive__9AJcP","tickerChangeZero":"styles_tickerChangeZero__3w-Xu"};
styleInject(css_248z$1);

var chevronUp = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2326a69a%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22feather%20feather-chevron-up%22%3E%3Cpolyline%20points%3D%2218%2015%2012%209%206%2015%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E";

var chevronDown = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23ef5350%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22feather%20feather-chevron-down%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E";

var chevronZero = "data:image/svg+xml,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cg%3E%20%20%3Ctitle%3ELayer%201%3C%2Ftitle%3E%20%20%3Crect%20rx%3D%2210%22%20stroke%3D%22%23000%22%20filter%3D%22url%28%23svg_2_blur%29%22%20id%3D%22svg_2%22%20height%3D%2247.0176%22%20width%3D%22371%22%20y%3D%22242.18232%22%20x%3D%22222.59143%22%20fill%3D%22%23ffa500%22%2F%3E%20%20%3Crect%20id%3D%22svg_3%22%20height%3D%220%22%20width%3D%221%22%20y%3D%22483%22%20x%3D%22869.6%22%20stroke%3D%22%23000%22%20fill%3D%22%23ffa500%22%2F%3E%20%3C%2Fg%3E%20%3Cdefs%3E%20%20%3Cfilter%20id%3D%22svg_2_blur%22%3E%20%20%20%3CfeGaussianBlur%20stdDeviation%3D%220.4%22%20in%3D%22SourceGraphic%22%2F%3E%20%20%3C%2Ffilter%3E%20%3C%2Fdefs%3E%3C%2Fsvg%3E";

/**
 * @component FinancialTicker
 */
var FinancialTicker = function (props) {
    var statusClassName = Number(props.currentPrice) === 0 ? stylesFinancial.tickerChangeZero : (props.change ? stylesFinancial.tickerChangePositive : stylesFinancial.tickerChangeNegative);
    return (React__namespace.createElement("div", { "data-id": props.id, className: [styles.tickerItem, stylesFinancial.tickerItemFinancial].join(' ') },
        React__namespace.createElement("div", { className: stylesFinancial.tickerTopLevel },
            React__namespace.createElement("div", { className: stylesFinancial.tickerSymbol }, props.symbol),
            React__namespace.createElement("div", { className: stylesFinancial.lastPrice }, props.lastPrice)),
        React__namespace.createElement("div", { className: stylesFinancial.tickerStats },
            React__namespace.createElement("img", { width: '20px', height: '20px', className: stylesFinancial.tickerMovement, src: Number(props.currentPrice) === 0 ? chevronZero : (props.change ? chevronUp : chevronDown) }),
            "      ",
            React__namespace.createElement("div", { className: [statusClassName, stylesFinancial.tickerInfo].join(' ') },
                React__namespace.createElement("div", { className: stylesFinancial.tickerChangePercentage }, props.percentage),
                React__namespace.createElement("div", { className: stylesFinancial.tickerCurrentPrice }, props.currentPrice)))));
};

var css_248z = ".styles_newsticker__py7eW {\n  min-width: 40%;\n  padding: 0.5rem;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n  text-decoration: none;\n}\n\n.styles_newsWrapper__KvsKt {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: flex-start;\n}\n\n.styles_title__n7qOv {\n  text-overflow: ellipsis;\n  word-wrap: none;\n  white-space: nowrap;\n  max-width: auto;\n  overflow: hidden;\n}\n\n.styles_title__n7qOv:hover {\n  text-decoration: underline;\n}\n\n.styles_meta__I1GUO {\n  font-size: 10px;\n}\n\n.styles_icon__HTIz4 {\n  width: 25px;\n}\n\n.styles_icon__HTIz4 img {\n  width: 100%;\n}\n";
var newsStyles = {"newsticker":"styles_newsticker__py7eW","newsWrapper":"styles_newsWrapper__KvsKt","title":"styles_title__n7qOv","meta":"styles_meta__I1GUO","icon":"styles_icon__HTIz4"};
styleInject(css_248z);

var NewsTicker = function (props) {
    return (React__namespace.createElement("a", { className: [newsStyles.newsticker, styles.tickerItem].join(' '), href: props.url, target: "_blank" },
        React__namespace.createElement("div", { className: newsStyles.icon },
            React__namespace.createElement("img", { src: props.icon, alt: props.iconAlt })),
        React__namespace.createElement("div", { className: newsStyles.newsWrapper },
            React__namespace.createElement("div", { className: newsStyles.title }, props.title),
            React__namespace.createElement("small", { className: newsStyles.meta }, props.meta))));
};

var TickerList = function (props) {
    return React__namespace.createElement("div", { className: styles.ticker },
        React__namespace.createElement("div", { className: styles['ticker-list'] }, props.children),
        !props.isNewsTicker ?
            React__namespace.createElement("div", { className: styles['ticker-list'] }, props.children)
            : '');
};

exports.FinancialTicker = FinancialTicker;
exports.NewsTicker = NewsTicker;
exports["default"] = TickerList;
//# sourceMappingURL=index.js.map
