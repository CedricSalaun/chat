export class Message {
    private readonly _id: string;
    private readonly _createdDate: string;
    private readonly _isRead: string;
    private readonly _content: string;
    private readonly _author: string;
    private readonly _destinator: string;

    public constructor($data: any) {
        console.log({ $data });
        this._id = $data.id;
        this._isRead = $data.isRead;
        this._author = $data.author;
        this._createdDate = $data.createdDate;
        this._content = $data.content;
        this._destinator = $data.destinator;
    }

    get id(): string {
        return this._id;
    }

    get createdDate(): string {
        return this._createdDate;
    }

    get isRead(): string {
        return this._isRead;
    }

    get content(): string {
        return this._content;
    }

    get author(): string {
        return this._author;
    }

    get destinator(): string {
        return this._destinator;
    }
}
