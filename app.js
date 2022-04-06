var globalStore =[]
var id = ''
var n = ''
var e = ''
var p = ''
var userExist = false;
var id = '';
var sp = ''
var se = ''
var userDet

var add = []

let data=()=>{
    n = document.getElementById('name').value
    e = document.getElementById('email').value
    p = document.getElementById('password').value
}
let sData=()=>{
    se = document.getElementById('sEmail').value
    sp = document.getElementById('sPassword').value
}

let fetchData=async()=>{
    let store =await axios.get('https://6242a935d126926d0c54acc5.mockapi.io/api/adress/usersData/1')
    console.log(store)
    globalStore = [...store.data.users]
    // console.log(globalStore)
  
}
let userDetails = async()=>{
    let d = await axios.get(`https://6242a935d126926d0c54acc5.mockapi.io/api/adress/users/${id}`)
    userDet = d.data
}
let userReg = async()=>{
    let user =await axios.post('https://6242a935d126926d0c54acc5.mockapi.io/api/adress/users',{name:`${n}`,email:`${e}`,password:`${p}`})
     id = user.data.id
}
let postData = async()=>{
    let store =await axios.put('https://6242a935d126926d0c54acc5.mockapi.io/api/adress/usersData/1',{users:globalStore})
           console.log(store)
}


let signUp=async()=>{
    
    try{
       await fetchData()
       globalStore.map(value=>{
           if(value.email == e){
               alert('user exist');
               userExist =  true;
           }
       })
        if(!userExist){
        await userReg()

       globalStore.push({email:`${e}`,id:`${id}`})
       await postData()
       await fetchData()
       console.log(globalStore);
    }
    }catch(err){
        alert(err)
    }
}

let signIn=async()=>{
    await fetchData()
    console.log(se)
    globalStore.map(value=>{
        if(value.email == se){
            id = value.id
        }
    })
    console.log(id)
    await userDetails()
    if(userDet.password == sp && userDet.email == se){
         localStorage.setItem('id',id);
        window.location.href = `user.html`
    }
    else if(userDet.email == se){
        document.getElementById('error').innerText = "Please Enter a correct Password!!."
        document.getElementById('sPassword').value = ""
        setTimeout(()=>{
            document.getElementById('error').innerText = ""   
        },2000)
    }
    else{
        document.getElementById('error').innerText = "Invalid User!!."
        document.getElementById('sEmail').value = ""
        document.getElementById('sPassword').value = ""
        setTimeout(()=>{
            document.getElementById('error').innerText = ""   
        },2000)
    }
}

let checkUser = ()=>{
    let id  = localStorage.getItem('id')
    if(id!=null){
        window.location.href = 'user.html';
    }   
}
checkUser()
let cross = ()=>{
    window.location.href = "index.html"
}
let join = ()=>{
    window.location.href = "signup.html"
}
let contactUs = ()=>{
    window.location.href = "contactus.html"
}

 
