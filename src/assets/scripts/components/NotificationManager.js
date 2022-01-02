class NotificationManager {
  /**
   * Creates an instance of NotificationManager.
   * @param {HTMLElement} element the notification container.
   * Must have [aria-live] and [role] attributes
   * @memberof NotificationManager
   */
  constructor(element) {
    this._element = element;
  }

  /**
   *
   *
   * @param {*} param { title, message, feathericon = "alert-circle", type = "default" }
   * @param {string} param.title
   * @param {string} param.message
   * @param {string} [param.feathericon="alert-circle"]
   * @param {"default"|"success"|"warning"|"error"} [param.type="default"]
   * @param {number} [timeoutMS=3000]
   * @memberof NotificationManager
   */
  showStatus(
    { title, message, feathericon = "alert-circle", type = "default" },
    timeoutMS = 3000
  ) {
    const notification = document.createElement("div");
    notification.setAttribute("role", "status");
    notification.setAttribute("aria-live", "polite");
    notification.classList.add("notification", type);

    notification.innerHTML = `<svg class="feathericon"><use href="/assets/images/feather-sprite.svg#${feathericon}"></use></svg>`;
    notification.innerHTML += `<span class="notification__title">${title}</span>`;
    notification.innerHTML += `<span class="notification__message">${message}</span>`;

    this._element.appendChild(notification);

    let isMouseOver = false;
    notification.addEventListener("mouseover", (e) => {
      isMouseOver = true;
    });

    notification.addEventListener("mouseleave", (e) => {
      isMouseOver = false;
    });

    let notificationDismisser = () => {
      console.log("HOVERING?", isMouseOver);
      if (isMouseOver) {
        setTimeout(notificationDismisser, timeoutMS);
      } else {
        notification.classList.remove("shown");
        setTimeout(() => {
          notification.remove();
        }, 300);
      }
    };

    setTimeout(() => {
      notification.classList.add("shown");
      setTimeout(notificationDismisser, timeoutMS);
    }, 100)
  }
}

export { NotificationManager };
