class MdTemplate {
	constructor(data) {
        this.data = data;
    }

	handler(data){ 
		return `
### ${data?.name}
#### ${data?.headline}
##### Version 0.0.1-${Math.floor(Math.random() * (1000 - 1) + 1)}
`;
	
	}
}

module.exports = MdTemplate;