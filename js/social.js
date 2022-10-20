const SocialMenuSlide = () => {
  const altShare = document.querySelector(".fa-share-alt");
  const mobileMenu_social_menu = document.querySelector(".mobile-social-menu");
  const closeAltShare = document.querySelector(".close");

  altShare.addEventListener("click", showMenu);
  closeAltShare.addEventListener("click", closeMenu);

  function showMenu() {
    mobileMenu_social_menu.classList.add("mobile-menu-active");
  }

  function closeMenu() {
    mobileMenu_social_menu.classList.remove("mobile-menu-active");
  }
};

// initialize
SocialMenuSlide();
