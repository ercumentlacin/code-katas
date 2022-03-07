const inArray = require(".");
const testing = require("../../../helper/testing");

describe("Tests", () => {
  it("test", () => {
    let a1;
    let a2;

    a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
    a1 = ["xyz", "live", "strong"];
    testing(inArray(a1, a2), ["live", "strong"]);
    a1 = ["live", "strong", "arp"];
    testing(inArray(a1, a2), ["arp", "live", "strong"]);
    a1 = ["tarp", "mice", "bull"];
    testing(inArray(a1, a2), []);
  });
});
