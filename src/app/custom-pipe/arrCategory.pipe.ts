import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  'name': 'category'
})

export class ArrCategoryPipe implements PipeTransform {
	transform(categories: string[]): string {
		let result: string[] = [];

		if(categories) {
			categories.forEach(category => {
				if(result.indexOf(category) <= -1) {
					result.push(category);
				}
			})
		}
		return result.join(", ");
	}
}
