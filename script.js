// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear()

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Skills Tabs
const tabBtns = document.querySelectorAll(".tab-btn")
const tabPanes = document.querySelectorAll(".tab-pane")

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons and panes
    tabBtns.forEach((btn) => btn.classList.remove("active"))
    tabPanes.forEach((pane) => pane.classList.remove("active"))

    // Add active class to clicked button and corresponding pane
    btn.classList.add("active")
    const tabId = btn.getAttribute("data-tab")
    document.getElementById(tabId).classList.add("active")
  })
})

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("active")
  } else {
    backToTopBtn.classList.remove("active")
  }
})

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Form Submission
const contactForm = document.getElementById("contactForm")
const formMessage = document.getElementById("formMessage")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Simple validation
    if (!name || !email || !subject || !message) {
      showFormMessage("Please fill in all fields", "error")
      return
    }

    // Simulate form submission
    showFormMessage("Sending...", "pending")

    // Simulate API call with timeout
    setTimeout(() => {
      // In a real application, you would send the data to a server here
      console.log("Form Data:", { name, email, subject, message })

      // Show success message
      showFormMessage("Your message has been sent successfully!", "success")

      // Reset form
      contactForm.reset()
    }, 1500)
  })
}

// Helper function to show form messages
function showFormMessage(text, type) {
  formMessage.textContent = text
  formMessage.className = "form-message"

  if (type === "success") {
    formMessage.classList.add("success")
  } else if (type === "error") {
    formMessage.classList.add("error")
  }
}

// Add animation to timeline items when they come into view
const timelineItems = document.querySelectorAll(".timeline-item")

function checkScroll() {
  timelineItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (itemTop < windowHeight * 0.8) {
      item.style.opacity = "1"
      item.style.transform = "translateY(0)"
    }
  })
}

// Set initial styles for timeline items
timelineItems.forEach((item) => {
  item.style.opacity = "0"
  item.style.transform = "translateY(20px)"
  item.style.transition = "opacity 0.5s ease, transform 0.5s ease"
})

// Check on load and scroll
window.addEventListener("load", checkScroll)
window.addEventListener("scroll", checkScroll)

// Project cards hover effect enhancement
const projectCards = document.querySelectorAll(".project-card")

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.15)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = ""
  })
})
