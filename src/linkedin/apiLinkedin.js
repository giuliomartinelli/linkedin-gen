require('dotenv').config();
class ApiLinkedin {
	constructor(){
		this.in;
		this.url = process.env.LINKEDIN_API_URL;
		this.endpoint = "/v2/me";
	}

	async load(){
		return await fetch(`${process.env.LINKEDIN_API_URL}${this.endpoint}`, {
			method: 'GET',
			headers: {
			Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
			}
		}).then(async (res) => this.in = await res.json());
	}

	getIn(){
		return this.in;
	}
}
module.exports = ApiLinkedin;