import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/javastacktrace.js
var require_javastacktrace = __commonJS({
  "../../node_modules/refractor/lang/javastacktrace.js"(exports, module) {
    module.exports = javastacktrace;
    javastacktrace.displayName = "javastacktrace";
    javastacktrace.aliases = [];
    function javastacktrace(Prism) {
      Prism.languages.javastacktrace = {
        summary: {
          pattern: /^([\t ]*)(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m,
          lookbehind: true,
          inside: {
            keyword: {
              pattern: /^([\t ]*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,
              lookbehind: true
            },
            string: {
              pattern: /^(\s*)"[^"]*"/,
              lookbehind: true
            },
            exceptions: {
              pattern: /^(:?\s*)[\w$.]+(?=:|$)/,
              lookbehind: true,
              inside: {
                "class-name": /[\w$]+$/,
                namespace: /\b[a-z]\w*\b/,
                punctuation: /\./
              }
            },
            message: {
              pattern: /(:\s*)\S.*/,
              lookbehind: true,
              alias: "string"
            },
            punctuation: /:/
          }
        },
        "stack-frame": {
          pattern: /^([\t ]*)at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m,
          lookbehind: true,
          inside: {
            keyword: {
              pattern: /^(\s*)at(?= )/,
              lookbehind: true
            },
            source: [
              {
                pattern: /(\()\w+\.\w+:\d+(?=\))/,
                lookbehind: true,
                inside: {
                  file: /^\w+\.\w+/,
                  punctuation: /:/,
                  "line-number": {
                    pattern: /\b\d+\b/,
                    alias: "number"
                  }
                }
              },
              {
                pattern: /(\()[^()]*(?=\))/,
                lookbehind: true,
                inside: {
                  keyword: /^(?:Native Method|Unknown Source)$/
                }
              }
            ],
            "class-name": /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
            function: /(?:<init>|[\w$]+)(?=\()/,
            "class-loader": {
              pattern: /(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/,
              lookbehind: true,
              alias: "namespace",
              inside: {
                punctuation: /\./
              }
            },
            module: {
              pattern: /([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/,
              lookbehind: true,
              inside: {
                version: {
                  pattern: /(@)[\s\S]+/,
                  lookbehind: true,
                  alias: "number"
                },
                punctuation: /[@.]/
              }
            },
            namespace: {
              pattern: /(?:\b[a-z]\w*\.)+/,
              inside: {
                punctuation: /\./
              }
            },
            punctuation: /[()/.]/
          }
        },
        more: {
          pattern: /^([\t ]*)\.{3} \d+ [a-z]+(?: [a-z]+)*/m,
          lookbehind: true,
          inside: {
            punctuation: /\.{3}/,
            number: /\d+/,
            keyword: /\b[a-z]+(?: [a-z]+)*\b/
          }
        }
      };
    }
  }
});

export {
  require_javastacktrace
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-EP7I4QG7.js.map
