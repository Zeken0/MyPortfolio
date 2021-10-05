export const testLengthOfInput = function (
  valueFromIpute,
  lengthIWouldLikeItToBe,
  errorMessageToUse
) {
  if (valueFromIpute.length >= lengthIWouldLikeItToBe) {
    errorMessageToUse.classList.add("hide");
    errorMessageToUse.classList.remove("show");
  } else {
    errorMessageToUse.classList.add("show");
    errorMessageToUse.classList.remove("hide");
  }
};
