import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/highlight.js/lib/languages/aspectj.js
var require_aspectj = __commonJS({
  "../../node_modules/highlight.js/lib/languages/aspectj.js"(exports, module) {
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
    function aspectj(hljs) {
      const KEYWORDS = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else extends implements break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws privileged aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization staticinitialization withincode target within execution getWithinTypeName handler thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents warning error soft precedence thisAspectInstance";
      const SHORTKEYS = "get set args call";
      return {
        name: "AspectJ",
        keywords: KEYWORDS,
        illegal: /<\/|#/,
        contains: [
          hljs.COMMENT(
            /\/\*\*/,
            /\*\//,
            {
              relevance: 0,
              contains: [
                {
                  begin: /\w+@/,
                  relevance: 0
                },
                {
                  className: "doctag",
                  begin: /@[A-Za-z]+/
                }
              ]
            }
          ),
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            className: "class",
            beginKeywords: "aspect",
            end: /[{;=]/,
            excludeEnd: true,
            illegal: /[:;"\[\]]/,
            contains: [
              {
                beginKeywords: "extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton"
              },
              hljs.UNDERSCORE_TITLE_MODE,
              {
                begin: /\([^\)]*/,
                end: /[)]+/,
                keywords: KEYWORDS + " " + SHORTKEYS,
                excludeEnd: false
              }
            ]
          },
          {
            className: "class",
            beginKeywords: "class interface",
            end: /[{;=]/,
            excludeEnd: true,
            relevance: 0,
            keywords: "class interface",
            illegal: /[:"\[\]]/,
            contains: [
              {
                beginKeywords: "extends implements"
              },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            beginKeywords: "pointcut after before around throwing returning",
            end: /[)]/,
            excludeEnd: false,
            illegal: /["\[\]]/,
            contains: [
              {
                begin: concat(hljs.UNDERSCORE_IDENT_RE, /\s*\(/),
                returnBegin: true,
                contains: [hljs.UNDERSCORE_TITLE_MODE]
              }
            ]
          },
          {
            begin: /[:]/,
            returnBegin: true,
            end: /[{;]/,
            relevance: 0,
            excludeEnd: false,
            keywords: KEYWORDS,
            illegal: /["\[\]]/,
            contains: [
              {
                begin: concat(hljs.UNDERSCORE_IDENT_RE, /\s*\(/),
                keywords: KEYWORDS + " " + SHORTKEYS,
                relevance: 0
              },
              hljs.QUOTE_STRING_MODE
            ]
          },
          {
            beginKeywords: "new throw",
            relevance: 0
          },
          {
            className: "function",
            begin: /\w+ +\w+(\.\w+)?\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
            returnBegin: true,
            end: /[{;=]/,
            keywords: KEYWORDS,
            excludeEnd: true,
            contains: [
              {
                begin: concat(hljs.UNDERSCORE_IDENT_RE, /\s*\(/),
                returnBegin: true,
                relevance: 0,
                contains: [hljs.UNDERSCORE_TITLE_MODE]
              },
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                relevance: 0,
                keywords: KEYWORDS,
                contains: [
                  hljs.APOS_STRING_MODE,
                  hljs.QUOTE_STRING_MODE,
                  hljs.C_NUMBER_MODE,
                  hljs.C_BLOCK_COMMENT_MODE
                ]
              },
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_NUMBER_MODE,
          {
            className: "meta",
            begin: /@[A-Za-z]+/
          }
        ]
      };
    }
    module.exports = aspectj;
  }
});

export {
  require_aspectj
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-KOVF7PWM.js.map
