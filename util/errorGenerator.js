class ErrorGenerator extends Error {
    constructor(success, status, message){
        super();
        this.success = success;
        this.status = status;
        this. message = message;
    }
}

module.exports = ErrorGenerator