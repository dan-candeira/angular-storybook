// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
// import { Story, Meta } from "@storybook/angular/types-6-0";
import { Meta, Story } from '@storybook/angular';
import Button from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
	title: 'Cat/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
	argTypes: {
		variant: { control: 'select', options: ['primary', 'secondary'] },
		size: { control: 'select', options: ['small', 'medium', 'large'] },
	},
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Button> = (args: Button) => ({
	props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
	size: 'medium',
	label: 'Button',
	variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	size: 'medium',
	label: 'Button',
	variant: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button',
};
