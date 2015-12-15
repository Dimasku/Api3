$(document).on("ready", function () { GetAll(); })

function GetAll() {
    var item = "";
    $('#tbList tbody').html('');
    $.getJSON('/api/person', function (data) {
        $.each(data, function (key, value) {
            item += " " + value.Name + "" + value.LastName + "" + value.Mail + "";
        });
        $('#tbList tbody').append(item);
    });

};