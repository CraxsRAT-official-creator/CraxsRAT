const baseUrl = "https://craxs-rat.vercel.app"

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Craxs RAT v8.0 - Advanced Android Remote Administration Tool</title>
    <link>${baseUrl}</link>
    <description>Craxs RAT v8.0 - Always Getting Better. The most powerful Android remote administration tool with advanced monitoring, control, and security features.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title>Craxs RAT v8.0 Released - Always Getting Better</title>
      <link>${baseUrl}</link>
      <guid isPermaLink="true">${baseUrl}</guid>
      <pubDate>${new Date("2025-01-01").toUTCString()}</pubDate>
      <description>Introducing Craxs RAT v8.0 with enhanced features, improved performance, and advanced security capabilities.</description>
      <content:encoded><![CDATA[
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
      ]]></content:encoded>
    </item>
    
    <item>
      <title>About Craxs RAT</title>
      <link>${baseUrl}/about</link>
      <guid isPermaLink="true">${baseUrl}/about</guid>
      <pubDate>${new Date("2025-01-01").toUTCString()}</pubDate>
      <description>Learn more about Craxs RAT and our mission to provide advanced Android remote administration tools.</description>
    </item>
    
    <item>
      <title>Privacy Policy</title>
      <link>${baseUrl}/privacy</link>
      <guid isPermaLink="true">${baseUrl}/privacy</guid>
      <pubDate>${new Date("2025-01-01").toUTCString()}</pubDate>
      <description>Read our privacy policy to understand how we handle your data and protect your privacy.</description>
    </item>
    
    <item>
      <title>Contact Us</title>
      <link>${baseUrl}/contact</link>
      <guid isPermaLink="true">${baseUrl}/contact</guid>
      <pubDate>${new Date("2025-01-01").toUTCString()}</pubDate>
      <description>Get in touch with the Craxs RAT team for support, questions, or partnership opportunities.</description>
    </item>
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
