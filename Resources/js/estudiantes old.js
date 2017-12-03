			
var Estudiante = function(){
	var self= this;
	self.id= this;
	self.nombre= this;
	self.identificacion= this;
	self.telefono= this;
	self.email= this;
	self.matricula=this;
}

function recorrer () {
	var id=document.getElementById('id').value;
	var nombre=document.getElementById('nombre').value;
	var identificacion=document.getElementById('identificacion').value;
	var telefono=document.getElementById('telefono').value;
	var email=document.getElementById('email').value;
	var matricula=document.getElementById('matricula').value;

	var id=document.getElementById('id').value;
	var nombre=document.getElementById('nombre').value;
	var identificacion=document.getElementById('identificacion').value;
	var telefono=document.getElementById('telefono').value;
	var email=document.getElementById('email').value;
	var matricula=document.getElementById('matricula').value;

	console.log(id);

	var est1=new Estudiante();
	est1.id =id;
	est1.nombre=nombre;
	est1.matricula=matricula;
	est1.identificacion=identificacion;
	est1.telefono=telefono;
	est1.email=email;	
	addRow(est1);
}

function addRow(est1) {

	var table =document.getElementById("Estudiantes");
	var tr = document.createElement("tr");
	var tdId = document.createElement("td");
	var tdNombre = document.createElement("td");
	var tdmatricula = document.createElement("td");
	var tdidentificacion = document.createElement("td");
	var tdtelefono = document.createElement("td");
	var tdEmail = document.createElement("td");

	var txtId = document.createTextNode(est1.id);
	var txtnombre = document.createTextNode(est1.nombre);
	var txtmatricula = document.createTextNode(est1.matricula);
	var txtidentificacion = document.createTextNode(est1.identificacion);
	var txttelefono = document.createTextNode(est1.telefono);
	var txtemail = document.createTextNode(est1.email);

	tdId.appendChild(txtId);
	tr.appendChild(tdId);
	tdNombre.appendChild(txtnombre);
	tr.appendChild(tdNombre);
	tdmatricula.appendChild(txtmatricula);
	tr.appendChild(tdmatricula);
	tdidentificacion.appendChild(txtidentificacion);
	tr.appendChild(tdidentificacion);
	tdtelefono.appendChild(txttelefono);
	tr.appendChild(tdtelefono);
	tdEmail.appendChild(txtemail);
	tr.appendChild(tdEmail);


	table.appendChild (tr);

};