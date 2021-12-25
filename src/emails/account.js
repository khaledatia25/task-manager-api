const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'khalodatia@gmail.com',
        subject: 'Thanks for joinning in!',
        text: `Welcome to the app ${name}. Let me know how you get along with the app.`
    });

};

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'khalodatia@gmail.com',
        subject: `Good Bye ${name}`,
        text: 'we are sorry that you left us! Please tell us if there is anything should be done to keep you!'
    });
}; 

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
};