import { VNode, DirectiveBinding, App } from "vue";
import { isFunction } from "./util";

const track = (value: string | object, options: any) => {
  if (isFunction(options)) {
    options(value);
  } else {
    // 为多种上报做准备
    options.default(value);
  }
};

interface El extends HTMLElement {
  $listener?: () => void;
}

export default {
  install: (app: App, options: DirectiveBinding) => {
    // @ts-ignore
    app.directive("track", {
      // @ts-ignore
      bind(el: El, binding: DirectiveBinding<string | object>) {
        const value = binding.value;
        el.$listener = () => {
          track(value, options);
        };

        el.addEventListener("click", el.$listener);
      },
      unbind(el: El, binding: DirectiveBinding<string | object>) {
        el.$listener && el.removeEventListener("click", el.$listener);
      },

      beforeMount(el: El, binding: DirectiveBinding<string | object>) {
        const value = binding.value;
        el.$listener = () => {
          track(value, options);
        };

        el.addEventListener("click", el.$listener);
      },
      unmounted(el: El, binding: DirectiveBinding<string | object>) {
        el.$listener && el.removeEventListener("click", el.$listener);
      }
    });
  }
};
