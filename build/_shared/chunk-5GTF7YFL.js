import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/highlight.js/lib/languages/cos.js
var require_cos = __commonJS({
  "../../node_modules/highlight.js/lib/languages/cos.js"(exports, module) {
    function cos(hljs) {
      const STRINGS = {
        className: "string",
        variants: [{
          begin: '"',
          end: '"',
          contains: [{
            begin: '""',
            relevance: 0
          }]
        }]
      };
      const NUMBERS = {
        className: "number",
        begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
        relevance: 0
      };
      const COS_KEYWORDS = "property parameter class classmethod clientmethod extends as break catch close continue do d|0 else elseif for goto halt hang h|0 if job j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 tcommit throw trollback try tstart use view while write w|0 xecute x|0 zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit zsync ascii";
      return {
        name: "Cach\xE9 Object Script",
        case_insensitive: true,
        aliases: [
          "cls"
        ],
        keywords: COS_KEYWORDS,
        contains: [
          NUMBERS,
          STRINGS,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: "comment",
            begin: /;/,
            end: "$",
            relevance: 0
          },
          {
            className: "built_in",
            begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
          },
          {
            className: "built_in",
            begin: /\$\$\$[a-zA-Z]+/
          },
          {
            className: "built_in",
            begin: /%[a-z]+(?:\.[a-z]+)*/
          },
          {
            className: "symbol",
            begin: /\^%?[a-zA-Z][\w]*/
          },
          {
            className: "keyword",
            begin: /##class|##super|#define|#dim/
          },
          {
            begin: /&sql\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            subLanguage: "sql"
          },
          {
            begin: /&(js|jscript|javascript)</,
            end: />/,
            excludeBegin: true,
            excludeEnd: true,
            subLanguage: "javascript"
          },
          {
            begin: /&html<\s*</,
            end: />\s*>/,
            subLanguage: "xml"
          }
        ]
      };
    }
    module.exports = cos;
  }
});

export {
  require_cos
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-5GTF7YFL.js.map
