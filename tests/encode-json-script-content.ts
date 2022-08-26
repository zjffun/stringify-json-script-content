import { expect } from "chai";
import { encodeJsonScriptContent } from "../src/index.js";

describe("stringify-json-script-content", () => {
  it("should encode special chars", () => {
    const jsonString = JSON.stringify({ foo: "bar<script/>" });
    expect(encodeJsonScriptContent(jsonString)).to.be.equal(
      `{"foo":"bar\\u003Cscript\\u002F\\u003E"}`
    );
  });
});
