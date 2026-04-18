const ctaBtn = document.getElementById("cta-btn");

if (ctaBtn) {
  const targetId = ctaBtn.dataset.scrollTarget;
  const targetSection = targetId ? document.getElementById(targetId) : null;

  if (targetSection) {
    ctaBtn.addEventListener("click", () => {
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  }
}

const detail = document.getElementById("job-detail");

if (detail) {
  const roleContent = {
    fullstack: {
      title: "Full‑Stack Developer",
      body: [
        "TypeScript‑based stack.",
        "You will work on end to end solutions with a focus on maintainable code."
      ],
      tags: ["TypeScript", "Node.js", "React", "API"]
    },
    cloud: {
      title: "Cloud Architect",
      body: [
        "Scale to AWS and align with our networking strategies.",
        "We require comfortability with Docker and the AWS platform."
      ],
      tags: ["AWS", "Docker", "VPC design", "Scalability"]
    },
    devops: {
      title: "DevOps Engineer",
      body: [
        "Must be familiar with CI/CD pipelines.",
        "Communication with our engineers is imperative for useful feedback."
      ],
      tags: ["CI/CD", "Monitoring", "Automation"]
    },
    frontend: {
      title: "Front‑End Engineer",
      body: [
        "We are looking for someone comfortable in UI/UX and accessibility features.",
        "We want someone to make fast but elegant pages."
      ],
      tags: ["Accessibility", "React"]
    }
  };

  document.querySelectorAll(".job-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const key = pill.getAttribute("data-role");
      const data = roleContent[key];

      if (!data) return;

      detail.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body[0]}</p>
        <p>${data.body[1]}</p>
        <div class="job-tags">
          ${data.tags.map(tag => `<span class="job-tag">${tag}</span>`).join("")}
        </div>
      `;

      document.querySelectorAll(".job-pill").forEach((item) => {
        item.style.borderColor = "";
        item.style.backgroundColor = "";
      });

      pill.style.borderColor = "rgba(255, 91, 107, 0.6)";
      pill.style.backgroundColor = "rgba(255, 91, 107, 0.06)";
    });
  });
}