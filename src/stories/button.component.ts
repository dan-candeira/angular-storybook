import {
	Component,
	Input,
	Output,
	EventEmitter,
	ChangeDetectionStrategy,
} from '@angular/core';

export type Variant = 'primary' | 'secondary' | 'tertiary';
export type Size = 'small' | 'medium' | 'large';
export type Type = 'submit' | 'button';

@Component({
	selector: 'cat-button',
	template: ` <button
		[type]="btnType"
		class="cat-button"
		[attr.data-variant]="variant"
		[attr.data-size]="size"
		(click)="onClick.emit($event)"
	>
		{{ label }}
	</button>`,
	styleUrls: ['./button.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonComponent {
	/**
	 * Is this the principal call to action on the page?
	 */
	@Input()
	btnType: Type = 'button';

	/**
	 * What should be the button style?
	 */
	@Input()
	variant: Variant = 'primary';

	/**
	 * How large should the button be?
	 */
	@Input()
	size: Size = 'medium';

	/**
	 * Button contents
	 *
	 * @required
	 */
	@Input()
	label = 'Button';

	/**
	 * Optional click handler
	 */
	@Output()
	onClick = new EventEmitter<Event>();
}
