document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     BREAKDOWN TABS
  ===================================================== */

  const breakdownTabs =
    document.querySelector(".breakdownTabs");

  const breakdownTabsItems =
    document.querySelectorAll(".breakdownTabs-item");

  const breakdownTabsButtons =
    document.querySelectorAll(".breakdownTabs-button");


  if (breakdownTabs) {

    /*
     * Comunichiamo al CSS che JavaScript è
     * effettivamente disponibile.
     */
    breakdownTabs.classList.add("breakdownTabs-ready");


    /*
     * Funzione che seleziona una voce.
     */
    function selectBreakdownTab(selectedIndex) {

      for (let i = 0; i < breakdownTabsItems.length; i++) {

        if (i === selectedIndex) {

          breakdownTabsItems[i]
            .classList.add("is-selected");

        } else {

          breakdownTabsItems[i]
            .classList.remove("is-selected");

        }

      }

    }


    /*
     * Colleghiamo ogni pulsante alla
     * posizione della relativa voce.
     */
    for (let i = 0; i < breakdownTabsButtons.length; i++) {

      breakdownTabsButtons[i].addEventListener(
        "click",
        () => {
          selectBreakdownTab(i);
        }
      );

    }

  }


  /* =====================================================
     NAVIGAZIONE
  ===================================================== */

  const navigation =
    document.querySelector(".navigation");

  const navigationPanel =
    document.querySelector("#navigation-panel");

  const desktopMedia =
    window.matchMedia("(min-width: 1000px)");


  /*
   * A desktop il pannello della navigazione
   * non deve comportarsi come popover.
   */
  function updateNavigation() {

    if (!navigationPanel) {
      return;
    }

    if (desktopMedia.matches) {

      navigationPanel.removeAttribute("popover");

    } else {

      navigationPanel.setAttribute(
        "popover",
        "auto"
      );

    }

  }


  updateNavigation();

  desktopMedia.addEventListener(
    "change",
    updateNavigation
  );


  /*
   * Quando si clicca una voce della navigazione
   * su mobile, chiudiamo il popover.
   */
  if (navigationPanel) {

    const navigationLinks =
      navigationPanel.querySelectorAll("a");

    for (let i = 0; i < navigationLinks.length; i++) {

      navigationLinks[i].addEventListener(
        "click",
        () => {

          if (
            !desktopMedia.matches &&
            navigationPanel.matches(":popover-open")
          ) {

            navigationPanel.hidePopover();

          }

        }
      );

    }

  }

});