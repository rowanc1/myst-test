import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/processing.js
var require_processing = __commonJS({
  "../../node_modules/refractor/lang/processing.js"(exports, module) {
    module.exports = processing;
    processing.displayName = "processing";
    processing.aliases = [];
    function processing(Prism) {
      Prism.languages.processing = Prism.languages.extend("clike", {
        keyword: /\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
        function: /\b\w+(?=\s*\()/,
        operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
      });
      Prism.languages.insertBefore("processing", "number", {
        constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
        type: {
          pattern: /\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,
          alias: "class-name"
        }
      });
    }
  }
});

export {
  require_processing
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-NTWJF4AN.js.map
