import { resolve } from "path";
import { existsSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import * as fetch from 'isomorphic-fetch';

export class DownloadFile {
  private tempFolder: string;

  constructor() {
    this.tempFolder = resolve(process.cwd(), 'temp');
  }

  public async downloadFile(link: string, filename): Promise<void> {
    if (!existsSync(this.tempFolder)) {
      mkdirSync(this.tempFolder);
    }

    const content = await fetch(link).then((response: any) => response.buffer());
    writeFileSync(resolve(this.tempFolder, filename), content);
  }

  public readFileFromTemp(filename:string): Buffer {
    return readFileSync(resolve(this.tempFolder, filename));
  }
}
