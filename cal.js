const Cal={
	data(){
		return{
			result: ''
		}
	},
	init(){
		for(data in this.data()){
			this[data]=this.data()[data]
		}
		this.createElements()
		this.cacheDOM()
		this.bindEvents()
		this.render()
	},
	createElements(){
		this.addElement('div','res')
		this.addElement('div','btns')
		this.addElement('button','btn0','btns','0')
		this.addElement('button','btn1','btns','1')
		this.addElement('button','btn2','btns','2')
		this.addElement('button','btn3','btns','3')
		this.addElement('button','btn4','btns','4')
		this.addElement('button','btn5','btns','5')
		this.addElement('button','btn6','btns','6')
		this.addElement('button','btn7','btns','7')
		this.addElement('button','btn8','btns','8')
		this.addElement('button','btn9','btns','9')
		this.addElement('button','btnClr','btns','C')
		this.addElement('button','btnEql','btns','=')
		this.addElement('button','btnSum','btns','+')
		this.addElement('button','btnSub','btns','-')
		this.addElement('button','btnMul','btns','*')
		this.addElement('button','btnDiv','btns','/')
		
	},
	cacheDOM(){
		this.res = document.getElementById('res')
    this.btn0 = document.getElementById('btn0')
    this.btn1 = document.getElementById('btn1')
    this.btn2 = document.getElementById('btn2')
    this.btn3 = document.getElementById('btn3')
    this.btn4 = document.getElementById('btn4')
    this.btn5 = document.getElementById('btn5')
    this.btn6 = document.getElementById('btn6')
    this.btn7 = document.getElementById('btn7')
    this.btn8 = document.getElementById('btn8')
    this.btn9 = document.getElementById('btn9')
    this.btnClr = document.getElementById('btnClr')
    this.btnEql = document.getElementById('btnEql')
    this.btnSum = document.getElementById('btnSum')
    this.btnSub = document.getElementById('btnSub')
    this.btnMul = document.getElementById('btnMul')
    this.btnDiv = document.getElementById('btnDiv')
	},
	bindEvents(){
		this.btnClr.addEventListener('click',this.clear.bind(this))
		this.btnEql.addEventListener('click',this.calculate.bind(this))
		this.btn0.addEventListener('click',this.display.bind(this,0))
		this.btn1.addEventListener('click',this.display.bind(this,1))
		this.btn2.addEventListener('click',this.display.bind(this,2))
		this.btn3.addEventListener('click',this.display.bind(this,3))
		this.btn4.addEventListener('click',this.display.bind(this,4))
		this.btn5.addEventListener('click',this.display.bind(this,5))
		this.btn6.addEventListener('click',this.display.bind(this,6))
		this.btn7.addEventListener('click',this.display.bind(this,7))
		this.btn8.addEventListener('click',this.display.bind(this,8))
		this.btn9.addEventListener('click',this.display.bind(this,9))
		this.btnSum.addEventListener('click', this.displayOperation.bind(this, '+'))
        this.btnSub.addEventListener('click', this.displayOperation.bind(this, '-'))
        this.btnMul.addEventListener('click', this.displayOperation.bind(this, '*'))
        this.btnDiv.addEventListener('click', this.displayOperation.bind(this, '/'))
		
	},
	render(){
		this.res.innerHTML=this.result
	},
	addElement(tagName,id,parent,text){
		let element=document.createElement(tagName)
		element.id=id
		element.innerHTML=text || ''
		if(parent) document.getElementById(parent).append(element)
		else document.body.append(element)
	},
    clear(){
    	this.result=''
    	this.render()
    },
    display(value){
    	this.result+=value
    	this.render()
    },
    displayOperation(op){
    	let hasOp=this.result.match(/[\+\-\*\/]/)
    	if(this.result!=='' && !hasOp){
    		this.result+=op
    		this.render()
    	}
    },
    calculate(){
    	let hasOp=this.result.match(/[\+\-\*\/]/)
    	if(this.result!=='' && hasOp){
    		let digits=this.result.split(/[\+\-\*\/]/)
    		let operator=this.result.match(/[\+\-\*\/]/)[0]
    		let eqs
    		switch(operator){
    			case '+':
          eqs = digits[0] + digits[1]
          break;
        case '-':
          eqs = digits[0] - digits[1]
          break;
        case '*':
          eqs = digits[0] * digits[1]
          break;
        case '/':
          eqs = digits[0] / digits[1]
          break;

    		}
    		this.result=eqs.toString()
    		this.render()
    		l
    	}
    }
  

}
Cal.init()