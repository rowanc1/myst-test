import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/editorconfig.js
var require_editorconfig = __commonJS({
  "../../node_modules/refractor/lang/editorconfig.js"(exports, module) {
    module.exports = editorconfig;
    editorconfig.displayName = "editorconfig";
    editorconfig.aliases = [];
    function editorconfig(Prism) {
      Prism.languages.editorconfig = {
        comment: /[;#].*/,
        section: {
          pattern: /(^[ \t]*)\[.+\]/m,
          lookbehind: true,
          alias: "selector",
          inside: {
            regex: /\\\\[\[\]{},!?.*]/,
            operator: /[!?]|\.\.|\*{1,2}/,
            punctuation: /[\[\]{},]/
          }
        },
        key: {
          pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
          lookbehind: true,
          alias: "attr-name"
        },
        value: {
          pattern: /=.*/,
          alias: "attr-value",
          inside: {
            punctuation: /^=/
          }
        }
      };
    }
  }
});

export {
  require_editorconfig
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-TBZV4LYV.js.map
