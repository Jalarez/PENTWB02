window.onload = function() {

				var img = document.getElementById('img1');
                
                document.getElementById('boton1').onclick = function () {
                    alert('hola mundo!');
                }

                document.getElementById('img1').onmouseover =function(){
                	img.width = 500;
  					img.height = 300;
                }

                document.getElementById('img1').onmouseout =function(){
                	img.width = 279;
  					img.height = 181;
                }

                document.getElementById('suma').onclick = function () {
                	var num1 = document.getElementById('num1').value;
                	var num2 = document.getElementById('num2').value;

                	var resultado = parseFloat(num1)+parseFloat(num2);

                	alert('El resultado es ' + resultado);

                }
            }