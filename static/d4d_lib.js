function d4d (instance) {
    this.instance = instance;
};
 
d4d.prototype.how_true_is = function(concept1_or_any_format_assertion, 
                                     relation1,
                                    concept2, callback) {
    var message = {
        'concept1_or_any_format_assertion': concept1_or_any_format_assertion,
        'relation': relation1, 
        'concept2': concept2
    };
    //can refactor below code
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        crossDomain: true,
        data: JSON.stringify(message),
        dataType: 'json',
        url: '18.233.0.124:5000' + '/'+this.instance+'/how_true_is',
        success: function (data) {
            callback(data);
        }
    });            
};
