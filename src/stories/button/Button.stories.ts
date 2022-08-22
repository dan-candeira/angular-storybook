// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
// import { Story, Meta } from "@storybook/angular/types-6-0";
import { Meta, Story } from '@storybook/angular';
import Button from './button.component';
import { StyleType } from './button.model';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
	title: 'Cat/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'terciary'],
		},
		size: { control: 'select', options: ['small', 'medium', 'large'] },
	},
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const BaseTemplate: Story<Button> = (args: Button) => ({
	props: args,
	template: `
	  <button data-variant="${args.variant}" data-size="${args.size}" cat-button>Button</button>
	`,
});

const CustomTemplate: Story<Button> = (args: Button) => ({
	props: args,
	template: `
	  <button data-variant="primary" data-size="large" cat-button>Button <span class="cat-icon" data-icon-position="end">🎉</span></button>
	`,
});

export const primary = BaseTemplate.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
primary.args = {
	size: 'medium',
	variant: 'primary',
};

export const Secondary = BaseTemplate.bind({});
Secondary.args = {
	size: 'medium',
	variant: 'secondary',
};

export const Icon = CustomTemplate.bind({});
Icon.args = {
	size: 'medium',
};

export const Large = BaseTemplate.bind({});
Large.args = {
	size: 'large',
};

export const Small = BaseTemplate.bind({});
Small.args = {
	size: 'small',
};
