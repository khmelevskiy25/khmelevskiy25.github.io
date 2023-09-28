$('.menu-btn').on('click', function(e){
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
});

var $btnTop = $('.btn-top')
$(window).on("scroll", function(){
if ($(window).scrollTop() >= 900){
  $btnTop.fadeIn();
}else {
  $btnTop.fadeOut();
}
});
$btnTop.on("click", function(){
$("html,body").animate({scrollTop:0}, 1000);
});
const baseURL = "https://www.specposhiv.kiev.ua/api/posts";
document.getElementById("id_edit").readOnly = true;

function submitForm() {
  // Получаем доступ к форме и её элементам по их id
  var selectaRole = document.getElementById("role");
  var typeActicle = document.getElementById("type");
  var titleActicle = document.getElementById("title");
  var contentActicle = document.getElementById("content");

  // Извлекаем значения из полей формы
  var role = selectaRole.value;
  var type = typeActicle.value;
  var title = titleActicle.value;
  var content = contentActicle.value;

  // Вызываем вашу функцию и передаем значения в неё
  //processFormData(role, type, title, content);
  postRequest(role, type, title, content);
}

function processFormData(role, type,title, content) {
  // Ваш код для обработки данных из формы
  console.log("user_role:", role);
  console.log("post_type:", type);
  console.log("post_title:", title);
  console.log("post_body:", content);
  // Здесь вы можете выполнить любую логику, связанную с данными из формы
}

async function postRequest(role, type, title, content)
{
  // Создайте объект FormData и добавьте данные в него
  var formData = new FormData();
  formData.append('user_role', role);
  formData.append('post_type', type);
  formData.append('post_title', title);
  formData.append('post_body', content);

  // Добавьте файл, если это необходимо
  // formData.append('file', fileInput.files[0]);

  // Создайте объект для отправки запроса
  var xhr = new XMLHttpRequest();

  // Настройте запрос
  xhr.open('POST', baseURL, true);

  // Определите обработчик события для отслеживания состояния запроса
  xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
      // Запрос успешно выполнен, и получен ответ
      console.log(xhr.responseText);
  }
  };

  // Отправьте объект FormData в запросе
  xhr.send(formData);
}

function sendDeleteRequest(url) {
var xhr = new XMLHttpRequest();
xhr.open('DELETE', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            // Обработка успешного ответа
            console.log('Успешный DELETE-запрос:', JSON.parse(xhr.responseText));
        } else {
            // Обработка ошибок
            console.error('Ошибка HTTP:', xhr.status, xhr.statusText);
        }
    }
};

xhr.send();
}

function confirmDelete($id) {
// Всплывающее окно с подтверждением
var result = window.confirm("Ви впевнені, що хочете видалити пост?");

// Если пользователь нажал "ОК", продолжаем с удалением
if (result) {
    const url = baseURL + '/' + $id;
    sendDeleteRequest(url);
    alert("Пост видалено!"); // Замените эту строку на ваш код удаления
} else {
    // Пользователь нажал "Отмена", ничего не делаем
    alert("Видалення скасовано.");
}
}
document.addEventListener('DOMContentLoaded', function() {
function search() {
var keyword = document.getElementById('searchInput').value.toLowerCase();
var elementsToSearch = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, b, strong');
var searchResultsContainer = document.getElementById('searchResults');

// Очищаем результаты перед каждым новым поиском
searchResultsContainer.innerHTML = '';

// Set для отслеживания уникальных результатов
var uniqueResults = new Set();

elementsToSearch.forEach(function(element) {
    // Функция для проверки текста внутри элемента, включая вложенные элементы
    function checkText(node) {
        if (node.nodeType === 3) {
            // Текстовый узел
            return node.nodeValue.toLowerCase().includes(keyword);
        } else if (node.nodeType === 1) {
            // Элемент
            return Array.from(node.childNodes).some(checkText);
        }
        return false;
    }

    // Проверяем текст внутри элемента и его вложенных элементов
    if (checkText(element)) {
        // Формируем уникальный ключ для каждого результата
        var resultKey = element.tagName + ': ' + element.textContent;

        // Проверяем, был ли уже такой результат
        if (!uniqueResults.has(resultKey)) {
            var resultItem = document.createElement('div');
            resultItem.textContent = resultKey;

            // Добавляем отдельную строку (блок) для каждого результата
            searchResultsContainer.style.display = "block";
            searchResultsContainer.appendChild(resultItem);
            searchResultsContainer.appendChild(document.createElement('br'));

            // Добавляем результат в набор для отслеживания уникальности
            uniqueResults.add(resultKey);
        }
    }
});
}});

function openFormAdd() 
{
  var form = document.querySelector('.popup-form-add');
  form.style.display = 'block';
}
function closeFormAdd() 
{
  var form = document.querySelector('.popup-form-add');
  form.style.display = 'none';
}