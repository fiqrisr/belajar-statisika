import format from 'https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module';

const Post = createClass({
	render() {
		const entry = this.props.entry;

		return h(
			'main',
			{},
			h(
				'div',
				{ className: 'page-content', 'aria-label': 'Content' },
				h(
					'div',
					{ className: 'w' },
					h(
						'article',
						{},
						h(
							'p',
							{ className: 'post-meta' },
							h(
								'time',
								{},
								format(entry.getIn(['data', 'date'], new Date()), 'yyyy-LL-dd')
							)
						),
						h('h1', {}, entry.getIn(['data', 'title'], null)),
						this.props.widgetFor('body')
					)
				)
			)
		);
	},
});

export default Post;
