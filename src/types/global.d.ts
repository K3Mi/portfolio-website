import { JQuery as JQueryType } from "jquery";

declare global {
  interface Window {
    $: JQueryType;
    jQuery: JQueryType;
  }
}