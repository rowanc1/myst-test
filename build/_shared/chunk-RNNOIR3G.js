import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/warpscript.js
var require_warpscript = __commonJS({
  "../../node_modules/refractor/lang/warpscript.js"(exports, module) {
    module.exports = warpscript;
    warpscript.displayName = "warpscript";
    warpscript.aliases = [];
    function warpscript(Prism) {
      Prism.languages.warpscript = {
        comment: /#.*|\/\/.*|\/\*[\s\S]*?\*\//,
        string: {
          pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,
          greedy: true
        },
        variable: /\$\S+/,
        macro: {
          pattern: /@\S+/,
          alias: "property"
        },
        keyword: /\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,
        number: /[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,
        boolean: /\b(?:F|T|false|true)\b/,
        punctuation: /<%|%>|[{}[\]()]/,
        operator: /==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/
      };
    }
  }
});

export {
  require_warpscript
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-RNNOIR3G.js.map
