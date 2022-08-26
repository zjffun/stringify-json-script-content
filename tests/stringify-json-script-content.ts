import { expect } from "chai";
import stringifyJsonScriptContent from "../src/index.js";

describe("stringify-json-script-content", () => {
  it("should same as JSON.stringify when normal", () => {
    const obj = { foo: "bar" };
    expect(stringifyJsonScriptContent(obj, null, 2)).to.be.equal(
      JSON.stringify(obj, null, 2)
    );
  });

  it("should encode special chars", () => {
    const obj = { foo: "bar<script/>" };
    const expected = `{
  "foo": "bar\\u003Cscript\\u002F\\u003E"
}`;
    expect(stringifyJsonScriptContent(obj, null, 2)).to.be.equal(expected);
  });
});
