#### 协程
##### 关于 setjmp,longjmp 示例代码的导读：
```
1. 代码执行的结果是什么？为什么？
2. setjmp 保存了哪些执行环境？
3. 协程与 setjmp/longjmp 调用，除了栈，还有哪些上下文需要保存？
4. 协程的优势、劣势，使用时需要注意什么？
5. golang 协程怎么实现不限制每个协程栈的大小，有什么优势？
```
##### 示例代码：
```c
#include <stdio.h>
#include <setjmp.h>

static jmp_buf buf;

int main(){
  int b = 3;
  if(setjmp(buf) != 0){
    printf("b=%d\n", b);
    return 0;
  }
  b = 5;
  lonjmp(buf, 1);
  
  return 0;
}
```

##### 参考链接

|链接|摘要|
|---|--|
|[setjmp/longjmp](https://blog.csdn.net/oktears/article/details/43232493) |setjmp和longjmp一般用于异常处理，在发生异常时跳出到标记点，C++中的try catch throw的实现就是在此基础之上的封装，与goto相同|
