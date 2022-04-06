let renderUser=async()=>{
    let userId = localStorage.getItem('id');
    if(userId==null){
        window.location.href = '/signin.html'
    }else{
        mydata = []
        let addressData = await axios.get(`https://6242a935d126926d0c54acc5.mockapi.io/api/adress/users/${userId}`)
        // console.log(addressData.data[0].Addresses)
        console.log(addressData.data.Addresses)
        mydata = [...addressData.data.Addresses]
        let card = document.getElementById('card-add');
            mydata.map((add)=>{
                card.innerHTML += `
                <div class="col-12 col-sm-4 mx-auto">
                <div class="card bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${add.name}</h5>
                  <p class="card-text">${add.city}</p>
                  
                </div>
              </div>
              </div>`
            })
    }
}
renderUser();
let fetchAdd = async()=>{
   
  }

let Logout=()=>{
    localStorage.removeItem('id');
    renderUser()
}  