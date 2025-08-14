const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // Correo remitente de mails
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PSW
  }
})

/**
 * With a free Gmail account, you can send a maximum of 500 emails within 24 hours to one recipient each. 
 * - The 24-hour timeframe is a rolling period rather than a set time of day.
 * - Google Workspace sending limits may differ if your organization uses the SMTP relay service. For instance, the Gmail SMTP limit is 500 recipients when using the Gmail API.  
 * - The Gmail and Google Workspace email size limit is 25 GB for attachments in outgoing messages. 
 * - All of the above limits are subject to change by Google at any time.
 */

app.post('/send/mail', async (req, res) => {
  /* Informacion del formulario:
  * user Name
  * user City
  * user Email
  * user Phone
  * user Message
  * user tag
  * */
  const { name, city, email, phone, msg, tag } = req.body

  if (!name || !city || !email || !phone || !msg || !tag) {
    console.error('All fields are required.')
    return res.status(400).json({ ok: false, message: 'All fields are required.' })
  }

  // Configuracion de opciones y cuerpo del correo
  const mailOptions = {
    from: `From Web <${process.env.GMAIL_USER}>`,
    to: '3matias.sm@gmail.com',
    subject: 'Consulta desde formualrio web',
    text: `
      Nombre: ${name}
      Ciudad: ${city}
      Email: ${email}
      Teléfono: ${phone}
      Modelo de trabajo: ${tag}
      Mensaje: ${msg}
    `
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Mailgun response:', info)
    res.status(200).json({ ok: true, message: 'Email sent successfully', id: info.messageId })
  } catch (e) {
    console.error('Error sending email via Mailgun:', e)
    res.status(500).json({ ok: false, message: `Failed to send email. ${e.message}` })
  }
})

app.listen(3001, () => { console.log('Backend en optimo funcionamiento.') })