function suffixMe(num) {
  const j = num % 10,
    k = num % 100;
  if (j == 1 && k != 11) {
    return `${num}st`;
  } else if (j == 2 && k != 12) {
    return `${num}nd`;
  } else if (j == 3 && k != 13) {
    return `${num}rd`;
  } else {
    return `${num}th`;
  }
}
const numbers = Array.from(document.getElementsByClassName("suffix"));
numbers.forEach((number) => {
  const suffix = suffixMe(Number(number.textContent));
  number.textContent = suffix;
});

$(".search-button, .search-button-black").click(function () {
  setTimeout(function () {
    $("#search-pop").focus();
  }, 10);
});

$(document).keydown(function (e) {
  if (e.key === "Escape") {
    $(".search-close").click();
  }
});
