import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/regex.js
var require_regex = __commonJS({
  "../../node_modules/refractor/lang/regex.js"(exports, module) {
    module.exports = regex;
    regex.displayName = "regex";
    regex.aliases = [];
    function regex(Prism) {
      ;
      (function(Prism2) {
        var specialEscape = {
          pattern: /\\[\\(){}[\]^$+*?|.]/,
          alias: "escape"
        };
        var escape = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/;
        var charSet = {
          pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
          alias: "class-name"
        };
        var charSetWithoutDot = {
          pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
          alias: "class-name"
        };
        var rangeChar = "(?:[^\\\\-]|" + escape.source + ")";
        var range = RegExp(rangeChar + "-" + rangeChar);
        var groupName = {
          pattern: /(<|')[^<>']+(?=[>']$)/,
          lookbehind: true,
          alias: "variable"
        };
        Prism2.languages.regex = {
          "char-class": {
            pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
            lookbehind: true,
            inside: {
              "char-class-negation": {
                pattern: /(^\[)\^/,
                lookbehind: true,
                alias: "operator"
              },
              "char-class-punctuation": {
                pattern: /^\[|\]$/,
                alias: "punctuation"
              },
              range: {
                pattern: range,
                inside: {
                  escape,
                  "range-punctuation": {
                    pattern: /-/,
                    alias: "operator"
                  }
                }
              },
              "special-escape": specialEscape,
              "char-set": charSetWithoutDot,
              escape
            }
          },
          "special-escape": specialEscape,
          "char-set": charSet,
          backreference: [
            {
              pattern: /\\(?![123][0-7]{2})[1-9]/,
              alias: "keyword"
            },
            {
              pattern: /\\k<[^<>']+>/,
              alias: "keyword",
              inside: {
                "group-name": groupName
              }
            }
          ],
          anchor: {
            pattern: /[$^]|\\[ABbGZz]/,
            alias: "function"
          },
          escape,
          group: [
            {
              pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
              alias: "punctuation",
              inside: {
                "group-name": groupName
              }
            },
            {
              pattern: /\)/,
              alias: "punctuation"
            }
          ],
          quantifier: {
            pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
            alias: "number"
          },
          alternation: {
            pattern: /\|/,
            alias: "keyword"
          }
        };
      })(Prism);
    }
  }
});

export {
  require_regex
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-OXUJTAF3.js.map
