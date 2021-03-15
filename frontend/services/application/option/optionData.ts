import { OptionItem } from '@/models/option'


export class OptionDTO {
  page: number;
  q?: string;
  isChecked?: string;

  constructor(item: OptionItem) {
    this.page = item.page;
    this.q = item.q;
    this.isChecked = item.isChecked;
  }
}
