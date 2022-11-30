
  // Inicialize Firebase

   //Utilize o código 'getItem' para pegar um item dentro do localStorage
  user_name = ???.???("user_name");
  
  //Utilize o código 'innerHTML' para mudar o conteúdo HTML
  //Utilize a variável que guarda o nome do usuário
  document.getElementById("user_name").??? = "Bem-vindo(a) " + ???? + "!";
  
  function ????()
  {
    room_name = document.getElementById("room_name").value;
  //Coloque o nome da variável que guardará o nome da sala
    firebase.database().ref("/").child(????).update({
      purpose : "adicionar sala"
    });
  
      localStorage.setItem("room_name", room_name);
      //Código que muda de tela
      ??? = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {

    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.???("user_name");
  localStorage.???("room_name");
      ???? = "index.html";
  }
  
