import encodeJsonScriptContent from "./encode-json-script-content.js";

const stringifyJsonScriptContent: JSON["stringify"] = (...args) => {
  // @ts-ignore
  return encodeJsonScriptContent(JSON.stringify(...args));
};

export default stringifyJsonScriptContent;
