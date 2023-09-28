async function getPosts()
{
    let res = await fetch('https://www.specposhiv.kiev.ua/api/posts');
    let posts = await res.json();

    posts.forEach((post) => {
      if(post.post_type == "Шорткати" && post.user_role == "Кур'єр")
      {
        document.querySelector('.accordion-shortcut-couriers').innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <div class="wrap-content d-flex justify-content-space-between" style="width: 100%;">
                        <div class="title-article-${post.id}"><b>${post.post_title}</b></div>
                        <div class="feature_icons"><i onclick="getValue(${post.id})" class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash" onclick="confirmDelete(${post.id})"></i></div>
                    </div>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body content-article-${post.id}"><strong>${post.post_body}</strong></div>
            </div>
        </div>
        `
      }
      else if(post.post_type == "Відповіді на запитання" && post.user_role == "Кур'єр")
      {
        document.querySelector('.accordion-answersquestions-couriers').innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <div class="wrap-content d-flex justify-content-space-between" style="width: 100%;">
                        <div class="title-article-${post.id}"><b>${post.post_title}</b></div>
                        <div class="feature_icons"><i onclick="getValue(${post.id})" class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash" onclick="confirmDelete(${post.id})"></i></div>
                    </div>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body content-article-${post.id}"><strong>${post.post_body}</strong></div>
            </div>
        </div>
        `
      }
      else if(post.post_type == "Корисні посилання" && post.user_role == "Кур'єр")
      {
        document.querySelector('.accordion-usefullinks-couriers').innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <div class="wrap-content d-flex justify-content-space-between" style="width: 100%;">
                        <div class="title-article-${post.id}"><b>${post.post_title}</b></div>
                        <div class="feature_icons"><i onclick="getValue(${post.id})" class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash" onclick="confirmDelete(${post.id})"></i></div>
                    </div>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body content-article-${post.id}"><strong>${post.post_body}</strong></div>
            </div>
        </div>
        `
      }
      else if(post.post_type == "Загальна інформація" && post.user_role == "Кур'єр")
      {
        document.querySelector('.accordion-generalinformation-couriers').innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <div class="wrap-content d-flex justify-content-space-between" style="width: 100%;">
                        <div class="title-article-${post.id}"><b>${post.post_title}</b></div>
                        <div class="feature_icons"><i onclick="getValue(${post.id})" class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash" onclick="confirmDelete(${post.id})"></i></div>
                    </div>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body content-article-${post.id}"><strong>${post.post_body}</strong></div>
            </div>
        </div>
        `
      }
    })
}
getPosts();


function getValue(id)
{
    var class_title = ".title-article-" + id;
    var class_content = ".content-article-" + id;
    var string = class_title;
    var arr = string.split('-');
    var article_id = arr[2];

    var content_title = document.querySelector(class_title);
    var content_body = document.querySelector(class_content);

    if(content_title && content_body)
    {
        var input_value = document.getElementById('title-edit');
        var body_value = document.getElementById('content-edit');
        var id = document.getElementById('id_edit');
        input_value.value = content_title.textContent;
        body_value.value = content_body.textContent;
        id.value = article_id;
        openForm();
    }
}

function sendPatchRequest(url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open('PATCH', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Обработка успешного ответа
                console.log('Успешный PATCH-запрос:', JSON.parse(xhr.responseText));
            } else {
                // Обработка ошибок
                console.error('Ошибка HTTP:', xhr.status, xhr.statusText);
            }
        }
    };
    xhr.send(JSON.stringify(data));
}

function editPost() {

    var article_id = document.getElementById("id_edit");
    var selectaRole = document.getElementById("role-edit");
    var typeActicle = document.getElementById("type-edit");
    var titleActicle = document.getElementById("title-edit");
    var contentActicle = document.getElementById("content-edit");

    // Извлекаем значения из полей формы
    var id = article_id.value;
    var role = selectaRole.value;
    var type = typeActicle.value;
    var title = titleActicle.value;
    var content = contentActicle.value;

    const url = 'https://www.specposhiv.kiev.ua/api/posts';
    const data = {'id' : id, 'user_role' : role, 'post_type' : type, 'post_title' : title, 'post_body' : content};
    sendPatchRequest(url, data);
}

function openForm() 
{
    var form = document.querySelector('.popup-form-edit');
    form.style.display = 'block';
}
function closeForm() 
{
    var form = document.querySelector('.popup-form-edit');
    form.style.display = 'none';
}