import { Pipe, PipeTransform } from '@angular/core';
import { SEVERITY } from '../constants/constants';

@Pipe({
  name: 'severity'
})

export class SeverityPipe implements PipeTransform {
  private severities = SEVERITY;
  transform(severitiesNum: number) {
    return this.severities[severitiesNum];
  }
}