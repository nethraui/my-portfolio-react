import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from './AnimatedLetters'
import './Contact.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Contact () {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const contactArray = 'Contact Me'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_73d0obm',
        'template_yt4pukr',
        form.current,
        'QXPDhghABDZoENW2x'
      )
      .then(
        () => {
          // alert('Message successfully sent!')
          toast.success('Message successfully sent!', {
            position: 'bottom-center',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
          const timeout = setTimeout(() => {
            window.location.reload(false)
          }, 3900)

          return () => clearTimeout(timeout)
        },
        () => {
          // alert('Failed to send the message, please try again')
          toast.error('Failed to send the message, please try again', {
            position: 'bottom-center',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone-contact">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            I am interested in opportunities. However, if you have other request or question, don't
            hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact;