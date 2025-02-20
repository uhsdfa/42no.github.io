document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const score = document.getElementById('score').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    const activityId = document.getElementById('activityId').value;
    const templateId = document.getElementById('templateId').value;

    const data = new URLSearchParams();
    data.append('score', score);
    data.append('time', time);
    data.append('name', name);
    data.append('activityId', activityId);
    data.append('templateId', templateId);
    data.append('mode', '1'); // Добавляем mode, как в оригинальном запросе

    fetch('https://wordwall.net/leaderboardajax/addentry', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'ru-RU,ru;q=0.9',
            'DNT': '1',
            'Origin': 'https://wordwall.net',
            'Priority': 'u=1, i',
            'Referer': 'https://wordwall.net/ru/resource/8379545/%D0%BD%D0%B0%D1%80%D0%B5%D1%87%D0%B8%D0%B5',
            'Sec-Ch-Ua': '"Not;A=Brand";v="24", "Chromium";v="128"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': '"Windows"',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'X-Requested-With': 'XMLHttpRequest',
            'X-Wordwall-Version': '1.0.9175.18113'
        },
        body: data
    })
    .then(response => response.json())
    .then(data => {
        console.log('Успешно отправлено:', data);
        alert('Данные успешно отправлены!');
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных.');
    });
});
