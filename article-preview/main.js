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
    modalShareDialog.fadeIn("fast").css("display", "flex").addClass("open");
    // We have to make this button invisible for screen reader because
    // it keeps reading it when the share dialog is opened
    $(this).attr("aria-hidden", "true");
    // Moving focus to the buttons in modal
    btnShareFacebook.focus();
  });

  modalShareDialog.click(function() {
      $(this).fadeOut("fast", function() {
      $(this).removeClass("open");
    });
  });

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
    let shareUrl = `http://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl, "fb-popup", "");
  }

  function shareToTwitter(url, title) {
    let shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    window.open(shareUrl);
  }

  function shareToPinterest(url, title, imageUrl) {
    let shareUrl = `http://pinterest.com/pin/create/button/?url=${url}
                                                          &media=${imageUrl}   
                                                          &description=${title}`;
    window.open(shareUrl)
  }

});
