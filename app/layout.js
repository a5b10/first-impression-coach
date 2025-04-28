import './globals.css'

export const metadata = {
  title: 'First Impression Coach - TalkConfidently',
  description: 'Perfect your professional introduction in just 2 minutes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://widget.elevenlabs.io/widget.js"
          async
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}