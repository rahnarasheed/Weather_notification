{
    'name': 'Weather Notification',
    'version': "16.0.1.0.0",
    'sequence': -5,
    'installable': True,
    'application': True,
    'depends': ['base', 'sale', 'web'],
    'assets': {
        'web.assets_backend': [
            'weather_notification/static/src/xml/cloud_systray.xml',
            'weather_notification/static/src/xml/dropdown.xml',
            'weather_notification/static/src/js/weather_notification.js',

        ],
    }
}
