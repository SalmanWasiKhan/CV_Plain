window.onload = function () {
  const popoverButtons = document.querySelectorAll('.popover-btn');

  popoverButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const popover = button.nextElementSibling;

      if (popover.classList.contains('show')) {
        popover.classList.remove('show');
        popover.addEventListener('transitionend', function () {
          popover.classList.add('hidden');
        });
      } else {
        popover.classList.remove('hidden');
        popover.classList.add('show');
      }

      // hide popover on click outside
      document.addEventListener('click', function (event) {
        if (event.target !== button && !button.contains(event.target)) {
          popover.classList.remove('show');
          popover.addEventListener('transitionend', function () {
            popover.classList.add('hidden');
          });
        }
      });
    });
  });

  // for screen size less than 768px add top-left class to popover and remove top-right class and vice versa
  const profilePicPopoverPosition = () => {
    const profilePicPopover = document.querySelector('#profile-pic-popover');

    if (window.innerWidth < 768) {
      profilePicPopover.classList.add('top-left');
      profilePicPopover.classList.remove('top-right');
    } else {
      profilePicPopover.classList.remove('top-left');
      profilePicPopover.classList.add('top-right');
    }
  };

  profilePicPopoverPosition();
  window.addEventListener('resize', profilePicPopoverPosition);
};
