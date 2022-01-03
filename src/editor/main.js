import { createApp } from "vue";
import App from "@/editor/App.vue";

export class Editor {
  constructor({ el = null } = {}) {
    const player = new window.MyLibrary.Player();

    this._app = createApp(App, {
      player,
    });

    this._app.provide("playerStore", player.store);

    if (el) {
      this.mount(el);
    }
  }

  /**
   * Mount the app to the specified DOM element
   *
   * @param {DOMElement} el The DOM element
   * @returns {this}
   */
  mount(el) {
    if (!this._root) {
      this._root = this._app.mount(el);
    }
    return this;
  }
}
