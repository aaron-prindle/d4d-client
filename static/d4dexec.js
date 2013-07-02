$(function() {
    $('#button').click(function(){
        d4d_instance = d4d("c4");
        d4d_instance.how_true_is('person','CapableOf','teach', alert)
    });

    $('#terminal').terminal(function(command, term) {
        eval(command)
    });
});
