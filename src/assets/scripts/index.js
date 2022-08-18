import "./components/Animations";
import { NotificationManager } from "./components/NotificationManager";
import { $$, $ } from "./utilities/dom";
import "./components/PopOver";
import { TabSystem } from "./components/Tabs"

const container = $("[data-notification-container]");
const notifications = new NotificationManager(container);

function copyGCashNumber(textboxID) {
  const textbox = document.getElementById(textboxID);

  textbox.select();
  textbox.setSelectionRange(0, 99999);

  document.execCommand("copy");

  notifications.showStatus({
    title: "Copied!",
    message: "Nasa clipboard mo na ang kailangan mong info.",
    feathericon: "check-circle",
    type: "success",
  });
}

$$("button[data-copy]").forEach((button) => {
  if (button.dataset.copy && button.dataset.copy.length > 0) {
    button.addEventListener("click", (e) =>
      copyGCashNumber(button.dataset.copy)
    );
  }
});

document.addEventListener("DOMContentLoaded", e => {
  document.documentElement.classList.remove('no-js')
})

document.querySelectorAll('[role=tablist]').forEach(tablist => new TabSystem(tablist))