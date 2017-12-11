
//buscar los post mediante jequery ajax
function cargarPost() {
    var root = 'http://jsonplaceholder.typicode.com';

    $.ajax({
        url: root + '/posts',
        method: 'GET'
    }).then(function (data) {

        var localStore = window.localStorage;
        var postFavorito = {};
        var dbPostFavorito = localStorage.getItem('PostFavorito');
        if (dbPostFavorito != null) {
            postFavorito = JSON.parse(dbPostFavorito);
        }



        //recorrer el areglo de los post
        $.each(data, function (i, p) {
            var localStorage = window.localStorage;
            var postFavorito = {};

            var dbPostFavorito = localStorage.getItem('postFavorito');

            if (dbPostFavorito != null) {
                postFavorito = JSON.parse(dbPostFavorito);



            }
            var existe = p.id in postFavorito;
            // console.log(p.id);
            var post =
                '<div class="row">' +
                '      <div class="col-md-10">' +
                            '<a id="redireccion" href="post_page.html?postid='+p.id+'">'+  
                '            <h3>' + p.title + '</h3>' +
                            '</a>'+
                '           </div>' +
                '      <div class="col-md-2">' +
                '           <button class="post_boton btn btn-primary glyphicon ' + (existe ? 'glyphicon-star' : 'glyphicon-star-empty') + '" data-post-id="' + p.id + '"></button>' +
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
            var postId = $(this).data('post-id');
            var existe = agregarPostFavorito(postId);

            $(this).removeClass(existe ? 'glyphicon-star-empty' : 'glyphicon-star');
            $(this).addClass(existe ? 'glyphicon-star' : 'glyphicon-star-empty');

            // if (existe){
            //     $(this).removeClass('glyphicon-star-empty');
            //     $(this).addClass('glyphicon-star');
            // }
            // else{
            //     $(this).addClass('glyphicon-star-empty')
            //     $(this).removeClass('glyphicon-star');
            // }
        });
    });

};


function agregarPostFavorito(postId) {
    var localStorage = window.localStorage;
    var postFavorito = {};

    var dbPostFavorito = localStorage.getItem('postFavorito');

    if (dbPostFavorito != null) {
        postFavorito = JSON.parse(dbPostFavorito);


        var existe = false;
        if (postId in postFavorito) {
            delete postFavorito[postId];
        }
        else {
            existe = true;
            postFavorito[postId] = true
        }


    }
    localStorage.setItem('postFavorito', JSON.stringify(postFavorito));
    return existe;
};

$(document).ready(function () {
    cargarPost();
});