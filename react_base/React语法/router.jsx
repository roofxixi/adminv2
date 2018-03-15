

//页面路由
window.location.href = 'http://www.baidu.com'
history.back();

//hash路由
window.location = '#hash';
window.onhashchange = function(){
  console.log('hash:',window.location.hash)
}

//h5路由
//推进一个状态
history.pushState('name','title','/path');
//替换一个状态
history.replaceState('name','title','/test');
//后退时候
history.onpopstate = function(){
  console.log(window.location.href);
  console.log(window.location.hash);
  console.log(window.location.pathname);
}
