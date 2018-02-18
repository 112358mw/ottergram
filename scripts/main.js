var DELAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DELAIT_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR= '[data-image-role="trigger"]';
function setDetails(imageUrl, titleText) {
  'use strict'
  var detailImage = document.querySelector(DELAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);
  var detailTitle = document.querySelector(DELAIT_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict'
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThum(thumbnail) {
  'use strict'
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict'
  setDetails(imageFromThumb(thumbnail), titleFromThum(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict'
  thumb.addEventListener('click', function (evnet) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict'
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict'
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}


initializeEvents();
