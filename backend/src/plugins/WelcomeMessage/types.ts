import * as t from "io-ts";
import { BasePluginType, guildEventListener } from "knub";
import { tNullable } from "../../utils";
import { GuildLogs } from "../../data/GuildLogs";

export const ConfigSchema = t.type({
  send_dm: t.boolean,
  send_to_channel: tNullable(t.string),
  message: tNullable(t.string),
});
export type TConfigSchema = t.TypeOf<typeof ConfigSchema>;

export interface WelcomeMessagePluginType extends BasePluginType {
  config: TConfigSchema;
  state: {
    logs: GuildLogs;
    sentWelcomeMessages: Set<string>;
  };
}

export const welcomeMessageEvt = guildEventListener<WelcomeMessagePluginType>();
