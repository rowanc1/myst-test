import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/highlight.js/lib/languages/inform7.js
var require_inform7 = __commonJS({
  "../../node_modules/highlight.js/lib/languages/inform7.js"(exports, module) {
    function inform7(hljs) {
      const START_BRACKET = "\\[";
      const END_BRACKET = "\\]";
      return {
        name: "Inform 7",
        aliases: ["i7"],
        case_insensitive: true,
        keywords: {
          keyword: "thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule"
        },
        contains: [
          {
            className: "string",
            begin: '"',
            end: '"',
            relevance: 0,
            contains: [
              {
                className: "subst",
                begin: START_BRACKET,
                end: END_BRACKET
              }
            ]
          },
          {
            className: "section",
            begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
            end: "$"
          },
          {
            begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
            end: ":",
            contains: [
              {
                begin: "\\(This",
                end: "\\)"
              }
            ]
          },
          {
            className: "comment",
            begin: START_BRACKET,
            end: END_BRACKET,
            contains: ["self"]
          }
        ]
      };
    }
    module.exports = inform7;
  }
});

export {
  require_inform7
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-CTUOFPDP.js.map
