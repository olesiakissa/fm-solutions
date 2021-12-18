$(document).ready(function() {
  const modalShareBtn = $(".btn-share");
  const modalShareDialog = $(".modal-share");
  console.log('document loaded');
  
  modalShareBtn.click(function(){
    modalShareDialog
    .fadeIn("fast")
    .css("display", "flex")
    .addClass("open");
  });

  modalShareDialog.click(function() {
    $(this)
      .fadeOut("fast", function() {
        $(this).removeClass("open");
      });
  });

});