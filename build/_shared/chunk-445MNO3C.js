import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/solution-file.js
var require_solution_file = __commonJS({
  "../../node_modules/refractor/lang/solution-file.js"(exports, module) {
    module.exports = solutionFile;
    solutionFile.displayName = "solutionFile";
    solutionFile.aliases = [];
    function solutionFile(Prism) {
      ;
      (function(Prism2) {
        var guid = {
          pattern: /\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i,
          alias: "constant",
          inside: {
            punctuation: /[{}]/
          }
        };
        Prism2.languages["solution-file"] = {
          comment: {
            pattern: /#.*/,
            greedy: true
          },
          string: {
            pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
            greedy: true,
            inside: {
              guid
            }
          },
          object: {
            pattern: /^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m,
            lookbehind: true,
            greedy: true,
            alias: "keyword"
          },
          property: {
            pattern: /^([ \t]*)(?!\s)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m,
            lookbehind: true,
            inside: {
              guid
            }
          },
          guid,
          number: /\b\d+(?:\.\d+)*\b/,
          boolean: /\b(?:FALSE|TRUE)\b/,
          operator: /=/,
          punctuation: /[(),]/
        };
        Prism2.languages["sln"] = Prism2.languages["solution-file"];
      })(Prism);
    }
  }
});

export {
  require_solution_file
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-445MNO3C.js.map
