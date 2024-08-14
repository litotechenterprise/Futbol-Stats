import { OutputTarget } from "../../types";
import fs from "fs";
export class HTMLReporter implements OutputTarget {
  print(report: string) {
    const html = `
            <div>
                <h1>Analysis Output</h1>
                <div>${report}</div>
            </div
        `;

    fs.writeFileSync("report.html", html);
  }
}
