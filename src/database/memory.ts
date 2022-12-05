export default class Memory {
  public memoryList : any

  constructor() {
    this.memoryList = []
  }

  writeMemo(model) {
    this.memoryList.push(model);
  }
  readMemo() {
    return this.memoryList
  }
  clearMemo() {
    this.memoryList = []
  }
}

let memory : Memory;

export function initMemory() {
  memory = new Memory();
}

export function getMemory() {
  return memory;
}