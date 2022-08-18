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
		[attr.data-icon]="icon"
		[attr.data-icon-position]="icon ? iconPosition : null"
		(click)="onClick.emit($event)"
	>
		{{ label }}
	</button>`,
	styleUrls: ['./button.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonComponent {
	/**
	 * What is the button type?
	 *
	 * https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/button#attr-type
	 */
	@Input()
	btnType: Type = 'button';

	/**
	 * Button icon
	 */
	@Input()
	icon: string;

	/**
	 * Button icon position
	 */
	@Input()
	iconPosition: 'after' | 'before' = 'after';

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
