/**
 * @jest-environment jsdom
 */

const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('./index.html', 'utf-8');
let dom;
let document;
let window;

function initDOM() {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    document = dom.window.document;
    window = dom.window;
    
    const scriptContent = fs.readFileSync('./script.js', 'utf-8');
    const script = new window.Function(scriptContent);
    script();
}

describe('Тесты для скрипта управления параграфами', () => {
    beforeEach(() => {
        initDOM();
    });

    test('Кнопка должна быть скрыта при загрузке страницы', () => { });

    test('Кнопка должна появляться при вводе текста', () => { });

    test('Кнопка должна скрываться при очистке поля ввода', () => { });

    test('При клике на кнопку должен добавляться новый параграф', () => { });

    test('Поле ввода должно очищаться после добавления параграфа', () => { });

    test('Кнопка должна скрываться после добавления параграфа', () => { });

    test('Добавление параграфа по нажатию Enter', () => { });

    test('Не должен добавляться параграф с пустым текстом', () => { });

    test('Не должно быть больше 5 параграфов', () => { });

    test('Должны удаляться самые старые параграфы', () => { });

    test('Фокус должен оставаться на поле ввода после добавления', () => { });

    test('Должны обрезаться пробелы в начале и конце', () => { });

    test('Корректная работа при множественном добавлении', () => { });

    test('Новые параграфы должны иметь правильную структуру', () => { });

    test('Полный сценарий работы', () => { });
});