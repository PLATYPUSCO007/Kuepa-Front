export interface SendMessage {
    username: string;
    message: string;
}

export interface ReceivMessage {
    _id:       string;
    username:  string;
    message:   string;
    timestamp: Date;
    __v:       number;
}