Hi, you make the conversation be able to retain past messages using **script.js** file?

For example, when user first send the message, it will only contain one object inside the array.

But, when there is the response from the AI through the back-end, it should be added as the following:

{
  "role": "model",
  "message": <the AI message>
}

So, when the user sends again the message, it will contain 3 messages, as the current message being sent is included as well.

[
  {
    "role": "user",
    "message": <user first message>
  },
  {
    "role": "model",
    "message": <the AI message>
  },
  {
    "role": "user",
    "message": <user response>
  }
]

...and so on.

Can you help me with this case?
