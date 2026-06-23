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
})();
