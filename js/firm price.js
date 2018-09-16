/*
* @Author: Lenovo
* @Date:   2018-09-14 17:46:05
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-14 17:51:58
*/
window.onload=function(){
	let btn=document.querySelector("footer .end");
	let cover=document.querySelector(".coverbox");
	// console.log(btn);
	btn.onclick=function(){
		cover.style.display="block";
	}
}