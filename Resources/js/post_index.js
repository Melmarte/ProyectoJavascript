
//buscar los post mediante jequery ajax
function cargarPost() {
    var root = 'http://jsonplaceholder.typicode.com';

    $.ajax({
        url: root + '/posts',
        method: 'GET'
    }).then(function (data) {

        //recorrer el areglo de los post
        $.each(data, function (i, p) {

            var post =
                '<div class="row">' +
                '      <div class="col-md-10">' +
                '               <h3>' + p.title + '</h3>' +
                '           </div>' +
                '      <div class="col-md-2">' +
                '           <button class="post_boton btn btn-primary glyphicon glyphicon-star-empty" data-post-id="' + p.id + '"></button>' +
                '       </div>' +
                '     </div>' +
                '  </div>' +

                '<div class="row">' +
                '<div class="col-md-12">' +
                '<a class="publicador">' +
                '<span class="glyphicon glyphicon-user" </span> Melvin Marte' +
                '<span class="glyphicon glyphicon-envelope" </span> melmarte@hotmail</a>' +
                '</div>' +
                '</div>' +

                '<div class="row">' +
                '<div class="col md 12">' +
                '<div>' +
                '<p>' +
                p.body +
                '</p>' +
                '</div>' +
                '</div>' +
                '</div>';

            $('#post').append(post);

        });
        $(".post_boton").click(function () {
            alert("hola " + $(this).data('post-id'));
        });
    });

};
function agregarPostFavorito (postId){
    var localStore = window.localStorage;

    var dbPostFavorito = localStorage.getItem('PostFavorito')
    if (postFavorito !=null){
        postFavorito = JSON.parse(dbPostFavorito);

        var existe = false;
        $.each(postFavorito, function(i,p) {
            if 
        }
    }
}

$(document).ready(function () {
    cargarPost();

});