/**
 * 디데이
 */

window.onload = function() {
	displayDate();
};

function displayDate() {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	document.getElementById("current-time").innerHTML = "현재시간 : "
		+ year + "년 " + month + "월 " + day + "일 " + hours + "시 "
		+ minutes + "분 " + seconds + "초";
}

setInterval(displayDate, 1000);

function calculate() {
	const inputDate = new Date(
		document.getElementById("inputDate").value);

	if (isNaN(inputDate.getTime())) {
		alert("계산할 날짜를 입력해주세요.");
		return false;
	}

	const now = new Date();
	const diff = inputDate.valueOf() - now.valueOf();
	let days = Math.floor(diff / (1000 * 60 * 60 * 24));
	let hours = Math.floor((diff % (1000 * 60 * 60 * 24))
		/ (1000 * 60 * 60));
	let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((diff % (1000 * 60)) / 1000);

	let message = "";

	if (days < -1) {
		message = `D-Day 로 부터 ${-days - 1}일 ${-hours}시간 ${-minutes}분 ${-seconds}초 지났습니다.`;
	} else if (days > -1) {
		message = `D-Day 로 부터 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다.`;
	} else {
		message = "D-Day 입니다.!!";
	}

	if (inputDate.getFullYear() === 2022
		&& inputDate.getMonth() + 1 === 10
		&& inputDate.getDate() === 14) {
		message += "♡";
	}

	document.getElementById("result").innerHTML = message;
}