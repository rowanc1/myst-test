import {
  require_c
} from "/myst-test/build/_shared/chunk-R6EMZSRV.js";
import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/cpp.js
var require_cpp = __commonJS({
  "../../node_modules/refractor/lang/cpp.js"(exports, module) {
    var refractorC = require_c();
    module.exports = cpp;
    cpp.displayName = "cpp";
    cpp.aliases = [];
    function cpp(Prism) {
      Prism.register(refractorC);
      (function(Prism2) {
        var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
        var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(
          /<keyword>/g,
          function() {
            return keyword.source;
          }
        );
        Prism2.languages.cpp = Prism2.languages.extend("c", {
          "class-name": [
            {
              pattern: RegExp(
                /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                  /<keyword>/g,
                  function() {
                    return keyword.source;
                  }
                )
              ),
              lookbehind: true
            },
            /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
            /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
            /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
          ],
          keyword,
          number: {
            pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
            greedy: true
          },
          operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
          boolean: /\b(?:false|true)\b/
        });
        Prism2.languages.insertBefore("cpp", "string", {
          module: {
            pattern: RegExp(
              /(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
                /<mod-name>/g,
                function() {
                  return modName;
                }
              ) + ")"
            ),
            lookbehind: true,
            greedy: true,
            inside: {
              string: /^[<"][\s\S]+/,
              operator: /:/,
              punctuation: /\./
            }
          },
          "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: true
          }
        });
        Prism2.languages.insertBefore("cpp", "keyword", {
          "generic-function": {
            pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
            inside: {
              function: /^\w+/,
              generic: {
                pattern: /<[\s\S]+/,
                alias: "class-name",
                inside: Prism2.languages.cpp
              }
            }
          }
        });
        Prism2.languages.insertBefore("cpp", "operator", {
          "double-colon": {
            pattern: /::/,
            alias: "punctuation"
          }
        });
        Prism2.languages.insertBefore("cpp", "class-name", {
          "base-clause": {
            pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
            lookbehind: true,
            greedy: true,
            inside: Prism2.languages.extend("cpp", {})
          }
        });
        Prism2.languages.insertBefore(
          "inside",
          "double-colon",
          {
            "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
          },
          Prism2.languages.cpp["base-clause"]
        );
      })(Prism);
    }
  }
});

export {
  require_cpp
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-2WOVNJIB.js.map
