// Функция для отправки данных на сервер
async function sendScore() {
    const url = "https://wordwall.net/leaderboardajax/addentry";
    const score = 99999999;
    const time = -1000;
    const name = "42";
    const activityId = 8379545;
    const templateId = 45;

    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "ru-RU,ru;q=0.9",
        "DNT": "1",
        "Origin": "https://wordwall.net",
        "Referer": "https://wordwall.net/ru/resource/8379545/%D0%BD%D0%B0%D1%80%D0%B5%D1%87%D0%B8%D0%B5",
        "Sec-CH-UA": `"Not;A=Brand";v="24", "Chromium";v="128"`,
        "Sec-CH-UA-Mobile": "?0",
        "Sec-CH-UA-Platform": `"Windows"`,
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "X-Requested-With": "XMLHttpRequest",
        "X-Wordwall-Version": "1.0.9175.18113",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    };

    const body = new URLSearchParams({
        score: score,
        time: time,
        name: name,
        mode: 1,
        activityId: activityId,
        templateId: templateId
    }).toString();

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: body,
            credentials: 'include' // Если нужно отправить куки
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // или response.text() в зависимости от ответа
        console.log(data);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Вызов функции для отправки данных
sendScore();
