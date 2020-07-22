const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./2-index.template.html', 'utf-8')
})
const createApp = require('./3-app');

server.get('*', (req, res) => {
	const context =  { url: req.url };
	const app = createApp(context);

	renderer.renderToString(app, (err, html) => {
		res.end(html);
	})
});

server.listen(8080)

