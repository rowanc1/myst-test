import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/pascaligo.js
var require_pascaligo = __commonJS({
  "../../node_modules/refractor/lang/pascaligo.js"(exports, module) {
    module.exports = pascaligo;
    pascaligo.displayName = "pascaligo";
    pascaligo.aliases = [];
    function pascaligo(Prism) {
      ;
      (function(Prism2) {
        var braces = /\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source;
        var type = /(?:\b\w+(?:<braces>)?|<braces>)/.source.replace(
          /<braces>/g,
          function() {
            return braces;
          }
        );
        var pascaligo2 = Prism2.languages.pascaligo = {
          comment: /\(\*[\s\S]+?\*\)|\/\/.*/,
          string: {
            pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,
            greedy: true
          },
          "class-name": [
            {
              pattern: RegExp(
                /(\btype\s+\w+\s+is\s+)<type>/.source.replace(
                  /<type>/g,
                  function() {
                    return type;
                  }
                ),
                "i"
              ),
              lookbehind: true,
              inside: null
            },
            {
              pattern: RegExp(
                /<type>(?=\s+is\b)/.source.replace(/<type>/g, function() {
                  return type;
                }),
                "i"
              ),
              inside: null
            },
            {
              pattern: RegExp(
                /(:\s*)<type>/.source.replace(/<type>/g, function() {
                  return type;
                })
              ),
              lookbehind: true,
              inside: null
            }
          ],
          keyword: {
            pattern: /(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,
            lookbehind: true
          },
          boolean: {
            pattern: /(^|[^&])\b(?:False|True)\b/i,
            lookbehind: true
          },
          builtin: {
            pattern: /(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,
            lookbehind: true
          },
          function: /\b\w+(?=\s*\()/,
          number: [
            /%[01]+|&[0-7]+|\$[a-f\d]+/i,
            /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i
          ],
          operator: /->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,
          punctuation: /\(\.|\.\)|[()\[\]:;,.{}]/
        };
        var classNameInside = [
          "comment",
          "keyword",
          "builtin",
          "operator",
          "punctuation"
        ].reduce(function(accum, key) {
          accum[key] = pascaligo2[key];
          return accum;
        }, {});
        pascaligo2["class-name"].forEach(function(p) {
          p.inside = classNameInside;
        });
      })(Prism);
    }
  }
});

export {
  require_pascaligo
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-UJ7R3IAS.js.map
