import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Option 1: Open WhatsApp with the message (recommended for simple sites)
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, '_blank')  // ← Replace with your number

    // Option 2: Simple mailto (uncomment if you prefer email)
    // window.location.href = `mailto:yourmail@gmail.com?subject=Enquiry from ${form.name}&body=Phone: ${form.phone}%0A%0A${form.message}`

    alert('Thank you! Your message has been sent.')
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Contact Us</h1>
      <p className="text-gray-600 mb-8">Send us a message and we will reply quickly</p>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="98765 43210"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Tell us what you need..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-10 text-center text-gray-600">
        <p className="font-medium">Or call us directly:</p>
        <a href="tel:+91XXXXXXXXXX" className="text-amber-700 text-lg font-bold">
          +91 XXXXX XXXXX
        </a>
      </div>
    </div>
  )
}

export default Contact