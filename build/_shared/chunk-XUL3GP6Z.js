import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/excel-formula.js
var require_excel_formula = __commonJS({
  "../../node_modules/refractor/lang/excel-formula.js"(exports, module) {
    module.exports = excelFormula;
    excelFormula.displayName = "excelFormula";
    excelFormula.aliases = [];
    function excelFormula(Prism) {
      Prism.languages["excel-formula"] = {
        comment: {
          pattern: /(\bN\(\s*)"(?:[^"]|"")*"(?=\s*\))/i,
          lookbehind: true,
          greedy: true
        },
        string: {
          pattern: /"(?:[^"]|"")*"(?!")/,
          greedy: true
        },
        reference: {
          pattern: /(?:'[^']*'|(?:[^\s()[\]{}<>*?"';,$&]*\[[^^\s()[\]{}<>*?"']+\])?\w+)!/,
          greedy: true,
          alias: "string",
          inside: {
            operator: /!$/,
            punctuation: /'/,
            sheet: {
              pattern: /[^[\]]+$/,
              alias: "function"
            },
            file: {
              pattern: /\[[^[\]]+\]$/,
              inside: {
                punctuation: /[[\]]/
              }
            },
            path: /[\s\S]+/
          }
        },
        "function-name": {
          pattern: /\b[A-Z]\w*(?=\()/i,
          alias: "keyword"
        },
        range: {
          pattern: /\$?\b(?:[A-Z]+\$?\d+:\$?[A-Z]+\$?\d+|[A-Z]+:\$?[A-Z]+|\d+:\$?\d+)\b/i,
          alias: "property",
          inside: {
            operator: /:/,
            cell: /\$?[A-Z]+\$?\d+/i,
            column: /\$?[A-Z]+/i,
            row: /\$?\d+/
          }
        },
        cell: {
          pattern: /\b[A-Z]+\d+\b|\$[A-Za-z]+\$?\d+\b|\b[A-Za-z]+\$\d+\b/,
          alias: "property"
        },
        number: /(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?\b/i,
        boolean: /\b(?:FALSE|TRUE)\b/i,
        operator: /[-+*/^%=&,]|<[=>]?|>=?/,
        punctuation: /[[\]();{}|]/
      };
      Prism.languages["xlsx"] = Prism.languages["xls"] = Prism.languages["excel-formula"];
    }
  }
});

export {
  require_excel_formula
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-XUL3GP6Z.js.map
