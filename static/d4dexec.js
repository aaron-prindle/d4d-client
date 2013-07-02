$(function() {
    function callback(data) {
        alert(JSON.stringify(data));
    }
    $('#button').click(function(){
        d4d_instance = new d4d("c4");
        d4d_instance.how_true_is('person','CapableOf','teach', callback);
    });

    $('#terminal').terminal(function(command, term) {
        eval(command);
    });
});
