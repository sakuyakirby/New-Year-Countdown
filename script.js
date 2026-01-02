let countdownInterval;

function startCountdown() {
    // 以前のタイマーがあれば停止する
    clearInterval(countdownInterval);

    const targetYear = document.getElementById('yearInput').value;
    // 指定された年の1月1日 00:00:00 の時間を取得
    const targetDate = new Date(`${targetYear}-01-01T00:00:00`).getTime();

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').innerHTML = "<h2>ハッピーニューイヤー！</h2>";
            return;
        }

        // 時間の計算（ミリ秒から各単位へ）
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

// ページを開いた時に自動で2026年のカウントダウンを開始
startCountdown();
