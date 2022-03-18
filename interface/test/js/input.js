
new Vue({
	el: '#pole_input',
	data:{
		name: '',
		index: -1
	},
	methods:{
		checkAndSend: function (event){
			var name_test = /pole\d{1,3}/;
			if(name_test.test(this.name) === false || this.index < 0){
				console.log(name_test.test(this.name));
				console.log(this.index < 0);
				alert('请输入合法的信息，如: pole13, 20');
				return ;
			}
			this.send();
		},
		send: function(){
			alert('send success');
		}
	}
})

new Vue({
	el: '#slot_input',
	data: {
		tank_selected: 'notselected',
		index: -1
	},
	methods: {
		checkAndSend: function (event){
			var error = ""
			if(this.tank_selected === 'notselected'){
				error += '请选择要添加的槽';
			}
			if(this.index < 0){
				error += "\n请输入合适的位置以添加槽位";
			}
			if(error != ""){
				alert(error);
				return ;
			}
			this.send();
		},
		send: function(){
			alert('send success');
		}
	}
})

new Vue({
	el: '#item_input',
	data:{
		name: 'notdefined',
		index: -1
	},
	methods:{
		checkAndSend:function (event){
			if(this.name === 'notdefined'){
				alert('请输入物品名称，如p1');
				return ;
			}
			if(this.index < 0){
				alert('请输入物品添加的槽位')
				return ;
			}
			this.send();
		},
		send: function(){
			alert('send success');
		}
	}
})