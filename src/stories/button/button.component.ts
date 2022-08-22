import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Size, Variant } from './button.model';

@Component({
	selector: 'button[cat-button]',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'cat-btn-base' },
})
export default class ButtonComponent {
	/**
	 * What should be the button style?
	 */
	@HostBinding('attr.data-variant')
	variant: Variant = 'primary';

	/**
	 * How large should the button be?
	 */
	@HostBinding('attr.data-size')
	size: Size = 'medium';
}
