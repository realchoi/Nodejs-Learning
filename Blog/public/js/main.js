$(function () {
    $('.delete-article').on('click', function (e) {
        var $target = $(e.target);
        var id = $target.attr('article-id');
        $.ajax({
            type: 'DELETE',
            url: '/articles/' + id,
            success: function () {
                // alert('Delete successfully.');
                window.location.href = '/';
            },
            error: function (err) {
                console.log(err);
            }
        });

    });
});