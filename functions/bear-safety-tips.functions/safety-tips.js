var bearSafetyTips = [
  "Bears primarily kill for sport. You are still in danger even if the bear is not hungry.",
  "Bears are not capable of love. You mean nothing to them.",
  "Bears rely on stealth. Their teeth and claws are useless if they can't get close to their prey.",
  "Bears almost always work in teams. The first bear is typically the decoy.",
  "Unless they have the element of surprise, bears are actually lousy fighters.",
  "Never attempt to bell a bear without professional help. It takes years of practice to become a beller.",
  "You know way less about bears than you think you do. Remember that."
];

// Avoid showing the same safety tip to the same user twice
var currentTipIndexByContactId = {};

// Functions
function getRandomBearSafetyTip(contact) {
  var randomIndex;
  var contactId;
  var currentTipIndexForContact;
  console.log(contact);
  if (contact && contact.vid) {
    contactId = contact.vid;
    currentTipIndexForContact = currentTipIndexByContactId[contactId] || null;
  }

  while (true) {
    randomIndex = Math.floor(Math.random() * bearSafetyTips.length);
    if (!contactId) {
      // No contact id, so just return the first thing we get
      break;
    } else if (randomIndex !== currentTipIndexForContact) {
      currentTipIndexByContactId[contactId] = randomIndex;
      break;
    }
  }

  return bearSafetyTips[randomIndex];
}

exports.main = ({ contact }, sendResponse) => {
  const response = getRandomBearSafetyTip(contact);
  sendResponse({ body: response, statusCode: 200 });
};
