window.addEventListener('keydown',
    function(event) {
        // 获取按键的ASCII码
        let keyCode = event.keyCode;
        // console.log(keyCode); 

        // 关联 与当前event的keyCode值相等的 audio
        let audioElm = document.querySelector(`audio[data-key="${keyCode}"]`);
        // console.log(audio);
        if (audioElm) audioElm.play();

        // 关联 与当前event的keyCode值相等的 div
        let keyElm = document.querySelector(`.key[data-key="${keyCode}"]`);
        // console.log(key);

        // 给div动态添加样式
        if (keyElm) keyElm.classList.add('playing');

        // 定时器
        // setTimeout(function() {
        //     keyElm.classList.remove('playing');
        // }, 1000)
    })

const keys = document.querySelectorAll('.key');
for (let key of keys) {
    // EventListener每次只能给一件事加，不能给集体加
    key.addEventListener('transitionend', function(event) {
        event.target.classList.remove('playing');
    })
}
// keys.addEventListener // 错误，不能给集体加

// 写法二：
// function playSound(event) {
//     // event 指当前触发的事件 如：A键被按下
//     // console.log(event);

//     // 获取按键的ASCII码
//     let keyCode = event.keyCode;
//     // console.log(keyCode); 

//     // 关联 与当前event的keyCode值相等的 audio
//     let audioElm = document.querySelector(`audio[data-key="${keyCodede}"]`);
//     // console.log(audio);
//     if (audioElm) audioElm.play();

//     // 关联 与当前event的keyCode值相等的 div
//     let key = document.querySelector(`.key[data-key="${keyCodede}"]`);
//     // console.log(key);

//     // 给div动态添加样式
//     if (key) key.classList.add('playing');

//     // console.log(event);
//     // if (event.key == 'a') {
//     //     console.log(a);
//     //     const clapAudio = document.querySelector('#clap');
//     //     console.log(clapAudio);
//     //     clapAudio.play();
//     // }
// }
// window.addEventListener('keydown', playSound);