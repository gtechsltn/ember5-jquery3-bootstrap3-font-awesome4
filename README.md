# Ember 5.4 Starter Kit
+ Node.js v18.19.0 (LTS)
+ NPM (Node Package Manager) v10.2.3
+ NVM (Node Version Manager) v1.1.12
+ Ember v5.4.0 (LTS)
+ Bower
  + npm install -g bower
  + npm install --save-dev ember-cli-sass
  + npm update caniuse-lite

# Tech Stack
+ Ember v5.4
+ HTML, CSS, JavaScript
+ SASS
+ jQuery v3.7.1
+ Bootstrap v3.4.1
+ Font Awesome v4.7.0
+ Bootstrap 3 Date/Time Picker v4.17.49
+ Moment v2.29.4
+ Moment Timezone v0.5.27
+ [Ember Power Calendar](https://ember-power-calendar.com/)
+ Ember Power Calendar Moment
+ [Alpaca v1.5.27](http://www.alpacajs.org/)

# How do I run?
```
git clone https://github.com/gtechsltn/ember5-jquery3-bootstrap3-font-awesome4.git
cd src
bower install
ember serve
```

# How do I deploy?
```
### Run ember build --environment=production
ember build -p

### Copy from dist to C:\inetpub\wwwroot\oidc
xcopy "D:\Ember54\src\dist" "C:\inetpub\wwwroot\oidc" /s /h /i /c /k /e /r /y

### Deploy to the localhost
http://localhost/oidc/
```

## Guide
+ [deploying](https://cli.emberjs.com/release/basic-use/deploying/)
+ [Deploying to Multiple Server Environments in Ember](https://dev.to/mattbeiswenger/deploying-to-multiple-server-environments-in-ember-4poc)

# Packages / Libraries
+ https://www.npmjs.com/package/alpaca/
+ https://www.npmjs.com/package/bootstrap/
+ https://www.npmjs.com/package/ember-cli/
+ https://www.npmjs.com/package/ember-data
+ https://www.npmjs.com/package/ember-source
+ https://www.npmjs.com/package/eonasdan-bootstrap-datetimepicker/
+ https://www.npmjs.com/package/jquery/
+ https://www.npmjs.com/package/moment/
+ https://www.npmjs.com/package/moment-timezone/

# References
+ https://github.com/gtechsltn/ember-sass-jquery3-bootstrap3-font-awesome4/
+ https://github.com/gtechsltn/ember5-jquery3-bootstrap3-font-awesome4/
