import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/latex.js
var require_latex = __commonJS({
  "../../node_modules/refractor/lang/latex.js"(exports, module) {
    module.exports = latex;
    latex.displayName = "latex";
    latex.aliases = ["tex", "context"];
    function latex(Prism) {
      ;
      (function(Prism2) {
        var funcPattern = /\\(?:[^a-z()[\]]|[a-z*]+)/i;
        var insideEqu = {
          "equation-command": {
            pattern: funcPattern,
            alias: "regex"
          }
        };
        Prism2.languages.latex = {
          comment: /%.*/,
          cdata: {
            pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: true
          },
          equation: [
            {
              pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
              inside: insideEqu,
              alias: "string"
            },
            {
              pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
              lookbehind: true,
              inside: insideEqu,
              alias: "string"
            }
          ],
          keyword: {
            pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: true
          },
          url: {
            pattern: /(\\url\{)[^}]+(?=\})/,
            lookbehind: true
          },
          headline: {
            pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: true,
            alias: "class-name"
          },
          function: {
            pattern: funcPattern,
            alias: "selector"
          },
          punctuation: /[[\]{}&]/
        };
        Prism2.languages.tex = Prism2.languages.latex;
        Prism2.languages.context = Prism2.languages.latex;
      })(Prism);
    }
  }
});

export {
  require_latex
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-FTAKHAVI.js.map
