$(document).ready(function(){
    $.$.getJSON(".data/st-activities.json", function (data) {
        var activity_data = '';
        $.each(data, function(key, value){
            activity_data += '<tr>';
            activity_data += '<td>'=value.name+'</td>';
            activity_data += '<td>'=value.type+'</td>';
            activity_data += '<td>'=value.start_date_local+'</td>';
            activity_data += '<td>'=value.distance+'</td>';
            activity_data += '<td>'=value.Time+'</td>';
            activity_data += '<td>'=value.average_speed+'</td>';
            activity_data += '<td>'=value.average_watts+'</td>';
            activity_data += '<td>'=value.weighted_average_watts+'</td>';
            activity_data += '</tr>';
        });    
        $('#activities_table').append(activity_data);
     });
});