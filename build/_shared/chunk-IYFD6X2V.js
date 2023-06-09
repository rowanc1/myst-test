import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/puppet.js
var require_puppet = __commonJS({
  "../../node_modules/refractor/lang/puppet.js"(exports, module) {
    module.exports = puppet;
    puppet.displayName = "puppet";
    puppet.aliases = [];
    function puppet(Prism) {
      ;
      (function(Prism2) {
        Prism2.languages.puppet = {
          heredoc: [
            {
              pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
              lookbehind: true,
              alias: "string",
              inside: {
                punctuation: /(?=\S).*\S(?= *$)/
              }
            },
            {
              pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
              lookbehind: true,
              greedy: true,
              alias: "string",
              inside: {
                punctuation: /(?=\S).*\S(?= *$)/
              }
            },
            {
              pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
              alias: "string",
              inside: {
                punctuation: {
                  pattern: /(\().+?(?=\))/,
                  lookbehind: true
                }
              }
            }
          ],
          "multiline-comment": {
            pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
            lookbehind: true,
            greedy: true,
            alias: "comment"
          },
          regex: {
            pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
            lookbehind: true,
            greedy: true,
            inside: {
              "extended-regex": {
                pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
                inside: {
                  comment: /#.*/
                }
              }
            }
          },
          comment: {
            pattern: /(^|[^\\])#.*/,
            lookbehind: true,
            greedy: true
          },
          string: {
            pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|\$(?!\{)|(?!\1)[^\\$]|\\[\s\S])*\1/,
            greedy: true,
            inside: {
              "double-quoted": {
                pattern: /^"[\s\S]*"$/,
                inside: {}
              }
            }
          },
          variable: {
            pattern: /\$(?:::)?\w+(?:::\w+)*/,
            inside: {
              punctuation: /::/
            }
          },
          "attr-name": /(?:\b\w+|\*)(?=\s*=>)/,
          function: [
            {
              pattern: /(\.)(?!\d)\w+/,
              lookbehind: true
            },
            /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/
          ],
          number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
          boolean: /\b(?:false|true)\b/,
          keyword: /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
          datatype: {
            pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
            alias: "symbol"
          },
          operator: /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
          punctuation: /[\[\]{}().,;]|:+/
        };
        var interpolation = [
          {
            pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
            lookbehind: true,
            inside: {
              "short-variable": {
                pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
                lookbehind: true,
                alias: "variable",
                inside: {
                  punctuation: /::/
                }
              },
              delimiter: {
                pattern: /^\$/,
                alias: "variable"
              },
              rest: Prism2.languages.puppet
            }
          },
          {
            pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
            lookbehind: true,
            alias: "variable",
            inside: {
              punctuation: /::/
            }
          }
        ];
        Prism2.languages.puppet["heredoc"][0].inside.interpolation = interpolation;
        Prism2.languages.puppet["string"].inside["double-quoted"].inside.interpolation = interpolation;
      })(Prism);
    }
  }
});

export {
  require_puppet
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-IYFD6X2V.js.map
