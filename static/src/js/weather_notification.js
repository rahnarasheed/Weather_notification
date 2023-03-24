odoo.define('weather_notification.cloud', function (require) {
    var core = require('web.core');
    var QWeb = core.qweb;
    var SystrayMenu = require('web.SystrayMenu');
    var Widget = require('web.Widget');
    var ActionMenu = Widget.extend({
         template: 'systray_cloud.icon',
         events: {
             'click .my_icon': 'onclick_icon',
         },
        onclick_icon:function(){
        fa_icon=this.$el.find('#fa-icon')
        test_div=this.$el.find('.test_div')
        console.log(test_div,"kkkk")
            if(!test_div.length){
                fetch("https://api.openweathermap.org/data/2.5/weather?q=Calicut&appid=d7c5d7f8688ebc42ff7402b0147907c0",{
                            "method":"GET",
                            })
                            .then(response=>{
                                return response.json();
                            })
                            .then(value=>{
                                var datetime=new Date()
                                var time=datetime.toLocaleString();
                                var date=datetime.toLocaleDateString();
                                var img=value.weather[0].icon
                                var icon="https://api.openweathermap.org/img/w/"+img+".png"
                                var description=value.weather[0].description
                                var temp=Math.floor(value.main.temp-273.15) +"°C"
                                var cloud=value.weather[0].main
                                var city=value.name
                                fa_icon.append(QWeb.render('weather_notification.dropdown',{
                                    'date':date,
                                    'time':time,
                                    'icon':icon,
                                    'temp':temp,
                                    'cloud':cloud,
                                    'city':city,
                                    'description':description
                                }));
                            })
                }
            else{
               fa_icon.empty();
                }}
                })
   SystrayMenu.Items.push(ActionMenu);
   return ActionMenu;
});