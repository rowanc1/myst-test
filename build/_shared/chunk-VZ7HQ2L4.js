import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/parigp.js
var require_parigp = __commonJS({
  "../../node_modules/refractor/lang/parigp.js"(exports, module) {
    module.exports = parigp;
    parigp.displayName = "parigp";
    parigp.aliases = [];
    function parigp(Prism) {
      Prism.languages.parigp = {
        comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
        string: {
          pattern: /"(?:[^"\\\r\n]|\\.)*"/,
          greedy: true
        },
        keyword: function() {
          var keywords = [
            "breakpoint",
            "break",
            "dbg_down",
            "dbg_err",
            "dbg_up",
            "dbg_x",
            "forcomposite",
            "fordiv",
            "forell",
            "forpart",
            "forprime",
            "forstep",
            "forsubgroup",
            "forvec",
            "for",
            "iferr",
            "if",
            "local",
            "my",
            "next",
            "return",
            "until",
            "while"
          ];
          keywords = keywords.map(function(keyword) {
            return keyword.split("").join(" *");
          }).join("|");
          return RegExp("\\b(?:" + keywords + ")\\b");
        }(),
        function: /\b\w(?:[\w ]*\w)?(?= *\()/,
        number: {
          pattern: /((?:\. *\. *)?)(?:\b\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *(?:[+-] *)?\d(?: *\d)*)?/i,
          lookbehind: true
        },
        operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?: *>|(?: *<)?(?: *=)?)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
        punctuation: /[\[\]{}().,:;|]/
      };
    }
  }
});

export {
  require_parigp
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-VZ7HQ2L4.js.map
