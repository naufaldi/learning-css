var chart = '<svg viewBox="0 0 32 32"><circle class="circle" r="16" cx="16" cy="16" style="stroke-dasharray: 0 100" /><image src="https://res.cloudinary.com/dgnlx0nbt/image/upload/v1531107684/pie_graph.png" xlink:href=""></svg>';
$('.pie-container-chart').html(chart);
var chart =$('.pie-container-chart circle');

setTimeout(function(){
    chart.css('stroke-dasharray', 29 + '100');
    $('.pie-container-percent').css('opacity','1');
},500);

jQuery('button').mouseover(function(){
    num = $(this).attr('data-val');
    $('.pie-container-percent').text(num + '%').addClass('animated');
    setTimeout(function(){
        $('.pie-container-percent').removeClass('animated');
    },500);
    chart.css('stroke-dasharray', num + '100');
    $('button').not(this).removeClass('active');
    $(this).addClass('active');
});