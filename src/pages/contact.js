import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/styles.scss'

import { navigateTo } from "gatsby-link"
// import contactImage from "../images/contact.jpg"

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleName = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleEmail = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleCategory = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleMessage = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Contact"
          keywords={[
            `record labels that accept demos`,
          ]}
          description="Mala Jam Records wants to hear from you! Submit a demo of your music and you could become the newest member of the Mala Jam community."
        />
        <header className = "contact-banner">
          <h1>Contact Me</h1>
        </header>
        <main className = "contact-main">
          <div className = "contact-col-6">
          
          </div>
          <div className="contact-col-6">
            <form
              name="contact"
              method="post"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <p className="contact-input">
                <label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onBlur={this.handleName}
                  />
                </label>
              </p>
              <p className="contact-input">
                <label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onBlur={this.handleEmail}
                  />
                </label>
              </p>
              <div className="contact-input">
                <label>
                  <select
                    name="role[]"
                    id="category"
                    onBlur={this.handleCategory}
                  >
                    <option value>- Category -</option>
                    <option value="Bookings">Bookings</option>
                    <option value="Demos">Demo Submissions</option>
                    <option value="Inquiries">General Inquiries</option>
                    <option value="Other">Just Wanna Say Hi!</option>
                  </select>
                </label>
              </div>
              <div className="">
                <label>
                  <input
                    type="file"
                    name="file"
                    placeholder="Upload Demo"
                    onBlur={this.handleAttachment}
                  />
                </label>
              </div>
              <p className="contact-input">
                <label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    rows={6}
                    defaultValue={""}
                    onBlur={this.handleMessage}
                  />
                </label>
              </p>
              <div data-netlify-recaptcha="true"></div>
              <p className="actions">
                <button type="submit" className="primary">
                  Send
                </button>
                <input type="reset" defaultValue="Reset" />
              </p>
              <input type="hidden" name="bot-field" />
            </form>
          </div>
        </main>

      </Layout>
    )
  }
}
