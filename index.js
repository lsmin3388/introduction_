function realtimeClock() {
    document.getElementById ('timerVar').innerHTML = getTimeStamp();
    setTimeout("realtimeClock()", 1000);
}

function getTimeStamp() {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    var d = new Date();
    var init_h = '';

    if (0 <= d.getHours <= 11) init_h = '오전';
    else init_h = '오후';
    var init_day = days[d.getDay()];

    var mymin = d.getMinutes().toString().padStart(2, '0');

    var s = d.getMonth() + '월 '
            + d.getDate() + '일 ('
            + init_day + ') '
            + init_h + ' '
            + d.getHours() + ':'
            + mymin
            
    return s;
}
