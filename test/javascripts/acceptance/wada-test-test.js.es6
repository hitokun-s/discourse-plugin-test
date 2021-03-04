import { acceptance } from "discourse/tests/helpers/qunit-helpers";

acceptance("WadaTest", { loggedIn: true });

test("WadaTest works", async assert => {
  await visit("/admin/plugins/wada-test");

  assert.ok(false, "it shows the WadaTest button");
});
