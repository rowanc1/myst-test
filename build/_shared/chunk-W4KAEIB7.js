import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/textile.js
var require_textile = __commonJS({
  "../../node_modules/refractor/lang/textile.js"(exports, module) {
    module.exports = textile;
    textile.displayName = "textile";
    textile.aliases = [];
    function textile(Prism) {
      ;
      (function(Prism2) {
        var modifierRegex = /\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source;
        var parenthesesRegex = /\)|\((?![^|()\n]+\))/.source;
        function withModifier(source, flags) {
          return RegExp(
            source.replace(/<MOD>/g, function() {
              return "(?:" + modifierRegex + ")";
            }).replace(/<PAR>/g, function() {
              return "(?:" + parenthesesRegex + ")";
            }),
            flags || ""
          );
        }
        var modifierTokens = {
          css: {
            pattern: /\{[^{}]+\}/,
            inside: {
              rest: Prism2.languages.css
            }
          },
          "class-id": {
            pattern: /(\()[^()]+(?=\))/,
            lookbehind: true,
            alias: "attr-value"
          },
          lang: {
            pattern: /(\[)[^\[\]]+(?=\])/,
            lookbehind: true,
            alias: "attr-value"
          },
          punctuation: /[\\\/]\d+|\S/
        };
        var textile2 = Prism2.languages.textile = Prism2.languages.extend("markup", {
          phrase: {
            pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
            lookbehind: true,
            inside: {
              "block-tag": {
                pattern: withModifier(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),
                inside: {
                  modifier: {
                    pattern: withModifier(
                      /(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source
                    ),
                    lookbehind: true,
                    inside: modifierTokens
                  },
                  tag: /^[a-z]\w*/,
                  punctuation: /\.$/
                }
              },
              list: {
                pattern: withModifier(/^[*#]+<MOD>*\s+\S.*/.source, "m"),
                inside: {
                  modifier: {
                    pattern: withModifier(/(^[*#]+)<MOD>+/.source),
                    lookbehind: true,
                    inside: modifierTokens
                  },
                  punctuation: /^[*#]+/
                }
              },
              table: {
                pattern: withModifier(
                  /^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source,
                  "m"
                ),
                inside: {
                  modifier: {
                    pattern: withModifier(
                      /(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source
                    ),
                    lookbehind: true,
                    inside: modifierTokens
                  },
                  punctuation: /\||^\./
                }
              },
              inline: {
                pattern: withModifier(
                  /(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source
                ),
                lookbehind: true,
                inside: {
                  bold: {
                    pattern: withModifier(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),
                    lookbehind: true
                  },
                  italic: {
                    pattern: withModifier(/(^(__?)<MOD>*).+?(?=\2)/.source),
                    lookbehind: true
                  },
                  cite: {
                    pattern: withModifier(/(^\?\?<MOD>*).+?(?=\?\?)/.source),
                    lookbehind: true,
                    alias: "string"
                  },
                  code: {
                    pattern: withModifier(/(^@<MOD>*).+?(?=@)/.source),
                    lookbehind: true,
                    alias: "keyword"
                  },
                  inserted: {
                    pattern: withModifier(/(^\+<MOD>*).+?(?=\+)/.source),
                    lookbehind: true
                  },
                  deleted: {
                    pattern: withModifier(/(^-<MOD>*).+?(?=-)/.source),
                    lookbehind: true
                  },
                  span: {
                    pattern: withModifier(/(^%<MOD>*).+?(?=%)/.source),
                    lookbehind: true
                  },
                  modifier: {
                    pattern: withModifier(
                      /(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source
                    ),
                    lookbehind: true,
                    inside: modifierTokens
                  },
                  punctuation: /[*_%?@+\-^~]+/
                }
              },
              "link-ref": {
                pattern: /^\[[^\]]+\]\S+$/m,
                inside: {
                  string: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: true
                  },
                  url: {
                    pattern: /(^\])\S+$/,
                    lookbehind: true
                  },
                  punctuation: /[\[\]]/
                }
              },
              link: {
                pattern: withModifier(
                  /"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source
                ),
                inside: {
                  text: {
                    pattern: withModifier(/(^"<MOD>*)[^"]+(?=")/.source),
                    lookbehind: true
                  },
                  modifier: {
                    pattern: withModifier(/(^")<MOD>+/.source),
                    lookbehind: true,
                    inside: modifierTokens
                  },
                  url: {
                    pattern: /(:).+/,
                    lookbehind: true
                  },
                  punctuation: /[":]/
                }
              },
              image: {
                pattern: withModifier(
                  /!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source
                ),
                inside: {
                  source: {
                    pattern: withModifier(
                      /(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source
                    ),
                    lookbehind: true,
                    alias: "url"
                  },
                  modifier: {
                    pattern: withModifier(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),
                    lookbehind: true,
                    inside: modifierTokens
                  },
                  url: {
                    pattern: /(:).+/,
                    lookbehind: true
                  },
                  punctuation: /[!:]/
                }
              },
              footnote: {
                pattern: /\b\[\d+\]/,
                alias: "comment",
                inside: {
                  punctuation: /\[|\]/
                }
              },
              acronym: {
                pattern: /\b[A-Z\d]+\([^)]+\)/,
                inside: {
                  comment: {
                    pattern: /(\()[^()]+(?=\))/,
                    lookbehind: true
                  },
                  punctuation: /[()]/
                }
              },
              mark: {
                pattern: /\b\((?:C|R|TM)\)/,
                alias: "comment",
                inside: {
                  punctuation: /[()]/
                }
              }
            }
          }
        });
        var phraseInside = textile2["phrase"].inside;
        var nestedPatterns = {
          inline: phraseInside["inline"],
          link: phraseInside["link"],
          image: phraseInside["image"],
          footnote: phraseInside["footnote"],
          acronym: phraseInside["acronym"],
          mark: phraseInside["mark"]
        };
        textile2.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
        var phraseInlineInside = phraseInside["inline"].inside;
        phraseInlineInside["bold"].inside = nestedPatterns;
        phraseInlineInside["italic"].inside = nestedPatterns;
        phraseInlineInside["inserted"].inside = nestedPatterns;
        phraseInlineInside["deleted"].inside = nestedPatterns;
        phraseInlineInside["span"].inside = nestedPatterns;
        var phraseTableInside = phraseInside["table"].inside;
        phraseTableInside["inline"] = nestedPatterns["inline"];
        phraseTableInside["link"] = nestedPatterns["link"];
        phraseTableInside["image"] = nestedPatterns["image"];
        phraseTableInside["footnote"] = nestedPatterns["footnote"];
        phraseTableInside["acronym"] = nestedPatterns["acronym"];
        phraseTableInside["mark"] = nestedPatterns["mark"];
      })(Prism);
    }
  }
});

export {
  require_textile
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-W4KAEIB7.js.map
