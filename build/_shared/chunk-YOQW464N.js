import {
  require_csharp
} from "/myst-test/build/_shared/chunk-PBAEHK4V.js";
import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/cshtml.js
var require_cshtml = __commonJS({
  "../../node_modules/refractor/lang/cshtml.js"(exports, module) {
    var refractorCsharp = require_csharp();
    module.exports = cshtml;
    cshtml.displayName = "cshtml";
    cshtml.aliases = ["razor"];
    function cshtml(Prism) {
      Prism.register(refractorCsharp);
      (function(Prism2) {
        var commentLike = /\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source;
        var stringLike = /@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source + "|" + /'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;
        function nested(pattern, depthLog2) {
          for (var i = 0; i < depthLog2; i++) {
            pattern = pattern.replace(/<self>/g, function() {
              return "(?:" + pattern + ")";
            });
          }
          return pattern.replace(/<self>/g, "[^\\s\\S]").replace(/<str>/g, "(?:" + stringLike + ")").replace(/<comment>/g, "(?:" + commentLike + ")");
        }
        var round = nested(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source, 2);
        var square = nested(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source, 2);
        var curly = nested(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source, 2);
        var angle = nested(/<(?:[^<>'"@/]|<str>|<comment>|<self>)*>/.source, 2);
        var tagAttrs = /(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?/.source;
        var tagContent = /(?!\d)[^\s>\/=$<%]+/.source + tagAttrs + /\s*\/?>/.source;
        var tagRegion = /\B@?/.source + "(?:" + /<([a-zA-Z][\w:]*)/.source + tagAttrs + /\s*>/.source + "(?:" + (/[^<]/.source + "|" + /<\/?(?!\1\b)/.source + tagContent + "|" + nested(
          /<\1/.source + tagAttrs + /\s*>/.source + "(?:" + (/[^<]/.source + "|" + /<\/?(?!\1\b)/.source + tagContent + "|<self>") + ")*" + /<\/\1\s*>/.source,
          2
        )) + ")*" + /<\/\1\s*>/.source + "|" + /</.source + tagContent + ")";
        Prism2.languages.cshtml = Prism2.languages.extend("markup", {});
        var csharpWithHtml = Prism2.languages.insertBefore(
          "csharp",
          "string",
          {
            html: {
              pattern: RegExp(tagRegion),
              greedy: true,
              inside: Prism2.languages.cshtml
            }
          },
          {
            csharp: Prism2.languages.extend("csharp", {})
          }
        );
        var cs = {
          pattern: /\S[\s\S]*/,
          alias: "language-csharp",
          inside: csharpWithHtml
        };
        Prism2.languages.insertBefore("cshtml", "prolog", {
          "razor-comment": {
            pattern: /@\*[\s\S]*?\*@/,
            greedy: true,
            alias: "comment"
          },
          block: {
            pattern: RegExp(
              /(^|[^@])@/.source + "(?:" + [
                curly,
                /(?:code|functions)\s*/.source + curly,
                /(?:for|foreach|lock|switch|using|while)\s*/.source + round + /\s*/.source + curly,
                /do\s*/.source + curly + /\s*while\s*/.source + round + /(?:\s*;)?/.source,
                /try\s*/.source + curly + /\s*catch\s*/.source + round + /\s*/.source + curly + /\s*finally\s*/.source + curly,
                /if\s*/.source + round + /\s*/.source + curly + "(?:" + /\s*else/.source + "(?:" + /\s+if\s*/.source + round + ")?" + /\s*/.source + curly + ")*"
              ].join("|") + ")"
            ),
            lookbehind: true,
            greedy: true,
            inside: {
              keyword: /^@\w*/,
              csharp: cs
            }
          },
          directive: {
            pattern: /^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,
            lookbehind: true,
            greedy: true,
            inside: {
              keyword: /^@\w+/,
              csharp: cs
            }
          },
          value: {
            pattern: RegExp(
              /(^|[^@])@/.source + /(?:await\b\s*)?/.source + "(?:" + /\w+\b/.source + "|" + round + ")(?:" + /[?!]?\.\w+\b/.source + "|" + round + "|" + square + "|" + angle + round + ")*"
            ),
            lookbehind: true,
            greedy: true,
            alias: "variable",
            inside: {
              keyword: /^@/,
              csharp: cs
            }
          },
          "delegate-operator": {
            pattern: /(^|[^@])@(?=<)/,
            lookbehind: true,
            alias: "operator"
          }
        });
        Prism2.languages.razor = Prism2.languages.cshtml;
      })(Prism);
    }
  }
});

export {
  require_cshtml
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-YOQW464N.js.map
