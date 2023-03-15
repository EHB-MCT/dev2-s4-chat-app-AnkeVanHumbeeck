"use strict";

const chat = {
	author: "Anke",
	init() {
		this.fetchMessages();
	},
	sendMessage() {},
	fetchMessages() {
		fetch("https://dev2chat.onrender.com/messages")
			.then(function (data) {
				return data.json();
			})
			.then(function (jsonMessages) {
				console.log(jsonMessages);
				jsonMessages.forEach((msg) => {
					const message = `<div class="messageItem">
                    <div class="header">
                        <span class="author">${msg.author}</span>
                        <span class="time">00:00</span>
                    </div>
                        <p>
                            ${msg.message}
                        </p>
                    </div>`;

					document.querySelector("#messageContainer").insertAdjacentHTML("beforeend", message);
				});
			});
	},
	renderMessage(message) {},
};

chat.init();
