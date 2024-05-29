const { createApp } = Vue;

createApp({
	data() {
		return {
			listEmail: [],
		};
	},
	methods: {
		generateEmail() {
			axios
				.get("https://flynn.boolean.careers/exercises/api/random/mail ")
				.then((response) => {
					this.listEmail.push(response.data.response);
				});
		},
	},
	created() {
		for (i = 0; i <= 10; i++) {
			this.generateEmail();
		}
	},
}).mount("#app");
