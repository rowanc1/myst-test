import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/highlight.js/lib/languages/haxe.js
var require_haxe = __commonJS({
  "../../node_modules/highlight.js/lib/languages/haxe.js"(exports, module) {
    function haxe(hljs) {
      const HAXE_BASIC_TYPES = "Int Float String Bool Dynamic Void Array ";
      return {
        name: "Haxe",
        aliases: ["hx"],
        keywords: {
          keyword: "break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while " + HAXE_BASIC_TYPES,
          built_in: "trace this",
          literal: "true false null _"
        },
        contains: [
          {
            className: "string",
            begin: "'",
            end: "'",
            contains: [
              hljs.BACKSLASH_ESCAPE,
              {
                className: "subst",
                begin: "\\$\\{",
                end: "\\}"
              },
              {
                className: "subst",
                begin: "\\$",
                end: /\W\}/
              }
            ]
          },
          hljs.QUOTE_STRING_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.C_NUMBER_MODE,
          {
            className: "meta",
            begin: "@:",
            end: "$"
          },
          {
            className: "meta",
            begin: "#",
            end: "$",
            keywords: {
              "meta-keyword": "if else elseif end error"
            }
          },
          {
            className: "type",
            begin: ":[ 	]*",
            end: "[^A-Za-z0-9_ 	\\->]",
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          },
          {
            className: "type",
            begin: ":[ 	]*",
            end: "\\W",
            excludeBegin: true,
            excludeEnd: true
          },
          {
            className: "type",
            begin: "new *",
            end: "\\W",
            excludeBegin: true,
            excludeEnd: true
          },
          {
            className: "class",
            beginKeywords: "enum",
            end: "\\{",
            contains: [hljs.TITLE_MODE]
          },
          {
            className: "class",
            beginKeywords: "abstract",
            end: "[\\{$]",
            contains: [
              {
                className: "type",
                begin: "\\(",
                end: "\\)",
                excludeBegin: true,
                excludeEnd: true
              },
              {
                className: "type",
                begin: "from +",
                end: "\\W",
                excludeBegin: true,
                excludeEnd: true
              },
              {
                className: "type",
                begin: "to +",
                end: "\\W",
                excludeBegin: true,
                excludeEnd: true
              },
              hljs.TITLE_MODE
            ],
            keywords: {
              keyword: "abstract from to"
            }
          },
          {
            className: "class",
            begin: "\\b(class|interface) +",
            end: "[\\{$]",
            excludeEnd: true,
            keywords: "class interface",
            contains: [
              {
                className: "keyword",
                begin: "\\b(extends|implements) +",
                keywords: "extends implements",
                contains: [
                  {
                    className: "type",
                    begin: hljs.IDENT_RE,
                    relevance: 0
                  }
                ]
              },
              hljs.TITLE_MODE
            ]
          },
          {
            className: "function",
            beginKeywords: "function",
            end: "\\(",
            excludeEnd: true,
            illegal: "\\S",
            contains: [hljs.TITLE_MODE]
          }
        ],
        illegal: /<\//
      };
    }
    module.exports = haxe;
  }
});

export {
  require_haxe
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-LBQ2IIYX.js.map
