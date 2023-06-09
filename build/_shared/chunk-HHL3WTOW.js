import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/highlight.js/lib/languages/moonscript.js
var require_moonscript = __commonJS({
  "../../node_modules/highlight.js/lib/languages/moonscript.js"(exports, module) {
    function moonscript(hljs) {
      const KEYWORDS = {
        keyword: "if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",
        literal: "true false nil",
        built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"
      };
      const JS_IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
      const SUBST = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: KEYWORDS
      };
      const EXPRESSIONS = [
        hljs.inherit(
          hljs.C_NUMBER_MODE,
          {
            starts: {
              end: "(\\s*/)?",
              relevance: 0
            }
          }
        ),
        {
          className: "string",
          variants: [
            {
              begin: /'/,
              end: /'/,
              contains: [hljs.BACKSLASH_ESCAPE]
            },
            {
              begin: /"/,
              end: /"/,
              contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
              ]
            }
          ]
        },
        {
          className: "built_in",
          begin: "@__" + hljs.IDENT_RE
        },
        {
          begin: "@" + hljs.IDENT_RE
        },
        {
          begin: hljs.IDENT_RE + "\\\\" + hljs.IDENT_RE
        }
      ];
      SUBST.contains = EXPRESSIONS;
      const TITLE = hljs.inherit(hljs.TITLE_MODE, {
        begin: JS_IDENT_RE
      });
      const POSSIBLE_PARAMS_RE = "(\\(.*\\)\\s*)?\\B[-=]>";
      const PARAMS = {
        className: "params",
        begin: "\\([^\\(]",
        returnBegin: true,
        contains: [
          {
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS,
            contains: ["self"].concat(EXPRESSIONS)
          }
        ]
      };
      return {
        name: "MoonScript",
        aliases: ["moon"],
        keywords: KEYWORDS,
        illegal: /\/\*/,
        contains: EXPRESSIONS.concat([
          hljs.COMMENT("--", "$"),
          {
            className: "function",
            begin: "^\\s*" + JS_IDENT_RE + "\\s*=\\s*" + POSSIBLE_PARAMS_RE,
            end: "[-=]>",
            returnBegin: true,
            contains: [
              TITLE,
              PARAMS
            ]
          },
          {
            begin: /[\(,:=]\s*/,
            relevance: 0,
            contains: [
              {
                className: "function",
                begin: POSSIBLE_PARAMS_RE,
                end: "[-=]>",
                returnBegin: true,
                contains: [PARAMS]
              }
            ]
          },
          {
            className: "class",
            beginKeywords: "class",
            end: "$",
            illegal: /[:="\[\]]/,
            contains: [
              {
                beginKeywords: "extends",
                endsWithParent: true,
                illegal: /[:="\[\]]/,
                contains: [TITLE]
              },
              TITLE
            ]
          },
          {
            className: "name",
            begin: JS_IDENT_RE + ":",
            end: ":",
            returnBegin: true,
            returnEnd: true,
            relevance: 0
          }
        ])
      };
    }
    module.exports = moonscript;
  }
});

export {
  require_moonscript
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-HHL3WTOW.js.map
