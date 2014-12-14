Prism.languages.treeview = {
	"treeview-part": {
		pattern: /(^|\n).+/,
		inside: {
			"entry-line": [
				{
					pattern: /\|-- |├── /,
					alias: "line-h"
				},
				{
					pattern: /\|   |│   /,
					alias: "line-v"
				},
				{
					pattern: /`-- |└── /,
					alias: "line-v-last"
				},
				{
					pattern: / {4}/,
					alias: "line-v-gap"
				}
			],
			"entry-name": {
				pattern: /.*\S.*/,
				inside: {
					// symlink
					"operator": / -> /,
				}
			}
		}
	}
};

Prism.hooks.add('wrap', function(env) {
	if (env.language === 'treeview') {
		// Remove line breaks
		if(env.type === 'treeview-part') {
			env.content = env.content.replace(/\n/g,'')+'<br />';
		}
		if(env.type === 'entry-name') {
			var reg = /^\[([^\]]+)\] /,
				match = reg.exec(env.content);
			if(match) {
				env.content = env.content.replace(reg,'');
				env.classes.push(match[1] === 'dir' ? match[1] : ('ext-' + match[1]));
			} else {
				var parts = env.content.toLowerCase().split('.');
				while (parts.length > 1) {
					parts.shift();
					// Ex. 'foo.min.js' would become '<span class="token keyword ext-min-js ext-js">foo.min.js</span>'
					env.classes.push('ext-' + parts.join('-'));
				}
			}
			if(env.content.charAt(0)==='.') {
				env.classes.push('dotfile');
			}
		}
	}
});