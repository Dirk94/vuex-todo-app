<template>
  <div id="app">
    <h1>Todo App</h1>

		<ul>
			<li v-for="todo in todos" :key="todo.message">
				{{ todo.message }}
			</li>
		</ul>
  </div>
</template>
<script>
export default {
  name: 'App',
	computed: {
		todos() {
			return this.$store.state.todos;
		},
	},
}
</script>
<style>

#app {
	padding-top: 60px;
	max-width: 600px;
	margin: 0 auto;
}

ul {
	list-style-type: none;
	margin-left: 0;
	padding-left: 0;
}
ul li {
	text-align: center;
	padding-top: 8px;
	padding-bottom: 8px;
}

h1 {
	text-align: center;
}


@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
* {
	font-family: 'Yusei Magic', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
