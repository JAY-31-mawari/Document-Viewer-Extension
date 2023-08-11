document.addEventListener("DOMContentLoaded", function () {
  const showFileButton = document.getElementById("showFileButton");

  showFileButton.addEventListener("click", function () {
    const inputfile = document.getElementById("inputfile");
    if (inputfile.files.length >= 1) {
      const file = inputfile.files[0];
      const url = URL.createObjectURL(file);

      chrome.tabs.create({ url: url });
    } else {
      alert("No File Selected");
    }
  });
});
