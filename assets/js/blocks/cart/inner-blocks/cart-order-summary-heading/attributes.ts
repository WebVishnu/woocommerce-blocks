/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

export default {
	content: {
		type: 'string',
		default: __( 'Heading', 'woo-gutenberg-products-block' ),
	},
	lock: {
		type: 'object',
		default: {
			remove: false,
			move: false,
		},
	},
};
