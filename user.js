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
        card.innerHTML = "";
            mydata.map((add)=>{
                card.innerHTML += `
                <div class="col-sm-3 col-6">
                <div class="card bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Name: ${add.name}</h5>
                  <p class="card-text">Mobile: ${add.mobile}</p>
                  <p class="card-text">City: ${add.city}</p>
                  
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

let addContact=async()=>{
    let userId = localStorage.getItem('id');
      mydata = []
        let addressData = await axios.get(`https://6242a935d126926d0c54acc5.mockapi.io/api/adress/users/${userId}`)
        // console.log(addressData.data[0].Addresses)
        console.log(addressData.data.Addresses)
        mydata = [...addressData.data.Addresses]
    let name = document.getElementById('name').value
    let city = document.getElementById('city').value
    let mobile  = document.getElementById('mobile').value
    let obj = {
        name : name,
        city: city,
        mobile: mobile
    }
    let update = await axios.put(`https://6242a935d126926d0c54acc5.mockapi.io/api/adress/users/${userId}`,{Addresses:[...mydata,obj]})
    renderUser()
    document.getElementById('name').value = ""
    document.getElementById('city').value = ""
    document.getElementById('mobile').value = ""
    
}