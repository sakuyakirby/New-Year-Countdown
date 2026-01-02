let countdownInterval;

function startCountdown() {
    // 以前のタイマーがあれば停止する
    clearInterval(countdownInterval);

    const yearInput = document.getElementById('yearInput');
    const targetYear = yearInput.value;
    
    // 指定された年の1月1日 00:00:00 の時間を取得
    const targetDate = new Date(`${targetYear}-01-01T00:00:00`).getTime();
    const now = new Date().getTime();

    // もし入力された時間が現在より前なら、警告を出す
    if (targetDate <= now) {
        alert(`${targetYear}年1月1日はすでに過ぎています！未来の年を入力してください。`);
        return;
    }

    countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const distance = targetDate - currentTime;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').innerHTML = "<h2>ハッピーニューイヤー！</h2>";
            return;
        }

        // 時間の計算
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // 画面に表示
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }, 1000);
}

// 初期表示でエラーにならないよう、2027年をデフォルトにして開始
document.getElementById('yearInput').value = 2027;
startCountdown();
