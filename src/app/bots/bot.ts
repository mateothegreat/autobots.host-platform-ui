import { BotEnvironment } from './bot-environment';

export class Bot {

    public uuid: string;
    public name: string;
    public description: string;
    public status: string;
    public gitUrl: string;
    public token: string;

    public environments: Array<BotEnvironment>;

}

