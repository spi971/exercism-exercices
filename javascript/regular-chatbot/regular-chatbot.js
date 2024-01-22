// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export const isValidCommand = (command) =>
	command.match(/chatbot/i).index === 0;

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
	const regex = new RegExp(/emoji(\d+)/gi);
	return regex.test(message) ? message.replace(regex, "") : message;
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
	const regex = new RegExp(/(\(\+\d{2}\)) (\d{3})-(\d{3})-(\d{3})/, "gi");
	const validMessage = "Thanks! You can now download me to your phone.";
	const invalidMessage = `Oops, it seems like I can't reach out to ${number}`;
	return regex.test(number) ? validMessage : invalidMessage;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
	return userInput.match(new RegExp(/\w+\.\w{2,3}/, "g"));
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
	const greting = "Nice to meet you, lastName firstName";
	const [lastName, firstName] = fullName.split(", ");
	return greting.replace(/lastName firstName/, `${firstName} ${lastName}`);
}
