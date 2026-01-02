let interval;

        // タイマーの表示エリアをリセットするためのHTMLを保存しておく
        const timerHtmlBackup = document.getElementById('timer').innerHTML;

        function updateCountdown() {
            const year = document.getElementById('yearInput').value;
            const target = new Date(`${year}-01-01T00:00:00`).getTime();
            const now = new Date().getTime();
            const diff = target - now;

            const timerElement = document.getElementById('timer');

            if (diff <= 0) {
                timerElement.innerHTML = "<h2>ハッピーニューイヤー！</h2>";
                clearInterval(interval);
                return;
            } else {
                // もし「ハッピーニューイヤー」と表示されていたら、元の数字用の表示に戻す
                if (timerElement.querySelector('h2')) {
                    timerElement.innerHTML = timerHtmlBackup;
                }
            }

            // 数字を更新
            document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
            document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById('seconds').innerText = Math.floor((diff % (1000 * 60)) / 1000);
        }

        window.onload = function() {
            const nextYear = new Date().getFullYear() + 1;
            document.getElementById('yearInput').value = nextYear;
            updateCountdown();
            interval = setInterval(updateCountdown, 1000);
        };

        document.getElementById('startBtn').onclick = function() {
            clearInterval(interval);
            updateCountdown();
            // スタートを押した時にもう一度1秒ごとの更新を開始する
            interval = setInterval(updateCountdown, 1000);
        };
