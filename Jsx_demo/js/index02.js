var myStyle = {
	fontSize: 36,
	color: '#666'
};

var myStyleh2 = {
	fontSize: 24,
	color: 'red'
};

ReactDOM.render(
	<div>
		<h1 style = { myStyle }>Song,xiaotao!!</h1>
		<h2 style = { myStyleh2 }>{1+2+3}</h2>
		<p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
	</div>,
	document.getElementById('example')
);

