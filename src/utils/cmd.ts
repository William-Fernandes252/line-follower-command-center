import { CmdParamReader } from './cmdParam';

const cmdHandlerMap = new Map<string, (data: string) => void>([
  ['param_list', CmdParamReader.param_list],
  ['param_get', CmdParamReader.param_get],
]);

export { cmdHandlerMap };
