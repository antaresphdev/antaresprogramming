import "./components/Animations";
import { NotificationManager } from "./components/NotificationManager";
import { $$, $ } from "./utilities/dom";
import "./components/PopOver";
import { TabSystem } from "./components/Tabs"

const container = $("[data-notification-container]");
const notifications = new NotificationManager(container);

$$("form[data-copy-on-submit]").forEach(form => {
  const txtCopy = form.querySelector('[data-copy]')
  form.addEventListener('submit', e => {
    e.preventDefault()
    txtCopy.select();
    txtCopy.setSelectionRange(0, 9999);
    document.execCommand("copy")

    notifications.showStatus({
      title: "Copied!",
      message: "Nasa clipboard mo na ang kailangan mong info.",
      feathericon: "check-circle",
      type: "success",
    });
  }) 
})

document.addEventListener("DOMContentLoaded", e => {
  document.documentElement.classList.remove('no-js')
})

document.querySelectorAll('[role=tablist]').forEach(tablist => new TabSystem(tablist))