import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | information/sort-menu", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Information::SortMenu />`);

    assert.dom(this.element).hasText("");

    // Template block usage:
    await render(hbs`
      <Information::SortMenu>
        template block text
      </Information::SortMenu>
    `);

    assert.dom(this.element).hasText("template block text");
  });
});
