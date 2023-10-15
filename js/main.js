function tabChanging() {
  var originalTitle = document.title;
  var isChange = false;
  // get title and change it
  function changeTitle() {
    document.title = isChange ? "😁 This Is New Title" : originalTitle;
    isChange = !isChange;
  };
  // set Interval fo time and repeat function
  setInterval(changeTitle, 1000);
};
// Call The Functions When the window (Page) is Loaded
window.onload = tabChanging;