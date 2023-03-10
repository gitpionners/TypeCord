import { Client } from "../entities/Client";
import { ClientApplication } from "../entities/ClientApplication";

import { IUser } from "../interfaces/IUser";
import { IApplication } from "../interfaces/IApplication";

export default function (payload: any, client: Client) {

  const user: IUser = {
    id: payload.d.user.id,
    username: payload.d.user.username,
    discriminator: payload.d.user.discriminator,
    bot: payload.d.user.bot,
    avatar: payload.d.user.avatar
  };

  const application: IApplication = {
    id: payload.d.application.id as string,
    flags: payload.d.application?.flags as number
  }

  client.user = user;
  client.app = new ClientApplication(application, client)

  client.emit('connect');
};