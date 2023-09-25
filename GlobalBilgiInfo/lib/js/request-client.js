async function getPosts()
{
    let res = await fetch('https://www.specposhiv.kiev.ua/api/posts');
    let posts = await res.json();

    posts.forEach((post) => {
      if(post.post_type == "Шорткати" && post.user_role == "Клієнт")
      {
        document.querySelector('.accordion-shortcut').innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <b>${post.post_title}</b>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body"><strong>${post.post_body}</strong></div>
            </div>
        </div>
        `
      }
      else if(post.post_type == "Відповіді на запитання" && post.user_role == "Клієнт")
      {
        document.querySelector('.accordion-answersquestions').innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <b>${post.post_title}</b>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body"><strong>${post.post_body}</strong></div>
            </div>
        </div>
        `
      }
      else if(post.post_type == "Корисні посилання" && post.user_role == "Клієнт")
      {
        document.querySelector('.accordion-usefullinks').innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <b>${post.post_title}</b>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body"><strong>${post.post_body}</strong></div>
            </div>
        </div>
        `
      }
      else if(post.post_type == "Загальна інформація" && post.user_role == "Клієнт")
      {
        document.querySelector('.accordion-generalinformation').innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <b>${post.post_title}</b>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body"><strong>${post.post_body}</strong></div>
            </div>
        </div>
        `
      }
    })
}
getPosts();

