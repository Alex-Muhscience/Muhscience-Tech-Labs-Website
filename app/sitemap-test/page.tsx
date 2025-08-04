export default function SitemapTest() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Sitemap Test & Debug</h1>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Sitemap Links</h2>
            <div className="space-y-2">
              <p><strong>Production Sitemap:</strong></p>
              <a 
                href="https://muhscience-tech-labs-website-alex-muhsciences-projects.vercel.app/sitemap.xml" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline block"
              >
                https://muhscience-tech-labs-website-alex-muhsciences-projects.vercel.app/sitemap.xml
              </a>
              
              <p className="mt-4"><strong>Static Sitemap (Backup):</strong></p>
              <a 
                href="/sitemap.xml" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline block"
              >
                /sitemap.xml (static)
              </a>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Google Search Console Steps</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Go to <a href="https://search.google.com/search-console" target="_blank" className="text-blue-500 hover:underline">Google Search Console</a></li>
              <li>Add property: <code className="bg-muted px-2 py-1 rounded">https://muhscience-tech-labs-website-alex-muhsciences-projects.vercel.app</code></li>
              <li>Go to Sitemaps section</li>
              <li>Submit: <code className="bg-muted px-2 py-1 rounded">sitemap.xml</code></li>
              <li>Wait 5-10 minutes for processing</li>
            </ol>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Troubleshooting</h2>
            <div className="space-y-2">
              <p><strong>If still getting "Sitemap could not be read":</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Clear browser cache and try in incognito mode</li>
                <li>Wait 24 hours for Google to re-crawl</li>
                <li>Try submitting just: <code className="bg-muted px-1 rounded">sitemap.xml</code> (not the full URL)</li>
                <li>Check if site is verified in Search Console</li>
                <li>Try the static sitemap as backup</li>
              </ul>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Alternative Approach</h2>
            <p className="mb-2">If Google Search Console keeps having issues, you can:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Use the static sitemap instead of dynamic one</li>
              <li>Submit individual important pages manually</li>
              <li>Use URL inspection tool in Search Console</li>
              <li>Wait for natural discovery through internal links</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
