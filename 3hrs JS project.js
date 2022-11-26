

            function savetoLocalStorage(event){
                event.preventDefault();
                const Amount=event.target.Amount.value;
                const Description=event.target.Description.value
                const category=event.target.category.value
                
                const obj={
                Amount,
                Description,
                category
                }
                axios.post("https://crudcrud.com/api/c831d84800664e4daaeb1a6606051b6e/appontmentbooking", obj)
                .then((response)=>{
                    console.log(response)
                })
                .catch((err)=>{
                    console.log(err)
                })
                // localStorage.setItem(obj.email,JSON.stringify(obj))
                ShowNewUserOnScreen(obj)
                }

                window.addEventListener("DOMContentLoaded",()=>{
                    axios.get("https://crudcrud.com/api/c831d84800664e4daaeb1a6606051b6e/appontmentbooking")
                    .then((response)=>{
                        console.log(response)
                        for(var i=0;i<response.data.length;i++){
                            ShowNewUserOnScreen(response.data[i])
                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                })
            function ShowNewUserOnScreen(user) {
                const parentNode = document.getElementById("ListOfUsers");
                console.log(user);
                const childHTML = `<li id=${user._id}>Amount:${user.Amount}-Description:${user.Description}-category:${user.category}<button onclick=deleteUser('${user._id}')>Delete User</button><button onclick=EditUserDetails('${user.Amount}','${user.Description}','${user.category}','${user._id}') class="edt"> Edit User </button></li>`;
                parentNode.innerHTML = parentNode.innerHTML + childHTML;
                }


                function deleteUser(userId){
                axios.delete(`https://crudcrud.com/api/c831d84800664e4daaeb1a6606051b6e/appontmentbooking/${userId}`)
                .then((response)=>{
                    removeUserFromScreen(userId)
                })
                .catch((err)=>{
                    console.log(err)
                })
            }

                // function EditUserDetails() {
                // // axios.get(`https://crudcrud.com/api/c831d84800664e4daaeb1a6606051b6e/appontmentbooking/${user._id}`)
                // // console.log("inside EditUserDetails", userId);
                // // deleteUser(userId);
                // // console.log(Amount, Description, category, userId);
                
                // }

                // itemlist.addEventListener("click", editfun);

                    function editfun(e) {
                    if (e.target.classList.contains("edt")) {
                        var li = e.target.parentElement;
                        //  console.log(li)
                        let amt = li.childNodes[1].textContent; //targeting index of item//
                        let dis = li.childNodes[2].textContent;
                        let cat = li.childNodes[4].textContent;
                        // console.log(amt,dis,cat)
                        let v1 = document.getElementById("inp1");
                        let v2 = document.getElementById("inp2");
                        let v3 = document.getElementById("inp3");
                        v1.value = amt;
                        v2.value = dis;
                        v3.value = cat;
                        datadelte(dis);
                        itemlist.removeChild(li);
                    }
                    }
                
                function removeUserFromScreen(userId){
                        const parentNode=document.getElementById("ListOfUsers")
                        const ChildNodetoBeDeleted=document.getElementById(userId)
                        parentNode.removeChild(ChildNodetoBeDeleted)
                        
                }
