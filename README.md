# Send SMS with React and Twilio
This project was created from the [react-express-starter project](https://github.com/philnash/react-express-starter) and includes a React front end and an Express server.

## Running the project

To run the project you will need a Twilio account and a Twilio phone number that can send SMS messages. Gather your Twilio Account Sid and Auth Token from the [Twilio console](https://www.twilio.com/console) and the phone number.

Then, clone the project, change into the directory and install the dependencies.

```bash
git clone https://github.com/philnash/send-sms-react-twilio.git
cd send-sms-react-twilio
npm install
```

Copy the `.env.example` file to `.env` and fill in your Twilio credentials and phone number.

Start the application on its own with the command:

```bash
npm run dev
```

Open the app at [localhost:3000](http://localhost:3000). You can now use the form to send SMS messages via your Twilio number.
