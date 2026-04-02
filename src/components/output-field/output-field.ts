import { type BlockOwnProps } from '@components/Block';
import Block from '@components/Block';
import template from './output-field.hbs?raw';

export interface OutputFieldProps extends BlockOwnProps {
  ref: string;
  label?: string;
  id?: string;
  name?: string;
  value?: string;
}

export class OutputField extends Block<OutputFieldProps> {
  static componentName = 'OutputField';
  protected template = template;
}
