import { FinTSClient } from "./client";
import { FinTSDialog } from "./dialog";
import { FinTSRequest } from "./request";
import { FinTSConnection } from "./connection";
import { Segment } from "./segments";

export interface FinTSPinTanClientConfiguration {
    blz: string;
    name: string;
    pin: string;
    url: string;
    debug?: boolean;
}

export class FinTSPinTanClient extends FinTSClient {
    private connection: FinTSConnection;
    protected config: FinTSPinTanClientConfiguration;

    constructor(config: FinTSPinTanClientConfiguration) {
        super();
        this.config = config;
        const { url, debug  } = config;
        this.connection = new FinTSConnection({ url, debug });
    }

    public createDialog() {
        const { blz, name, pin } = this.config;
        const { connection } = this;
        return new FinTSDialog({ blz, name, pin, systemId: "0", connection });
    }

    public createRequest(dialog: FinTSDialog, segments: Segment<any>[], tan?: string) {
        const { blz, name, pin } = this.config;
        const { systemId, dialogId, msgNo, tanMethods } = dialog;
        return new FinTSRequest({ blz, name, pin, systemId, dialogId, msgNo, segments, tanMethods, tan });
    }
}
