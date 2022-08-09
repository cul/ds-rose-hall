import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { interpolateWarm } from "d3";

export default class SvgService extends Service {
  @tracked width = 375;

  @tracked height = 320;

  get spacerHeight() {
    const spacer = document.getElementById("information-spacer");
    if (spacer) {
      return spacer.clientHeight;
    }

    return null;
  }

  get rem() {
    if (document) {
      return parseFloat(
        window
          .getComputedStyle(document.documentElement)
          .fontSize.replace("px", ""),
        10
      );
    }

    return 16;
  }

  get isLandscape() {
    return this.width > this.height;
  }

  get margins() {
    const base = 1 * this.rem;
    const margins = {
      top: base,
      left: base,
      bottom: base + 3 * this.rem,
      right: base,
    };

    if (this.isLandscape) {
      margins.bottom = base;
      margins.right = base + 3 * this.rem;
    }

    // if (this.isLandscape && this.width < 768) {
    //   margins.right = base;
    // }

    return margins;
  }

  gradient(value) {
    return interpolateWarm(-0.8 * (value - 1));
    // const colorScale = scaleLinear()
    //   .domain([0, 0.4, 0.8, 1])
    //   .range(["#009b3a", "#FED100", "#cc0000", "#000000"]);
    // return colorScale(value);
  }

  get circleCenter() {
    return {
      x:
        (this.width - this.margins.right - this.margins.left) / 2 +
        this.margins.left,
      y:
        (this.height - this.margins.top - this.margins.bottom) / 2 +
        this.margins.top,
    };
  }

  get circleTransform() {
    const height = this.spacerHeight || this.height;
    return `translate(${
      (this.width - this.margins.right - this.margins.left) / 2 +
      this.margins.left
    }, ${
      (height - this.margins.top - this.margins.bottom) / 2 + this.margins.top
    })`;
  }

  get circleRadius() {
    const factor = 2.1;
    if (this.isLandscape) {
      return (this.height - this.margins.top - this.margins.bottom) / factor;
    }

    return (this.width - this.margins.right - this.margins.left) / factor;
  }

  @tracked frond = null;

  @tracked showTooltip = false;

  @tracked tooltipContent;
}
