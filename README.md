express4auth
============

Express 4.x Passport bcrypt example

![Auth Flow](https://raw.githubusercontent.com/cortezcristian/express4auth/master/pics/auth-flow.png)


### Nice-to-have

- reCaptcha [node-recaptcha](https://github.com/mirhampt/node-recaptcha)
- admin Panel, write json config
- Link Accounts
- count limit [Account Locking](http://devsmash.com/blog/implementing-max-login-attempts-with-mongoose)
- Mails node-mailer, send-grid
- Password recovery

### Use Cases

|**ID**|CU-01 |
|:----|:----|
|**Title**| Register |
|**Description**| As a visitor user will fill the login form |
|**Pre conditions**| <ol><li>Visitor should have an email</li></ol> |
|**Standard flow**| <ol><li>Visitor goes to /register</li><li>Fills email, password (twice), accepts terms and conditions, captch</li><li>Hits register button</li></ol> |
|**Post conditions**| <ol><li>The site shows a message for user to confirm the account</li><li>An email is sent, with a confirmation link</li></ol> |


