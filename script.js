let countdownInterval;

function init() {
    // 1. 現在の年を取得
    const currentYear = new Date().getFullYear();
    // 2. 「次の年」を計算
    const nextYear = currentYear + 1;
    
    // 入力欄に「次の年」を自動で入れる
    const yearInput = document.getElementById('yearInput');
    yearInput.value = nextYear;

    // カウントダウン開始
    startCountdown();
}

function startCountdown() {
    clearInterval(countdownInterval);

    const targetYear = document.getElementById('yearInput').value;
    const targetDate = new Date(`${targetYear}-01-01T00:00:00`).getTime();

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').innerHTML = "<h2>ハッピーニューイヤー！</h2>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }, 1000);
}

// ページが読み込まれたら init 関数を実行
window.onload = init;
