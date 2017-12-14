function cargarDatos() {
    var root = 'http://jsonplaceholder.typicode.com';

    var urlParams = new URLSearchParams(window.location.search);
    var userId = urlParams.get('userid');
    var num = 0;

    $.ajax({
        url: root + '/users/' + userId,
        method: 'GET'
    }).then(function (data) {
        console.log(data);

        $.ajax({
            url: root + '/posts/?userId=' + userId,
            method: 'GET'
        }).then(function (data) {
            $.each(data, function (i, usuario) {
                num++;
            });
            var postsCount = '<h4>Cantidad de posts : ' + num + '</h4>';
            $("#posts").append(postsCount);
        });

        var datos =
            '  <tr>' +
            '<th>' +
            ' <h5 id="iduser">ID:  ' + data.id + '</h5>' +
            '</th>' +
            '</tr>' +
            '<tr>' +
            ' <td>' +
            '  <h5 id="name">Nombre: ' + data.name + '</h5>' +
            '</td>' +

            '</tr>' +
            '<tr>' +
            '<td>' +
            '  <h5 id="username">Usuario:' + data.username + '</h5>' +
            '</td>' +

            '</tr>' +
            '<tr>' +
            '<td>' +
            ' <h5 id="address">Ciudad:   ' + data.address.city + '</h5>' +
            '</td>' +

            '</tr>' +
            '<tr>' +
            '<td>' +
            '<h5 id="street">Calle: ' + data.address.street + '</h5>' +
            '</td>' +

            '</tr>' +
            '<tr>' +
            '<td>' +
            '<h5 id="phone">Phone: ' + data.phone + '</h5>' +
            '</td>' +

            '</tr>' +
            '<tr>' +
            '<td>' +
            '<h5 id="website">Website: ' + data.website + '</h5>' +
            '</td>' +
            '<tr>' +

            '<td>' +
            '<h5 id="email">email: ' + data.email + '</h5>' +
            '</td>' +
            '</tr>';

        $('#tabla').append(datos);
    });
};


$(document).ready(function () {
    cargarDatos();
});