import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/asciidoc.js
var require_asciidoc = __commonJS({
  "../../node_modules/refractor/lang/asciidoc.js"(exports, module) {
    module.exports = asciidoc;
    asciidoc.displayName = "asciidoc";
    asciidoc.aliases = ["adoc"];
    function asciidoc(Prism) {
      ;
      (function(Prism2) {
        var attributes = {
          pattern: /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\[\]\\]|\\.)*\]|[^\[\]\\"'$`]|\\.)*\]/m,
          lookbehind: true,
          inside: {
            quoted: {
              pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/,
              inside: {
                punctuation: /^[$`]|[$`]$/
              }
            },
            interpreted: {
              pattern: /'(?:[^'\\]|\\.)*'/,
              inside: {
                punctuation: /^'|'$/
              }
            },
            string: /"(?:[^"\\]|\\.)*"/,
            variable: /\w+(?==)/,
            punctuation: /^\[|\]$|,/,
            operator: /=/,
            "attr-value": /(?!^\s+$).+/
          }
        };
        var asciidoc2 = Prism2.languages.asciidoc = {
          "comment-block": {
            pattern: /^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m,
            alias: "comment"
          },
          table: {
            pattern: /^\|={3,}(?:(?:\r?\n|\r(?!\n)).*)*?(?:\r?\n|\r)\|={3,}$/m,
            inside: {
              specifiers: {
                pattern: /(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*](?:[<^>](?:\.[<^>])?|\.[<^>])?|[<^>](?:\.[<^>])?|\.[<^>])[a-z]*|[a-z]+)(?=\|)/,
                alias: "attr-value"
              },
              punctuation: {
                pattern: /(^|[^\\])[|!]=*/,
                lookbehind: true
              }
            }
          },
          "passthrough-block": {
            pattern: /^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
            inside: {
              punctuation: /^\++|\++$/
            }
          },
          "literal-block": {
            pattern: /^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
            inside: {
              punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/
            }
          },
          "other-block": {
            pattern: /^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
            inside: {
              punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/
            }
          },
          "list-punctuation": {
            pattern: /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
            lookbehind: true,
            alias: "punctuation"
          },
          "list-label": {
            pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,
            lookbehind: true,
            alias: "symbol"
          },
          "indented-block": {
            pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,
            lookbehind: true
          },
          comment: /^\/\/.*/m,
          title: {
            pattern: /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} .+|^\.(?![\s.]).*/m,
            alias: "important",
            inside: {
              punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/
            }
          },
          "attribute-entry": {
            pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,
            alias: "tag"
          },
          attributes,
          hr: {
            pattern: /^'{3,}$/m,
            alias: "punctuation"
          },
          "page-break": {
            pattern: /^<{3,}$/m,
            alias: "punctuation"
          },
          admonition: {
            pattern: /^(?:CAUTION|IMPORTANT|NOTE|TIP|WARNING):/m,
            alias: "keyword"
          },
          callout: [
            {
              pattern: /(^[ \t]*)<?\d*>/m,
              lookbehind: true,
              alias: "symbol"
            },
            {
              pattern: /<\d+>/,
              alias: "symbol"
            }
          ],
          macro: {
            pattern: /\b[a-z\d][a-z\d-]*::?(?:[^\s\[\]]*\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
            inside: {
              function: /^[a-z\d-]+(?=:)/,
              punctuation: /^::?/,
              attributes: {
                pattern: /(?:\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
                inside: attributes.inside
              }
            }
          },
          inline: {
            pattern: /(^|[^\\])(?:(?:\B\[(?:[^\]\\"']|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?:[^`'\s]|\s+\S)+['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"']|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
            lookbehind: true,
            inside: {
              attributes,
              url: {
                pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
                inside: {
                  punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/
                }
              },
              "attribute-ref": {
                pattern: /^\{.+\}$/,
                inside: {
                  variable: {
                    pattern: /(^\{)[a-z\d,+_-]+/,
                    lookbehind: true
                  },
                  operator: /^[=?!#%@$]|!(?=[:}])/,
                  punctuation: /^\{|\}$|::?/
                }
              },
              italic: {
                pattern: /^(['_])[\s\S]+\1$/,
                inside: {
                  punctuation: /^(?:''?|__?)|(?:''?|__?)$/
                }
              },
              bold: {
                pattern: /^\*[\s\S]+\*$/,
                inside: {
                  punctuation: /^\*\*?|\*\*?$/
                }
              },
              punctuation: /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/
            }
          },
          replacement: {
            pattern: /\((?:C|R|TM)\)/,
            alias: "builtin"
          },
          entity: /&#?[\da-z]{1,8};/i,
          "line-continuation": {
            pattern: /(^| )\+$/m,
            lookbehind: true,
            alias: "punctuation"
          }
        };
        function copyFromAsciiDoc(keys) {
          keys = keys.split(" ");
          var o = {};
          for (var i = 0, l = keys.length; i < l; i++) {
            o[keys[i]] = asciidoc2[keys[i]];
          }
          return o;
        }
        attributes.inside["interpreted"].inside.rest = copyFromAsciiDoc(
          "macro inline replacement entity"
        );
        asciidoc2["passthrough-block"].inside.rest = copyFromAsciiDoc("macro");
        asciidoc2["literal-block"].inside.rest = copyFromAsciiDoc("callout");
        asciidoc2["table"].inside.rest = copyFromAsciiDoc(
          "comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation"
        );
        asciidoc2["other-block"].inside.rest = copyFromAsciiDoc(
          "table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation"
        );
        asciidoc2["title"].inside.rest = copyFromAsciiDoc(
          "macro inline replacement entity"
        );
        Prism2.hooks.add("wrap", function(env) {
          if (env.type === "entity") {
            env.attributes["title"] = env.content.value.replace(/&amp;/, "&");
          }
        });
        Prism2.languages.adoc = Prism2.languages.asciidoc;
      })(Prism);
    }
  }
});

export {
  require_asciidoc
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-GPW53PBP.js.map
