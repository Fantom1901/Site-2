#!/bin/bash
mkdir -p dist/Сайт2_Ветров

# 1. Создаем Макет_Ветров.html
cat << 'EOF' > dist/Сайт2_Ветров/Макет_Ветров.html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>Семантическая разметка в HTML5 - Практическая 4</title>
    <style>
        body { font-family: sans-serif; background: #f8fafc; color: #334155; padding: 20px; }
        nav { background: #ffffff; padding: 12px; border-radius: 12px; margin-bottom: 15px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.02); }
        nav ul { list-style: none; padding: 0; margin: 0; display: flex; gap: 15px; }
        nav a { color: #4f46e5; text-decoration: none; font-weight: bold; font-size: 14px; }
        article { background: #ffffff; padding: 25px; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 8px 24px rgba(0,0,0,0.03); }
        section { background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; margin-top: 15px; border-radius: 12px; box-shadow: inset 0 -2px 4px rgba(0,0,0,0.02); }
        footer { margin-top: 30px; text-align: center; color: #94a3b8; font-family: monospace; font-size: 12px; }
    </style>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/glav">Главная</a></li>
            <li><a href="/blog">Блог</a></li>
            <li><a href="/contacts">Контакты</a></li>
        </ul>
    </nav>
    <nav>
        <ul>
            <li><a href="#header">HEADER</a></li>
            <li><a href="#nav">NAV</a></li>
            <li><a href="#article">ARTICLE</a></li>
            <li><a href="#section">SECTION</a></li>
            <li><a href="#aside">ASIDE</a></li>
            <li><a href="#footer">FOOTER</a></li>
        </ul>
    </nav>
    <article>
        <h2>Статья о семантической структуре страницы</h2>
        <section id="header"><h3>HEADER</h3><p>Раздел вводной части страницы или группы навигационных ссылок.</p></section>
        <section id="nav"><h3>NAV</h3><p>Раздел навигационных ссылок текущего документа.</p></section>
        <section id="article"><h3>ARTICLE</h3><p>Независимый, самодостаточный фрагмент контента.</p></section>
        <section id="section"><h3>SECTION</h3><p>Тематический раздел документа с собственным заголовком.</p></section>
        <section id="aside"><h3>ASIDE</h3><p>Контент, имеющий косвенное отношение к основному содержимому.</p></section>
        <section id="footer"><h3>FOOTER</h3><p>Подвал страницы с информацией об авторе и копирайтом.</p></section>
    </article>
    <footer>
        &lt;FOOTER&gt; © 2026 Ветров Тимофей Сергеевич | группа ИСИП-24-01-1 &lt;/FOOTER&gt;
    </footer>
</body>
</html>
EOF

# 2. Создаем Тег_IFRAME_Ветров.html
cat << 'EOF' > dist/Сайт2_Ветров/Тег_IFRAME_Ветров.html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>Документ со встроенным фреймом - Практическая 4</title>
    <style>
        body { font-family: sans-serif; background: #f8fafc; color: #334155; padding: 20px; text-align: center; }
        iframe { border: 3px solid #ffffff; border-radius: 16px; margin-top: 20px; box-shadow: 0 12px 28px rgba(0,0,0,0.06); }
    </style>
</head>
<body>
    <h2>Использование тега IFRAME для встраивания документов</h2>
    <p>Ниже представлен встроенный фрейм, отображающий созданный семантический макет:</p>
    <iframe src="Макет_Ветров.html" width="50%" height="480" scrolling="yes"></iframe>
</body>
</html>
EOF

# 3. Создаем СР4_Ветров.html
cat << 'EOF' > dist/Сайт2_Ветров/СР4_Ветров.html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>Самостоятельная работа №4 - Ветров</title>
    <style>
        body { font-family: sans-serif; background: #f8fafc; color: #334155; padding: 20px; }
        iframe { border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
    </style>
</head>
<body>
    <header><h1>Самостоятельная работа. Дополнение структуры фреймами</h1></header>
    <main>
        <iframe src="Тег_IFRAME_Ветров.html" width="100%" height="500" scrolling="auto"></iframe>
    </main>
    <footer><p>© Ветров Т. С., 2026</p></footer>
</body>
</html>
EOF

# 4. Текстовый файл с вопросами
cat << 'EOF' > dist/Сайт2_Ветров/Ответы_на_контрольные_вопросы_Ветров_Тимофей.txt
Контрольные вопросы (Практическая работа №4):

1. Какие теги используются для организации семантической структуры HTML-документа?
Ответ: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>.

2. Что такое фреймы и для чего они используются?
Ответ: Изолированные области веб-страницы, способные загружать внутрь себя независимые HTML-файлы.

3. Как в HTML-документ встроить фрейм?
Ответ: С помощью тега <iframe> с атрибутом src.

4. Какими атрибутами обладает тег <IFRAME>?
Ответ: src, width, height, scrolling, name, sandbox.
EOF

