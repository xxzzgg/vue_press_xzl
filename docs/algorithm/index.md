# algorithm

### 
[参考]("https://101.zoo.team/")
## diff算法
定义 对比两颗vdom树，找出其中的差异的算法称为diff算法
### diff的复杂度
一般如果把两个树结构做diff，复杂度为O(n^3) 
所以只做同层的对比，dom类型 变了就不再对比子节点
