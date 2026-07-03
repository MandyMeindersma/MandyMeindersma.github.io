(function () {
  console.log("[modal-nav] IIFE started");
  // inject minimal styles for nav buttons
  var css = `
  .modal-nav{position:fixed;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.4);color:#fff;border:none;width:50px;height:80px;font-size:36px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:4px;z-index:10000;padding:0}
  .modal-nav:hover{background:rgba(0,0,0,0.9)}
  .modal-nav:focus{outline:2px solid #fff}
  .modal-prev{left:20px}
  .modal-next{right:20px}
  `;
  var s = document.createElement("style");
  s.appendChild(document.createTextNode(css));
  document.head.appendChild(s);
  console.log("[modal-nav] styles injected");

  var modals = Array.from(document.querySelectorAll(".portfolio-modal"));
  var ids = modals.map(function (m) {
    return m.id;
  });
  console.log("[modal-nav] found modals:", ids.length, ids);
  var currentId = null;
  var isNavigating = false;

  // create global nav buttons appended to body to avoid modal stacking issues
  var globalPrev = document.createElement("button");
  globalPrev.className = "modal-nav modal-prev";
  globalPrev.setAttribute("aria-label", "Previous");
  globalPrev.style.display = "none";
  globalPrev.innerHTML = "\u2039";
  var globalNext = document.createElement("button");
  globalNext.className = "modal-nav modal-next";
  globalNext.setAttribute("aria-label", "Next");
  globalNext.style.display = "none";
  globalNext.innerHTML = "\u203A";
  document.body.appendChild(globalPrev);
  document.body.appendChild(globalNext);
  console.log(
    "[modal-nav] global buttons created and appended to body",
    globalPrev,
    globalNext,
  );

  function navigate(dir) {
    console.log(
      "[modal-nav] navigate called, dir=",
      dir,
      "currentId=",
      currentId,
    );
    if (!currentId) return;
    var idx = ids.indexOf(currentId);
    if (idx === -1) return;
    var next = (idx + dir + ids.length) % ids.length;
    var nextId = ids[next];
    console.log("[modal-nav] navigating from", currentId, "to", nextId);
    if (nextId === currentId) return;

    try {
      var $current = $("#" + currentId);
      var $next = $("#" + nextId);
      if (
        $current.length &&
        $next.length &&
        typeof $current.modal === "function"
      ) {
        isNavigating = true;

        if ($current.hasClass("fade")) {
          $current.data("nav-had-fade", true).removeClass("fade");
        }
        if ($next.hasClass("fade")) {
          $next.data("nav-had-fade", true).removeClass("fade");
        }

        $current.one("hidden.bs.modal", function () {
          if ($(this).data("nav-had-fade")) {
            $(this).addClass("fade").removeData("nav-had-fade");
          }
          $next.modal("show");
        });

        $next.one("shown.bs.modal", function () {
          if ($(this).data("nav-had-fade")) {
            $(this).addClass("fade").removeData("nav-had-fade");
          }
        });

        $current.modal("hide");
        return;
      }
    } catch (e) {
      console.error("[modal-nav] jQuery modal error:", e);
    }

    // fallback if jQuery/Bootstrap not present or if show/hide fails
    var cur = document.getElementById(currentId);
    var nxt = document.getElementById(nextId);
    if (cur) cur.classList.remove("in");
    if (nxt) nxt.classList.add("in");
  }

  modals.forEach(function (modal, idx) {
    var prev = document.createElement("button");
    prev.className = "modal-nav modal-prev";
    prev.setAttribute("aria-label", "Previous");
    prev.innerHTML = "\u2039";
    var next = document.createElement("button");
    next.className = "modal-nav modal-next";
    next.setAttribute("aria-label", "Next");
    next.innerHTML = "\u203A";
    // we use global buttons instead of per-modal buttons to avoid stacking/z-index issues
    prev.addEventListener("click", function (e) {
      navigate(-1);
    });
    next.addEventListener("click", function (e) {
      navigate(1);
    });
  });

  // update current modal id on show/hide (attach per-modal handlers for reliability)
  if (window.jQuery) {
    console.log("[modal-nav] jQuery found, attaching per-modal handlers");
    modals.forEach(function (modal, idx) {
      console.log("[modal-nav] attaching handlers to modal", idx, modal.id);
      jQuery(modal).on("shown.bs.modal", function () {
        currentId = this.id;
        isNavigating = false;
        console.log("[modal-nav] shown.bs.modal event:", currentId);
        // show global buttons
        globalPrev.style.display = "flex";
        globalNext.style.display = "flex";
      });
      jQuery(modal).on("hidden.bs.modal", function () {
        console.log("[modal-nav] hidden.bs.modal event:", this.id);
        var stillOpen = jQuery(".portfolio-modal.in").length > 0;
        console.log("[modal-nav] hidden.bs.modal, stillOpen=", stillOpen);
        if (!stillOpen && !isNavigating) {
          if (currentId === this.id) currentId = null;
          globalPrev.style.display = "none";
          globalNext.style.display = "none";
        }
      });
    });
  } else {
    console.warn(
      "[modal-nav] jQuery not found, using fallback event listeners",
    );
  }

  // ALSO attach document-level listeners as fallback for shown.bs.modal
  console.log("[modal-nav] attaching document-level listeners");
  jQuery(document).on("show.bs.modal", ".portfolio-modal", function () {
    console.log("[modal-nav] DOCUMENT show.bs.modal event:", this.id);
    currentId = this.id;
    isNavigating = false;
    globalPrev.style.display = "flex";
    globalNext.style.display = "flex";
  });
  jQuery(document).on("shown.bs.modal", ".portfolio-modal", function () {
    currentId = this.id;
    isNavigating = false;
    console.log("[modal-nav] DOCUMENT shown.bs.modal event:", currentId);
    globalPrev.style.display = "flex";
    globalNext.style.display = "flex";
  });
  jQuery(document).on("hide.bs.modal", ".portfolio-modal", function () {
    console.log("[modal-nav] DOCUMENT hide.bs.modal event:", this.id);
  });
  jQuery(document).on("hidden.bs.modal", ".portfolio-modal", function () {
    console.log("[modal-nav] DOCUMENT hidden.bs.modal event:", this.id);
    var stillOpen = jQuery(".portfolio-modal.in").length > 0;
    console.log("[modal-nav] DOCUMENT hidden.bs.modal, stillOpen=", stillOpen);
    if (!stillOpen && !isNavigating) {
      if (currentId === this.id) currentId = null;
      globalPrev.style.display = "none";
      globalNext.style.display = "none";
    }
  });

  // ALSO: manual check - every time Bootstrap shows/hides, scan for visible modals
  console.log("[modal-nav] attaching manual modal visibility check");
  setInterval(function () {
    modals.forEach(function (m) {
      var isVisible = m.style.display !== "none" && m.classList.contains("in");
      if (isVisible && currentId !== m.id) {
        console.log("[modal-nav] manual check: found visible modal", m.id);
        currentId = m.id;
        globalPrev.style.display = "flex";
        globalNext.style.display = "flex";
      }
    });
  }, 100);

  // keyboard navigation (capture phase to catch events early)
  var enableDebug = false;
  function onKey(e) {
    if (!currentId) return;
    var key =
      e.key || e.keyIdentifier || String.fromCharCode(e.keyCode || e.which);
    if (enableDebug)
      console.debug(
        "[modal-nav] KEY EVENT:",
        key,
        "code:",
        e.keyCode || e.which,
        "currentId:",
        currentId,
      );
    var handled = false;
    if (e.key === "ArrowRight" || e.keyCode === 39) {
      handled = true;
      console.log("[modal-nav] ArrowRight detected");
      navigate(1);
    } else if (e.key === "ArrowLeft" || e.keyCode === 37) {
      handled = true;
      console.log("[modal-nav] ArrowLeft detected");
      navigate(-1);
    }
    if (handled) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
  // capture and bubble listeners to maximize compatibility
  window.addEventListener("keydown", onKey, true);
  window.addEventListener("keydown", onKey, false);
  console.log("[modal-nav] keydown listeners attached (capture + bubble)");
  // attach global button listeners
  globalPrev.addEventListener("click", function () {
    console.log("[modal-nav] globalPrev clicked");
    navigate(-1);
  });
  globalNext.addEventListener("click", function () {
    console.log("[modal-nav] globalNext clicked");
    navigate(1);
  });
  console.log("[modal-nav] IIFE complete");
})();
