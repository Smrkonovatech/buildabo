(function () {
  const MAP =
    "https://www.google.com/maps/search/?api=1&query=3rd+Floor+244+Kallumantapa+Horamavu+Bengaluru+560113";
  const MENU_ICON =
    '<svg width="23" height="13" viewBox="0 0 23 13" fill="none"><path d="M4.16 0H17.76V1H4.16V0Z" fill="black"/><path d="M0 6H22.13V7H0V6Z" fill="black"/><path d="M4.16 12H17.76V13H4.16V12Z" fill="black"/></svg>';

  function pageFile() {
    const file = (window.location.pathname.replace(/\\/g, "/").split("/").pop() || "").toLowerCase();
    return file && file !== "/" ? file : "index.html";
  }

  function isCurrent(href) {
    const file = pageFile();
    const target = href.split("#")[0].split("?")[0];
    if (target === "index.html") return file === "index.html";
    if (target === "portfolio.html") return file === "portfolio.html" || file === "project.html";
    return file === target;
  }

  function currentAttr(href) {
    return isCurrent(href) ? ' aria-current="page"' : "";
  }

  function isAdPage() {
    return document.body.classList.contains("ad-page");
  }

  function logo() {
    return (
      '<a href="index.html" class="logo" aria-label="buildabo — interior designers and home construction in Bangalore">' +
      '<img class="logo-mark" src="assets/logo-mark.png" alt="" width="36" height="36" decoding="async" />' +
      '<img class="logo-word" src="assets/buildabo.svg" alt="buildabo" width="120" height="22" decoding="async" />' +
      "</a>"
    );
  }

  function startBtn(extraClass) {
    return (
      '<a href="#" class="btn ' +
      extraClass +
      '" data-open-lead><span>Start a Project</span></a>'
    );
  }

  function desktopNav() {
    return (
      '<a href="index.html"' +
      currentAttr("index.html") +
      ">Home</a>" +
      '<a href="about.html"' +
      currentAttr("about.html") +
      ">About</a>" +
      '<a href="services.html"' +
      currentAttr("services.html") +
      ">Service</a>" +
      '<a href="portfolio.html"' +
      currentAttr("portfolio.html") +
      ">Portfolio</a>" +
      '<a href="contact.html"' +
      currentAttr("contact.html") +
      ">Contact us</a>"
    );
  }

  function stickyHTML() {
    return (
      '<header class="sticky-header">' +
      logo() +
      '<nav class="sticky-nav">' +
      desktopNav() +
      "</nav>" +
      '<div class="header-actions">' +
      startBtn("hidden sm:inline-flex") +
      '<button class="icon-btn lg:hidden" data-open-menu aria-label="Menu">' +
      MENU_ICON +
      "</button></div></header>"
    );
  }

  function mobileHTML() {
    return (
      '<div class="mobile-menu" aria-hidden="true">' +
      '<div class="mobile-menu-overlay" data-close-menu></div>' +
      '<nav class="mobile-menu-panel" aria-label="Menu">' +
      '<div class="mobile-menu-heading"><h2>Menu</h2></div>' +
      '<ul class="mobile-nav">' +
      "<li><a href=\"index.html\"" +
      currentAttr("index.html") +
      ">Home</a></li>" +
      "<li><a href=\"about.html\"" +
      currentAttr("about.html") +
      ">About</a></li>" +
      "<li><a href=\"services.html\"" +
      currentAttr("services.html") +
      ">Service</a></li>" +
      "<li><a href=\"portfolio.html\"" +
      currentAttr("portfolio.html") +
      ">Portfolio</a></li>" +
      "<li><a href=\"contact.html\"" +
      currentAttr("contact.html") +
      ">Contact us</a></li>" +
      "</ul></nav></div>"
    );
  }

  function topHTML() {
    return (
      '<header class="site-header">' +
      '<div class="header-meta">' +
      '<a href="tel:+919663635559"><span></span>9663635559</a>' +
      '<a href="tel:+919663656669"><span></span>9663656669</a>' +
      '<a href="mailto:info@buildabo.in"><span></span>info@buildabo.in</a>' +
      "</div>" +
      logo() +
      '<div class="header-actions">' +
      startBtn("hidden md:inline-flex") +
      '<button class="icon-btn" data-open-menu aria-label="Menu">' +
      MENU_ICON +
      "</button></div></header>"
    );
  }

  function footerHTML() {
    return (
      '<footer class="site-footer" id="contact">' +
      '<div class="container-site">' +
      '<div class="flex flex-col lg:flex-row lg:items-end justify-between gap-10">' +
      '<div class="max-w-xl">' +
      logo() +
      '<p class="mt-5 font-serif text-[22px] leading-snug text-[var(--plaster)]">Crafting homes and spaces that stand the test of time.</p>' +
      '<p class="mt-3 max-w-md">buildabo is an interior design company in Bangalore and a house construction company. Interior designers, home interior designers, and residential builders — house construction and home interior design from foundation to finish.</p>' +
      "</div></div>" +
      '<div class="h-px bg-white/20 my-12"></div>' +
      '<div class="foot-grid">' +
      "<div>" +
      '<h6 class="!normal-case !tracking-normal !text-[22px] !mb-6 font-serif">interested in our projects<br />and design approach?</h6>' +
      startBtn("btn-white") +
      "</div>" +
      "<div><h6>NAVIGATION</h6><ul class=\"foot-list\">" +
      "<li><a href=\"index.html\"" +
      currentAttr("index.html") +
      ">Home</a></li>" +
      "<li><a href=\"about.html\"" +
      currentAttr("about.html") +
      ">About</a></li>" +
      "<li><a href=\"services.html\"" +
      currentAttr("services.html") +
      ">Services</a></li>" +
      "<li><a href=\"portfolio.html\"" +
      currentAttr("portfolio.html") +
      ">Projects</a></li>" +
      "<li><a href=\"contact.html\"" +
      currentAttr("contact.html") +
      ">Contact</a></li>" +
       '<li><a href="privacy.html"' +
      currentAttr("privacy.html") +
      ">Privacy Policy</a></li>" +
      "</ul></div>" +
      "<div><h6>CONTACT</h6>" +
      '<p class="mb-1">Company Address</p>' +
      '<p class="mb-4"><a href="' +
      MAP +
      '">3rd Floor, 244,<br />Kallumantapa, Horamavu, Bengaluru, Karnataka 560113</a></p>' +
      '<p class="mb-1">Email Us:</p>' +
      '<p class="mb-4"><a href="mailto:info@buildabo.in">info@buildabo.in</a></p>' +
      '<p class="mb-1">Call Us:</p>' +
      '<p><a href="tel:+919663635559">9663635559</a> / <a href="tel:+919663656669">9663656669</a></p>' +
      "</div></div>" +
      '<div class="foot-bottom">' +
      "<p style='font-size:17px;'>© 2026 buildabo. All rights reserved. | Designed and Developed By <a href='https://www.smrkonova.com/'>Smrkonova</a></p>" +
      '<div class="foot-social">' +
      '<a href=" https://www.linkedin.com/company/buildabo/about/?viewAsMember=true" aria-label="LinkedIn"><svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>' +
      '<a href="https://www.instagram.com/buildabo/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg></a>' +
      '<a href="https://www.facebook.com/profile.php?id=61590868808399" aria-label="Facebook"><svg viewBox="0 0 320 512" fill="currentColor" aria-hidden="true"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a></footer>'
    );
  }

  function mount(selector, html, fallbackSelector) {
    const slot = document.querySelector(selector);
    if (slot) {
      slot.outerHTML = html;
      return;
    }
    const existing = fallbackSelector ? document.querySelector(fallbackSelector) : null;
    if (existing) existing.outerHTML = html;
  }

  function impactHTML() {
    const icon = (svg) => '<span class="impact-icon" aria-hidden="true">' + svg + "</span>";
    return (
      '<section class="impact-bar" aria-label="buildabo at a glance">' +
      '<div class="container-site impact-bar-grid">' +
      "<article>" +
      icon('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 11.2 12 4l8 7.2"/><path d="M6.5 10.2V20h11V10.2"/><circle cx="9.2" cy="13.6" r="1.15"/><path d="M7.6 19.5v-3.1h3.2v3.1"/></svg>') +
      '<h3><span data-counter="25">1</span>+ Projects</h3>' +
      "<p>Built and handed over</p>" +
      "</article>" +
      "<article>" +
      icon('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-5.6 7-11.2A7 7 0 0 0 5 9.8C5 15.4 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.2"/></svg>') +
      '<h3><span data-counter="8">1</span>+ Places</h3>' +
      "<p>Operational presence</p>" +
      "</article>" +
      "<article>" +
      icon('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>') +
      '<h3><span data-counter="5">1</span>+ Years</h3>' +
      "<p>Of craft</p>" +
      "</article>" +
      "<article>" +
      icon('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4h11l3 3v13H5V4z"/><path d="M16 4v4h4"/><path d="M8 12h8M8 15h6"/><path d="M14.2 18.2 18 21l1.4-1.4-3.5-2.4z"/></svg>') +
      '<h3><span data-counter="124">1</span> Designs</h3>' +
      "<p>Ready-to-build options</p>" +
      "</article>" +
      "</div></section>"
    );
  }

  function init() {
    mount('[data-chrome="sticky"]', stickyHTML(), ".sticky-header");
    mount('[data-chrome="mobile"]', mobileHTML(), ".mobile-menu");
    mount('[data-chrome="top"]', topHTML(), ".site-header");

    const heroNav = document.querySelector('[data-chrome="hero-nav"]') || document.querySelector(".hero-nav");
    if (heroNav) {
      heroNav.setAttribute("aria-label", "Primary");
      heroNav.innerHTML = desktopNav();
    }

    document.querySelectorAll('[data-chrome="impact"]').forEach((slot) => {
      slot.outerHTML = impactHTML();
    });
    const hasBar = document.querySelector(".impact-bar");
    const skipImpact =
      pageFile() === "privacy.html" ||
      pageFile() === "index.html" ||
      pageFile() === "portfolio.html" ||
      pageFile() === "project.html" ||
      pageFile() === "contact.html";
    const footerBlock = (hasBar || skipImpact ? "" : impactHTML()) + footerHTML();
    mount('[data-chrome="footer"]', footerBlock, ".site-footer");
    injectWidgets();
    document.querySelectorAll('.foot-social a[href="#"]').forEach((a) => {
      a.addEventListener("click", (e) => e.preventDefault());
    });
  }

  const WA_HREF =
    "https://wa.me/919663635559?text=" +
    encodeURIComponent("Hi buildabo, I’d like to talk about a project in Bangalore.");

  function whatsappHTML() {
    return (
      '<a class="whatsapp-fab" href="' +
      WA_HREF +
      '" target="_blank" rel="noopener noreferrer" aria-label="Chat with buildabo on WhatsApp">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
      "</a>"
    );
  }

  const LEAD_FLAG =
    '<svg class="lead-card-flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.33" fill="#FF9933"/><rect y="5.33" width="24" height="5.34" fill="#fff"/><rect y="10.67" width="24" height="5.33" fill="#138808"/><circle cx="12" cy="8" r="1.7" fill="none" stroke="#000080" stroke-width=".75"/></svg>';

  const PLOT_LOCATIONS = [
    "North Bangalore",
    "Sarjapur",
    "KR Puram",
    "Hoskote",
    "Chandapura",
    "Devanahalli",
    "Vidyaranyapura",
    "Other areas in Bangalore",
  ];

  function locationSelectHTML(id) {
    return (
      '<select class="lead-card-input" id="' +
      id +
      '" name="location" required aria-label="Location of your plot">' +
      '<option value="" disabled selected>Location of your plot*</option>' +
      PLOT_LOCATIONS.map(function (name) {
        return '<option value="' + name + '">' + name + "</option>";
      }).join("") +
      "</select>"
    );
  }

  function simpleLeadFields(idPrefix, submitLabel) {
    return (
      '<input class="lead-card-input" id="' + idPrefix + '-name" type="text" name="name" required maxlength="120" placeholder="Full Name*" autocomplete="name" />' +
      '<div class="lead-card-phone"><span class="lead-card-cc" aria-hidden="true">' +
      LEAD_FLAG +
      " +91</span>" +
      '<input id="' + idPrefix + '-phone" type="tel" name="phone" required maxlength="15" placeholder="Mobile Number*" inputmode="numeric" autocomplete="tel-national" />' +
      "</div>" +
      locationSelectHTML(idPrefix + "-location") +
      '<button type="submit" class="contact-submit">' + submitLabel + "</button>" +
      '<p class="lead-card-legal">*By submitting, you agree to our <a href="privacy.html">Privacy Policy</a>, allowing us to use your information as outlined.</p>' +
      '<p class="contact-form-status" role="status" aria-live="polite" hidden></p>'
    );
  }

  function popupHTML() {
    if (isAdPage()) {
      return (
        '<div class="lead-popup" id="lead-popup" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="lead-popup-title">' +
        '<div class="lead-popup-backdrop" data-close-lead></div>' +
        '<div class="lead-popup-panel lead-popup-panel-card">' +
        '<button type="button" class="lead-popup-close" data-close-lead aria-label="Close">' +
        '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.6"/></svg>' +
        "</button>" +
        '<form class="contact-form lead-card" name="enquiry" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field">' +
        '<h2 class="lead-card-title" id="lead-popup-title">Plan Your Project</h2>' +
        '<p class="lead-card-sub">Build with clarity on cost, quality, &amp; delivery</p>' +
        '<input type="hidden" name="form-name" value="enquiry" />' +
        '<input type="hidden" name="subject" value="New popup enquiry from buildabo.in" />' +
        '<p class="contact-honeypot" aria-hidden="true"><label>Leave blank <input type="text" name="bot-field" tabindex="-1" autocomplete="off" /></label></p>' +
        simpleLeadFields("popup", "Get a Free Consultation") +
        "</form>" +
        '<div class="lead-card-trust">' +
        '<div><span class="lead-card-trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 11.2 12 4l8 7.2"/><path d="M6.5 10.2V20h11V10.2"/></svg></span><strong>100+</strong><span>Projects</span></div>' +
        '<div><span class="lead-card-trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 4h11l3 3v13H5V4z"/><path d="M16 4v4h4"/><path d="M8 12h8M8 15h6"/></svg></span><strong>124</strong><span>Designs</span></div>' +
        '<div><span class="lead-card-trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg></span><strong>10+</strong><span>Years</span></div>' +
        "</div></div></div>"
      );
    }
    return (
      '<div class="lead-popup" id="lead-popup" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="lead-popup-title">' +
      '<div class="lead-popup-backdrop" data-close-lead></div>' +
      '<div class="lead-popup-panel">' +
      '<button type="button" class="lead-popup-close" data-close-lead aria-label="Close">' +
      '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.6"/></svg>' +
      "</button>" +
      '<p class="lead-popup-kicker">Free consultation</p>' +
      '<h2 id="lead-popup-title">Tell us about your project</h2>' +
      "<p class=\"lead-popup-copy\">Share a few details and we’ll get back within 24 hours.</p>" +
      '<form class="contact-form" name="enquiry" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field">' +
      '<input type="hidden" name="form-name" value="enquiry" />' +
      '<input type="hidden" name="subject" value="New popup enquiry from buildabo.in" />' +
      '<p class="contact-honeypot" aria-hidden="true"><label>Leave blank <input type="text" name="bot-field" tabindex="-1" autocomplete="off" /></label></p>' +
      simpleLeadFields("popup", "Request a callback") +
      "</form></div></div>"
    );
  }

  function injectWidgets() {
    if (document.querySelector(".whatsapp-fab")) return;
    document.body.insertAdjacentHTML("beforeend", whatsappHTML() + popupHTML());
  }

  init();
})();
