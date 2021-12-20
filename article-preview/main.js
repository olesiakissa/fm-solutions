$(document).ready(function() {
  const modalShareOpenBtn = $(".btn-open-modal");
  const modalShareCloseBtn = $(".btn-close-modal");
  const modalShareDialog = $(".modal-share");

  const btnShareFacebook = $(".btn-facebook");
  const btnShareTwitter = $(".btn-twitter");
  const btnSharePinterest = $(".btn-pinterest");

  const currentUrl = window.location.href;
  const articleTitle = $(".article-title").text().trim();
  const imageUrl = $(".article-img").attr("src");

  modalShareOpenBtn.click(function() {
    // Additional check for the desktop version that 
    // checks if the button has already been clicked (turned white with dark bg)
    if (!$(this).hasClass("colorize-white")) {
      if (window.innerWidth >= 1440) {
        const shareButtonHeight = modalShareOpenBtn.height();
        const modalHeight = modalShareDialog.height();

        modalShareDialog.css("bottom", `${(modalHeight + shareButtonHeight) + 50}px`);
        $(this).toggleClass("btn-modal-share colorize-white");
    }
    modalShareDialog.fadeIn("fast").css("display", "flex").addClass("open");
    // We have to make this button invisible for screen reader because
    // it keeps reading it when the share dialog is opened
    if (window.innerWidth < 1440) {
      $(this).attr("aria-hidden", "true");
    }
    // Moving focus to the buttons in modal
    btnShareFacebook.focus();
    } else {
      $(this).removeClass("btn-modal-share colorize-white");
      closeModal();
    }

  });

  function closeModal() {
    modalShareDialog.fadeOut("fast", function() {
      modalShareDialog.removeClass("open");
    });
    modalShareOpenBtn.delay(200).removeClass("btn-modal-share colorize-white");
  }

  modalShareDialog.click(closeModal);

  modalShareCloseBtn.click(function() {
    modalShareOpenBtn.attr("aria-hidden", "false");
  });


  // Rendering share to socials
  btnShareFacebook.click(function(e) {
    e.stopPropagation();

    shareToFacebook(currentUrl);
  });

  btnShareTwitter.click(function(e) {
    e.stopPropagation();

    shareToTwitter(currentUrl, articleTitle);
  });

  btnSharePinterest.click(function(e) {
    e.stopPropagation();

    shareToPinterest(currentUrl, articleTitle, imageUrl);
  });


  function shareToFacebook(url) {
    let shareUrl = `http://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl);
  }

  function shareToTwitter(url, title) {
    let shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${title}`;
    window.open(shareUrl);
  }

  function shareToPinterest(url, title, imageUrl) {
    let shareUrl = `http://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}
                                                                      &media=${imageUrl}   
                                                                      &description=${title}`;
    window.open(shareUrl)
  }

});
