import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/highlight.js/lib/languages/typescript.js
var require_typescript = __commonJS({
  "../../node_modules/highlight.js/lib/languages/typescript.js"(exports, module) {
    var IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
    var KEYWORDS = [
      "as",
      "in",
      "of",
      "if",
      "for",
      "while",
      "finally",
      "var",
      "new",
      "function",
      "do",
      "return",
      "void",
      "else",
      "break",
      "catch",
      "instanceof",
      "with",
      "throw",
      "case",
      "default",
      "try",
      "switch",
      "continue",
      "typeof",
      "delete",
      "let",
      "yield",
      "const",
      "class",
      "debugger",
      "async",
      "await",
      "static",
      "import",
      "from",
      "export",
      "extends"
    ];
    var LITERALS = [
      "true",
      "false",
      "null",
      "undefined",
      "NaN",
      "Infinity"
    ];
    var TYPES = [
      "Intl",
      "DataView",
      "Number",
      "Math",
      "Date",
      "String",
      "RegExp",
      "Object",
      "Function",
      "Boolean",
      "Error",
      "Symbol",
      "Set",
      "Map",
      "WeakSet",
      "WeakMap",
      "Proxy",
      "Reflect",
      "JSON",
      "Promise",
      "Float64Array",
      "Int16Array",
      "Int32Array",
      "Int8Array",
      "Uint16Array",
      "Uint32Array",
      "Float32Array",
      "Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "ArrayBuffer",
      "BigInt64Array",
      "BigUint64Array",
      "BigInt"
    ];
    var ERROR_TYPES = [
      "EvalError",
      "InternalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError"
    ];
    var BUILT_IN_GLOBALS = [
      "setInterval",
      "setTimeout",
      "clearInterval",
      "clearTimeout",
      "require",
      "exports",
      "eval",
      "isFinite",
      "isNaN",
      "parseFloat",
      "parseInt",
      "decodeURI",
      "decodeURIComponent",
      "encodeURI",
      "encodeURIComponent",
      "escape",
      "unescape"
    ];
    var BUILT_IN_VARIABLES = [
      "arguments",
      "this",
      "super",
      "console",
      "window",
      "document",
      "localStorage",
      "module",
      "global"
    ];
    var BUILT_INS = [].concat(
      BUILT_IN_GLOBALS,
      BUILT_IN_VARIABLES,
      TYPES,
      ERROR_TYPES
    );
    function source(re) {
      if (!re)
        return null;
      if (typeof re === "string")
        return re;
      return re.source;
    }
    function lookahead(re) {
      return concat("(?=", re, ")");
    }
    function concat(...args) {
      const joined = args.map((x) => source(x)).join("");
      return joined;
    }
    function javascript(hljs) {
      const hasClosingTag = (match, { after }) => {
        const tag = "</" + match[0].slice(1);
        const pos = match.input.indexOf(tag, after);
        return pos !== -1;
      };
      const IDENT_RE$1 = IDENT_RE;
      const FRAGMENT = {
        begin: "<>",
        end: "</>"
      };
      const XML_TAG = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (match, response) => {
          const afterMatchIndex = match[0].length + match.index;
          const nextChar = match.input[afterMatchIndex];
          if (nextChar === "<") {
            response.ignoreMatch();
            return;
          }
          if (nextChar === ">") {
            if (!hasClosingTag(match, { after: afterMatchIndex })) {
              response.ignoreMatch();
            }
          }
        }
      };
      const KEYWORDS$1 = {
        $pattern: IDENT_RE,
        keyword: KEYWORDS,
        literal: LITERALS,
        built_in: BUILT_INS
      };
      const decimalDigits = "[0-9](_?[0-9])*";
      const frac = `\\.(${decimalDigits})`;
      const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
      const NUMBER = {
        className: "number",
        variants: [
          { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
          { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
          { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
          { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
          { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
          { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
          { begin: "\\b0[0-7]+n?\\b" }
        ],
        relevance: 0
      };
      const SUBST = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: KEYWORDS$1,
        contains: []
      };
      const HTML_TEMPLATE = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ],
          subLanguage: "xml"
        }
      };
      const CSS_TEMPLATE = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ],
          subLanguage: "css"
        }
      };
      const TEMPLATE_STRING = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ]
      };
      const JSDOC_COMMENT = hljs.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+",
              contains: [
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
                  endsParent: true,
                  relevance: 0
                },
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      );
      const COMMENT = {
        className: "comment",
        variants: [
          JSDOC_COMMENT,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.C_LINE_COMMENT_MODE
        ]
      };
      const SUBST_INTERNALS = [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        TEMPLATE_STRING,
        NUMBER,
        hljs.REGEXP_MODE
      ];
      SUBST.contains = SUBST_INTERNALS.concat({
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS$1,
        contains: [
          "self"
        ].concat(SUBST_INTERNALS)
      });
      const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
      const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: KEYWORDS$1,
          contains: ["self"].concat(SUBST_AND_COMMENTS)
        }
      ]);
      const PARAMS = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS$1,
        contains: PARAMS_CONTAINS
      };
      return {
        name: "Javascript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: KEYWORDS$1,
        exports: { PARAMS_CONTAINS },
        illegal: /#(?![$_A-z])/,
        contains: [
          hljs.SHEBANG({
            label: "shebang",
            binary: "node",
            relevance: 5
          }),
          {
            label: "use_strict",
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          HTML_TEMPLATE,
          CSS_TEMPLATE,
          TEMPLATE_STRING,
          COMMENT,
          NUMBER,
          {
            begin: concat(
              /[{,\n]\s*/,
              lookahead(concat(
                /(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,
                IDENT_RE$1 + "\\s*:"
              ))
            ),
            relevance: 0,
            contains: [
              {
                className: "attr",
                begin: IDENT_RE$1 + lookahead("\\s*:"),
                relevance: 0
              }
            ]
          },
          {
            begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
            keywords: "return throw case",
            contains: [
              COMMENT,
              hljs.REGEXP_MODE,
              {
                className: "function",
                begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>",
                returnBegin: true,
                end: "\\s*=>",
                contains: [
                  {
                    className: "params",
                    variants: [
                      {
                        begin: hljs.UNDERSCORE_IDENT_RE,
                        relevance: 0
                      },
                      {
                        className: null,
                        begin: /\(\s*\)/,
                        skip: true
                      },
                      {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: true,
                        excludeEnd: true,
                        keywords: KEYWORDS$1,
                        contains: PARAMS_CONTAINS
                      }
                    ]
                  }
                ]
              },
              {
                begin: /,/,
                relevance: 0
              },
              {
                className: "",
                begin: /\s/,
                end: /\s*/,
                skip: true
              },
              {
                variants: [
                  { begin: FRAGMENT.begin, end: FRAGMENT.end },
                  {
                    begin: XML_TAG.begin,
                    "on:begin": XML_TAG.isTrulyOpeningTag,
                    end: XML_TAG.end
                  }
                ],
                subLanguage: "xml",
                contains: [
                  {
                    begin: XML_TAG.begin,
                    end: XML_TAG.end,
                    skip: true,
                    contains: ["self"]
                  }
                ]
              }
            ],
            relevance: 0
          },
          {
            className: "function",
            beginKeywords: "function",
            end: /[{;]/,
            excludeEnd: true,
            keywords: KEYWORDS$1,
            contains: [
              "self",
              hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
              PARAMS
            ],
            illegal: /%/
          },
          {
            beginKeywords: "while if switch catch for"
          },
          {
            className: "function",
            begin: hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
            returnBegin: true,
            contains: [
              PARAMS,
              hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 })
            ]
          },
          {
            variants: [
              { begin: "\\." + IDENT_RE$1 },
              { begin: "\\$" + IDENT_RE$1 }
            ],
            relevance: 0
          },
          {
            className: "class",
            beginKeywords: "class",
            end: /[{;=]/,
            excludeEnd: true,
            illegal: /[:"[\]]/,
            contains: [
              { beginKeywords: "extends" },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            begin: /\b(?=constructor)/,
            end: /[{;]/,
            excludeEnd: true,
            contains: [
              hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
              "self",
              PARAMS
            ]
          },
          {
            begin: "(get|set)\\s+(?=" + IDENT_RE$1 + "\\()",
            end: /\{/,
            keywords: "get set",
            contains: [
              hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
              { begin: /\(\)/ },
              PARAMS
            ]
          },
          {
            begin: /\$[(.]/
          }
        ]
      };
    }
    function typescript(hljs) {
      const IDENT_RE$1 = IDENT_RE;
      const NAMESPACE = {
        beginKeywords: "namespace",
        end: /\{/,
        excludeEnd: true
      };
      const INTERFACE = {
        beginKeywords: "interface",
        end: /\{/,
        excludeEnd: true,
        keywords: "interface extends"
      };
      const USE_STRICT = {
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use strict['"]/
      };
      const TYPES2 = [
        "any",
        "void",
        "number",
        "boolean",
        "string",
        "object",
        "never",
        "enum"
      ];
      const TS_SPECIFIC_KEYWORDS = [
        "type",
        "namespace",
        "typedef",
        "interface",
        "public",
        "private",
        "protected",
        "implements",
        "declare",
        "abstract",
        "readonly"
      ];
      const KEYWORDS$1 = {
        $pattern: IDENT_RE,
        keyword: KEYWORDS.concat(TS_SPECIFIC_KEYWORDS),
        literal: LITERALS,
        built_in: BUILT_INS.concat(TYPES2)
      };
      const DECORATOR = {
        className: "meta",
        begin: "@" + IDENT_RE$1
      };
      const swapMode = (mode, label, replacement) => {
        const indx = mode.contains.findIndex((m) => m.label === label);
        if (indx === -1) {
          throw new Error("can not find mode to replace");
        }
        mode.contains.splice(indx, 1, replacement);
      };
      const tsLanguage = javascript(hljs);
      Object.assign(tsLanguage.keywords, KEYWORDS$1);
      tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
      tsLanguage.contains = tsLanguage.contains.concat([
        DECORATOR,
        NAMESPACE,
        INTERFACE
      ]);
      swapMode(tsLanguage, "shebang", hljs.SHEBANG());
      swapMode(tsLanguage, "use_strict", USE_STRICT);
      const functionDeclaration = tsLanguage.contains.find((m) => m.className === "function");
      functionDeclaration.relevance = 0;
      Object.assign(tsLanguage, {
        name: "TypeScript",
        aliases: ["ts", "tsx"]
      });
      return tsLanguage;
    }
    module.exports = typescript;
  }
});

export {
  require_typescript
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-JIRBX2SO.js.map
