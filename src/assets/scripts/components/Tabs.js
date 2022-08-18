import { of } from "ramda"

class TabSystem {
  /**
   * Creates a new tab system
   * @param {HTMLUListElement} tablist the list with the role=tablist attribute
   */
  constructor(tablist) {

    /**
     * Deselects previously selected tab
     * @param {Tab} selectedTab The currently selected tab
     */
    const deselectOtherTabs = selectedTab => {
      const selectedTabs = this.tabs.filter(t => t.isSelected)
      selectedTabs.forEach(t => {
        if (t != selectedTab) {
          t.isSelected = false
        }
      })
    }

    this.tabs = [...tablist.querySelectorAll('[role=tab]')].map(t => {
      const tab = new Tab(t)
      tab.addEventListener('selected', deselectOtherTabs)
      return tab
    })
    console.log(this.tabs)
  }
}

class Tab {
  /**
   * 
   * @param {HTMLAnchorElement} tab the anchor element that triggers the tabpanel
   */
  constructor(tab) {
    this.trigger = tab
    this.panel = document.getElementById(tab.href.split('#')[1])

    this.trigger.addEventListener('click', e => {
      e.preventDefault()
      this.isSelected = true
    })

    this.__events = {
      selected: [],
      deselected: []
    }
  }

  get isSelected() {
    return this.trigger.hasAttribute('aria-selected')
  }

  set isSelected(selected) {
    if (selected) {
      this.trigger.setAttribute('aria-selected', '')
      this.panel.removeAttribute('hidden')
      this.__events.selected.forEach(fn => fn(this))
    } else {
      this.trigger.removeAttribute('aria-selected')
      this.panel.setAttribute('hidden', '')
      this.__events.deselected.forEach(fn => fn(this))
    }
  }

  addEventListener(key, fn) {
    this.__events[key].push(fn)
  }
}

export { TabSystem }