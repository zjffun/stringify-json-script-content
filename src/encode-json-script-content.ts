const escapedChars: [RegExp, string][] = [
  [/</g, "\\u003C"],
  [/>/g, "\\u003E"],
  [/\//g, "\\u002F"],
];

export default (jsonString: string) => {
  let result = jsonString;

  escapedChars.forEach(([char, escaped]) => {
    result = result.replace(char, escaped);
  });

  return result;
};
