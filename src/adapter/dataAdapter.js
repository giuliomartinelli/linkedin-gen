class DataAdapter {
    constructor(data) {
        this.data = data;
    }

    handler(data) {
        return {...data, ...this.additionalFields}; // Adicionando campos adicionais ao objeto normalizado
    }
}