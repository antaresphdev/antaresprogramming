import "./components/Animations";

function copyGCashNumber(textboxID) {
  const textbox = document.getElementById(textboxID);

  textbox.select();
  textbox.setSelectionRange(0, 99999);

  document.execCommand("copy");
}