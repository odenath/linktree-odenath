// var botao1 = document.getElementById("salvarContato");

// function clicar(){
//     alert("Clicou!");
// }

// botao1.addEventListener("click", clicar);
var botao1 = document.getElementById("salvarContato");
function clicar(){
    var vCardData = 'BEGIN:VCARD\n'
                   + 'VERSION:3.0\n'
                   + 'N:Penha;Luiz Antonio;Odenath;Sr.;\n'
                   + 'FN:Luiz Antonio Odenath Penha\n'
                   + 'ADR;TYPE=WORK:;;Rod. Celso Garcia Cid, km 375;Londrina;PR;;\n'
                   + 'TEL;TYPE=WORK,VOICE:(43) 99944-9300\n'
                   + 'END:VCARD';

    var a = document.createElement('a');
    a.href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vCardData);
    a.download = 'contact.vcf';
    a.click();
}
botao1.addEventListener("click", clicar);

var botao2 = document.getElementById("ligar");
function ligar1(){
    window.location.href = "tel:+554343999449300";
}
botao2.addEventListener("click", ligar1);

var botao3 = document.getElementById("enviarEmail");
function enviarEmail(){
    window.location.href = "mailto:odenath@gmail.com";
}
botao3.addEventListener("click", enviarEmail);

var botao4 = document.getElementById("linkedin");
// function linkedin(){
//     window.location.href = "https://br.linkedin.com/in/luiz-antonio-odenath-penha-24167539";
// }
function linkedin(){
    window.open("https://br.linkedin.com/in/luiz-antonio-odenath-penha-24167539", "_blank");
}
botao4.addEventListener("click", linkedin);

var botao5 = document.getElementById("mapa");
function mapa(){
    window.open("https://www.google.com.br/maps/place/IDR-Paran%C3%A1/@-23.3542594,-51.1644831,17z/data=!3m1!4b1!4m6!3m5!1s0x94eb43274cebbc15:0x99905119b56270ee!8m2!3d-23.3542594!4d-51.1619082!16s%2Fg%2F11b6dgjzcy?entry=ttu", "_blank");
}
botao5.addEventListener("click", mapa);

var botao6 = document.getElementById("siteIDR");
function siteIDR(){
    window.open("https://www.idrparana.pr.gov.br/", "_blank");
}
botao6.addEventListener("click", siteIDR);

var botao7 = document.getElementById("instagram");

function instagram(){
    window.open("https://www.instagram.com/idrparana/", "_blank");
}
botao7.addEventListener("click", instagram);

var botao8 = document.getElementById("facebook");
function facebook(){
    window.open("https://www.facebook.com/idrparana/", "_blank");
}
botao8.addEventListener("click", facebook);

var botao9 = document.getElementById("x");
function twitter(){
    window.open("https://twitter.com/", "_blank");
}
botao9.addEventListener("click", twitter);

var botao10 = document.getElementById("youtube");
function youtube(){
    window.open("https://www.youtube.com/@IDRParana", "_blank");
}
botao10.addEventListener("click", youtube);

var botao11 = document.getElementById("whatsapp");
function whatsapp(){
    window.open("https://web.whatsapp.com/", "_blank");
}
botao11.addEventListener("click", whatsapp);