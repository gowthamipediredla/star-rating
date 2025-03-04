function starRating(element, count) {
  let active = -1;
  const fragment = document.createDocumentFragment();
  const starValue = document.getElementById("star-value");
  for (let i = 0; i < count; i++) {
    const icon = document.createElement("i");
    icon.classList.add("fa", "fa-star-o");
    icon.dataset.ratingVal = i + 1;
    fragment.appendChild(icon);
    icon.addEventListener("click", clickHandler);
    icon.addEventListener("mouseover", mouseOverHandler);
    icon.addEventListener("mouseleave", mouseLeaveHandler);
  }
  element.appendChild(fragment);

  function clickHandler(e) {
    const val = parseInt(e.target.dataset.ratingVal);
    active = val;
    starValue.textContent = val;
    fill(active);
  }
  function mouseOverHandler(e) {
    const val = parseInt(e.target.dataset.ratingVal);
    fill(val);
  }
  function mouseLeaveHandler() {
    fill(active);
  }
  function fill(val) {
    for (let i = 0; i < count; i++) {
      const child = element.children[i];
      if (i < val) {
        child.classList.add("fa-star");
        child.classList.remove("fa-star-o");
      } else {
        child.classList.remove("fa-star");
        child.classList.add("fa-star-o");
      }
    }
  }
}

starRating(document.getElementById("star"), 5);
