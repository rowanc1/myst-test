import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/r.js
var require_r = __commonJS({
  "../../node_modules/refractor/lang/r.js"(exports, module) {
    module.exports = r;
    r.displayName = "r";
    r.aliases = [];
    function r(Prism) {
      Prism.languages.r = {
        comment: /#.*/,
        string: {
          pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        "percent-operator": {
          pattern: /%[^%\s]*%/,
          alias: "operator"
        },
        boolean: /\b(?:FALSE|TRUE)\b/,
        ellipsis: /\.\.(?:\.|\d+)/,
        number: [
          /\b(?:Inf|NaN)\b/,
          /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
        ],
        keyword: /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
        operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
        punctuation: /[(){}\[\],;]/
      };
    }
  }
});

export {
  require_r
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-6L6SQXS5.js.map
