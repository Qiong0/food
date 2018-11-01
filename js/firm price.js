/*
* @Author: Lenovo
* @Date:   2018-09-14 17:46:05
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-18 19:02:09
*/
window.onload=function(){
	let btn=document.querySelector("footer .end");
	let cover=document.querySelector(".coverbox");
	let jian=document.querySelectorAll(".box .jian");
	let add=document.querySelectorAll(".box .add")[2];
	// console.log(jia,jian);
	btn.onclick=function(){
		cover.style.display="block";
	}

	add.onclick=function(){
		jian.style.display="block";
	}
}