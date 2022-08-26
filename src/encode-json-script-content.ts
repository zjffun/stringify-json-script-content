import escapedChars from "./escaped-chars.js";

export default (jsonString: string) => {
  let result = jsonString;

  escapedChars.forEach(([char, escaped]) => {
    result = result.replaceAll(char, escaped);
  });

  return result;
};
