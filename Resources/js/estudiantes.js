var Estudiante = function () {
	var self = this;
	self.id = this;
	self.nombre = this;
	self.identificacion = this;
	self.telefono = this;
	self.email = this;
	self.matricula = this;
}

function addRow(est1) {
	var rowest1 = "<tr>"
    + "<td>" + est1.id + "</td>"
    + "<td>" + est1.email + "</td>"
    + "<td>" + est1.nombre + "</td>"
    + "<td>" + est1.telefono + "</td>"
    + "<td>" + est1.matricula + "</td>"
    + "<td>" + est1.identificacion + "</td>"
	+ " </tr>";
	
	$("table tbody").append(rowest1);
};

$(document).ready(function () {
	$("#Guardar").click(function () {
		// alert("Hola");


		var id = $("id").val();
		var nombre = $("#nombre").val();
		var matricula = $("matricula").val();
		var identificacion = $("identificacion").val();
		var telefono = $("telefono").val();
		var email = $("email").val();

		var est1 = new Estudiante();

		est1.id = id;
		est1.nombre = nombre;
		est1.matricula = matricula;
		est1.identificacion = identificacion;
		est1.telefono = telefono;
		est1.email = email;

		// alert(JSON.stringify(est1));


	});
});
