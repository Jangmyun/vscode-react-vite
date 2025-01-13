import { commands, ExtensionContext } from "vscode";
import { GPTPanel } from "./panels/GPTPanel";

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand("vscode-react.run", () => {
      GPTPanel.render(context.extensionUri);
    })
  );
}
