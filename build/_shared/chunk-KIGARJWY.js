import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/highlight.js/lib/languages/markdown.js
var require_markdown = __commonJS({
  "../../node_modules/highlight.js/lib/languages/markdown.js"(exports, module) {
    function source(re) {
      if (!re)
        return null;
      if (typeof re === "string")
        return re;
      return re.source;
    }
    function concat(...args) {
      const joined = args.map((x) => source(x)).join("");
      return joined;
    }
    function markdown(hljs) {
      const INLINE_HTML = {
        begin: /<\/?[A-Za-z_]/,
        end: ">",
        subLanguage: "xml",
        relevance: 0
      };
      const HORIZONTAL_RULE = {
        begin: "^[-\\*]{3,}",
        end: "$"
      };
      const CODE = {
        className: "code",
        variants: [
          {
            begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
          },
          {
            begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
          },
          {
            begin: "```",
            end: "```+[ ]*$"
          },
          {
            begin: "~~~",
            end: "~~~+[ ]*$"
          },
          {
            begin: "`.+?`"
          },
          {
            begin: "(?=^( {4}|\\t))",
            contains: [
              {
                begin: "^( {4}|\\t)",
                end: "(\\n)$"
              }
            ],
            relevance: 0
          }
        ]
      };
      const LIST = {
        className: "bullet",
        begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
        end: "\\s+",
        excludeEnd: true
      };
      const LINK_REFERENCE = {
        begin: /^\[[^\n]+\]:/,
        returnBegin: true,
        contains: [
          {
            className: "symbol",
            begin: /\[/,
            end: /\]/,
            excludeBegin: true,
            excludeEnd: true
          },
          {
            className: "link",
            begin: /:\s*/,
            end: /$/,
            excludeBegin: true
          }
        ]
      };
      const URL_SCHEME = /[A-Za-z][A-Za-z0-9+.-]*/;
      const LINK = {
        variants: [
          {
            begin: /\[.+?\]\[.*?\]/,
            relevance: 0
          },
          {
            begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
            relevance: 2
          },
          {
            begin: concat(/\[.+?\]\(/, URL_SCHEME, /:\/\/.*?\)/),
            relevance: 2
          },
          {
            begin: /\[.+?\]\([./?&#].*?\)/,
            relevance: 1
          },
          {
            begin: /\[.+?\]\(.*?\)/,
            relevance: 0
          }
        ],
        returnBegin: true,
        contains: [
          {
            className: "string",
            relevance: 0,
            begin: "\\[",
            end: "\\]",
            excludeBegin: true,
            returnEnd: true
          },
          {
            className: "link",
            relevance: 0,
            begin: "\\]\\(",
            end: "\\)",
            excludeBegin: true,
            excludeEnd: true
          },
          {
            className: "symbol",
            relevance: 0,
            begin: "\\]\\[",
            end: "\\]",
            excludeBegin: true,
            excludeEnd: true
          }
        ]
      };
      const BOLD = {
        className: "strong",
        contains: [],
        variants: [
          {
            begin: /_{2}/,
            end: /_{2}/
          },
          {
            begin: /\*{2}/,
            end: /\*{2}/
          }
        ]
      };
      const ITALIC = {
        className: "emphasis",
        contains: [],
        variants: [
          {
            begin: /\*(?!\*)/,
            end: /\*/
          },
          {
            begin: /_(?!_)/,
            end: /_/,
            relevance: 0
          }
        ]
      };
      BOLD.contains.push(ITALIC);
      ITALIC.contains.push(BOLD);
      let CONTAINABLE = [
        INLINE_HTML,
        LINK
      ];
      BOLD.contains = BOLD.contains.concat(CONTAINABLE);
      ITALIC.contains = ITALIC.contains.concat(CONTAINABLE);
      CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);
      const HEADER = {
        className: "section",
        variants: [
          {
            begin: "^#{1,6}",
            end: "$",
            contains: CONTAINABLE
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              {
                begin: "^[=-]*$"
              },
              {
                begin: "^",
                end: "\\n",
                contains: CONTAINABLE
              }
            ]
          }
        ]
      };
      const BLOCKQUOTE = {
        className: "quote",
        begin: "^>\\s+",
        contains: CONTAINABLE,
        end: "$"
      };
      return {
        name: "Markdown",
        aliases: [
          "md",
          "mkdown",
          "mkd"
        ],
        contains: [
          HEADER,
          INLINE_HTML,
          LIST,
          BOLD,
          ITALIC,
          BLOCKQUOTE,
          CODE,
          HORIZONTAL_RULE,
          LINK,
          LINK_REFERENCE
        ]
      };
    }
    module.exports = markdown;
  }
});

export {
  require_markdown
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-KIGARJWY.js.map
