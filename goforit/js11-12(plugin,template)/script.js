/**
 * Created by Roman on 02.02.2017.
 */

$(function() {

    var html = $('#test').html();
    var articles = [
        {
            title: 'Articles 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda consequuntur est ipsum iste, itaque laboriosam, molestiae necessitatibus nostrum placeat quas recusandae similique? e iusto neque non officiis perferendis praesentium quidem veniam vero.'
        },
        {
            title: 'Articles 1',
            content: 'Ab accusamus facere harum iure natus necessitatibus, nulla odit tempore? Commodi est excepturi impedit quas qui! Aut ipsam iure laudantium nobis similique. Consectetur deserunt distinctio dolor est eveniet facere, fugiat hic inventore ipsum, iste iure iusto neque non officiis perferendis praesentium quidem veniam vero.'
        },
        {
            title: 'Articles 1',
            content: 'Commodi est excepturi impedit quas qui! Aut ipsam iure laudantium nobis similique. Consectetur deserunt distinctio dolor est eveniet facere, fugiat hic inventore ipsum, iste iure iusto neque non officiis perferendis praesentium quidem veniam vero.'
        }
    ];

    var content = tmpl(html, {
        data: articles
    });


    $('body').append(content);

});