document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    if (hamburger) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navLinks.classList.toggle("active")
      })
    }
  
    // Close mobile menu when clicking a nav link
    const navItems = document.querySelectorAll(".nav-links li a")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (hamburger.classList.contains("active")) {
          hamburger.classList.remove("active")
          navLinks.classList.remove("active")
        }
      })
    })
  
    // Project Filtering
    const filterBtns = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")
  
    if (filterBtns.length > 0) {
      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Remove active class from all buttons
          filterBtns.forEach((btn) => btn.classList.remove("active"))
  
          // Add active class to clicked button
          btn.classList.add("active")
  
          const filterValue = btn.getAttribute("data-filter")
  
          projectCards.forEach((card) => {
            if (filterValue === "all") {
              card.style.display = "block"
            } else if (card.getAttribute("data-category") === filterValue) {
              card.style.display = "block"
            } else {
              card.style.display = "none"
            }
          })
        })
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Form Validation
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        let isValid = true
  
        // Validate Name
        const nameInput = document.getElementById("name")
        const nameError = document.getElementById("nameError")
  
        if (nameInput.value.trim() === "") {
          nameError.textContent = "Name is required"
          nameError.style.display = "block"
          isValid = false
        } else if (nameInput.value.trim().length < 2) {
          nameError.textContent = "Name must be at least 2 characters"
          nameError.style.display = "block"
          isValid = false
        } else {
          nameError.style.display = "none"
        }
  
        // Validate Email
        const emailInput = document.getElementById("email")
        const emailError = document.getElementById("emailError")
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
        if (emailInput.value.trim() === "") {
          emailError.textContent = "Email is required"
          emailError.style.display = "block"
          isValid = false
        } else if (!emailPattern.test(emailInput.value.trim())) {
          emailError.textContent = "Please enter a valid email address"
          emailError.style.display = "block"
          isValid = false
        } else {
          emailError.style.display = "none"
        }
  
        // Validate Subject
        const subjectInput = document.getElementById("subject")
        const subjectError = document.getElementById("subjectError")
  
        if (subjectInput.value.trim() === "") {
          subjectError.textContent = "Subject is required"
          subjectError.style.display = "block"
          isValid = false
        } else {
          subjectError.style.display = "none"
        }
  
        // Validate Message
        const messageInput = document.getElementById("message")
        const messageError = document.getElementById("messageError")
  
        if (messageInput.value.trim() === "") {
          messageError.textContent = "Message is required"
          messageError.style.display = "block"
          isValid = false
        } else if (messageInput.value.trim().length < 10) {
          messageError.textContent = "Message must be at least 10 characters"
          messageError.style.display = "block"
          isValid = false
        } else {
          messageError.style.display = "none"
        }
  
        // If form is valid, show success message
        if (isValid) {
          contactForm.reset()
          document.getElementById("formSuccess").style.display = "block"
  
          // Hide success message after 5 seconds
          setTimeout(() => {
            document.getElementById("formSuccess").style.display = "none"
          }, 5000)
        }
      })
    }
  
    // Scroll Animation
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header")
  
      if (window.scrollY > 50) {
        header.style.padding = "10px 0"
        header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
      } else {
        header.style.padding = "15px 0"
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      }
    })
  })