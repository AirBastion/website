$('#video').click(function() {
  document.getElementById('video').innerHTML = 'Available soon...'
  window.setTimeout(function() {
    document.getElementById('video').innerHTML = '<i class="fa fa-play" id="disappear"></i> Watch now'
  }, 1800);
});

function hide(elem) {
  elem.addClass('hide');
}

function copyWallet(elem, copyTag) {
  var copied;

  try {
    copied = document.execCommand('copy');
    console.log('copied: ' + copied);
  } catch (ex) {
    copied = false;
    console.log('not copied');
  }

  if (copied) {
    copyTag.removeClass('hide');
    window.setTimeout(function() {
      hide(copyTag);
    }, 800);

  }
}

$('#eth').click(function() {
  var copied;

  try {
    copied = document.execCommand('copy');
  } catch (ex) {
    console.log('not copied-tag')
    copied = false;
  }

  var tag = $('#copied-text-eth')

  if (copied) {
    tag.removeClass('hide')
    window.setTimeout(function() {
      hide(tag);
    }, 800);

  }
});

$('#btc').click(function() {
  var tag = $('#copied-text-btc')
  copyWallet($(this).text(), tag);
});


$('#eth').click(function() {
  var cop = new Clipboard('#eth');

});

$('#btc').click(function() {
  var copy = new Clipboard('#btc');
});

$('#wii').submit(function() {
  $('#success').addClass('open')
  setTimeout($('#success').removeClass('open'), 1000);
});

function popupOpenClose(popup) {

  /* Add div inside popup for layout if one doesn't exist */
  if ($(".wrapper").length == 0) {
    $(popup).wrapInner("<div class='wrapper'></div>");
  }

  /* Open popup */
  $(popup).show();

  /* Close popup if user clicks on background */
  $(popup).click(function(e) {
    if (e.target == this) {
      if ($(popup).is(':visible')) {
        $(popup).hide();
      }
    }
  });

  /* Close popup and remove errors if user clicks on cancel or close buttons */
  $(popup).find("button[name=close]").on("click", function() {
    if ($(".formElementError").is(':visible')) {
      $(".formElementError").remove();
    }
    $(popup).hide();
  });
}

$(document).ready(function() {
  $("#open").on("click", function() {
    popupOpenClose($(".popup"));
  });
});
