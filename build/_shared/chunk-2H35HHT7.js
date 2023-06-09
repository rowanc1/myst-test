import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/julia.js
var require_julia = __commonJS({
  "../../node_modules/refractor/lang/julia.js"(exports, module) {
    module.exports = julia;
    julia.displayName = "julia";
    julia.aliases = [];
    function julia(Prism) {
      Prism.languages.julia = {
        comment: {
          pattern: /(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,
          lookbehind: true
        },
        regex: {
          pattern: /r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/,
          greedy: true
        },
        string: {
          pattern: /"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|`(?:[^\\`\r\n]|\\.)*`/,
          greedy: true
        },
        char: {
          pattern: /(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'/,
          lookbehind: true,
          greedy: true
        },
        keyword: /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
        boolean: /\b(?:false|true)\b/,
        number: /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,
        operator: /&&|\|\||[-+*^%÷⊻&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥'√∛]/,
        punctuation: /::?|[{}[\]();,.?]/,
        constant: /\b(?:(?:Inf|NaN)(?:16|32|64)?|im|pi)\b|[πℯ]/
      };
    }
  }
});

export {
  require_julia
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-2H35HHT7.js.map
