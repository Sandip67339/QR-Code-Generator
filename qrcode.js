let imgbox= document.getElementById("imgbox");
let qrImage= document.getElementById("qrImage");
let qrtext= document.getElementById("qrtext");

function generateqr()
{
qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
imgbox.classList.add("show-img");
}