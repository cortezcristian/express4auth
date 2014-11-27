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

### Feature list
- Login via social network without confirming the account let the user use the site only for 24hs, after that account will be locked until e-mail is confirmed.
- If user log-in with SN and already has the same e-mail registered we link the account.

### Use Cases

<table>
<thead>
    <tr>
        <th align="left"><strong>ID</strong></th>
        <th align="left">CU-01</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td align="left"><strong>Title</strong></td>
        <td align="left">Registration Submit</td>
    </tr>
    <tr>
        <td align="left"><strong>Description</strong></td>
        <td align="left">Unregistered visitor will submit the registration form</td>
    </tr>
    <tr>
        <td align="left"><strong>Actors</strong></td>
        <td align="left">Visitor</td>
    </tr>
    <tr>
        <td align="left"><strong>Pre-conditions</strong></td>
        <td align="left"><ol class="task-list"><li>Visitor should have an email</li></ol></td>
    </tr>
    <tr>
        <td align="left"><strong>Standard Flow</strong></td>
        <td align="left">
            <ol class="task-list">
                <li>Visitor goes to /register</li>
                <li>Fills email, password (twice), accepts terms and conditions, captch</li>
                <li>Hits register button</li>
            </ol>
        </td>
    </tr>
    <tr>
        <td align="left"><strong>Post-conditions</strong></td>
        <td align="left">
            <ol class="task-list">
                <li>The site shows a message for user to confirm the account</li>
                <li>An email is sent, with a confirmation link</li>
            </ol>
        </td>
    </tr>
    <tr>
        <td align="left"><strong>Alternative courses</strong></td>
        <td align="left">
            <ul class="task-list">
                <li>A</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td align="left"><strong>Exceptions</strong></td>
        <td align="left">
            <ul class="task-list">
                <li>E</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td align="left"><strong>Open Issues:</strong></td>
        <td align="left">None</td>
    </tr>
</tbody>
</table>

