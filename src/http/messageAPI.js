import $host from '.';

const idInstance = localStorage.getItem('idInstance');
const apiTokenInstance = localStorage.getItem('apiTokenInstance');

export class MessageAPI {
	static async sendMessage(chatId, message) {
		return $host.post(
			`/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
			{
				chatId,
				message,
			}
		);
	}

	static async getMessageNotification() {
		const response = await $host.get(
			`/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
		);
		return response.data;
	}

	static async deleteMessageNotification(receiptId) {
		return $host.delete(
			`/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`
		);
	}
}
