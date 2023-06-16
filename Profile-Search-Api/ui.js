class UI {
    constructor() {
        this.profilContainer = document.querySelector('#profileContainer'),
            this.alert = document.querySelector('#alert')
    }
    showProfile(profile) {
        this.profilContainer.innerHTML = `
        <div class="card card-body">
  <div class="row">
    <div class="col-md-5">
      <a href="https://loremflickr.com/450/250" class="img-thumbnail">
        <img src="https://loremflickr.com/450/250" alt="Random Image"/>
      </a>
    </div>
    <div class="col-md-7">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h4>Contact</h4>
            <ul class="list-group">
              <li class="list-group-item">
                Name: ${profile.name}
              </li>
              <li class="list-group-item">
                User Name: ${profile.username}
              </li>
              <li class="list-group-item">
                E-Mail: ${profile.email}
              </li>
              <li class="list-group-item">
                Adress:
                ${profile.address.street}
                ${profile.address.suite}
                ${profile.address.city}
                ${profile.address.zipcode}
              </li>
              <li class="list-group-item">
                Phone: ${profile.phone}
              </li>
              <li class="list-group-item">
                Website: ${profile.website}
              </li>
              <li class="list-group-item">
                Company: ${profile.company.name}
              </li>
            </ul>
            <h4>Todo List</h4>
            <ul id="todo" class="list-group"></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    `
    }
    showAlert(text){
        this.alert.innerHTML=`${text} is not found.`
    }
    clear(){
        this.profilContainer.innerHTML="";
        this.alert.innerHTML=""
    }
    showTodos(todos){
        let html=""

        todos.forEach(item => {
            if(item.completed){
                html+=`
                <li class="list-group-item bg-success">
                ${item.title}
                </li>
                `;
            }else{
                html+=`
                <li class="list-group-item bg-secondary">
                ${item.title}
                </li>
                `
            }
        });
        this.profilContainer.querySelector('#todo').innerHTML=html;
    }
}