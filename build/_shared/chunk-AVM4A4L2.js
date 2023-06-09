import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/sass.js
var require_sass = __commonJS({
  "../../node_modules/refractor/lang/sass.js"(exports, module) {
    module.exports = sass;
    sass.displayName = "sass";
    sass.aliases = [];
    function sass(Prism) {
      ;
      (function(Prism2) {
        Prism2.languages.sass = Prism2.languages.extend("css", {
          comment: {
            pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
            lookbehind: true,
            greedy: true
          }
        });
        Prism2.languages.insertBefore("sass", "atrule", {
          "atrule-line": {
            pattern: /^(?:[ \t]*)[@+=].+/m,
            greedy: true,
            inside: {
              atrule: /(?:@[\w-]+|[+=])/
            }
          }
        });
        delete Prism2.languages.sass.atrule;
        var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
        var operator = [
          /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
          {
            pattern: /(\s)-(?=\s)/,
            lookbehind: true
          }
        ];
        Prism2.languages.insertBefore("sass", "property", {
          "variable-line": {
            pattern: /^[ \t]*\$.+/m,
            greedy: true,
            inside: {
              punctuation: /:/,
              variable,
              operator
            }
          },
          "property-line": {
            pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
            greedy: true,
            inside: {
              property: [
                /[^:\s]+(?=\s*:)/,
                {
                  pattern: /(:)[^:\s]+/,
                  lookbehind: true
                }
              ],
              punctuation: /:/,
              variable,
              operator,
              important: Prism2.languages.sass.important
            }
          }
        });
        delete Prism2.languages.sass.property;
        delete Prism2.languages.sass.important;
        Prism2.languages.insertBefore("sass", "punctuation", {
          selector: {
            pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
            lookbehind: true,
            greedy: true
          }
        });
      })(Prism);
    }
  }
});

export {
  require_sass
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-AVM4A4L2.js.map
