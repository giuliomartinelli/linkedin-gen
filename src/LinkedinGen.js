const fs = require('fs');
const ApiLinkedin = require('./linkedin/apiLinkedin');
const MdTemplate = require('./template/mdTemplate');
require('dotenv').config();
		
class LinkedinGen {
	
	constructor(url){
		this.linkedin = new ApiLinkedin();
		this.template = new MdTemplate();
		this.url      = url;
		this.filePath = process.env.FILE_PATH;
	}


	async generate(type = 'md'){
		await this.linkedin.load()
		const peopleIn = this.linkedin.getIn();
		const data = { 
			name: `${peopleIn.localizedFirstName} ${peopleIn.localizedLastName}`,
			headline: `${peopleIn.localizedHeadline}`
		}

		const file = `${this.filePath}/CV.md`;

		fs.writeFileSync(file, this.template.handler(data));
		console.log(file);
		return file;
	}
}
module.exports = LinkedinGen;
