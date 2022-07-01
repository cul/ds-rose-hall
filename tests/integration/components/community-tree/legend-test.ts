import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | community-tree/legend", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function (val) { ... });

    await render(hbs`<CommunityTree::Legend />`);

    assert.dom().hasText("");

    // Template block usage:
    await render(hbs`
      <CommunityTree::Legend>
        template block text
      </CommunityTree::Legend>
    `);

    assert.dom().hasText("template block text");
  });
});
