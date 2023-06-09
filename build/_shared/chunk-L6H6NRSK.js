import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/scss.js
var require_scss = __commonJS({
  "../../node_modules/refractor/lang/scss.js"(exports, module) {
    module.exports = scss;
    scss.displayName = "scss";
    scss.aliases = [];
    function scss(Prism) {
      Prism.languages.scss = Prism.languages.extend("css", {
        comment: {
          pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
          lookbehind: true
        },
        atrule: {
          pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
          inside: {
            rule: /@[\w-]+/
          }
        },
        url: /(?:[-a-z]+-)?url(?=\()/i,
        selector: {
          pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
          inside: {
            parent: {
              pattern: /&/,
              alias: "important"
            },
            placeholder: /%[-\w]+/,
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
          }
        },
        property: {
          pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
          inside: {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
          }
        }
      });
      Prism.languages.insertBefore("scss", "atrule", {
        keyword: [
          /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
          {
            pattern: /( )(?:from|through)(?= )/,
            lookbehind: true
          }
        ]
      });
      Prism.languages.insertBefore("scss", "important", {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      });
      Prism.languages.insertBefore("scss", "function", {
        "module-modifier": {
          pattern: /\b(?:as|hide|show|with)\b/i,
          alias: "keyword"
        },
        placeholder: {
          pattern: /%[-\w]+/,
          alias: "selector"
        },
        statement: {
          pattern: /\B!(?:default|optional)\b/i,
          alias: "keyword"
        },
        boolean: /\b(?:false|true)\b/,
        null: {
          pattern: /\bnull\b/,
          alias: "keyword"
        },
        operator: {
          pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
          lookbehind: true
        }
      });
      Prism.languages.scss["atrule"].inside.rest = Prism.languages.scss;
    }
  }
});

export {
  require_scss
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-L6H6NRSK.js.map
