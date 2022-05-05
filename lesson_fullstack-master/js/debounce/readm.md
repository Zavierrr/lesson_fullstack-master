#   防抖
        怎么降低执行频率，释放服务器和前端的压力

        单位时间执行次数
            - 1s执行一次，如果触发多次，取消后面的搜索，直到1s结束，继续下一个1s搜索一次
            - 先执行一次，然后停1s，循环下去
##  取消事件监听
        必须传事件类型和当初绑定的事件处理函数
            原因是：同一个元素的同一个事件可以进行多次绑定 
            例：
                btn.addEventListener('click', function() {
                    console.log('one');
                })
                btn.addEventListener('click', function() {
                    console.log('two');
                })
                btn.addEventListener('click', function() {
                    console.log('three');
                })
##  回调函数
        定义：当一个函数A作为另外一个函数B的其中一个参数时，则函数A称为回调函数。
        即A可以在函数B的周期内执行（开始、中间、结束时均可），
        简单来说，就是由别人的函数运行期间来回调你实现的函数。