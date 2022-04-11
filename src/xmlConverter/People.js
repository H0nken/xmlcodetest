function People() {

  var textToConvert =
    "P|Carl Gustaf|BernadotteT|0768-101801|08-101801A|Drottningholms slott|Stockholm|10001F|Victoria|1977A|Haga Slott|Stockholm|10002F|Carl Philip|1979T|0768-101802|08-101802P|Barack|ObamaA|1600 Pennsylvania Avenue|Washington, D.C|20500";

  // öppningstagg på xml-formatet
  textToConvert = "\n<people>" + textToConvert;

  // lista för att hålla reda taggarnas index i texten
  const indexOfAllTags = [];

  // sätter taggarnas index
  for (let index = 0; index < textToConvert.length; index++) {
    if (textToConvert[index] === "|") {
      indexOfAllTags.push(index);
    }
  }

  const numberOfTags = indexOfAllTags.length;

  // en räknare för att avsluta konvereringen
  var counter = 0;

  // TODO: skapa egna metoder för de olika taggarna. ex: personTagHandler, addressTagHandler, osv.
  // TODO: kolla värdet på nästa tagg i texten och skicka sedan "text" till rätt metod

  // kollar textens första tagg och formaterar (icke dynamiskt)
  if (
    numberOfTags >= counter &&
    textToConvert.indexOf("P" === indexOfAllTags[0] - 1)
  ) {
    textToConvert = textToConvert.replace("P|", "\n <person>\n  <firstname>");
    textToConvert = textToConvert.replace("|", "</firstname>\n  <lastname>");
    counter += 2;
  }

  if (
    numberOfTags >= counter &&
    textToConvert.indexOf("T" === indexOfAllTags[1] - 1)
  ) {
    textToConvert = textToConvert.replace(
      "T|",
      "</lastname>\n  <phone>\n   <mobile>"
    );
    textToConvert = textToConvert.replace("|", "</mobil>\n   <home>");
    counter += 2;
  }

  if (
    numberOfTags >= counter &&
    textToConvert.indexOf("A" === indexOfAllTags[2] - 1)
  ) {
    textToConvert = textToConvert.replace(
      "A|",
      "</home>\n  </phone>\n  <address>\n   <street>"
    );
    textToConvert = textToConvert.replace("|", "</street>\n   <city>");
    textToConvert = textToConvert.replace("|", "</city>\n   <zipcode>");
    counter += 3;
  }

  if (
    numberOfTags >= counter &&
    textToConvert.indexOf("F" === indexOfAllTags[3] - 1)
  ) {
    textToConvert = textToConvert.replace(
      "F|",
      "</zipcode>\n  </address>\n  <family>\n   <name>"
    );
    textToConvert = textToConvert.replace("|", "</name>\n    <born>");
    counter += 2;
  }

  if (
    numberOfTags >= counter &&
    textToConvert.indexOf("A" === indexOfAllTags[5] - 1)
  ) {
    textToConvert = textToConvert.replace(
      "A|",
      "</born>\n    <address>\n     <street>"
    );
    textToConvert = textToConvert.replace("|", "</street>\n     <city>");
    textToConvert = textToConvert.replace("|", "</city>\n     <zipcode>");
    counter += 3;
  }

  if (
    numberOfTags >= counter &&
    textToConvert.indexOf("F" === indexOfAllTags[6] - 1)
  ) {
    textToConvert = textToConvert.replace(
      "F|",
      "</zipcode>\n    </address>\n  </family>\n  <family>\n   <name>"
    );
    textToConvert = textToConvert.replace("|", "</name>\n    <born>");
    counter += 2;
  }

  if (
    numberOfTags >= counter &&
    textToConvert.indexOf("T" === indexOfAllTags[7] - 1)
  ) {
    textToConvert = textToConvert.replace(
      "T|",
      "</born>\n    <phone>\n     <mobile>"
    );
    textToConvert = textToConvert.replace("|", "</mobile>\n     <home>");
    counter += 2;
  }

  if (
    numberOfTags >= counter &&
    textToConvert.indexOf("P" === indexOfAllTags[6] - 1)
  ) {
    textToConvert = textToConvert.replace(
      "P|",
      "</home>\n    </phone>\n  </family>\n </person>\n <person>\n  <firstname>"
    );
    textToConvert = textToConvert.replace("|", "</firstname>\n  <lastname>");
    counter += 2;
  }

  if (
    numberOfTags >= counter &&
    textToConvert.indexOf("A" === indexOfAllTags[8] - 1)
  ) {
    textToConvert = textToConvert.replace(
      "A|",
      "</lastname>\n  <address>\n   <street>"
    );
    textToConvert = textToConvert.replace("|", "</street>\n   <city>");
    textToConvert = textToConvert.replace("|", "</city>\n   <zipcode>");
    counter += 3;
  }

  // sluttaggar
  const closeZipCodeTag = "</zipcode>\n";
  const closeAddressTag = "  </address>";
  const closePersonTag = "\n </person>";

  // om det inte finns fler taggar så avslutas konverteringen
  if (counter >= indexOfAllTags.length) {
    textToConvert =
      textToConvert +
      closeZipCodeTag +
      closeAddressTag +
      closePersonTag +
      "\n</people>";
    console.log("XML: ", textToConvert);
  }
}

export default People;
