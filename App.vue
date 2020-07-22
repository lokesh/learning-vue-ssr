<template>
	<div>
		<h1>App.vue</h1>
		<h2>Foo</h2>
		<h2>Bar</h2>
	</div>
</template>

<script>
import Foo from './components/Foo';
import Bar from './components/Bar';

export default {
	name: 'App',

	components: {
		Foo,
		Bar,
	},
};
</script>
