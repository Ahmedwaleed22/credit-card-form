const flipCard = () => {
  const card = document.getElementById("credit-card");
  if (card.classList.contains("flipped")) {
    card.classList.remove("flipped");
  } else {
    card.classList.add("flipped");
  }
};

const CardHolderFunction = () => {
  const cardHolderNameField = document.getElementById("card-holder-name");

  cardHolderNameField.addEventListener("keyup", () => {
    const cardHolderName = cardHolderNameField.value;
    const cardHolderNameText = document.getElementById("card-holder-name-text");

    cardHolderNameText.textContent = cardHolderName;
  });
};

const CardNumberFunction = () => {
  const cardNumber = document
    .getElementById("card-number")
    .textContent.split(" ")
    .join("")
    .split("");

  const CardNumberField = document.getElementById("card-number-field");
  CardNumberField.addEventListener("keydown", (event) => {
    // numbers only regex
    const numbersOnly = /^[0-9]+$/;
    const key = event.key;

    // match key with numbers only regex
    if (key.match(numbersOnly) && key != " ") {
      cardNumber[CardNumberField.value.length - 1] =
        CardNumberField.value.slice(-1);
      document.getElementById("card-number").textContent = cardNumber
        .join("")
        .match(/.{1,4}/g)
        .join(" ");
    } else if (key === "Backspace" || key === "Delete") {
      cardNumber[CardNumberField.value.length - 1] = "x";
      document.getElementById("card-number").textContent = cardNumber
        .join("")
        .match(/.{1,4}/g)
        .join(" ");
    } else {
      event.preventDefault();
    }
  });
};

const CardExpiryFunction = () => {
  // get the card-expiration-date field and add event listener
  const cardExpiryField = document.getElementById("card-expiration-date");

  cardExpiryField.addEventListener("keyup", () => {
    // get the card-expiration-date field value
    const cardExpiryDate = cardExpiryField.value;

    const expDateFormatter =
      cardExpiryDate.replace(/\//g, "").substring(0, 2) +
      (cardExpiryDate.length > 2 ? "<span>/</span>" : "") +
      cardExpiryDate.replace(/\//g, "").substring(2, 4);

    const expDateFieldFormatter =
      cardExpiryDate.replace(/\//g, "").substring(0, 2) +
      (cardExpiryDate.length > 2 ? "/" : "") +
      cardExpiryDate.replace(/\//g, "").substring(2, 4);

    // get the card-expiration-date-text field
    const cardExpiryDateText = document.getElementById(
      "card-expiration-date-text"
    );

    // set the card-expiration-date-text field value
    cardExpiryDateText.innerHTML = expDateFormatter;
    cardExpiryField.value = expDateFieldFormatter;
  });
};

const CardCVVFunction = () => {
  const cvvField = document.getElementById("card-cvv");

  cvvField.addEventListener("focus", flipCard);

  cvvField.addEventListener("blur", flipCard);

  cvvField.addEventListener("keyup", () => {
    const cvv = cvvField.value;
    const cvvNumberCardText = document.getElementById("cvv-number");

    if (cvv != "") cvvNumberCardText.textContent = cvv;
    else cvvNumberCardText.textContent = "xxx";
  });
};

CardHolderFunction();
CardNumberFunction();
CardExpiryFunction();
CardCVVFunction();
