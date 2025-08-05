$filePath = "D:\Personal_Projects\Muhscience Tech Labs Website\app\about\page.tsx"
$content = Get-Content -Path $filePath -Raw -Encoding UTF8

# Replace HTML entities
$content = $content -replace '\u003c', '<'
$content = $content -replace '\u003e', '>'
$content = $content -replace '&lt;', '<'
$content = $content -replace '&gt;', '>'

# Write back to file
Set-Content -Path $filePath -Value $content -Encoding UTF8 -NoNewline
Write-Host "Fixed HTML entities in About page"
