import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/typoscript.js
var require_typoscript = __commonJS({
  "../../node_modules/refractor/lang/typoscript.js"(exports, module) {
    module.exports = typoscript;
    typoscript.displayName = "typoscript";
    typoscript.aliases = ["tsconfig"];
    function typoscript(Prism) {
      ;
      (function(Prism2) {
        var keywords = /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
        Prism2.languages.typoscript = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: true
            },
            {
              pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,
              lookbehind: true,
              greedy: true
            },
            {
              pattern: /(^|[^"'])#.*/,
              lookbehind: true,
              greedy: true
            }
          ],
          function: [
            {
              pattern: /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
              inside: {
                string: {
                  pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
                  inside: {
                    keyword: keywords
                  }
                },
                keyword: {
                  pattern: /INCLUDE_TYPOSCRIPT/
                }
              }
            },
            {
              pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,
              inside: {
                string: /"[^"\r\n]*"|'[^'\r\n]*'/
              }
            }
          ],
          string: {
            pattern: /^([^=]*=[< ]?)(?:(?!\]\n).)*/,
            lookbehind: true,
            inside: {
              function: /\{\$.*\}/,
              keyword: keywords,
              number: /^\d+$/,
              punctuation: /[,|:]/
            }
          },
          keyword: keywords,
          number: {
            pattern: /\b\d+\s*[.{=]/,
            inside: {
              operator: /[.{=]/
            }
          },
          tag: {
            pattern: /\.?[-\w\\]+\.?/,
            inside: {
              punctuation: /\./
            }
          },
          punctuation: /[{}[\];(),.:|]/,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/
        };
        Prism2.languages.tsconfig = Prism2.languages.typoscript;
      })(Prism);
    }
  }
});

export {
  require_typoscript
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-P66CXKUP.js.map
