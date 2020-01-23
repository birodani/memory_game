export class MemoCard {
  value: string;
  visible = false;
  found = false;

  constructor(value) {
    this.value = value;
  }

  flip() {
    this.visible = !this.visible;
  }
}
