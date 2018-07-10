#### 状态机
###### 使用数据表实现状态机，同时使用 reduce 简化循环逻辑。
```javascript
function Automaton() {
    this.states = {
        "q1": ["q1", "q2"],
        "q2": ["q3", "q2"],
        "q3": ["q2", "q2"],
    }
}
Automaton.prototype.readCommands = function(commands) {
    return "q2" === commands.reduce((state, input) => this.states[state][input], "q1");
}

var myAutomaton = new Automaton();

console.log(myAutomaton.readCommands(["1", "0", "0", "1", "0"]));
console.log(myAutomaton.readCommands([1, 0, 0, 1]));
```

###### 亮点
1. 数组下标表示输入，数组列出 输入与状态转换 之间的关系
2. 输入顺序的处理