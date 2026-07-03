(() => {
  const page = document.body.dataset.page || "home";
  const schoolEmail = "SRIADARSHAVANI2000@GMAIL.COM";
  const schoolWhatsApp = "918121063032";
  const schoolPhone = "+918121063032";

  const navItems = [
    { page: "home", label: "Home", href: "index.html" },
    { page: "about", label: "About", href: "about.html" },
    { page: "academics", label: "Academics", href: "academics.html" },
    { page: "facilities", label: "Facilities", href: "facilities.html" },
    { page: "activities", label: "Activities", href: "activities.html" },
    { page: "results", label: "Results", href: "results.html" },
    { page: "branches", label: "Branches", href: "branches.html" },
    { page: "aerial", label: "Aerial View", href: "aerial.html" },
    { page: "admission", label: "Admissions", href: "admission.html" },
    { page: "careers", label: "Jobs", href: "careers.html" },
    { page: "contact", label: "Contact", href: "contact.html" },
  ];

  const navLinks = navItems.map((item) => {
    const current = item.page === page ? ' aria-current="page"' : "";
    return `<a href="${item.href}"${current}>${item.label}</a>`;
  }).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <header class="site-header">
      <a class="brand" href="index.html" aria-label="Sri Adarshavani Vidyanikethan High School home">
        <picture>
          <source type="image/webp" srcset="assets/school-logo-96.webp 96w, assets/school-logo-192.webp 192w, assets/school-logo-384.webp 384w, assets/school-logo-512.webp 512w" sizes="46px">
          <img class="brand-logo" src="assets/school-logo.png" alt="Sri Adarshavani Vidyanikethan High School logo" width="512" height="512" loading="eager" decoding="async">
        </picture>
        <span>
          <strong>Sri Adarshavani Vidyanikethan High School</strong>
          <small>Duggondi, Warangal</small>
        </span>
      </a>

      <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="primaryNavigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav-links" id="primaryNavigation" aria-label="Primary navigation">
        ${navLinks}
      </nav>

      <a class="header-action" href="admission.html">Enquire Now</a>
    </header>
  `);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site-footer">
      <div>
        <strong>Sri Adarshavani Vidyanikethan High School</strong>
        <p>Vil &amp; Mdl Duggondi, Dist. Warangal, Telangana - 506331</p>
      </div>
      <div class="footer-links" aria-label="Footer quick links">
        <a href="admission.html">Admissions</a>
        <a href="careers.html">Teacher Jobs</a>
        <a href="contact.html">Contact</a>
        <a href="#">Back to top</a>
      </div>
      <div class="footer-social" aria-label="Social media">
        <a href="https://www.instagram.com/sri_adarshavani/?hl=en" target="_blank" rel="noopener" aria-label="Follow us on Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608C4.519 2.567 5.786 2.293 7.152 2.231 8.418 2.175 8.796 2.163 12 2.163zm0 1.802c-3.15 0-3.523.012-4.766.069-.999.046-1.541.215-1.902.356-.478.186-.819.408-1.177.766-.358.358-.58.699-.766 1.177-.141.361-.31.903-.356 1.902-.057 1.243-.069 1.616-.069 4.765s.012 3.522.069 4.765c.046.999.215 1.541.356 1.902.186.478.408.819.766 1.177.358.358.699.58 1.177.766.361.141.903.31 1.902.356 1.243.057 1.616.069 4.766.069s3.523-.012 4.766-.069c.999-.046 1.541-.215 1.902-.356.478-.186.819-.408 1.177-.766.358-.358.58-.699.766-1.177.141-.361.31-.903.356-1.902.057-1.243.069-1.616.069-4.765s-.012-3.522-.069-4.765c-.046-.999-.215-1.541-.356-1.902a3.175 3.175 0 00-.766-1.177 3.175 3.175 0 00-1.177-.766c-.361-.141-.903-.31-1.902-.356-1.243-.057-1.616-.069-4.766-.069zm0 3.063A5.972 5.972 0 1012 18.035 5.972 5.972 0 0012 7.028zm0 9.847A3.875 3.875 0 1112 9.125a3.875 3.875 0 010 7.75zm6.406-10.845a1.395 1.395 0 11-2.79 0 1.395 1.395 0 012.79 0z"/>
          </svg>
        </a>
        <a href="https://www.youtube.com/@sriadarshavanihighschooldu7480" target="_blank" rel="noopener" aria-label="Subscribe on YouTube">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      </div>
      <div class="footer-copyright">
        <small>&copy; 2026 Sri Adarshavani Vidyanikethan High School. All rights reserved.</small>
      </div>
    </footer>
    <a class="whatsapp-button" href="https://wa.me/${schoolWhatsApp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.991 1.523 9.871 9.871 0 003.223 19.007h.004c2.744 0 5.331-1.042 7.278-2.931 1.947-1.889 3.022-4.455 3.022-7.146 0-5.432-4.424-9.853-9.88-9.853m8.771 16.21c-2.328 2.312-5.412 3.588-8.771 3.588a8.87 8.87 0 01-4.519-1.212l-.324-.194-3.36.881.898-3.289-.21-.336A8.862 8.862 0 012.048 12c0-4.964 4.027-9 8.981-9 2.405 0 4.667.936 6.358 2.646 1.692 1.71 2.624 3.957 2.624 6.354 0 4.964-4.027 9-8.98 9z"/>
      </svg>
    </a>
    <nav class="mobile-bar" aria-label="Quick actions">
      <a class="call" href="tel:${schoolPhone}" aria-label="Call school">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>
        Call
      </a>
      <a class="admit" href="admission.html" aria-label="Admission enquiry">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v3.82a1 1 0 00.55.89l6 3a1 1 0 00.9 0l6-3a1 1 0 00.55-.89v-3.82l-7 3.82-7-3.82z"/></svg>
        Admission
      </a>
      <a class="wa" href="https://wa.me/${schoolWhatsApp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.9 4.43-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.9 9.9 0 004.74 1.2c5.46 0 9.9-4.43 9.9-9.9S17.5 2 12.04 2zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.34-.5.05-1.13.07-1.83-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.4-.14-.2-1.19-1.58-1.19-3.02s.76-2.14 1.03-2.43c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.59.82 2.03.89 2.18.07.14.12.31.02.5-.09.2-.14.32-.27.49-.14.16-.29.37-.41.49-.14.14-.28.29-.12.57.16.27.71 1.17 1.53 1.9 1.05.93 1.93 1.22 2.21 1.36.27.14.43.12.59-.07.16-.2.68-.79.86-1.07.18-.27.36-.22.61-.13.24.09 1.55.73 1.82.86.27.14.45.2.51.31.07.11.07.64-.17 1.32z"/></svg>
        WhatsApp
      </a>
    </nav>
    <div class="scroll-progress" aria-hidden="true"></div>
  `);

  const navToggle = document.querySelector(".nav-toggle");
  const navLinksContainer = document.getElementById("primaryNavigation");

  function setNavigationOpen(isOpen) {
    document.body.classList.toggle("nav-open", isOpen);
    navToggle?.setAttribute("aria-expanded", String(isOpen));
    navToggle?.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  navToggle?.addEventListener("click", () => {
    setNavigationOpen(!document.body.classList.contains("nav-open"));
  });

  navLinksContainer?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavigationOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setNavigationOpen(false);
    }
  });

  const sectionOptions = {
    Nursery: ["Not Applicable"],
    LKG: ["Not Applicable"],
    UKG: ["Not Applicable"],
    I: ["A", "B"],
    II: ["A", "B"],
    III: ["IIT", "General"],
    IV: ["IIT", "General"],
    V: ["IIT", "General"],
    VI: ["IIT", "General"],
    VII: ["IIT", "General"],
    VIII: ["IIT", "General"],
    IX: ["IIT", "General 1", "General 2"],
    X: ["A", "B"],
  };

  function updateSections(form) {
    const classSelect = form.querySelector("[data-class-select]");
    const sectionSelect = form.querySelector("[data-section-select]");
    if (!classSelect || !sectionSelect) return;

    const options = sectionOptions[classSelect.value] || [];
    sectionSelect.innerHTML = '<option value="">Select section</option>';

    options.forEach((section) => {
      const option = document.createElement("option");
      option.value = section;
      option.textContent = section;
      sectionSelect.appendChild(option);
    });

    sectionSelect.disabled = options.length === 0;
  }

  function formValue(form, name) {
    return String(new FormData(form).get(name) || "").trim();
  }

  function buildMessage(title, rows) {
    const lines = rows.map(([label, value]) => `${label}: ${value || ""}`);
    return `${title}\n\n${lines.join("\n")}`;
  }

  function setFormStatus(form, message, type) {
    const status = form.querySelector("[data-form-status]");
    if (!status) return;

    status.textContent = message;
    status.classList.toggle("is-success", type === "success");
    status.classList.toggle("is-error", type === "error");
  }

  async function submitJson(form, payload, pendingMessage, successMessage, errorMessage, resetCallback) {
    const submitButton = form.querySelector("[data-submit-admission], [data-submit-career], [data-submit-contact]");

    if (!form.reportValidity()) return;
    if (submitButton) submitButton.disabled = true;
    setFormStatus(form, pendingMessage, "");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      resetCallback?.();
      setFormStatus(form, successMessage, "success");
    } catch (error) {
      setFormStatus(form, errorMessage, "error");
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  }

  function setupShareButtons(form, subject, messageBuilder) {
    const emailButton = form.querySelector("[data-send-email]");
    const whatsappButton = form.querySelector("[data-send-whatsapp]");

    emailButton?.addEventListener("click", () => {
      if (!form.reportValidity()) return;
      window.location.href = `mailto:${schoolEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBuilder())}`;
    });

    whatsappButton?.addEventListener("click", () => {
      if (!form.reportValidity()) return;
      window.open(`https://wa.me/${schoolWhatsApp}?text=${encodeURIComponent(messageBuilder())}`, "_blank", "noopener");
    });
  }

  document.querySelectorAll("[data-admission-form]").forEach((form) => {
    const classSelect = form.querySelector("[data-class-select]");

    classSelect?.addEventListener("change", () => updateSections(form));
    updateSections(form);

    const payload = () => ({
      studentName: formValue(form, "studentName"),
      parentName: formValue(form, "parentName"),
      className: formValue(form, "className"),
      sectionName: formValue(form, "sectionName"),
      mobileNumber: formValue(form, "mobileNumber"),
      emailAddress: formValue(form, "emailAddress"),
      studentAddress: formValue(form, "studentAddress"),
      campusNeed: formValue(form, "campusNeed"),
      message: formValue(form, "message"),
    });

    const message = () => buildMessage("Admission Enquiry", [
      ["Student Name", formValue(form, "studentName")],
      ["Parent Name", formValue(form, "parentName")],
      ["Class Applying For", formValue(form, "className")],
      ["Section", formValue(form, "sectionName")],
      ["Mobile Number", formValue(form, "mobileNumber")],
      ["Email", formValue(form, "emailAddress")],
      ["Address", formValue(form, "studentAddress")],
      ["Need", formValue(form, "campusNeed")],
      ["Message", formValue(form, "message")],
    ]);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitJson(
        form,
        payload(),
        "Submitting admission enquiry...",
        "Admission enquiry submitted. We will contact you soon.",
        "Could not submit right now. Please use WhatsApp or Email.",
        () => updateSections(form),
      );
    });

    setupShareButtons(form, "Admission Enquiry", message);
  });

  document.querySelectorAll("[data-career-form]").forEach((form) => {
    const payload = () => ({
      applicantName: formValue(form, "applicantName"),
      mobileNumber: formValue(form, "mobileNumber"),
      emailAddress: formValue(form, "emailAddress"),
      qualification: formValue(form, "qualification"),
      subjectExpertise: formValue(form, "subjectExpertise"),
      experience: formValue(form, "experience"),
      preferredRole: formValue(form, "preferredRole"),
      joiningWindow: formValue(form, "joiningWindow"),
      message: formValue(form, "message"),
    });

    const message = () => buildMessage("Teacher Job Enquiry", [
      ["Applicant Name", formValue(form, "applicantName")],
      ["Mobile Number", formValue(form, "mobileNumber")],
      ["Email", formValue(form, "emailAddress")],
      ["Qualification", formValue(form, "qualification")],
      ["Subject Expertise", formValue(form, "subjectExpertise")],
      ["Experience", formValue(form, "experience")],
      ["Preferred Role", formValue(form, "preferredRole")],
      ["Joining Window", formValue(form, "joiningWindow")],
      ["Message", formValue(form, "message")],
    ]);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitJson(
        form,
        payload(),
        "Submitting teacher job enquiry...",
        "Teacher job enquiry submitted. The school team will review it soon.",
        "Could not submit right now. Please use WhatsApp or Email.",
      );
    });

    setupShareButtons(form, "Teacher Job Enquiry", message);
  });

  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    const payload = () => ({
      visitorName: formValue(form, "visitorName"),
      mobileNumber: formValue(form, "mobileNumber"),
      emailAddress: formValue(form, "emailAddress"),
      enquiryType: formValue(form, "enquiryType"),
      message: formValue(form, "message"),
    });

    const message = () => buildMessage("School Contact Enquiry", [
      ["Name", formValue(form, "visitorName")],
      ["Mobile Number", formValue(form, "mobileNumber")],
      ["Email", formValue(form, "emailAddress")],
      ["Enquiry Type", formValue(form, "enquiryType")],
      ["Message", formValue(form, "message")],
    ]);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitJson(
        form,
        payload(),
        "Sending enquiry...",
        "Enquiry submitted. The school office will contact you soon.",
        "Could not submit right now. Please use WhatsApp or Email.",
      );
    });

    setupShareButtons(form, "School Contact Enquiry", message);
  });

  const aerialVideo = document.getElementById("aerialVideo");
  const aerialPlayButton = document.getElementById("aerialPlayButton");

  if (aerialVideo && aerialPlayButton) {
    aerialPlayButton.addEventListener("click", () => {
      if (aerialVideo.paused) {
        aerialVideo.play();
        aerialPlayButton.classList.add("playing");
      }
    });

    aerialVideo.addEventListener("click", () => {
      if (!aerialVideo.paused) {
        aerialVideo.pause();
        aerialPlayButton.classList.remove("playing");
      }
    });

    aerialVideo.addEventListener("pause", () => {
      aerialPlayButton.classList.remove("playing");
    });

    aerialVideo.addEventListener("play", () => {
      aerialPlayButton.classList.add("playing");
    });
  }

  document.querySelectorAll("[data-call-school]").forEach((link) => {
    link.setAttribute("href", `tel:${schoolPhone}`);
  });

  /* =======================================================================
     Futuristic interaction layer
     ======================================================================= */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---- Scroll progress bar + sticky header state ---- */
  const progressBar = document.querySelector(".scroll-progress");
  const siteHeader = document.querySelector(".site-header");
  const mobileBar = document.querySelector(".mobile-bar");
  let ticking = false;

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

    if (progressBar) progressBar.style.transform = `scaleX(${ratio})`;
    if (siteHeader) siteHeader.classList.toggle("is-scrolled", scrollTop > 20);
    if (mobileBar) mobileBar.classList.toggle("is-in", scrollTop > 260);
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  /* ---- Scroll reveal (auto-tag common building blocks) ---- */
  const revealSelectors = [
    ".section-heading", ".enquiry-card", ".link-card", ".stats > div",
    ".future-card", ".journey-step", ".activity-list article", ".role-grid article",
    ".info-strip article", ".facilities-gallery figure", ".activity-gallery figure",
    ".curriculum-node", ".leadership article", ".branch-card", ".result-stats article",
    ".campus-intel-picture", ".image-band-grid picture", ".about-grid > p",
    ".about-grid .stats", ".contact-form", ".admission-form", ".career-note",
    ".process-panel article", ".map-panel", ".feature-image", ".results-image",
  ];
  const revealEls = [];
  revealSelectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      if (el.closest(".hero") || el.hasAttribute("data-reveal")) return;
      el.setAttribute("data-reveal", "");
      revealEls.push(el);
    });
  });
  // Stagger siblings within the same grid for a cascade effect
  revealEls.forEach((el) => {
    const parent = el.parentElement;
    if (!parent) return;
    const siblings = Array.from(parent.children).filter((c) => c.hasAttribute("data-reveal"));
    const idx = siblings.indexOf(el);
    if (idx > 0) el.setAttribute("data-reveal-delay", String(Math.min(idx, 5)));
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ---- Animated counters ---- */
  const counters = Array.from(document.querySelectorAll(".stats strong, .result-stats strong"));
  function animateCounter(el) {
    const raw = el.textContent.trim();
    const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    const prefix = match[1];
    const numStr = match[2].replace(/,/g, "");
    const suffix = match[3];
    const target = parseFloat(numStr);
    if (!isFinite(target)) return;
    const hadComma = match[2].includes(",");
    const decimals = (numStr.split(".")[1] || "").length;
    const duration = 1400;
    const start = performance.now();

    function frame(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = target * eased;
      let shown = decimals ? value.toFixed(decimals) : Math.round(value).toString();
      if (hadComma) shown = Number(shown).toLocaleString("en-IN");
      el.textContent = prefix + shown + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  if (!reduceMotion && counters.length && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => counterObserver.observe(el));
  }

  /* ---- Magnetic buttons + 3D card tilt (desktop, fine pointer only) ---- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll(".button.primary, .button.secondary, .header-action").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2;
        const my = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${mx * 0.18}px, ${my * 0.28}px) translateY(-3px) scale(1.03)`;
      });
      btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
    });

    document.querySelectorAll(".enquiry-card, .link-card, .future-card").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${py * -6}deg) rotateY(${px * 8}deg) translateY(-8px)`;
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });
  }

  /* ---- Hero parallax + floating orbs + particle canvas ---- */
  const hero = document.querySelector(".hero");
  if (hero && !reduceMotion) {
    const heroImg = hero.querySelector("img");
    if (heroImg) {
      window.addEventListener("scroll", () => {
        const offset = (window.scrollY || 0) * 0.18;
        if (offset < hero.offsetHeight) {
          heroImg.style.transform = `scale(1.12) translateY(${offset}px)`;
        }
      }, { passive: true });
    }

    if (!hero.querySelector(".hero-orbs")) {
      hero.insertAdjacentHTML("afterbegin",
        '<div class="hero-orbs"><span class="hero-orb o1"></span><span class="hero-orb o2"></span><span class="hero-orb o3"></span><span class="hero-orb o4"></span></div>');
    }

    // Lightweight particle constellation behind the hero
    const canvas = document.createElement("canvas");
    canvas.className = "hero-particles";
    Object.assign(canvas.style, {
      position: "absolute", inset: "0", zIndex: "1",
      width: "100%", height: "100%", pointerEvents: "none",
    });
    hero.insertBefore(canvas, hero.querySelector(".hero-content"));
    const ctx = canvas.getContext("2d");
    let particles = [];
    let raf = null;
    const isSmall = window.innerWidth < 760;
    const COUNT = isSmall ? 26 : 60;
    const LINK_DIST = isSmall ? 90 : 130;

    function sizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = hero.offsetWidth * dpr;
      canvas.height = hero.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function initParticles() {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * hero.offsetWidth,
        y: Math.random() * hero.offsetHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    }
    function draw() {
      const w = hero.offsetWidth;
      const h = hero.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(160, 200, 255, 0.7)";
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.16 * (1 - dist / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    function startParticles() {
      sizeCanvas(); initParticles();
      cancelAnimationFrame(raf);
      draw();
    }
    startParticles();
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(startParticles, 200);
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) { cancelAnimationFrame(raf); }
      else { draw(); }
    });
  }
})();
