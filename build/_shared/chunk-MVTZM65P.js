import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/dhall.js
var require_dhall = __commonJS({
  "../../node_modules/refractor/lang/dhall.js"(exports, module) {
    module.exports = dhall;
    dhall.displayName = "dhall";
    dhall.aliases = [];
    function dhall(Prism) {
      Prism.languages.dhall = {
        comment: /--.*|\{-(?:[^-{]|-(?!\})|\{(?!-)|\{-(?:[^-{]|-(?!\})|\{(?!-))*-\})*-\}/,
        string: {
          pattern: /"(?:[^"\\]|\\.)*"|''(?:[^']|'(?!')|'''|''\$\{)*''(?!'|\$)/,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /\$\{[^{}]*\}/,
              inside: {
                expression: {
                  pattern: /(^\$\{)[\s\S]+(?=\}$)/,
                  lookbehind: true,
                  alias: "language-dhall",
                  inside: null
                },
                punctuation: /\$\{|\}/
              }
            }
          }
        },
        label: {
          pattern: /`[^`]*`/,
          greedy: true
        },
        url: {
          pattern: /\bhttps?:\/\/[\w.:%!$&'*+;=@~-]+(?:\/[\w.:%!$&'*+;=@~-]*)*(?:\?[/?\w.:%!$&'*+;=@~-]*)?/,
          greedy: true
        },
        env: {
          pattern: /\benv:(?:(?!\d)\w+|"(?:[^"\\=]|\\.)*")/,
          greedy: true,
          inside: {
            function: /^env/,
            operator: /^:/,
            variable: /[\s\S]+/
          }
        },
        hash: {
          pattern: /\bsha256:[\da-fA-F]{64}\b/,
          inside: {
            function: /sha256/,
            operator: /:/,
            number: /[\da-fA-F]{64}/
          }
        },
        keyword: /\b(?:as|assert|else|forall|if|in|let|merge|missing|then|toMap|using|with)\b|\u2200/,
        builtin: /\b(?:None|Some)\b/,
        boolean: /\b(?:False|True)\b/,
        number: /\bNaN\b|-?\bInfinity\b|[+-]?\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/,
        operator: /\/\\|\/\/\\\\|&&|\|\||===|[!=]=|\/\/|->|\+\+|::|[+*#@=:?<>|\\\u2227\u2a53\u2261\u2afd\u03bb\u2192]/,
        punctuation: /\.\.|[{}\[\](),./]/,
        "class-name": /\b[A-Z]\w*\b/
      };
      Prism.languages.dhall.string.inside.interpolation.inside.expression.inside = Prism.languages.dhall;
    }
  }
});

export {
  require_dhall
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-MVTZM65P.js.map
