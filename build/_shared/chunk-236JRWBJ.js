import {
  require_cpp
} from "/myst-test/build/_shared/chunk-2WOVNJIB.js";
import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/chaiscript.js
var require_chaiscript = __commonJS({
  "../../node_modules/refractor/lang/chaiscript.js"(exports, module) {
    var refractorCpp = require_cpp();
    module.exports = chaiscript;
    chaiscript.displayName = "chaiscript";
    chaiscript.aliases = [];
    function chaiscript(Prism) {
      Prism.register(refractorCpp);
      Prism.languages.chaiscript = Prism.languages.extend("clike", {
        string: {
          pattern: /(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/,
          lookbehind: true,
          greedy: true
        },
        "class-name": [
          {
            pattern: /(\bclass\s+)\w+/,
            lookbehind: true
          },
          {
            pattern: /(\b(?:attr|def)\s+)\w+(?=\s*::)/,
            lookbehind: true
          }
        ],
        keyword: /\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/,
        number: [Prism.languages.cpp.number, /\b(?:Infinity|NaN)\b/],
        operator: />>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/
      });
      Prism.languages.insertBefore("chaiscript", "operator", {
        "parameter-type": {
          pattern: /([,(]\s*)\w+(?=\s+\w)/,
          lookbehind: true,
          alias: "class-name"
        }
      });
      Prism.languages.insertBefore("chaiscript", "string", {
        "string-interpolation": {
          pattern: /(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/,
          lookbehind: true,
          greedy: true,
          inside: {
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/,
              lookbehind: true,
              inside: {
                "interpolation-expression": {
                  pattern: /(^\$\{)[\s\S]+(?=\}$)/,
                  lookbehind: true,
                  inside: Prism.languages.chaiscript
                },
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                }
              }
            },
            string: /[\s\S]+/
          }
        }
      });
    }
  }
});

export {
  require_chaiscript
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-236JRWBJ.js.map
