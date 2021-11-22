##Django - How to make a variable available to all templates?

####Step 1:

What you want is a context processor, and it's very easy to create one. Assuming you have an app named custom_app, follow the next steps:

####Step 1:
Add custom_app to INSTALLED_APPS in settings.py (you've done it already, right?);

Like this one below:
```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'UserAccounts.apps.UseraccountsConfig',
    'adminsettings.apps.AdminsettingsConfig',
    'ApplicationList.apps.ApplicationlistConfig',
    'LeadList.apps.LeadlistConfig',
    'ApplicationPayment.apps.ApplicationPaymentConfig',
    'custom_app.apps.CustomAppConfig',
    'storages',
    'CrmWhatsapp.apps.CrmwhatsappConfig',
]
```

####Step 2:
Create a context_processors.py into custom_app folder;

####Step 3:
Add the following code to that new file:

def org_profile_processor(request):
 org_profile = OrganizationProfile.objects.all()            
 return {'org_profile': org_profile}
 
####Step 4:
Add context_processors.py to TEMPLATE_CONTEXT_PROCESSORS in settings.py

To do this, look at the following code below:

```
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'custom_app.context_processors.org_profile_processor',
            ],
        },
    },
]
```
