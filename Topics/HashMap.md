## HashMap
#### 描述：
```
Hashmap是最常用的数据结构之一，这两天将研读 [open jdk7的hash代码](http://hg.openjdk.java.net/jdk7/jdk7/jdk/file/9b8c96f96a0f/src/share/classes/java/util/HashMap.java)。
```
#### Tips: 
```
1. Hashmap底层实现的数据结构有哪些？链表法和再hash法在解决冲突时有哪些优劣？
2. 如何降低hash值冲突的概率？Hash值冲突过多会有什么坏的影响？自己写hash函数时，从哪方面着手去写一个冲突低又速度快的hash函数？
3. Hashmap在实际使用中应该注意哪些问题？
4. 为什么需要对Hashmap中的引用生命周期特别注意，会对Java的GC产生什么影响？如何根据自己需求去避免
```

##### 更进一步的发散问题和点：
* 1. 如何实现一个分布式的Hash查找表？
* 2. 什么是一致性Hash，它解决了什么问题？
