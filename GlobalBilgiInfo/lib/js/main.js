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