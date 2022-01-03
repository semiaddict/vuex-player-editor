import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

export class Player {
  constructor({ el = null } = {}) {
    this._store = createStore({
      state: {
        count: 0,
      },
      getters: {
        getCount(state) {
          return state.count;
        },
      },
      mutations: {
        add(state) {
          state.count++;
        },
      },
    });
    this._app = createApp(App).use(this._store);

    if (el) {
      this.mount(el);
    }
  }

  /**
   * Get the data store
   *
   * @returns {Store}
   */
  get store() {
    return this._store;
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
