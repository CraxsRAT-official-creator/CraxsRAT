const baseUrl = "https://craxs-rat.vercel.app"

export async function GET() {
  const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Craxs RAT v8.0 - Advanced Android Remote Administration Tool</title>
  <link href="${baseUrl}" rel="alternate"/>
  <link href="${baseUrl}/atom.xml" rel="self"/>
  <id>${baseUrl}</id>
  <updated>${new Date().toISOString()}</updated>
  <subtitle>Craxs RAT v8.0 - Always Getting Better. The most powerful Android remote administration tool.</subtitle>
  <author>
    <name>Craxs RAT Team</name>
    <uri>${baseUrl}</uri>
  </author>
  
  <entry>
    <title>Craxs RAT v8.0 Released - Always Getting Better</title>
    <link href="${baseUrl}"/>
    <id>${baseUrl}/v8.0</id>
    <updated>${new Date("2025-01-01").toISOString()}</updated>
    <summary>Introducing Craxs RAT v8.0 with enhanced features, improved performance, and advanced security capabilities.</summary>
    <content type="html"><![CDATA[
      <h2>Craxs RAT v8.0 - Always Getting Better</h2>
      <p>The latest version of Craxs RAT brings powerful new features for Android remote administration:</p>
      <ul>
        <li>Advanced screen monitoring and control</li>
        <li>Real-time SMS and call tracking</li>
        <li>Location tracking with GPS precision</li>
        <li>File management and transfer</li>
        <li>Camera and microphone access</li>
        <li>Enhanced security and encryption</li>
      </ul>
    ]]></content>
  </entry>
  
  <entry>
    <title>About Craxs RAT</title>
    <link href="${baseUrl}/about"/>
    <id>${baseUrl}/about</id>
    <updated>${new Date("2025-01-01").toISOString()}</updated>
    <summary>Learn more about Craxs RAT and our mission to provide advanced Android remote administration tools.</summary>
  </entry>
  
  <entry>
    <title>Privacy Policy</title>
    <link href="${baseUrl}/privacy"/>
    <id>${baseUrl}/privacy</id>
    <updated>${new Date("2025-01-01").toISOString()}</updated>
    <summary>Read our privacy policy to understand how we handle your data and protect your privacy.</summary>
  </entry>
  
  <entry>
    <title>Contact Us</title>
    <link href="${baseUrl}/contact"/>
    <id>${baseUrl}/contact</id>
    <updated>${new Date("2025-01-01").toISOString()}</updated>
    <summary>Get in touch with the Craxs RAT team for support, questions, or partnership opportunities.</summary>
  </entry>
</feed>`

  return new Response(atom, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
