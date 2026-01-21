
import nodemailer from 'nodemailer';

const TransportInfo = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "<Your Mail>",
        pass: "<Your App Password>"
    }
})

const SendMail = async (req, res) => {
    try {
        const result = await TransportInfo.sendMail({
            from: "<Your Mail>",
            to: "<Receiver Mail>",
            subject: "testing-subject",
            html: "",
            text: "This is testing mail from nodemailer",

            // for attachments (optional)
            attachments: [
                {
                    filename: "",
                    path: ""
                }
            ]
        })
        console.log(result)
        return res.status(200).json(result)
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

export { SendMail };