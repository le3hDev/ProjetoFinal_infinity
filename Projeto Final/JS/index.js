const funcionarios = [         //---- Login e Senha Funcionários
    {
        login: 'funcprata',
        pass: 'prata'
    },
    {
        login: 'funcdoug',
        pass: 'doug'
    },
    {
        login: 'funcpaulo',
        pass: 'paulo'
    }
]

const adms = [         //---- Login e Senha Administradores
    {
        login: 'adminleticia',
        pass: 'leticia'
    },
    {
        login: 'adminsayuri',
        pass: 'sayuri'
    },
    {
        login: 'adminjohn',
        pass: 'john'
    }
]


    

function logar() {                                              //------Função de Login Funcionarios
    var usuario = document.getElementById('user1').value;
    var senha = document.getElementById('pass1').value;
    
    
    
    for(let i in funcionarios){
        if (usuario == funcionarios[i].login && senha == funcionarios[i].pass) {
            event.preventDefault();
            location.href="gerente.html"; 
            alert('Acesso concedido');            
        } 
    }
}

function logarA() {                                           // ----------Função de Login Administradores
    var usuario = document.getElementById('user2').value;
    var senha = document.getElementById('pass2').value;
    
    
    
    for(let i in funcionarios){
        if (usuario == adms[i].login && senha == adms[i].pass) {
            event.preventDefault();
            location.href="adm.html"; 
            alert('Acesso concedido');
            
        }
        
    }
}


