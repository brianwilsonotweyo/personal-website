import React, {useEffect} from 'react';
import Layout from '../components/shared/layout';
import { toastme, Toastme } from 'toastmejs';

import 'toastmejs/dist/css/toastme.css';
import styles from './toastmejs.module.scss';

const ToastmeComponent = () => {

    function simpleNotifications(param) {
        switch (param) {
          case 'default':
            toastme.default("This is a 'default' notification")
            break;
          case 'success':
            toastme.success("This is a 'success' notification")
            break;
          case 'warning':
            toastme.warning("This is a 'warning' notification")
            break;
          case 'error':
            toastme.error("This is a 'error' notification")
            break;
          case 'info':
            toastme.info("This is a 'info' notification")
            break;
          default:
            break;
        }
      }
      
      const lighNotificationsConfig = {
          positionY: "top", // top or bottom
          positionX: "center", // right left, center
          theme: "ligh", // default, ligh or  dark (leave empty for "default" theme)
          duplicates: true
      }
      
      const lighToast = new Toastme(lighNotificationsConfig);
      
      function lighNotifications(param) {
        switch (param) {
          case 'default':
            lighToast.default("This is a 'default' notification")
            break;
          case 'success':
            lighToast.success("This is a 'success' notification")
            break;
          case 'warning':
            lighToast.warning("This is a 'warning' notification")
            break;
          case 'error':
            lighToast.error("This is a 'error' notification")
            break;
          case 'info':
            lighToast.info("This is a 'info' notification")
            break;
          default:
            break;
        }
      }
      
      const darkNotificationsConfig = {
        positionY: "top", // top or bottom
        positionX: "right", // right left, center
        theme: "dark" // default, ligh or  dark (leave empty for "default" theme)
      }
      
      const darkToast = new Toastme(darkNotificationsConfig);
      
      function darkNotifications(param) {
        switch (param) {
          case 'default':
            darkToast.default("This is a 'default' notification")
            break;
          case 'success':
            darkToast.success("This is a 'success' notification")
            break;
          case 'warning':
            darkToast.warning("This is a 'warning' notification")
            break;
          case 'error':
            darkToast.error("This is a 'error' notification")
            break;
          case 'info':
            darkToast.info("This is a 'info' notification")
            break;
          default:
            break;
        }
      }
      
      /*Dialog Demos*/
      
      function defaultDialogs(param) {
        switch (param) {
          case 'titletext':
              toastme.yesNoDialog({
                title: "This is the title",
                text: "This is the text area",
                textConfirm: "Confirm button",
                textCancel: "Cancel button",
                showCancel: true
              })
            break;
          case 'title':
              toastme.yesNoDialog({
                title: "Just the title",
                textConfirm: "OK"
              })
            break;
          case 'text':
              toastme.yesNoDialog({
                title: "You can show text area only",
                textConfirm: "Right",
                textCancel: "Nah",
                showCancel: true
              })
            break;
          case 'buttons':
              toastme.yesNoDialog({
                textConfirm: "Confirm button",
                textCancel: "Cancel button",
                showCancel: true
              })
            break;
          case 'dark':
              toastme.yesNoDialog({
                title: "This is the dark theme",
                text: "Do you like it?",
                textConfirm: "Yes, I love it!",
                textCancel: "I'm scared :(",
                showCancel: true,
                dark: true
              }).then(function (value) {
                if (value) {
                  darkToast.success("You are so dark :O")
                }
              });
            break;
      
            case 'question':
                toastme.yesNoDialog({
                  text: "Will you share this with your friends?",
                  textConfirm: "I will share it!",
                  showCancel: true,
                  type: "question"
                })
              break;
            case 'success':
                toastme.yesNoDialog({
                  title: "You are the Winner!",
                  text: "Do you want to pick your price?",
                  textConfirm: "Yes, pick price.",
                  textCancel: "Maybe later",
                  showCancel: true,
                  type: "success"
                }).then(function (value) {
                    if (value) {
                      lighToast.success("You have picked your price")
                    } else {
                      lighToast.warning("You can pick your price later")
                    }
                });
              break;
            case 'warning':
                toastme.yesNoDialog({
                  text: "This is a warning Dialog",
                  textConfirm: "I like it",
                  showCancel: false,
                  type: "warning"
                })
              break;
            case 'danger':
                toastme.yesNoDialog({
                  title: "Do you want to delete?",
                  text: "You can't undone this",
                  textConfirm: "Confirm delete",
                  textCancel: "Cancel",
                  showCancel: true,
                  type: "danger"
                }).then(function (value) {
                    if (value) {
                        toastme.error("You have deleted")
                    }
                });
              break;
            case 'info':
                toastme.yesNoDialog({
                  text: "You can fork this repository!",
                  textConfirm: "Awesome!",
                  showCancel: false,
                  type: "info"
                })
              break;
          default:
            break;
        }
      }

      useEffect(() => {
        document.addEventListener('click', function(event) {

            if(event.target.classList.contains('notisimple')) {
              simpleNotifications(event.target.dataset.action)
            }
          
            if(event.target.classList.contains('notiligh')) {
              lighNotifications(event.target.dataset.action)
            }
          
            if(event.target.classList.contains('notidark')) {
              darkNotifications(event.target.dataset.action)
            }
          
            if(event.target.classList.contains('dialog')) {
              defaultDialogs(event.target.dataset.action)
            }
          
          });
      });


    return (
        <Layout wided={true}>
        <div className={ styles.toastmeLanding }>
        <div className={ styles.hero }>
            <div className={ styles.heroPadding }>
                <div className={ styles.heroContent }>
                    <img src="/img/toastmejs/icon.png" className={ styles.toastmeIcon }/>
                    <h2>Notifications and Dialogs <br/> on your Website</h2>
                    <p><strong>ToastmeJS</strong> is a very simple, flexible and light weigth plugin that shows <strong>Notifications</strong> and modal <strong>Dialogs</strong> on your website with vanilla javascript!</p>
                    <a href="https://github.com/AlexSegen/toastmejs/releases" className="btn btn-primary btn-lg">DOWNLOAD</a>
                </div>
            </div>
        </div>

<section className={ styles.section }>
   <div className="container">
      <div className="row">
         <div className="col-sm-6">
            <div className={ styles.sectionContent }>
               <h2 className={ styles.sectionTitle + ' bold'}>Installation</h2>
               <p>Toastme does not have any dependencies. Just run next command via NPM</p>
               <pre><code className="ssh">$ npm install toastmejs</code></pre>
               <p>Then import toastme</p>
               <pre>
<code className="javascript">import {'{toastme}'} from 'toastmejs'

or
  
const toastme = require('toastmejs')</code>
</pre>
               <p className="font-weight-bold">Via CDN</p>
               <p>Import the CSS via a &lt;link /&gt; and &lt;scripts /&gt; elements:</p>
               <pre>
<code className="html">&lt;link rel="stylesheet" href="https://unpkg.com/toastmejs@latest/dist/css/toastme.css"&gt;
&lt;script src="https://unpkg.com/toastmejs@latest/dist/js/toastme.min.js"&gt;&lt;/script&gt;</code>
</pre>
               <p className="font-weight-bold">Download</p>
               <p>Or simply <a href="https://github.com/AlexSegen/toastmejs/releases">download</a> it and include necesary CSS/JS files to your project.</p>
            </div>
         </div>
      </div>
   </div>
</section>

<section className={ styles.section }>
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className={ styles.sectionContent }>
              <h2 className={ styles.sectionTitle + ' bold'}>Notifications</h2>
              <p>With <strong>toastme</strong> you can mantain your users informed about any actions they or your webapp is doing. It's really easy to use.</p>
              <p>You can show all common <strong>web notification</strong> types:</p>
              <ul>
                <li>Success</li>
                <li>Danger</li>
                <li>Warning</li>
                <li>Info</li>
                <li>Default</li>
              </ul>

              <p className="font-weight-bold">How to use it?</p>
              <p>Once you have imported toastmejs, you can call its methods like this:</p>

<pre>
<code className="javascript">toastme.default("This is a 'default' notification")
toastme.success("This is a 'success' notification")

toastme.error("This is an 'error' notification")

toastme.warning("This is a 'warning' notification")

toastme.info("This is an 'info' notification")</code>
</pre>

          </div>
        </div>
        <div className="col-sm-4">
          <div className={ styles.sectionContent }>
            <img src="/img/toastmejs/pic-notifications.png" className="img-fluid center-block shadow" alt="Notifications" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className={ styles.section }>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className={ styles.sectionContent }>
            <h2 className={ styles.sectionTitle }>Notification demos</h2>
            <p>Want to see some examples? Click next buttons to make it work!</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-3">
          <div className={ styles.sectionContent }>
            <h4>Default theme</h4>
            <ol className={ styles.notificationList + ' list-unstyled' }>
              <li><button className="btn btn-light notisimple" data-action="default">Default</button></li>
              <li><button className="btn btn-success notisimple" data-action="success">Success</button></li>
              <li><button className="btn btn-danger notisimple" data-action="error">Error</button></li>
              <li><button className="btn btn-warning notisimple" data-action="warning">Warning</button></li>
              <li><button className="btn btn-info notisimple" data-action="info">Info</button></li>
            </ol>
          </div>
        </div>
        <div className="col-sm-3">
          <div className={ styles.sectionContent }>
              <h4>Light theme</h4>
              <ol className={ styles.notificationList + ' list-unstyled' }>
                  <li><button className="btn btn-light notiligh" data-action="default">Default</button></li>
                  <li><button className="btn btn-outline-success notiligh" data-action="success">Success</button></li>
                  <li><button className="btn btn-outline-danger notiligh" data-action="error">Error</button></li>
                  <li><button className="btn btn-outline-warning notiligh" data-action="warning">Warning</button></li>
                  <li><button className="btn btn-outline-info notiligh" data-action="info">Info</button></li>
              </ol>
          </div>
        </div>
        <div className="col-sm-3">
          <div className={ styles.sectionContent }>
              <h4>Dark theme</h4>
              <ol className={ styles.notificationList + ' list-unstyled' }>
                  <li><button className="btn btn-dark notidark" data-action="default">Default</button></li>
                  <li><button className="btn btn-dark notidark text-success" data-action="success">Success</button></li>
                  <li><button className="btn btn-dark notidark text-danger" data-action="error">Error</button></li>
                  <li><button className="btn btn-dark notidark text-warning" data-action="warning">Warning</button></li>
                  <li><button className="btn btn-dark notidark text-info" data-action="info">Info</button></li>
              </ol>
          </div>
        </div>
      </div>
    </div>
  </section>


<section className={ styles.section + ' bg'}>
    <div className="container">
      <div className="row">
          <div className="col-sm-6">
            <div className={ styles.sectionContent }>
              <div className="card shadow">
                <div className="card-header">Notification Example</div>
                <div className="card-body">
<pre>
<code className="javascript">
const config = {`{
    timeout: 5000,
    positionY: "bottom", // top or bottom
    positionX: "center", // right left, center
    distanceY: 20, // Integer value
    distanceX: 20, // Integer value
    zIndex: 100, // Integer value
    theme: "default", // default, ligh or  dark (leave empty for "default" theme)
    duplicates: false // true or false - by default it's false
}`};

//Create a new Toastmejs class instance
const mytoast = new Toastme(config);

//Call it whenever you want!
mytoast.success("Hello, this is my custom notification!");
</code>
</pre>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className={ styles.sectionContent }>
              <h3 className={ styles.sectionTitle }>Customizable!</h3>
              <p>You can customize duration, position, distance, z-overlapping and a <strong>theme</strong></p>
              <ol className={ styles.options }>
                  <li><strong>timeout:</strong> miliseconds</li>
                  <li><strong>positionY:</strong> 'top' or 'bottom'</li>
                  <li><strong>positionX:</strong> 'left', 'right' or 'center' position</li>
                  <li><strong>distanceY:</strong> distance from the Y axis</li>
                  <li><strong>distanceX:</strong> distance from the X axis</li>
                  <li><strong>zIndex:</strong> overlapping order</li>
                  <li><strong>theme:</strong> default, ligh or dark (leave empty for "default" theme)</li>
                  <li><strong>duplicates:</strong> set this 'true' or 'false' - by default it's false</li>
              </ol>
            </div>
          </div>
      </div>
    </div>
  </section>

  <section className={ styles.section }>
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className={ styles.sectionContent }>
              <h2 className={ styles.sectionTitle + ' bold' }>Dialogs</h2>
              <p>Notifications are not enough so I added some modal <strong>Dialogs</strong> to <strong>toastme</strong>. Now you can show custom <u>confirmation boxes</u>, messages, alerts, etc.</p>
              <p>Also, you can show modal types and themes!</p>
              <ul>
                <li>Success</li>
                <li>Danger</li>
                <li>Warning</li>
                <li>Info</li>
                <li>Question</li>
              </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className={ styles.sectionContent }>
              <img src="/img/toastmejs/pic-dialogs.png" className="img-fluid center-block shadow" alt="Dialogs" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className={ styles.section }>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className={ styles.sectionContent }>
            <h2 className={ styles.sectionTitle }>Dialog demos</h2>
            <p>Want to see some examples? Click next buttons to make it work!</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-3">
          <div className={ styles.sectionContent }>
            <ol className={ styles.notificationList + ' list-unstyled' }>
              <li><button className="btn btn-light dialog" data-action="titletext">Title and text</button></li>
              <li><button className="btn btn-light dialog" data-action="title">Title only</button></li>
              <li><button className="btn btn-light dialog" data-action="text">Text only</button></li>
              <li><button className="btn btn-light dialog" data-action="buttons">Buttons only</button></li>
              <li><button className="btn btn-dark dialog" data-action="dark">Dark theme :O</button></li>
            </ol>
          </div>
        </div>
        <div className="col-sm-3">
          <div className={ styles.sectionContent }>
              <ol className={ styles.notificationList + ' list-unstyled' }>
                <li><button className="btn btn-light dialog" data-action="question">Question</button></li>
                <li><button className="btn btn-success dialog" data-action="success">Success</button></li>
                <li><button className="btn btn-danger dialog" data-action="danger">Danger</button></li>
                <li><button className="btn btn-warning dialog" data-action="warning">Warning</button></li>
                <li><button className="btn btn-info dialog" data-action="info">Info</button></li>
              </ol>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className={ styles.section + ' bg' }>
      <div className="container">
        <div className="row">
            <div className="col-sm-6">
              <div className={ styles.sectionContent }>
                <div className="card shadow">
                  <div className="card-header">Dialog Example</div>
                  <div className="card-body">
<pre>
<code className="javascript">//Example
toastme.yesNoDialog({`{
    title: "You are the Winner!",
    text: "Do you want to pick your price?",
    textConfirm: "Confirm",
    textCancel: "Cancel", 
    showCancel: true, // true or false
    type: "success", // 'success', 'danger', 'warning', 'info' or 'question'
    dark: false, // Show dark theme? 'true' or 'false'
}`}).then(function(value) {`{
    if (value) {
        console.log('You clicked Confirm')
    } else {
        console.log('You clicked Cancel')
    }
}`});
</code>
</pre>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className={ styles.sectionContent }>
                <h2 className={ styles.sectionTitle }>Customizable!</h2>
                <p>You can customize your toastme dialog too!</p>
                <ol className={ styles.options }>
                    <li><strong>title:</strong> dialog title</li>
                    <li><strong>text:</strong> dialog text</li>
                    <li><strong>textConfirm:</strong> confirm button caption</li>
                    <li><strong>textCancel:</strong> cancel button caption</li>
                    <li><strong>showCancel:</strong> Show cancel button? 'true' or 'false'</li>
                    <li><strong>type:</strong> select 'success', 'danger', 'warning', 'info' or 'question'</li>
                    <li><strong>dark:</strong> Show dark theme? 'true' or 'false'</li>
                </ol>
              </div>
            </div>
        </div>
      </div>
    </section>

        </div>
        </Layout>

    )

}

export default ToastmeComponent;