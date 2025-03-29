export interface LoginPluginPlugin {
  login(options: { value: string }): Promise<{ value: string }>;
}
