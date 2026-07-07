// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://theshikharmalik.github.io',
    base: '/notes/',
	integrations: [
		starlight({
			title: 'trashnotes',
			favicon: '/favicon.png',
			customCss: [
        	'./src/styles/custom.css',
      		],
			tableOfContents: false,
			components: {
                Footer: './src/components/CustomFooter.astro',
                SocialIcons: './src/components/CustomSocial.astro',
            },
			sidebar: [
				{
					label: 'array',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'two sum', slug: 'array/two_sum', badge: { text: 'easy', variant: 'success' } },
						{ label: 'best time to buy and sell stock', slug: 'array/best_time_to_buy_and_sell_stock', badge: { text: 'easy', variant: 'success' } },						
						{ label: 'three sum', slug: 'array/three_sum', badge: { text: 'med', variant: 'caution' } },
						{ label: 'insert interval', slug: 'array/insert_interval', badge: { text: 'med', variant: 'caution' } },
						{ label: 'merge intervals', slug: 'array/merge_intervals', badge: { text: 'med', variant: 'caution' } },
						{ label: 'product of array except self', slug: 'array/product_of_array_except_self', badge: { text: 'med', variant: 'caution' } },
					],
				},
				{
					label: 'string',
					items: [{ autogenerate: { directory: 'reference',  } }],
				},
			],
		}),
	],
});
