const twilio = require('twilio');
const accountSid = 'AC48cb0cae6040b946b8f4bf80ee129613';
const authToken = 'ed73b27af99bf93b58a73621dc0012d5';

exports.sendMessage = async (number, code) => {
  const client = new twilio(accountSid, authToken);
  const response = await client.messages.create({ body: `Your Cheffy verification code is: ${code}`, to: number, from: '+12403187138'});
  if (response.error_code == null && response.sid !== '') {
    return { message: "SMS sent successfully!", data: response, error: false };
  }
  return { message: "Failed to send SMS!", data: response, error: true };
};